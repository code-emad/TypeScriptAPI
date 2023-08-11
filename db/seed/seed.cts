import {db} from '../connection.cjs'

 export const seed = ({data}) => {
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

seed({data: "hello"})

