const express = require('express');
const router = express.Router();
const apiRouter = require('./apiRouter');
const authController = require('../controller/authController');
const userMiddleware = require('../middleware/userMiddleware');

// Start route
router.get('/', (req, res) => {
  res.json({ message: 'GT-TEAM api YOLO' });
});

// ==============================
//  Auth routing
// ==============================
router.post('/login', userMiddleware.reqEncryptPassword, (req, res) => { authController.loginAction(req, res); });

// ==============================
//  API routing
// ==============================
router.use('/api', apiRouter);

module.exports = router;
