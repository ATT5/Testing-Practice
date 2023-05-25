"use strict";

const cipher = function (stg) {
  const stgArray = [...stg];
  // prettier-ignore
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // prettier-ignore
  const cipherAlph = ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd'];

  const letterInex = getIndex(stg, alphabet);
  console.log(letterInex);
  let cipherWord = ciphering(letterInex, cipherAlph);

  return cipherWord;
};

const getIndex = function (stg, arr) {
  let index = [];
  for (let i = 0; i < stg.length; i++) {
    const indexNum = arr.indexOf(stg[i]);
    index.push(indexNum);
  }
  return index;
};

const ciphering = function (indexArr, cipherArr) {
  let stg = "";
  for (let i = 0; i < indexArr.length; i++) {
    indexArr[i] === -1 ? (stg += " ") : (stg += cipherArr[indexArr[i]]);
  }
  return stg;
};
const x = cipher("abc.");

module.exports = cipher;
