// const db = require('../connection.ts');
// const format = require('pg-format');

// export default seed = ({data}) => {
//     console.log(data)
//     return db
//     .query(`DROP TABLE IF EXISTS names;`)
//     .then(() => {
//         const namesTablePromise = db.query(
//             `CREATE TABLE names (
//                 name_id SERIAL PRIMARY KEY,
//                 name VARCHAR
//                 );`)
//         return Promise.all([namesTablePromise])
//     })
// }

// module.exports = seed;

import db from '../connection';
import { query } from 'pg'; // Import specific parts of the 'pg' module if needed

const seed = ({data}) => {
  console.log(data);
  return db
    .query(`DROP TABLE IF EXISTS names;`)
    .then(() => {
      const namesTablePromise = db.query(
        `CREATE TABLE names (
          name_id SERIAL PRIMARY KEY,
          name VARCHAR
        );`
      );
      return Promise.all([namesTablePromise]);
    });
};

export default seed; // Use 'export default' to export the module
