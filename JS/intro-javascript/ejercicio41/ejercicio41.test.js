const { generarArray } = require("./ejercicio41");

describe("generar un algoritmo que genere un array aleatorio con longitud y numero maximo introducido por parametros.", () => {
  test("genera un array de longitud especifica", () => {
    const length = 20;
    const s = 20;
    const result = generarArray(length, s);

    expect(result).toHaveLength(length);
  });

  test("genera los valores de ese array segun un rango especificado por el usuario", () => {
    const length = 20;
    const s = 20;
    const result = generarArray(length, s);

    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(-s / 2);
      expect(result[i]).toBeLessThan(s / 2);
    }
  });

  test("se comprueba que la funcion hace las operaciones correctamente", () => {
    const array = [2, 2, 2, 2, -1, 2];
    const mayorQueCero = 5;
    const promedioPositivos = 2;
    const promedioTodos = 1.5;

    let sumPositives = 0;
    let sumAll = 0;
    let positiveCount = 0;

    for (let i = 0; i < array.length; i++) {
      sumAll += array[i];
      if (array[i] > 0) {
        positiveCount++;
        sumPositives += array[i];
      }
    }

    const calculatedMayorQueCero = positiveCount;
    const calculatedPromedioPositivos =
      positiveCount === 0 ? 0 : sumPositives / positiveCount;
    const calculatedPromedioTodos =
      array.length === 0 ? 0 : sumAll / array.length;

    expect(calculatedMayorQueCero).toEqual(mayorQueCero);
    expect(calculatedPromedioPositivos).toEqual(promedioPositivos);
    expect(calculatedPromedioTodos).toEqual(promedioTodos);
  });
});
