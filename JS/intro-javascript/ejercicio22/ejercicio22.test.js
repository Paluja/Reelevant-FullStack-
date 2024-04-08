const { multiplosDeCien } = require("./ejercicio22");

test("retorna los multiplos de 2 o 3 entre 1 y 100", () => {
  expect(multiplosDeCien()).toBe(67);
});
