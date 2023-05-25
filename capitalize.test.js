const capitalize = require("./capitalize");

test("capitalize first letter", () => {
  expect(capitalize("test")).toBe("Test");
});
