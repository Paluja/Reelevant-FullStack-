const { crearDni } = require("./ejercicio37");

describe("selecciona la letra correcta para un dni", () => {
  test("selecciona la letra correcta para el dni 76882495", () => {
    expect(crearDni(76882495)).toStrictEqual(`DNI Completo: 76882495G`);
  });

  test("selecciona la letra correcta para el dni 44727446", () => {
    expect(crearDni(44727446)).toStrictEqual(`DNI Completo: 44727446J`);
  });

  test("selecciona la letra correcta para el dni 77232587", () => {
    expect(crearDni(77232587)).toStrictEqual(`DNI Completo: 77232587J`);
  });

  test("selecciona la letra correcta para el dni 76882496", () => {
    expect(crearDni(76882496)).toStrictEqual(`DNI Completo: 76882496M`);
  });
});
