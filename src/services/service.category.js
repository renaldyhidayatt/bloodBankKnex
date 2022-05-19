const knex = require("../database");

class CategoryService {
  getAllCategories() {
    return knex("category");
  }
  getCategoryById(id) {
    return knex("category").where("id", id).first();
  }
  getCategoryByName(name) {
    return knex("category").where("name", name).first();
  }
  createCategory(category) {
    return knex("category")
      .insert(category)
      .returning("*")
      .then((category) => category[0]);
  }
  updateCategory(id, category) {
    return knex("category")
      .where("id", id)
      .update(category, "*")
      .then((category) => category[0]);
  }
  deleteCategory(id) {
    return knex("category").where("id", id).del();
  }
}

module.exports = new CategoryService();
