/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("user", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.string("full_name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("phone").notNullable();
    table
      .integer("role_id")
      .unsigned()
      .references("id")
      .inTable("user_role")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("user");
};
