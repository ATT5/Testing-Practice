const analyze = require("./analyzeArray");

test("know the following properties o an array : average, min, max, and length", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
