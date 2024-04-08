const { maxMinAverageUntilZero } = require("./ejercicio21");

test("retorna la media, el numero maximo y el numero minimo de un array hasta que recibe un 0", () => {
  expect(maxMinAverageUntilZero([6, 6, 6, 6, 0])).toStrictEqual({
    average: 6,
    max: 6,
    min: 6,
  });
});

test("retorna la media, el numero maximo y el numero minimo de un array hasta que recibe un 0", () => {
  expect(maxMinAverageUntilZero([66, 36, 26, 6, 0])).toStrictEqual({
    average: 33.5,
    max: 66,
    min: 6,
  });
});

test("retorna la media, el numero maximo y el numero minimo de un array hasta que recibe un 0", () => {
  expect(maxMinAverageUntilZero([66, 36, 0, 6, 120])).toStrictEqual({
    average: 51,
    max: 66,
    min: 36,
  });
});
