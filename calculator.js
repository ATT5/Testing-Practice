"use strict";

const calculator = function (fNum, sNum) {
  const addToNum = fNum + sNum;
  const subtractToNum = fNum - sNum;
  const divideToNum = fNum / sNum;
  const multiplyToNum = fNum * sNum;

  return {
    add: addToNum,
    subtract: subtractToNum,
    divide: divideToNum,
    multiply: multiplyToNum,
  };
};

module.exports = calculator;
