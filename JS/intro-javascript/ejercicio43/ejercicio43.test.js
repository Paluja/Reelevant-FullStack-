const { relojInfinito } = require("./ejercicio43");

console.log = jest.fn();

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe("reloj infinito", () => {
  test("adelanta correctamente el reloj 10 segundo", () => {
    relojInfinito();
    jest.advanceTimersByTime(10000);
    expect(console.log).toHaveBeenLastCalledWith("00:00:10");
  });

  test("adelanta correctamente el reloj 70 minutos", () => {
    relojInfinito();
    jest.advanceTimersByTime(70 * 60 * 1000);
    expect(console.log).toHaveBeenLastCalledWith("01:10:00");
  });

  test("adelanta correctamente el reloj 24 horas", () => {
    relojInfinito();
    jest.advanceTimersByTime(24 * 60 * 60 * 1000);
    expect(console.log).toHaveBeenLastCalledWith("00:00:00");
  });
});
