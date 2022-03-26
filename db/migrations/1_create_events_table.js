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
      .datetime('datetime')
      .notNullable();
    table
      .string('title')
      .notNullable();
    table
      .string('description', [140])
      .notNullable();
    table
      .string('sport')
      .notNullable();
    table
      .boolean('same_gender')
      .defaultTo(false);
    table
      .boolean('similar_age')
      .defaultTo(false);
    table
      .integer('capacity_limit');
    table
      .float('latitude', 14, 10)
      .notNullable();
    table
      .float('longitude', 14, 10)
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
