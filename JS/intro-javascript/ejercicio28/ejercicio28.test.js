const { timer } = require("./ejercicio28");

console.log = jest.fn();

describe("funcion temporizador", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("comprueba que en un temporizador con valor 3 la funcion llama correctamente 4 veces al console.log", () => {
    timer(3);

    jest.advanceTimersByTime(3000);

    expect(console.log).toHaveBeenCalledWith(2);
    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(0);
    expect(console.log).toHaveBeenCalledWith("¡¡Ring!!");

    expect(console.log).toHaveBeenCalledTimes(4);
  });
});
