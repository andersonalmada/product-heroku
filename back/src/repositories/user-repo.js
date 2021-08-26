const db = require("../models");
const User = db.users;

exports.save = async (user) => {
  return await User.create({
    login: user.login,
    password: user.password,
  })
    .then((result) => {
      console.log("Created user: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findByLoginAndPassword = async (login, password) => {
  return await User.findOne({
    where: {
      login: login,
      password: password,
    },
  });
};
