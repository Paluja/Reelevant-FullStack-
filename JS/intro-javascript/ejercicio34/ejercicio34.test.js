const { generateRandomNumber, playGame } = require("./ejercicio34");

console.log = jest.fn();

describe("genera un numero aleatorio que se utiliza en la funcion play game, la cual debe tratar de adivinarlo", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })
  it("comprueba que se genera un numero aleatorio entre 1 y 10", () => {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  it("debería adivinar el número correctamente en el primer intento", () => {
    const randomNumber = 1;
    const arrayNum = [1, 3, 5, 3, 7, 9, 5, 3, 8, 9];

    playGame(randomNumber, arrayNum);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      `Exacto, has acertado en el 1 intento! el numero era el 1`
    );
  });

  it("debería adivinar el número al tercer intento", () => {
    const randomNumber = 5;
    const arrayNum = [1, 3, 5, 3, 7, 9, 7, 3, 8, 9];

    playGame(randomNumber, arrayNum);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      `Exacto, has acertado en el 3 intento! el numero era el 5`
    );
  });

  it("deberia fallar porque ningun numero coincide con el generado aleatoriamente", () => {
    const randomNumber = 10;
    const arrayNum = [1, 3, 5, 3, 7, 9, 7, 3, 8, 9];

    playGame(randomNumber, arrayNum);

    expect(console.log).toHaveBeenCalledWith(
      "Ninguno de los numeros introducido coincide con el creado aleatoriamente"
    );
  });
});
