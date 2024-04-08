const {
  getAverageCost,
  getLastCost,
  getMaxCost,
  getMinCost,
  getMinPriceDecember,
} = require("./ejercicio49");

describe("operaciones necesarias para un departamento", () => {
  test("retorna el precio medio", () => {
    expect(getAverageCost([2, 2, 2])).toBe(2);
  });

  test("retorna el ultimo precio de los articulos comprados", () => {
    expect(getLastCost([2, 3, 4, 5, 6, 7, 8])).toBe(8);
  });

  test("selecciona el maximo coste de un array de costes y el mes en el que fue realizado", () => {
    expect(getMaxCost([4, 2, 5, 7, 8, 10, 3, 4, 5, 3])).toStrictEqual({
      max: 10,
      month: 6,
    });
  });

  test("selecciona el minimo coste de un array de costes y el mes en el que fue realizado", () => {
    expect(getMinCost([2, 3, 4, 1, 5, 6, 7, 8])).toStrictEqual({
      min: 1,
      month: 4,
    });
  });

  test("retorna el menos precio del mes de diciembre", () => {
    expect(
      getMinPriceDecember(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 5]
      )
    ).toBe(5);
  });
});
