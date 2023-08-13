"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var Pool = require("pg").Pool;
var ENV = process.env.NODE_ENV || "development";
require("dotenv").config({
  path: "".concat(__dirname, "/../.env.").concat(ENV),
});
var config =
  ENV === "production"
    ? {
        connectionString: process.env.DATABASE_URL,
        max: 2,
      }
    : {};
if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("PGDATABASE or DATABASE_URL not set");
}
exports.db = new Pool(config); // Create a new Pool instance
