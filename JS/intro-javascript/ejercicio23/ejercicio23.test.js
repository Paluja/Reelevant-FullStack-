const { fechaIntroducida } = require("./ejercicio23");

describe("formula que lee tres numeros y te devuelve la fecha en palabras", () => {
  test("lanza un error al recibir un 0 para el dia", () => {
    expect(fechaIntroducida(0, 2, 2019)).toBe(
      "Has introducido mal alguna parte de la fecha"
    );
  });

  test("lanza un error al recibir un mes con un numero superior a 12", () => {
    expect(fechaIntroducida(12, 15, 2019)).toBe(
      "Has introducido mal alguna parte de la fecha"
    );
  });

  test("lanza un error al recibir un año no valido", () => {
    expect(fechaIntroducida(12, 15, 0)).toBe(
      "Has introducido mal alguna parte de la fecha"
    );
  });

  test("lanza un error al recibir dia 29 de febrero en año no bisiesto", () => {
    expect(fechaIntroducida(29, 2, 2001)).toBe(
      "Has introducido mal alguna parte de la fecha"
    );
  });

  test("retorna la fecha en palabras tras recibir una fecha numerica", () => {
    expect(fechaIntroducida(18, 2, 2001)).toBe(
      `${18} de ${"febrero"} del ${2001}`
    );
  });
});
