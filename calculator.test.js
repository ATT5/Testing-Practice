const calculator = require("./calculator");

test("resive teh result of add, subtract, divide, and multiply to numbre", () => {
  expect(calculator(3, 2)).toEqual({
    add: 5,
    subtract: 1,
    divide: 1.5,
    multiply: 6,
  });
});
