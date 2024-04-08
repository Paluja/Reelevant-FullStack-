const { factorialNumero } = require("./ejercicio29");

describe("retorna el factorial del numero recibido", () => {
  test("retorna el factorial del numero 10", () => {
    expect(factorialNumero(10)).toBe(3628800);
  });

  test("retorna el factorial del numero 5", () => {
    expect(factorialNumero(5)).toBe(120);
  });
});
