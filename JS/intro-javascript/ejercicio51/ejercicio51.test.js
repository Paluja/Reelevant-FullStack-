const { getPrimeNumber } = require("./ejercicio51");

describe("retorna si el numero recibido es un numero primo o no", () => {
  test("retorna true al ser el numero introducido primo", () => {
    expect(getPrimeNumber(5)).toBe(true);
  });

  test("retorna false al no ser el numero introducido primo", () => {
    expect(getPrimeNumber(45)).toBe(false);
  });
});
