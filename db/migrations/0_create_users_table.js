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
      .string('bio')
      .notNullable();
    table
      .string('profile_image_url');
    table
      .string('gender')
      .notNullable();
    table
      .date('birth_date')
      .notNullable();
    table
      .integer('km_range')
      .defaultTo(50);
    table
      .boolean('same_gender_preference')
      .defaultTo(false);
    table
      .boolean('similar_age_preference')
      .defaultTo(false);
    table
      .json('sports')
      .defaultTo({
        'badminton': false,
        'baseball': false,
        'basketball': false,
        'beach volleyball': false,
        'disc golf': false,
        'canoeing/kayaking': false,
        'curling': false,
        'cycling': false,
        'football': false,
        'golf': false,
        'hiking': false,
        'ice climbing': false,
        'lacrosse': false,
        'pickleball': false,
        'racquetball': false,
        'rock climbing': false,
        'rowing': false,
        'rugby': false,
        'running': false,
        'sailing': false,
        'skiing': false,
        'soccer': false,
        'spike ball': false,
        'squash': false,
        'swimming': false,
        'table tennis': false,
        'tennis': false,
        'trail running': false,
        'Ultimate Frisbee': false,
        'volleyball': false,
        'yoga': false,
      })
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
