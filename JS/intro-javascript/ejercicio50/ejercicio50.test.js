const { contarLetraEnOracion } = require("./ejercicio50");

describe("cuenta cuantas veces aparece una letra en un string", () => {
  test("retorna que la letra a se repite 4 veces en el string introducido", () => {
    expect(
      contarLetraEnOracion("hola me llamo nacho viano", "a")
    ).toStrictEqual("La letra a está 4 veces repetida");
  });
});
