const knex = require("../database");

class UserService {
  getAllUsers() {
    return knex("user");
  }
  getUserById(id) {
    return knex("user").where("id", id).first();
  }
  getUserByEmail(email) {
    return knex("user").where("email", email).first();
  }
  createUser(user) {
    return knex("user")
      .insert(user)
      .returning("*")
      .then((user) => user[0]);
  }
  updateUser(id, user) {
    return knex("user")
      .where("id", id)
      .update(user, "*")
      .then((user) => user[0]);
  }
  deleteUser(id) {
    return knex("user").where("id", id).del();
  }
}

module.exports = new UserService();
