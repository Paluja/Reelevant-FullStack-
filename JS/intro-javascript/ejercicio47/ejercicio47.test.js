const { ordenar } = require("./ejercicio47");

test("ordena un array de manera descendente", () => {
  expect(ordenar([3, 2, 1, 4, 7, 5, 8, 9, 7])).toStrictEqual([
    9, 8, 7, 7, 5, 4, 3, 2, 1,
  ]);
});
