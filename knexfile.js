const { resolve } = require("path");

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "holyraven",
      password: "Denada451",
      database: "bloodbank",
    },
    migrations: {
      directory: resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: resolve(__dirname, "src", "database", "seeds"),
    },
    log: {
      error: (msg) => console.error(msg),
      warn: (msg) => console.warn(msg),
    },
  },
  production: {
    client: "pg",
    connection: process.env.PG_URI,
    compress: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: resolve(__dirname, "src", "database", "migrations"),
    },
  },
};
