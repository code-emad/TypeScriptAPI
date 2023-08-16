"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var cors = require('cors');
var connection_cjs_1 = require("./db/connection.cjs");
app.use(cors());
app.use(express.json());
app.get('/api/names', function (request, response, next) {
    (function () {
        var sqlString = 'SELECT * FROM names;';
        return connection_cjs_1.db.query(sqlString).then(function (names) {
            console.log(names);
            response.status(200).send();
        });
    });
});
// listen file
//const app = require('./app') will need to be included once moved to separate file
var _a = process.env.PORT, PORT = _a === void 0 ? 9090 : _a;
app.listen(PORT, function () { return console.log("Listening on port ".concat(PORT, "...")); });
console.log(express);
