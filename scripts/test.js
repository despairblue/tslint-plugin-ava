"use strict";

const { exec, rm, set, test, find, echo } = require("shelljs");

set("-e");
// set('-v')

const rules = find("test").filter(file => file.match("tslint.json"));

rules.forEach(path => {
  echo(`testing ${path} ...`);
  exec(`tslint -r ./build/rules --test ${path}/..`);
});
