const db = require('../connection');
const format = require('pg-format');

module.exports.seed = ({data}) => {
    console.log(data)
    return db
    .query(`DROP TABLE IF EXISTS names;`)
    .then(() => {
        const namesTablePromise = db.query(
            `CREATE TABLE names (
                name_id SERIAL PRIMARY KEY,
                name VARCHAR
                );`)
        return Promise.all([namesTablePromise])
    })
}