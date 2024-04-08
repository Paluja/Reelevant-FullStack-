const { sumOrMultiply } = require("./ejercicio04");

describe("si el primer numero introducido es negativo retorna el producto, si no, retorna la suma", () => {
  test("retorna el la suma de los 3 primeros numeros al ser positivo el primero de ellos", () => {
    expect(sumOrMultiply(1, 2, 3)).toBe(6);
  });

  test("retorna el producto de los 3 numeros al ser negativo el primero de ellos", () => {
    expect(sumOrMultiply(-1, 2, 3)).toBe(-6);
  });

  test("lanza un error al recibir un no numero de primer argumento", () => {
    expect(sumOrMultiply("a", 2, 3)).toBe(
      "Has introducido uno o varios caracteres no validos"
    );
  });

  test("lanza un error al recibir un no numero del segundo argumento", () => {
    expect(sumOrMultiply(1, "a", 3)).toBe(
      "Has introducido uno o varios caracteres no validos"
    );
  });

  test("lanza un error al recibir un no numero del tercer argumento", () => {
    expect(sumOrMultiply(1, 2, "a")).toBe(
      "Has introducido uno o varios caracteres no validos"
    );
  });
});
