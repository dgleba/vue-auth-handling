"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOSTADR: '"192.168.88.39"',
  FO: '"FFOO"'
});
