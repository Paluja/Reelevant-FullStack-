// Condicionales if/else

/**
 * Los condicionales if/else nos permiten ejecutar codigo, siempre y cuando
 * se cumpla la condicion que hayamos programado
 */

let noWater = false;

let canShower = !noWater; //

if (canShower === true) {
  console.log("Estaré limpio");
} else {
  console.log("Oleré mal");
}

let amountOfMoney = 0;

if (amountOfMoney) {
  console.log("Tengo dinero");
} else {
  console.log("Estoy tieso");
}

let users = null;

if (users) {
  console.log(users);
} else {
  console.log("No hay usuarios");
}

/* if (Boolean(users) === true) {
  console.log(users);
} else {
  console.log("No hay usuarios");
} */

let grades = 85;

if (grades >= 90) {
  console.log("Aprobaste con sobresaliente");
} else if (grades >= 70) {
  console.log("Aprobaste con notable");
} else if (grades >= 50) {
  console.log("Aprobaste con suficiente");
} else {
  console.log("Suspendiste");
}

let age = 25;

if (age >= 65) {
  console.log("Estas jubilado");
} else if (age >= 18 && age < 65) {
  console.log("Cotizas");
} else {
  console.log("A estudiar");
}