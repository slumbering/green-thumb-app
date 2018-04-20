const User = require('../models/user');
const conf = require('../conf');


seedDataBase = () => {
  // 1 - create super admin user if not exist
  const query = conf.superUser;
  // Create if not exist ( with the upsert option)
  User.findOneAndUpdate(query, query, {upsert:true}, function(err, user){
      if (err) {
        return false;
      }
      console.info('\n\r========================================\n\r SUPER_USER_ADDED \n\r========================================\n\r', user);
      return true;
  });
}
exports.seedDataBase = seedDataBase;
