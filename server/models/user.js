const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: String,
  password: String,
  mail: String,
  firstName: String,
  lastName: String,
  rights: [String],
  created_at: Date,
  updated_at: Date,
  plants: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
  }]
});

// HOOK : Pre save
UserSchema.pre('save', function(next) {
  // If is new : on created
  if (this.isNew) {
    this.created_at = Date.now();
  }
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('User', UserSchema);
