const Plant = require('../models/plant');
const conf = require('../conf');
const publicFields = conf.api.endpoints.plant.publicFields;

const plantController = {
  /**
  * Create an user
  * It also create a default tour for this user
  */
  createAction: (req, res) => {
    // Instanciate User
    let plant = new Plant();
    
    plant.color = req.body.color;
    plant.name = req.body.name;
    plant.species = req.body.species;
    plant.waterPeriod = req.body.waterPeriod;
    plant.waterLastDate = req.body.waterLastDate;

    // Persist data
    plant.save((err) => {
      if (err) {
        return res.send(err);
      }
      // TODO delete tours

      // Res user created ( TODO verify if it's a correct implementation )
      res.json(plant.getPublicFields());
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
    Plant.find()
      .select(publicFields)
      .limit(limit)
      .skip(offset)
      .exec((err, plants) => {
        // TODO : res 500 if error
        if (err) {
          return res.send(err);
        }

        res.json(plants);
      });
  },
  /**
  * Get One users by id
  */
  getOneAction: (req, res) => {
    // Find user by ID
    User.findById(req.params.plant_id, publicFields, function (err, plant) {
      if (err) {
        return res.send(err);
      }

      res.json(plant);
    });
  },
  /**
  * Update one User
  * Plants can be set as an id list separated by '-'
  */
  updateAction: (req, res) => {
    Plant.findById(req.params.plant_id, function (err, plant) {
      if (err) {
        return res.send(err);
      }

      // Set property from request
      if (req.body.color){
        plant.color = req.body.color;
      }
      if (req.body.name){
        plant.name = req.body.name;
      }
      if (req.body.species){
        plant.species = req.body.species;
      }
      if (req.body.waterPeriod){
        plant.waterPeriod = req.body.waterPeriod;
      }
      if (req.body.waterLastDate){
        plant.waterLastDate = req.body.waterLastDate;
      }

      if (req.body.user){
        plant.user = req.body.user;
      }

      // save the bear and check for errors
      plant.save((err) => {
        if (err) { res.send(err); }

        res.json(plant.getPublicFields());
      });
    });
  },
  deleteAction: (req, res) => {
    plant.remove({ _id: req.params.user_id }, function (err, user) {
      if (err) {
        return res.send(err);
      }

      // TODO remove this plant from user plant list
      res.send({ message: 'ok' });
    });
  }
};

module.exports = plantController;
