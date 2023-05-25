"use strict";

const analyze = function (arr) {
  const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  const min = arr.sort((a, b) => a - b)[0];
  const max = arr.sort((a, b) => a - b)[arr.length - 1];
  const length = arr.length;
  console.log(max);
  return { average: average, min: min, max: max, length: length };
};

module.exports = analyze;
