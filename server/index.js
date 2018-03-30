const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const conf = require('./conf');
const router = require('./router');
const auth = require('./middleware/auth');
// =================================
// Express initialisation
// =================================
const app = express();
// =================================
// Auth initialisation
// =================================
auth();
// =================================
// Bodyparser setup
// =================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// =================================
// Database setup
// =================================
// DB setup TODO : pass link in conf
mongoose.connect('mongodb://mongo:27017');
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// =================================
// Routing setup
// =================================
app.use('/', router);

// =================================
// App exposure
// =================================
app.listen(conf.server.port, () => {
  console.log('app launched on port : ' + conf.server.port);
});
