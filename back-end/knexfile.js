/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://hqwkbyfp:SH-ujul6_QS_XUBp1FYtOZBha4ULiMIi@ruby.db.elephantsql.com/hqwkbyfp",
  DATABASE_URL_DEVELOPMENT = "postgres://hqwkbyfp:SH-ujul6_QS_XUBp1FYtOZBha4ULiMIi@ruby.db.elephantsql.com/hqwkbyfp",
  DATABASE_URL_TEST = "postgres://hqwkbyfp:SH-ujul6_QS_XUBp1FYtOZBha4ULiMIi@ruby.db.elephantsql.com/hqwkbyfp",
  DATABASE_URL_PREVIEW = "postgres://hqwkbyfp:SH-ujul6_QS_XUBp1FYtOZBha4ULiMIi@ruby.db.elephantsql.com/hqwkbyfp",
  DEBUG,
} = process.env;=

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
