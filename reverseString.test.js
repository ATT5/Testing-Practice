//const { test } = require("node:test");
const reverse = require("./reverseString");

test("test to become Test", () => {
  expect(reverse("test")).toBe("tset");
});
