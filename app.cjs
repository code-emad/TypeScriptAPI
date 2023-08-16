"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
// listen file
//const app = require('./app')
var _a = process.env.PORT, PORT = _a === void 0 ? 9090 : _a;
app.listen(PORT, function () { return console.log("Listening on port ".concat(PORT, "...")); });
console.log(express);
