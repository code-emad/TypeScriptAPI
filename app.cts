const express = require("express");
const app = express();
const cors = require("cors");
import { db } from "./db/connection.cjs";

app.use(cors());

app.use(express.json());

app.get(
  "/api/names",

  //controller
  (request, response, next) => {
    //model
    const sqlString = "SELECT * FROM names;";
    db.query(sqlString)
      //controller
      .then((names) => {
        console.log(names);
        response.status(200).send({ hello: "world" });
      });
  }
);

// listen file
//const app = require('./app') will need to be included once moved to separate file
const { PORT = 9090 } = process.env;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

module.exports = app