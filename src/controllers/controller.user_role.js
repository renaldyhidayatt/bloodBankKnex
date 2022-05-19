const UserRoleService = require("../services/services.user_role");

class UserRoleController {
  getAllUserRoles(req, res) {
    UserRoleService.getAllUserRoles()
      .then((userRoles) => res.json(userRoles))
      .catch((err) => res.status(500).json(err));
  }

  getUserRoleById(req, res) {
    UserRoleService.getUserRoleById(req.params.id)
      .then((userRole) => res.json(userRole))
      .catch((err) => res.status(500).json(err));
  }

  getUserRoleByName(req, res) {
    UserRoleService.getUserRoleByName(req.params.name)
      .then((userRole) => res.json(userRole))
      .catch((err) => res.status(500).json(err));
  }

  createUserRole(req, res) {
    UserRoleService.createUserRole(req.body)
      .then((userRole) => res.json(userRole))
      .catch((err) => res.status(500).json(err));
  }

  updateUserRole(req, res) {
    UserRoleService.updateUserRole(req.params.id, req.body)
      .then((userRole) => res.json(userRole))
      .catch((err) => res.status(500).json(err));
  }

  deleteUserRole(req, res) {
    UserRoleService.deleteUserRole(req.params.id)
      .then((userRole) => res.json(userRole))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = new UserRoleController();
