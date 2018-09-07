const conf = {
  server: {
    port: 3000
  },
  api: {
    // splitChar : Char to split list passed in string
    splitChar: '-',
    // limit : basic limit for List routes
    limit: 50,
    endpoints: {
      user: {
        publicFields: 'login password mail firstName lastName plants created_at updated_at'
      },
      plant: {
        publicFields: 'color name species waterPeriod waterLastDate user created_at updated_at'
      }
    }
  },
  auth: {
    secret: 'jmenbatlescouillesBIM'
  },
  // SUPER USER - GT POWER
  superUser: {
    'login': 'GT-84',
    // password  = 42Yolo
    'password': 'e9e91cd5c2efa81bcf546b145c08135fb459991fcb09e19e91ee47072ed0a35a',
    'mail': 'none@mail.com',
    'firstName': 'Jeffolo',
    'lastName': 'morisarge',
    'rights': ['god'],
  }
}

module.exports = conf;
