const num = [1,2,3,4,5]


// 1. Sumar los elementos del array

const numeros = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
}
console.log(sum);




// 2. Encontrar un elemento en un array

const nombres = ["Ana", "Juan", "María", "Pedro"];
const buscar = "María";

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === 'María') console.log(i);
}



// 3. Filtrar elementos pares en un array

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
let j = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 == 0)
    {
        pares[j] = arrayNumeros[i];
        j++;
    }
}
console.log(pares);

// 4. Contar el número de elementos en un array

const meses = ["enero", "febrero", "marzo", "abril"];

console.log(meses.length);

// 5. Concatenar dos arreglos (sin utilizar .concat) con for

const primerArray = [1, 2, 3];
const segundoArray = [4, 5, 6];
const thirdArray = [];
let k = 0;

while (k < primerArray.length)
{
    thirdArray[k] = primerArray[k];
    k++;
}

let x = 0;
while (k < (primerArray.length + segundoArray.length))
{
    thirdArray[k] = segundoArray[x];
    k++;
    x++;
}
console.log(thirdArray);


