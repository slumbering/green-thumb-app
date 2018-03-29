const jwt = require('jsonwebtoken');
const passport = require('passport');
const conf = require('../conf');

const authController = {
  loginAction: (req, res) => {
    // TODO make a middleware with this method
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }

       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }

           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, conf.auth.secret);
           return res.json({user, token});
        });
    })(req, res);
  }
};

module.exports = authController;
