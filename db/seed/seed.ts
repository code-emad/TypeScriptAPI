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
//import { query } from 'pg'; // Import specific parts of the 'pg' module if needed

const db = require('../connection.ts');

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

seed({"data": "world"})

module.exports = {seed}; 
