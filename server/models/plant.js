const mongoose = require('mongoose');
const plantValidator = require('../validators/plantValidator');
const conf = require('../conf');
const Schema = mongoose.Schema;
const publicFields = conf.api.endpoints.plant.publicFields;

const PlantSchema = new Schema({
  color: {
    type: String,
    validate: plantValidator.color
  },
  name: {
    type: String,
    validate: plantValidator.name,
    required: true
  },
  species: {
    type: String,
    validate: plantValidator.species,
    required: true
  },
  waterPeriod: {
    type: String,
    validate: plantValidator.waterPeriod,
    required: true
  },
  waterLastDate: {
    type: String,
    validate: plantValidator.waterLastDate,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  created_at: Date,
  updated_at: Date,
});

// HOOK : Pre save
PlantSchema.pre('save', function(next) {
  // If is new : on created
  if (this.isNew) {
    this.created_at = Date.now();
  }
  this.updated_at = Date.now();
  next();
});

/**
 * Return an object only with public properties
 *
 */

PlantSchema.methods.getPublicFields = function() {
  const publicFieldsList = publicFields.split(' ');
  const publicPlant = {};
  const rawPlant = this;
  // Loop on public properties
  for (let i = 0; i < publicFieldsList.length; i++) {
    // Assign public property
    publicPlant[publicFieldsList[i]] = rawPlant[publicFieldsList[i]];
  }

  return publicPlant;

};


module.exports = mongoose.model('Plant', PlantSchema);
