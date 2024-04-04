// Esta variable es como un objeto dejado en la calle: todos en la ciudad pueden verlo.
var globalVar = "Global_var";

function myFunction() {
  // Esta variable es como un objeto en una casa: solo visible dentro de la función (casa).
  var localVar = "Local(global)_var dentro de un funcion";

  // Esta variable es como un objeto en una habitación específica dentro de una casa.
  // Solo es visible dentro de este bloque if.
  if (true) {
    let blockVar = "local dentro del if";
    console.log(blockVar); // Funciona
  }

  console.log(localVar); // Funciona
  // console.log(blockVar); // Error: blockVar no está definida fuera del bloque if.
}

console.log(globalVar); // Funciona
// console.log(localVar); // Error: localVar no está definida fuera de myFunction.
myFunction();