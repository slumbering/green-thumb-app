const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/user');
const conf = require('../conf');

const app = express();

const auth = function() {
  // Strategy used for /login route
  passport.use(new LocalStrategy({
          usernameField: 'mail',
          passwordField: 'password'
      },
      function (mail, password, cb) {
          // TODO : encrypt password
          return User.findOne({mail, password})
             .then(user => {
                 if (!user) {
                     return cb(null, false, {message: 'Incorrect mail or password.'});
                 }

                 return cb(null, user, {message: 'Logged In Successfully'});
            })
            .catch(err => cb(err));
      }
  ));

  // Strategy used for jwt verification.
  passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : conf.auth.secret
    },
    function (jwtPayload, cb) {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
  }));
}

module.exports = auth;
