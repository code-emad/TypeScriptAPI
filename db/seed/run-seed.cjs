"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devData = require("../data/data-dev/index.ts");
var connection_cjs_1 = require("../connection.cjs");
var seed_cjs_1 = require("./seed.cjs");
var runSeed = function () {
    return (0, seed_cjs_1.seed)(devData).then(function () { return connection_cjs_1.db.end(); });
};
runSeed();
console.log(seed_cjs_1.seed);
