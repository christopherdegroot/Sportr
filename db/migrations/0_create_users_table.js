/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .string("email")
      .notNullable();
    table
      .string('name')
      .notNullable();
    table
      .string('password')
      .notNullable();
    table
      .string('bio');
    table
      .string('profile_image_url');
    table
      .string('gender');
    table
      .date('birth_date');
    table
      .string('sports');
    table
      .integer('km_range')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
