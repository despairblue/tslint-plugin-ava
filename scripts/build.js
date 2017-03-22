'use strict'

var shelljs = require("shelljs");

var set = shelljs.set
var test = shelljs.test
var rm = shelljs.rm
var exec = shelljs.exec


set("-e");
set("-v");

if (test("-d", "build")) {
  rm("-R", "build");
}

exec("tsc -p ./");
