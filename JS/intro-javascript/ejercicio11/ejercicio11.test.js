const { descuentoCompra } = require("./ejercicio11");

describe("test para obtener aplicar un descuento y obtener el precio final", () => {
  test("no se aplica descuento al cliente al ser su monto menor que 500", () => {
    expect(descuentoCompra(400)).toBe(400);
  });

  test("se aplica un descuento de 5% al estar el monto entre 500 y 1000 inclusive", () => {
    expect(descuentoCompra(501)).toBe(475.95);
  });

  test("se aplica un descuento del 10% al estar el total entre 1000 y 7000 inclusive", () => {
    expect(descuentoCompra(1001)).toBe(900.9);
  });

  test("se aplica un descuento del 20% al estar el total entre 7000 y 15000 inclusive", () => {
    expect(descuentoCompra(7001)).toBe(5600.8);
  });

  test("se aplica un descuento del 25% al superar el monto los 15000", () => {
    expect(descuentoCompra(15001)).toBe(11250.75);
  });
});
