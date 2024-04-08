const { nuevoSalario } = require("./ejercicio10");

describe("test para obtener el nuevo salario de un trabajador segun el rango en el que se encuentre", () => {
  test("aumenta el salario del trabajador 15% al encontrarse en el rango 1", () => {
    expect(nuevoSalario(1000, 1)).toBe(1150);
  });

  test("aumenta el sueldo del trabajador 10% al encontrarse en el rango 2", () => {
    expect(nuevoSalario(1000, 2)).toBe(1100);
  });

  test("aumenta el sueldo del tabajador 6% al encontrarse en el rango 3", () => {
    expect(nuevoSalario(1000, 3)).toBe(1060);
  });

  test("aumenta el sueldo del trabajador 3% al encontrarse en el rango 4", () => {
    expect(nuevoSalario(1000, 4)).toBe(1030);
  });

  test("el sueldo del trabajador se mantiene igual al estar en el rango 5", () => {
    expect(nuevoSalario(1000, 5)).toBe(1000);
  });
});
