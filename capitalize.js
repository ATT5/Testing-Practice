"use strict";

const capitalize = function (stg) {
  const firstWord = stg.slice(0, 1).toUpperCase();
  return firstWord + stg.slice(1);
};

module.exports = capitalize;
