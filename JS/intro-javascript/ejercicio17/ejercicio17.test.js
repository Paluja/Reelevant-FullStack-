const { calcularSumaNumerosNaturales } = require("./ejercicio17");

describe("retorna la suma de los primeros N numeros naturales", () => {
  test("retorna la suma de los primeros 5 numeros naturales", () => {
    expect(calcularSumaNumerosNaturales(5)).toBe(15);
  });

  test("retorna la suma de los primeros 6 numeros naturales", () => {
    expect(calcularSumaNumerosNaturales(6)).toBe(21);
  });
});
