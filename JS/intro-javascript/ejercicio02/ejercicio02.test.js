const { sum, substract, multiply, divide, total } = require("./ejercicio02");

describe("retorna la suma entre los dos numeros introducidos", () => {
  test("hace la suma de 1 y 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("hace la suma de 12132 y 23232", () => {
    expect(sum(12132, 23232)).toBe(35364);
  });

  test("hace la resta de 1 y 2", () => {
    expect(substract(1, 2)).toBe(-1);
  });

  test("hace el producto de 1 y 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test("hace la division entre 1 y 2", () => {
    expect(divide(1, 2)).toBe(0.5);
  });

  test("añade el total del resto de respuestas", () => {
    expect(total(1, 2)).toBe(4.5);
  });
});
