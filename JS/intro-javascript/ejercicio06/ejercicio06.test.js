const { parImparNulo } = require("./ejercicio06");

describe("retorna si el numero introducido es 0, par o impar", () => {
  test("retorna que el numero introducido es impar", () => {
    expect(parImparNulo(1)).toBe("El numero es impar");
  });

  test("retorna que el numero introducido es par", () => {
    expect(parImparNulo(2)).toBe("El numero es par");
  });

  test("retorna que el numero introducido es 0", () => {
    expect(parImparNulo(0)).toBe("El numero es 0");
  });
});
