const knex = require("../database");

class ReligionService {
  getAllReligions() {
    return knex("religions");
  }
  getReligionById(id) {
    return knex("religions").where("id", id).first();
  }
  getReligionByName(name) {
    return knex("religions").where("name", name).first();
  }
  createReligion(religion) {
    return knex("religions")
      .insert(religion)
      .returning("*")
      .then((religion) => religion[0]);
  }
  updateReligion(id, religion) {
    return knex("religions")
      .where("id", id)
      .update(religion, "*")
      .then((religion) => religion[0]);
  }
  deleteReligion(id) {
    return knex("religion").where("id", id).del();
  }
}

module.exports = new ReligionService();
