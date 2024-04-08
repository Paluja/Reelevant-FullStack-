const { sumaNPrimerosNumerosPares } = require("./ejercicio18");

describe("retorna la suma de los primeros N numeros pares a partir de N", () => {
  test("retorna la suma de los primeros 5 numeros pares a partir de 5", () => {
    expect(sumaNPrimerosNumerosPares(5)).toBe(50);
  });

  test("retorna la suma de los primeros 12 numeros pares a partir de 12", () => {
    expect(sumaNPrimerosNumerosPares(12)).toBe(276);
  });

  test("retorna la suma de los primeros 1222 numeros pares a partir de 1222", () => {
    expect(sumaNPrimerosNumerosPares(1222)).toBe(2985346);
  });
});
