const express = require('express');
const router = express.Router();
const apiRouter = require('./apiRouter');
const authController = require('../controller/authController');
const userController = require('../controller/userController');

// Start route
router.get('/', (req, res) => {
  res.json({ message: 'GT-TEAM api YOLO' });
});

router.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
 });
// ==============================
//  Auth routing
// ==============================
router.post('/login', (req, res) => { authController.loginAction(req, res); });
router.post('/register', (req, res) => { userController.createAction(req, res); });
// ==============================
//  API routing
// ==============================
router.use('/api', apiRouter);

module.exports = router;
