const { getAverage } = require("./ejercicio53");

test("calcula el promedio de un array ", () => {
  expect(getAverage([2, 2, 2, 2])).toBe(2);
});

test("calcula el promedio de un array ", () => {
  expect(getAverage([10, 2, 2, 10])).toBe(6);
});
