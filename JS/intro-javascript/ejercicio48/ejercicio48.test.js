const { ordenarArray } = require("./ejercicio48");

test("recibe un array de nombres y los ordena por orden alfabetico", () => {
  expect(
    ordenarArray(["carlos", "pedro", "paco", "antonio", "nacho"])
  ).toStrictEqual(["antonio", "carlos", "nacho", "paco", "pedro"]);
});
