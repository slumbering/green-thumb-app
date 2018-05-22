const mongoose = require('mongoose');
const shajs = require('sha.js');
const userValidator = require('../validators/userValidator');
const Schema = mongoose.Schema;
const publicFields = ['login', 'password', 'mail', 'firstName', 'lastName', 'plants', 'created_at', 'updated_at'];

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    validate: userValidator.login,
  },
  password: {
    type: String,
    required: true,
    validate: userValidator.password
  },
  mail: {
    type: String,
    required: true,
    validate: userValidator.mail
  },
  firstName: {
    type: String,
    required: true,
    validate: userValidator.firstName
  },
  lastName: {
    type: String,
    required: true,
    validate: userValidator.lastName
  },
  rights: {
    type: [String],
    required: true,
    // validate: userValidator.rights
  },
  plants: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
  }],
  created_at: Date,
  updated_at: Date
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
// Hash password
UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // Hash password
  user.password = shajs('sha256').update(user.password).digest('hex');
  next();
});

/**
 * Return an object only with public properties
 *
 */
UserSchema.methods.getPublicFields = () => {
  const publicPlant = {};
  const rawPlant = this;
  // Loop on public properties
  for (let i = 0; i < publicFields.length; i++) {
    // Assign public property
    publicPlant[publicFields[i]] = rawPlant[publicFields[i]];
  }
  return publicPlant;
};
/**
 * Execute a callback with isMatch parameter ( true if passwords matches)
 * @param candidatePassword
 * @param cb
 */
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  const candidatePasswordHashed = shajs('sha256').update(candidatePassword).digest('hex');
  const isMatch = candidatePasswordHashed == this.password;
  // callback(error, isMatch)
  cb(null, isMatch);
};
module.exports = mongoose.model('User', UserSchema);
