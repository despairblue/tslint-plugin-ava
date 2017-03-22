const { exec, mkdir, mv, rm, set, test } = require("shelljs");

set("-e");
set("-v");

if (test("-d", "build")) {
  rm("-R", "build");
}

exec("tsc -p ./");
