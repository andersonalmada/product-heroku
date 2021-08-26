const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  session = req.session;
  if (session.userid) {
    res.send("Welcome User <a href='/logout'>click to logout</a>");
  } else res.send("ok");
});

router.post("/user", (req, res) => {
  if (req.body.username == "almada" && req.body.password == "123") {
    session = req.session;
    session.userid = req.body.username;
    console.log(req.session);
    res.send(req.session.id);
  } else {
    res.send("Invalid username or password");
  }
});

module.exports = router;
