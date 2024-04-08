const { swapVariables } = require("./ejercicio01");

describe("intercambia el valor de dos variables", () => {
  test("intercambia el valor de 1 y 2", () => {
    expect(swapVariables(1, 2)).toStrictEqual("2 1");
  });

  test("intercambia el valor de 3 y 2", () => {
    expect(swapVariables(3, 2)).toStrictEqual("2 3");
  });

  test("intercambia el valor 118721 y 2012", () => {
    expect(swapVariables(118721, 2012)).toStrictEqual("2012 118721");
  });
});
