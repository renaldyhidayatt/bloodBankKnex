/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("religions").del();
  await knex("religions").insert([
    { id: 1, name: "Islam" },
    { id: 2, name: "Hinduism" },
    { id: 3, name: "Buddhism" },
  ]);
};
