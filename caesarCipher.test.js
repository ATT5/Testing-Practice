const cipher = require("./caesarCipher");

test("takes a string and return Caesar cipher ", () => {
  expect(cipher("caesar cipher")).toBe("geiwev gmtliv");
});

test("ciphering z", () => {
  expect(cipher("z")).toBe("d");
});
