const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const hash = (password) => bcrypt.hashSync(password, salt);
const compare = (password, hash) => bcrypt.compareSync(password, hash);
module.exports = {
  hash,
  compare,
};
