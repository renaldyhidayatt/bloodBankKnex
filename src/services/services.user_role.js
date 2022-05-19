const knex = require("../database");

class UserRoleService {
  getAllUserRoles() {
    return knex("user_role");
  }

  getUserRoleById(id) {
    return knex("user_role").where("id", id).first();
  }

  getUserRoleByName(name) {
    return knex("user_role").where("name", name).first();
  }

  createUserRole(userRole) {
    return knex("user_role")
      .insert(userRole)
      .returning("*")
      .then((userRole) => userRole[0]);
  }

  updateUserRole(id, userRole) {
    return knex("user_role")
      .where("id", id)
      .update(userRole, "*")
      .then((userRole) => userRole[0]);
  }

  deleteUserRole(id) {
    return knex("user_role").where("id", id).del();
  }
}

module.exports = new UserRoleService();
