const mongoose = require('mongoose');
const plantValidator = require('../validators/plantValidator');
const Schema = mongoose.Schema;
const publicFields = ['color', 'name', 'species', 'water_period', 'water_last_date', ]
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
  water_period: {
    type: String,
    validate: plantValidator.water_period,
    required: true
  },
  water_last_date: {
    type: String,
    validate: plantValidator.water_last_date,
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

module.exports = mongoose.model('Plant', PlantSchema);
