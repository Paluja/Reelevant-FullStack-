const { oddball_sum } = require("./oddBallSum");

test("retorna la suma de los numeros impares de un array", () => {
  expect(oddball_sum([3, 6, 7])).toBe(10);
});
