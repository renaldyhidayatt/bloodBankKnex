/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("donor", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.string("name").notNullable();
    table.string("profession").notNullable();
    table.string("education").notNullable();
    table.string("date_of_birth").notNullable();
    table.integer("age").notNullable();
    table.integer("religion_id").references("id").inTable("religions");
    table.integer("blood_group_id").references("id").inTable("blood_group");
    table.string("email").notNullable().unique();
    table.string("phone").notNullable().unique();
    table.string("address").notNullable();
    table.string("status").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("donor");
};
