const { lucky_sevens } = require("./sum7");

describe("retorna true si 3 numeros consecutivos de un array suman 7", () => {
  test("retorna true al si cumplirse la condicion", () => {
    expect(lucky_sevens([5, 1, 1, 0, 4, 5])).toBe(true);
  });

  test("retorna false al no cumplirse la condicion", () => {
    expect(lucky_sevens([5, 1, 3, 0, 5, 5])).toBe(false);
  });
});
