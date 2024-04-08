const { palindrome } = require("./palindrome");

describe("nos indica si un string es un palindromo o no", () => {
  test("retorna true al ser palindromo el string introducido", () => {
    expect(palindrome("race car")).toBe(true);
  });

  test("retorna false al no ser palindromo el string introducido", () => {
    expect(palindrome("not a palindrome")).toBe(false);
  });
});
