const shajs = require('sha.js');

/**
* Encrypt request password
*/
exports.reqEncryptPassword = (req, res, next) => {
  // test if password is set 
  if (req.body.password) {
    req.body.password = shajs('sha256').update(req.body.password).digest('hex');
  }
  next();
}
