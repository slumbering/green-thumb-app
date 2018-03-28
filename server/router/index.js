const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const plantController = require('../controller/plantController');

// Start route
router.get('/', (req, res) => {
  res.json({ message: 'GT-TEAM api YOLO' });
});

// ==============================
//  User routing
// ==============================
// Global routes
router.route('/user')
  // Create a user (accessed at POST http://localhost:8080/api/user)
  .post((req, res) => { userController.createAction(req, res); })

  // READ : Get all user
  .get((req, res) => { userController.getAllAction(req, res); });

// User specific routes
router.route('/user/:user_id')

  // READ : Get a specific user
  .get((req, res) => { userController.getOneAction(req, res); })
  // UPDATE : Update a specific user
  .put((req, res) => { userController.updateAction(req, res); })
  // DELETE : Delete a specific user
  .delete((req, res) => { userController.deleteAction(req, res); });

  // ==============================
  //  Plants routing
  // ==============================
  // Global routes
  router.route('/plant')
    // Create a user (accessed at POST http://localhost:8080/api/user)
    .post((req, res) => { plantController.createAction(req, res); })

    // READ : Get all user
    .get((req, res) => { plantController.getAllAction(req, res); });

  // Plant specific routes
  router.route('/plant/:plant_id')

    // READ : Get a specific user
    .get((req, res) => { plantController.getOneAction(req, res); })
    // UPDATE : Update a specific user
    .put((req, res) => { plantController.updateAction(req, res); })
    // DELETE : Delete a specific user
    .delete((req, res) => { plantController.deleteAction(req, res); });

module.exports = router;
