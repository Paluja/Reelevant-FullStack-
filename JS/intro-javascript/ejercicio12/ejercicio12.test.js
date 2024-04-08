const { temperaturaGrillo } = require("./ejercicio12");

describe("test para obtener la temperatura a partir del numero de sonidos emitidos por un grillo", () => {
  test("se obtiene una temperatura de 41 al ser el numero de sonidos 4", () => {
    expect(temperaturaGrillo(4)).toBe(41);
  });

  test("lanza un error al recibir 0 sonidos", () => {
    expect(temperaturaGrillo(0)).toBe("Error");
  });

  test("se obtiene una temperatura de 50 al ser el numero de sonidos 40", () => {
    expect(temperaturaGrillo(40)).toBe(50);
  });
});
