const { incrementarSueldo } = require("./ejercicio08");

describe("incrementa un 15% el sueldo de un trabajador si tiene un salario inferior a 1000 euros", () => {
  test("el sueldo se mantiene igual al no ser inferior a 1000", () => {
    expect(incrementarSueldo(1000)).toBe(1000);
  });

  test("incrementa un 15% el sueldo al ser este inferior a 1000", () => {
    expect(incrementarSueldo(900)).toBe(1035);
  });

  test("el sueldo se mantiene igual al no ser inferior a 1000", () => {
    expect(incrementarSueldo(1200)).toBe(1200);
  });
});
