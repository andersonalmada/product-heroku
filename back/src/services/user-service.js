const userRepo = require("../repositories/user-repo");

class UserService {
  add(user) {
    return userRepo.save(user);
  }

  getByLoginAndPassword(login, password) {
    return userRepo.findByLoginAndPassword(login, password);
  }
}

module.exports = UserService;
