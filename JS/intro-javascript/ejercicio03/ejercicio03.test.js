const { compareThreeNumbers } = require("./ejercicio03");

describe("compara tres numeros y retorna l mayor de ellos o si son iguales", () => {
  test("retorna que el numero mas grande es 3", () => {
    expect(compareThreeNumbers(1, 2, 3)).toBe(3);
  });

  test("retorna que el numero mas grande es 2", () => {
    expect(compareThreeNumbers(1, 2, 2)).toBe(2);
  });

  test("retorna que el numero mas grande es 5", () => {
    expect(compareThreeNumbers(5, 2, 3)).toBe(5);
  });

  test("retorna que los 3 numeros introducidos son iguales", () => {
    expect(compareThreeNumbers(2, 2, 2)).toBe("iguales");
  });
});
