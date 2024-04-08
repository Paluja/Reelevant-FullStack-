const { crearTriangulo } = require("./ejercicio31");

describe("retorna una escalera invertida de asteriscos con un numero especifico de filas", () => {
  test("retorna una escalera invertida de asteriscos de tamaño 3", () => {
    const expectedOutput = "***\n" + " **\n" + "  *\n";
    expect(crearTriangulo(3)).toBe(expectedOutput);
  });
});
