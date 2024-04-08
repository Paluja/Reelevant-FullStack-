const { arrayIndex } = require("./ejercicio33");

describe("arrayIndex", () => {
  it("deberia llamar al console.log con los valores esperados", () => {
    const inputArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    console.log = jest.fn();

    arrayIndex(inputArray);

    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      "El indice es 0 y su valor es A"
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      "El indice es 1 y su valor es B"
    );
    expect(console.log).toHaveBeenNthCalledWith(
      6,
      "El indice es 5 y su valor es F"
    );
    expect(console.log).toHaveBeenNthCalledWith(
      9,
      "El indice es 8 y su valor es I"
    );
  });
});
