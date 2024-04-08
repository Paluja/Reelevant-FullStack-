const { sumNumberArray } = require("./ejercicio35");

test("retorna la suma de los numeros de un array", () => {
  expect(sumNumberArray([1, 2, 3, 4, 5])).toBe(15);
});
