const { parImparNulo } = require("./ejercicio15");

describe("retorna si el numero es par o impar y en caso de introducir un 0, te pide que introduzcas otro numero", () => {
  test("retorna que el numero es impar", () => {
    expect(parImparNulo(1)).toBe("El numero es impar");
  });

  test("retorna que el numero es par", () => {
    expect(parImparNulo(2)).toBe("El numero es par");
  });

  test("lanza un mensaje para que se introduzca otro numero al recibir 0", () => {
    expect(parImparNulo(0)).toBe("Introduce otro numero");
  });
});
