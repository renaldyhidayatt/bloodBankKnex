const brcyptjs = require("bcryptjs");

class Hashing {
  hashPassword = (password) => {
    return brcyptjs.hashSync(password, brcyptjs.genSaltSync(10));
  };

  comparePassword = (password, hash) => {
    return brcyptjs.compareSync(password, hash);
  };
}

module.exports = new Hashing();
