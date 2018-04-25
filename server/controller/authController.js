const jwt = require('jsonwebtoken');
const passport = require('passport');
const conf = require('../conf');

const authController = {
  loginAction: (req, res) => {
    
    // TODO make a middleware with this method
    return passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).send({
                message: 'Something is not right',
                user   : user
            });
        }

        req.login(user, {session: false}, (err) => {

          if (err) {
             return res.status(500).send(err);
          }

          // generate a signed son web token with the contents of user object and return it in the response
          return jwt.sign(user, conf.auth.secret, (err, token) => {
            if (err) {
               return res.status(500).send(err);
            }

            return res.send({user, token});
          });

        });
    })(req, res);
  }
};

module.exports = authController;
