const UserService = require("../services/service.user");
const HashingPassword = require("../utils/hash");

class UserController {
  getAllUsers(req, res) {
    UserService.getAllUsers()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  }
  getUserById(req, res) {
    UserService.getUserById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
  getUserByEmail(req, res) {
    UserService.getUserByEmail(req.params.email)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
  createUser(req, res) {
    const { full_name, email, password, phone, role_id } = req.body;
    const hashpassword = HashingPassword.hashPassword(password);

    const user = {
      full_name,
      email,
      password: hashpassword,
      phone,
      role_id,
    };

    UserService.createUser(user)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
  updateUser(req, res) {
    UserService.updateUser(req.params.id, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
  deleteUser(req, res) {
    UserService.deleteUser(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = new UserController();
