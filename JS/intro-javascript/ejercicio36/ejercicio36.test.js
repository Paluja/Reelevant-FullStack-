const { multiplicarElementosArray } = require("./ejercicio36");

describe("multiplicarElementosArray", () => {
  it("multiplica los elementos de dos arrays y devuelve el total. Se comprueba que la funcion genera dos arrays aleatorios de forma correcta", () => {
    const { arrayDos, arrayUno, resultado } = multiplicarElementosArray();

    expect(arrayUno).toHaveLength(10);
    expect(arrayDos).toHaveLength(10);
    expect(resultado).toHaveLength(10);

    for (let i = 0; i < 10; i++) {
      expect(resultado[i]).toBe(arrayUno[i] * arrayDos[i]);
    }
  });
});
