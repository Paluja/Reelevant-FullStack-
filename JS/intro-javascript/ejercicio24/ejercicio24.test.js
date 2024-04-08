const { notaAlumno } = require("./ejercicio24");

describe("calcular las calificaciones de un alumno", () => {
  test("retorna la nota media de un alumno", () => {
    expect(notaAlumno("Carlos", 1, 1, 1)).toBe(
      `${"Carlos"} tu nota final es de ${1} sobre 10`
    );
  });

  test("lanza un error al no recibir el nombre del alumno correctamente", () => {
    expect(notaAlumno("", 1, 1, 1)).toBe("Error al recibir el nombre");
  });
  test("lanza un error al recibir un numero no valido para una de las notas", () => {
    expect(notaAlumno("Carlos", -1, 1, 1)).toBe(
      "Ha habido un error con tus notas. Deben estar entre 1 y 10"
    );
  });
  test("lanza un error al recibir un numero no valido para una de las notas", () => {
    expect(notaAlumno("Carlos", 1, -1, 1)).toBe(
      "Ha habido un error con tus notas. Deben estar entre 1 y 10"
    );
  });
  test("lanza un error al recibir un numero no valido para una de las notas", () => {
    expect(notaAlumno("Carlos", 1, 1, -1)).toBe(
      "Ha habido un error con tus notas. Deben estar entre 1 y 10"
    );
  });
});
