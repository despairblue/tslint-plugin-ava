"use strict";

var shelljs = require("shelljs");

var set = shelljs.set
var find = shelljs.find
var echo = shelljs.echo
var exec = shelljs.exec

set("-e");
// set('-v')

const rules = find("test").filter(file => file.match("tslint.json"));

rules.forEach(path => {
  echo(`testing ${path} ...`);
  exec(`tslint -r ./build/rules --test ${path}/..`);
});
