const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  color: String,
  name: String,
  species: String,
  water_period: Number,
  water_last_date: Date,
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
