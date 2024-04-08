const { sonIguales } = require("./ejercicio39");

describe("compara dos arrays y retorna true o false dependiendo de si son iguales o no", () => {
  test("retorna true al ser los dos arrays iguales", () => {
    expect(sonIguales([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
  });

  test("retorna false al no ser los dos arrays iguales", () => {
    expect(sonIguales([1, 2, 3, 4], [1, 3, 3, 4])).toBe(false);
  });
});
