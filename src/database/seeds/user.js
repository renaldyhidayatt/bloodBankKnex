const Hashing = require("../../utils/hash");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      full_name: "Admin",
      email: "admin@gmail.com",
      password: Hashing.hashPassword("dota"),
      phone: "08812812818",
      role_id: 1,
    },
    {
      id: 2,
      full_name: "User",
      email: "user@gmail.com",
      password: Hashing.hashPassword("dota"),
      phone: "01821828128",
      role_id: 2,
    },
    {
      id: 3,
      full_name: "Guest",
      email: "guest@gmail.com",
      password: Hashing.hashPassword("dota"),
      phone: "0218281281281",
      role_id: 3,
    },
  ]);
};
