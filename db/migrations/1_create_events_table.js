/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('events', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .integer('user_owner')
      .references('id').inTable('users')
      .onDelete('CASCADE');
    table
      .datetime('datetime');
    table
      .string('title');
    table
      .string('description');
    table
      .string('location');
    table
      .string('sport');
    table
      .boolean('same_gender');
    table
      .boolean('similar_age');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
