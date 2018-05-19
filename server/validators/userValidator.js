const validate = require('mongoose-validator');
const conf = require('../conf');

const userValidator = {
  login: [
    validate({
      validator: 'isLength',
      arguments: [3, 20],
      message:'login name length is not valid. 3 < Length < 20 '
    }),
    validate({
      validator: 'matches',
      arguments: /^[a-zA-Z0-9_-]+$/i,
      message: 'login should only contains alphanumeric char and "-" or "_"'
    })
  ],
  password: [
    validate({
      // /^
      //     (?=.*\d)          // should contain at least one digit
      //     (?=.*[a-z])       // should contain at least one lower case
      //     (?=.*[A-Z])       // should contain at least one upper case
      //     [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
      // $/
      validator: 'matches',
      arguments: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message: 'Login should contain at least 1 digit, 1 lower case, 1 upper case and between 8 and 30 char'
    })
  ],
  // mail: [
  //   validate({})
  // ],
  // firstName: [
  //   validate({})
  // ],
  // lastName: [
  //   validate({})
  // ],

};

module.exports = userValidator;
