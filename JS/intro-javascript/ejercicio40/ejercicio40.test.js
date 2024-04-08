const { generarArrayNoRepetidos } = require("./ejercicio40");

it("retorna un array de longitud especificada sin ningun elemento repetido", () => {
  const length = 10;
  const result = generarArrayNoRepetidos(length);

  expect(Array.isArray(result)).toBe(true);
  expect(result).toHaveLength(length);

  const uniqueElements = new Set(result);
  expect(uniqueElements.size).toBe(length);
});
