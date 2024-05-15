// Encontrar el índice del primer elemento menor que 5 en un array
//
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// Filtrar nombres que empiecen con la letra "A" en un array de strings

const names = ["Alice", "Bob", "Anna", "Alex", "John", "Amy"];

const filteredNames = names.filter(name => name.startsWith("A"));
console.log(filteredNames);

const filteredNames1 = [];
for (let i = 0; i < names.length; i++) {

    if (names[i].startsWith("A")) {
        filteredNames.push(names[i]);
    }
}
console.log(filteredNames);




// const numbers = [200, 500, 11, 15,1 , 250, 300];
// const menorCien=[];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 100)
//     {
//         menorCien.push(numbers[i]);
//     }
// }
// console.log(menorCien);


// Eliminar elementos mayores que 100 en un arreglo
const numbers = [200, 500, 11, 15,1 , 250, 300];
for (let i = 0; i < numbers.length;) {
    console.log(numbers[i]);
    if (numbers[i] >= 100)
    {
        console.log("-------------if--------------");
        console.log(numbers[i]);
        numbers.splice(i,1);
        console.log("---------------------------");
    }
    else{
        i++;
    }
}


console.log(numbers);
