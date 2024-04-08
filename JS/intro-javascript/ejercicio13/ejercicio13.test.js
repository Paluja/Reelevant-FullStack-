const { calcularPerimetro, calcularSuperficie } = require("./ejercicio13");

describe("formula que calcule el perimetro y la base", () => {
  test("test para obtener el perimetro", () => {
    expect(calcularPerimetro(4, 5)).toBe(`El perimetro es de ${18}`);
  });

  test("test para obtener la base", () => {
    expect(calcularSuperficie(4, 5)).toBe(`La superficie es de ${20}`);
  });
});
