const { menuRestaurante } = require("./ejercicio32");

test("retorna el precio final de un cliente segun sus elecciones en el menu", () => {
  expect(menuRestaurante(2, 2, 2, 2)).toBe(`El precio total es de ${10.6}`);
});

test("retorna el precio final de un cliente segun sus elecciones en el menu", () => {
  expect(menuRestaurante(2, 2, 2, 0)).toBe(`El precio total es de ${6.6}`);
});
