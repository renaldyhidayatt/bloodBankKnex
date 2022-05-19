/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("news", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("image").notNullable();
    table.string("date").notNullable();
    table.integer("category_id").references("id").inTable("category");
    table.string("is_published").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("news");
};
