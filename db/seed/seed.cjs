"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
var connection_cjs_1 = require("../connection.cjs");
var seed = function (_a) {
    var data = _a.data;
    return connection_cjs_1.db
        .query("DROP TABLE IF EXISTS names;")
        .then(function () {
        console.log("DROP COMPLETE");
        var namesTablePromise = connection_cjs_1.db.query("CREATE TABLE names (\n          name_id SERIAL PRIMARY KEY,\n          name VARCHAR\n        );");
        return Promise.all([namesTablePromise]);
    })
        .then(function () {
        return connection_cjs_1.db
            .query("INSERT INTO names (name) VALUES ('Emad'), ('Emad1'), ('Emad2');");
    });
};
exports.seed = seed;
