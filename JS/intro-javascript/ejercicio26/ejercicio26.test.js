const { cuboNumerosArray } = require("./ejercicio26");

describe("cuboNumerosArray", () => {
  it("deberia llamar al console.log con los valores esperados", () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log = jest.fn();
    cuboNumerosArray(inputArray);
    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenNthCalledWith(1, `El cubo de ${1} es ${1}`);
    expect(console.log).toHaveBeenNthCalledWith(2, `El cubo de ${2} es ${8}`);
    expect(console.log).toHaveBeenNthCalledWith(6, `El cubo de ${6} es ${216}`);
    expect(console.log).toHaveBeenNthCalledWith(
      10,
      `El cubo de ${10} es ${1000}`
    );
  });
});
