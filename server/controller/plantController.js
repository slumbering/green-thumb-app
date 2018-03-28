const Plant = require('../models/plant');
const conf = require('../conf');

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
    plant.water_period = req.body.water_period;
    plant.water_last_date = req.body.water_last_date;

    // TODO plant.user with auth token

    // Persist data
    plant.save((err) => {
      if (err) { res.send(err); }
      // TODO delete tours

      // Res user created ( TODO verify if it's a correct implementation )
      res.json(plant);
    });
  },
  /**
  * Get All users
  */
  getAllAction: (req, res) => {
    // TODO : add limit and offset parameter with a default value
    Plant.find((err, plants) => {
      if (err) { res.send(err); }

      res.json(plants);
    });
  },
  /**
  * Get One users by id
  */
  getOneAction: (req, res) => {
    // Find user by ID
    User.findById(req.params.plant_id, function (err, plant) {
      if (err) { res.send(err); }

      res.json(plant);
    });
  },
  /**
  * Update one User
  * Plants can be set as an id list separated by '-'
  */
  updateAction: (req, res) => {
    Plant.findById(req.params.plant_id, function (err, plant) {
      if (err) { res.send(err); }

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
      if (req.body.water_period){
        plant.water_period = req.body.water_period;
      }
      if (req.body.water_last_date){
        plant.water_last_date = req.body.water_last_date;
      }

      // TODO Delete when auth is finished
      if (req.body.user){
        plant.user = req.body.user;
      }

      // save the bear and check for errors
      plant.save((err) => {
        if (err) { res.send(err); }

        res.json(plant);
      });
    });
  },
  deleteAction: (req, res) => {
    plant.remove({ _id: req.params.user_id }, function (err, user) {
      if (err) { res.send(err); }

      // TODO remove this plant from user plant list
      res.send({ message: 'ok' });
    });
  }
};

module.exports = plantController;
