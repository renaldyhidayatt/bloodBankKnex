/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_role").del();
  await knex("user_role").insert([
    { id: 1, name: "Admin", description: "Admin" },
    { id: 2, name: "User", description: "User" },
    { id: 3, name: "Guest", description: "Guest" },
  ]);
};
