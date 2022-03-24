// Update with your config settings.
require("dotenv").config('./.env');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
//const connection_url = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;

module.exports = {

  development: {

      client: 'pg',

      connection : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        db: process.env.DB_NAME,
        charset: 'utf8'
      },

      migrations : {
        directory: __dirname + "/db/migrations"
      },

      seeds: {
        directory: __dirname + "/db/seeds"
      }

  },

};

//  // Migrations Schema
// knex migrate:make initUsers --env development
// knex migrate:latest --env development
// knex migrate:rollback

//  // Seeding
// knex seed:make addUsers --env development
// knex seed:run --env development