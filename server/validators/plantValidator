const validate = require('mongoose-validator');
const conf = require('../conf');

const plantValidator = {
  color: [
    validate({
      validator: 'isLength',
      arguments: [7, 7],
      message: 'Plant color length is not valid. Length must be = 7'
    }),
  ],
  name: [
    validate({
      validator: 'isLength',
      arguments: [3, 20],
      message:'Plant name length is not valid. 3 < Length < 20 '
    })
  ],
  species:[
    validate({
      validator: 'isLength',
      arguments: [3, 50],
      message: 'Plant species length is not valid. 3 < Length < 50'
    })
  ] ,
  water_period:[
    validate({
      validator: 'isInt',
      message: 'Plant water_period is not valid. Must be an int'
    })
  ] ,
  water_last_date: function () {
    const dateArgument = String(Date.now());
    return [
      validate({
        validator: 'isBefore',
        arguments: dateArgument ,
        message: 'Plant water_period is not valid. Must be a timstamp before now'
      })
    ];
  }
};

module.exports = plantValidator;
