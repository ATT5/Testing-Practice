"use strict";

const reverse = function (stg) {
  const reverseWord = stg.split("").reverse().join("");
  return reverseWord;
};

module.exports = reverse;
