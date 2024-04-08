const { crearCuadrado } = require("./ejercicio25");

describe("genera un cuadrado de tamaño N.", () => {
  test("genera un cuadrado de tamaño 5", () => {
    const expectedOutput =
      "*****\n" + "*   *\n" + "*   *\n" + "*   *\n" + "*****\n";
    expect(crearCuadrado(5)).toBe(expectedOutput);
  });
});
