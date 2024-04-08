const { seleccionarNumeroMenu } = require("./ejercicio44");

describe("retorna la suma, resta, multiplicacion, division o si se abandona el programa segun el numero introducido", () => {
  test("suma correctamente los numer", () => {
    expect(seleccionarNumeroMenu(1, 2, 2)).toBe(4);
  });
  test("resta correctamente los numer", () => {
    expect(seleccionarNumeroMenu(2, 2, 2)).toBe(0);
  });
  test("multiplica correctamente los numer", () => {
    expect(seleccionarNumeroMenu(3, 2, 2)).toBe(4);
  });
  test("divide correctamente los numer", () => {
    expect(seleccionarNumeroMenu(4, 2, 2)).toBe(1);
  });
  test("abandona correctamente el programa", () => {
    expect(seleccionarNumeroMenu(5, 2, 2)).toStrictEqual(
      "Has salido correctamente del programa"
    );
  });
  test("lanza un error al haber recibido un numero incorrecto", () => {
    expect(seleccionarNumeroMenu(6, 2, 2)).toStrictEqual(
      "No has introducido un numero correcto. El numero debe estar entre 1 y 5"
    );
  });
  test("lanza un error al haber recibido un numero incorrecto", () => {
    expect(seleccionarNumeroMenu(0, 2, 2)).toStrictEqual(
      "No has introducido un numero correcto. El numero debe estar entre 1 y 5"
    );
  });
});
