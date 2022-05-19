/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("category").del();
  await knex("category").insert([
    { id: 1, name: "Category 1", slug: "category-1" },
    { id: 2, name: "Category 2", slug: "category-2" },
    { id: 3, name: "Category 3", slug: "category-3" },
  ]);
};
