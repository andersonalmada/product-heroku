const UserService = require("../services/user-service");
var userService = new UserService();

exports.login = async (req, res) => {
  const result = await userService.getByLoginAndPassword(
    req.body.login,
    req.body.password
  );

  if (result) {
    session = req.session;
    session.user = 1;

    console.log(session.user);

    res.status(200).cookie("userId", result.id).json(result);
  } else {
    res.status(404).send({
      result: "Not found",
    });
  }
};

exports.logout = async (req, res) => {
  session = null;
  req.session.destroy();
  res.end();
};

exports.post = async (req, res) => {
  res.json(await userService.add(req.body));
};
