const { adivinarContrasena } = require("./ejercicio20");

console.log = jest.fn();

describe("test para adivinar la contraseña correctamente", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("comprueba que se realizan 3 intentos para adivinar correctamente la contraseña", () => {
    adivinarContrasena(["hola", "hola", "eureka"], "eureka");
    expect(console.log).toHaveBeenCalledWith(
      "Contraseña incorrecta, intentelo de nuevo"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Contraseña incorrecta, intentelo de nuevo"
    );
    expect(console.log).toHaveBeenCalledWith("Contraseña correcta, bienvenido");
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  it("comprueba que se adivina la contraseña al primer intento", () => {
    adivinarContrasena(["eureka", "hola", "hola"], "eureka");
    expect(console.log).toHaveBeenCalledWith("Contraseña correcta, bienvenido");
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it("comprueba que se acierta la contraseña al segundo intento", () => {
    adivinarContrasena(["hola", "eureka", "hola"], "eureka");
    expect(console.log).toHaveBeenCalledWith(
      "Contraseña incorrecta, intentelo de nuevo"
    );
    expect(console.log).toHaveBeenCalledWith("Contraseña correcta, bienvenido");
    expect(console.log).toHaveBeenCalledTimes(2);
  });

  it("comprueba que la funcion te saca del programa si no consigues adivinar la contraseña tras haberlo intentado 3 veces", () => {
    adivinarContrasena(["hola", "hola", "hola"], "eureka");
    expect(console.log).toHaveBeenCalledWith(
      "Contraseña incorrecta, intentelo de nuevo"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Contraseña incorrecta, intentelo de nuevo"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Contraseña incorrecta, intentelo de nuevo"
    );
    expect(console.log).toHaveBeenCalledWith("Has agotado tus intentos");
    expect(console.log).toHaveBeenCalledTimes(4);
  });
});
