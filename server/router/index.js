const express = require('express');
const router = express.Router();

// Start route
router.get('/', (req, res) => {
  res.json({ message: 'GT-TEAM api YOLO' });
});

module.exports = router;
