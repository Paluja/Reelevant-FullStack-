const { findNumberInArray, generateRandomArray } = require("./ejercicio52");

describe("generateRandomArray", () => {
  it("comprueba que se genera un array de longitud 10", () => {
    const randomArray = generateRandomArray();
    expect(randomArray).toHaveLength(10);
  });

  it("debera contener numeros dentro del rango seleccionado", () => {
    const randomArray = generateRandomArray();
    randomArray.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThan(15);
    });
  });
});

describe("findNumberInArray", () => {
  it("retorna correctamente true si el numero se encuentra dentro del array", () => {
    const array = [10, 2, 3, 4, 12, 11, 12, 5, 9, 10];
    const numberToFind = 4;
    const numberInArray = findNumberInArray(array, numberToFind);
    expect(numberInArray).toBe(true);
  });

  it("retorna falso si el numero no se encuentra en el array", () => {
    const array = [10, 2, 3, 4, 12, 11, 12, 5, 9, 10];
    const numberToFind = 7;
    const numberInArray = findNumberInArray(array, numberToFind);
    expect(numberInArray).toBe(false);
  });
});
