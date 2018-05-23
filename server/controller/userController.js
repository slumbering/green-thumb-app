const User = require('../models/user');
const conf = require('../conf');
const publicFields = conf.api.endpoints.user.publicFields ;
const userController = {
  /**
  * Create an user
  * It also create a default tour for this user
  */
  createAction: (req, res) => {
    // Instanciate User
    let user = new User();

    // Set user properties from request
    user.login = req.body.login;
    user.password = req.body.password;
    user.mail = req.body.mail;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    // Set user calculated properties
    // TODO : Rights properly
    user.rights = ['group_base_user'];
    user.plants = [];

    // Persist data
    user.save((err) => {
      if (err) {
        return res.send(err);
      }

      // Res user created
      res.json(user.getPublicFields());
    });
  },
  /**
  * Get All users
  */
  getAllAction: (req, res) => {
    let offset = 0;
    let limit = conf.api.limit;
    // check offset : req.body.offset
    if (typeof req.query.offset !== 'undefined') {
      offset = parseInt(req.query.offset);
    }
    // check limit : req.body.limit
    if (typeof req.query.limit !== 'undefined') {
      limit = parseInt(req.query.limit);
    }
    console.log(typeof offset);
    User.find()
      .select(publicFields)
      .limit(limit)
      .skip(offset)
      .exec((err, users) => {
        // TODO : res 500 if error
        if (err) {
          return res.send(err);
        }

        res.json(users);
      });
  },
  /**
  * Get One users by id
  */
  getOneAction: (req, res) => {
    // Find user by ID
    User.findById(req.params.user_id, publicFields, function (err, user) {
      // TODO : res 500 if error
      if (err) {
        return res.send(err);
      }

      res.json(user);
    });
  },
  /**
  * Update one User
  * Plants can be set as an id list separated by '-'
  */
  updateAction: (req, res) => {
    User.findById(req.params.user_id, function (err, user) {
      if (err) {
        return res.send(err);
      }

      // Set property from request
      if (req.body.login){
        user.login = req.body.login;
      }
      if (req.body.password){
        user.password = req.body.password;
      }
      if (req.body.mail){
        user.mail = req.body.mail;
      }
      if (req.body.firstName){
        user.firstName = req.body.firstName;
      }
      if (req.body.lastName){
        user.lastName = req.body.lastName;
      }
      if (req.body.plants){
        user.plants = req.body.plants.split(conf.api.splitChar);
      }

      // save the bear and check for errors
      user.save((err) => {
        if (err) {
          return res.send(err);
        }

        res.json(user.getPublicFields());
      });
    });
  },
  deleteAction: (req, res) => {
    User.remove({ _id: req.params.user_id }, function (err, user) {
      if (err) {
        return res.send(err);
      }

      // Delete plants from user
      Plants.remove({ user: req.body.user_id }, function (err) {
        if (err) {
          return res.send(err);
        }

        res.send({ message: 'ok' });
      });
    });
  }
};

module.exports = userController;
