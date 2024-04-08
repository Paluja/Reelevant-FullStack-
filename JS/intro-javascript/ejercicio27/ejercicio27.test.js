const { tablaNumero } = require("./ejercicio27");

describe("Tabla Numero", () => {
  it("deberia llamar al console.log con los valores esperados", () => {
    const number = 9;

    console.log = jest.fn();

    tablaNumero(number);

    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenNthCalledWith(1, 9);
    expect(console.log).toHaveBeenNthCalledWith(2, 18);
    expect(console.log).toHaveBeenNthCalledWith(6, 54);
    expect(console.log).toHaveBeenNthCalledWith(10, 90);
  });
});
