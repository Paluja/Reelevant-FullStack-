const { getPrimeNumbers } = require("./ejercicio54");

describe("retorna cuantos numeros primos hay entre 2 y N", () => {
  test("retorna cuantos numeros primos hay entre 2 y 47", () => {
    expect(getPrimeNumbers(47)).toBe(
      `Por debajo de ${47} hay ${15} numeros primos`
    );
  });
});
