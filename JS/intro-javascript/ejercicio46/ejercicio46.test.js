const { imprimirDescendente } = require("./ejercicio46");

test("imprime numeros de mayor a menor", () => {
  expect(imprimirDescendente(4, 9, 10)).toStrictEqual({ 1: 10, 2: 9, 3: 4 });
});

test("imprime numeros de mayor a menor", () => {
  expect(imprimirDescendente(4, 3, 2)).toStrictEqual({ 1: 4, 2: 3, 3: 2 });
});

test("imprime numeros de mayor a menor", () => {
  expect(imprimirDescendente(20, 9, 30)).toStrictEqual({ 1: 30, 2: 20, 3: 9 });
});

test("imprime numeros de mayor a menor", () => {
  expect(imprimirDescendente(20, 50, 30)).toStrictEqual({
    1: 50,
    2: 30,
    3: 20,
  });
});
