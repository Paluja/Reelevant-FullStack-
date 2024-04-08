const { notaMedia } = require("./ejercicio09");

describe("test para comprobar la nota media de un estudiante", () => {
  test("retorna que la nota media del estudiante es de 5 y esta aprobado", () => {
    expect(notaMedia(5, 5, 5, 5, 5)).toBe(`${5} aprobado`);
  });

  test("retorna que la nota media del estudiante es de 1 y esta suspenso", () => {
    expect(notaMedia(1, 1, 1, 1, 1)).toBe(`${1} suspenso`);
  });

  test("lanza un error al recibir un parametro que no es un numero", () => {
    expect(notaMedia(1, "a", 2, 3, 4)).toBe(
      "Debes introducir solo numeros. Intentalo de nuevo"
    );
  });
});
