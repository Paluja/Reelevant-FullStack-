const { invertArray } = require("./ejercicio38");

test("invierte el array recibido", () => {
  expect(invertArray([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1]);
});
