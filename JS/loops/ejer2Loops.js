// Encontrar el primer número mayor que 10 en un array

const valores = [6, 12, 30, 4, 5, 6, 70, 8, 9, 10];
for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 10) {
        console.log(i);
        break;
    }
}

// Multiplicar cada elemento de un array por 2 y guardarlos en otro array
const result = [];
for (let i = 0; i < valores.length; i++) {
    result.push(valores[i] * 2);
}


// Encontrar el índice del primer elemento menor que 5 en un array
for (let i = 0; i < valores.length; i++) {
    if (valores[i] < 5) {
        console.log(i);
        break;
    }
}


// Filtrar nombres que empiecen con la letra "A" en un array de strings
const nombres = ["Ana", "Daniel", "Abraham", "Pedro"];
const nombresConA = [];
let j = 0;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] === "A") {
        nombresConA[j] = nombres[i];
        j++;
    }
}

// Contar el número de elementos pares en un array
let contador = 0;
for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 === 0) {
        contador++;
    }
}
// console.log("numeros pares-->")
// console.log(contador);

// Eliminar elementos mayores que 100 en un array
const numbers = [200, 500, 11, 15,1 , 250, 300];
for (let i = 0; i < valores.length;) {
    if (valores[i] > 100) {
        console.log(i);
        valores.splice(i, 1);
    } else {
        i++;
    }
}