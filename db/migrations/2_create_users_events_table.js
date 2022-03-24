/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('users_events', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .integer('user_id')
      .references('id').inTable('users')
      .onDelete('CASCADE');
    table
      .integer('event_id')
      .references('id').inTable('events')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_events');
};