let count = 0;
let max = 10;

while (count < max) {
    console.log(`Forma de mostrar Count(1):${count}\n`);
    console.log("Formar de mostrar Count(2):" + count);
    console.log("\n")
    count++;
}

//Do while
const prompt = require("prompt-sync")();
let numero = 0;
do {
    numero = prompt("Introduce un número: ");
} while (isNaN(numero)); // isNaN() devuelve true si el valor no es un número


//For
let suma = 0;
for (let i = 0; i < 10; i++) {
    suma += i;
}