import { db } from "../connection.cjs";

export const seed = ({ data }) => {
  return db
    .query(`DROP TABLE IF EXISTS names;`)

    .then(() => {
      console.log("DROP COMPLETE");
      const namesTablePromise = db.query(
        `CREATE TABLE names (
          name_id SERIAL PRIMARY KEY,
          name VARCHAR
        );`
      );
      return Promise.all([namesTablePromise]);
    })
    .then(() => {
      return db.query(
        `INSERT INTO names (name) VALUES ('Emad'), ('Emad1'), ('Emad2');`
      );
    });
};
