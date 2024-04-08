const { generarVector } = require("./ejercicio45");

test("genera un vector a partir de un array introduciendo en este solamente aquellos numeros pares y superiores a 25", () => {
  expect(generarVector([23, 45, 68, 88, 7, 6, 54, 12])).toStrictEqual([
    0, 0, 68, 88, 0, 0, 54, 0,
  ]);
});

test("genera un vector a partir de un array introduciendo en este solamente aquellos numeros pares y superiores a 25", () => {
  expect(generarVector([32, 55, 618, 188, 17, 16, 154, 112])).toStrictEqual([
    32, 0, 618, 188, 0, 0, 154, 112,
  ]);
});

test("genera un vector a partir de un array introduciendo en este solamente aquellos numeros pares y superiores a 25", () => {
  expect(generarVector([232, 452, 682, 288, 72, 27, 523, 312])).toStrictEqual([
    232, 452, 682, 288, 72, 0, 0, 312,
  ]);
});
