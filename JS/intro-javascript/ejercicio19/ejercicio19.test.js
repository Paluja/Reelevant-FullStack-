const { mediaArrayHastaMenosUno } = require("./ejercicio19");

test("retorna la media de un array hasta que el numero sea -1", () => {
  expect(mediaArrayHastaMenosUno([6, 6, 6, 6, -1])).toBe(6);
});

test("retorna la media de un array hasta que el numero sea -1", () => {
  expect(mediaArrayHastaMenosUno([6, 6, 6, 6, -1, 5, 6, 5, 7])).toBe(6);
});

test("retorna la media de un array hasta que el numero sea -1", () => {
  expect(mediaArrayHastaMenosUno([-1, 6, 6, 6, -1, 5, 6, 5, 7])).toBe(0);
});
