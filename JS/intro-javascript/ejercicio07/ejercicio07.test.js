const { cambioCliente } = require("./ejercicio07");

describe("comprueba cuanto cambio ha de devolverse al cliente o si el pago ha sido insuficiente", () => {
  test("retorna que el cambio a devolver es de 40", () => {
    expect(cambioCliente(100, 60)).toBe(40);
  });

  test("retorna que el pago del cliente ha sido insuficiente", () => {
    expect(cambioCliente(60, 100)).toBe("pago insuficiente");
  });
});
