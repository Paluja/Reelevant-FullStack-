const { precioEnLitros } = require("./ejercicio14");

describe("recalcula el precio de la gasolina en litros tras recibir la cantidad en galones", () => {
  test("se obtiene un precio en litros de 201.8380612 al recibir 40 galones de gasolina", () => {
    expect(precioEnLitros(40)).toBe(201.8380612);
  });

  test("se obtiene un precio en litros de 203018.81385802 al recibir 40234 galones de gasolina", () => {
    expect(precioEnLitros(40234)).toBe(203018.81385802);
  });
});
