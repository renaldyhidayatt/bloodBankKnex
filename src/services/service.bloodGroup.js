const knex = require("../database");

class BloodGroupService {
  getAllBloodGroups() {
    return knex("blood_group");
  }
  getBloodGroupById(id) {
    return knex("blood_group").where("id", id).first();
  }
  getBloodGroupByName(name) {
    return knex("blood_group").where("name", name).first();
  }
  createBloodGroup(bloodGroup) {
    return knex("blood_group")
      .insert(bloodGroup)
      .returning("*")
      .then((bloodGroup) => bloodGroup[0]);
  }
  updateBloodGroup(id, bloodGroup) {
    return knex("blood_group")
      .where("id", id)
      .update(bloodGroup, "*")
      .then((bloodGroup) => bloodGroup[0]);
  }
  deleteBloodGroup(id) {
    return knex("blood_group").where("id", id).del();
  }
}

module.exports = new BloodGroupService();
