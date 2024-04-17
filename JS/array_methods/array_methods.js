const students = [
    {
      id: 16,
      name: "Antonio",
      lastname: "Perez",
      age: 51,
      gender: "Masculino",
      address: [
        {
          name: "Calle Larios",
          number: 2,
          cp: 29004,
        },
        {
          name: "Calle Sevilla",
          number: 2,
          cp: 29004,
        },
      ],
    },
    {
      id: 24,
      name: "Pedro",
      lastname: "Gonzalez",
      age: 66,
      gender: "Masculino",
      address: [
        {
          name: "Avenida Plutarco",
          number: 23,
          cp: 29005,
        },
      ],
    },
    {
      id: 35,
      name: "Antonio",
      lastname: "Perez",
      age: 52,
      gender: "Masculino",
      address: [
        {
          name: "Calle Kandisky",
          number: 24,
          cp: 29009,
        },
      ],
    },
    {
      id: 36,
      name: "Antonio",
      lastname: "Flores",
      age: 71,
      gender: "Masculino",
      address: [
        {
          name: "Avenida mayorazgo",
          number: 23,
          cp: 29007,
        },
        {
          name: "Plaza uncibay",
          number: 2,
          cp: 29006,
        },
      ],
    },
  ];

//   1. map --> crea un nuevo array  con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
    //te crea un array normal con el key que le pasemos, studentsMapped seria una var que contiene una funcion
  const studentsMapped = students.map((student) => {
    return(student.name);
  });

  console.log(studentsMapped);

//   funcion normal
  function nombreDeLaFuncion(){
    // codigo 
  }

//   funcion flecha
  const nombreFuncion = () => {
    //   Codigo
    }
    
//     const equipos = ["real madrid", "barcelona"] 
//     /* 

//   //2. push --> Añada un elemento al final de nuestro array
//   equipos.push("valencia");

//   console.log(equipos) */


// students.push({
//     id: 38,
//     name: "Pepe",
//     lastname: "Flores",
//     age: 45,
//     gender: "Masculino",
//     address: [
//       {
//         name: "Avenida andalucia",
//         number: 23,
//         cp: 29007,
//       },
//     ],
// })

/* console.log(students);

//3. filter --> filtra todos los elementos de un array segun cumplan la condicion

const studentMayorDeSesenta = students.filter((student) => student.age > 60);


console.log(studentMayorDeSesenta);

//4. find --> devuelve el primer elemento que cumple con la condicion dada

const  studentFound = students.find((student) => student.name === "Antonio");

console.log(studentFound);

// 5. sort --> devuelve un nuevo array ordenado

const studentsSorted = students.sort((a , b) => a.age - b.age );

console.log(studentsSorted); */

// 6. findIndex --> encuentra el indice del elemento que cumple la condicion

// const studentsFoundByIndex = students.findIndex((student)=> student.id ===  36);

// console.log(studentsFoundByIndex);

// //7. pop --> elimina el ultimo elemento de un array

// const lastStudents = students.pop();

// console.log(lastStudents)
// console.log(students)

// //8. splice --> cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

const nombres = ["Abraham", "Adri", "Nadine", "Yana"];

const newNombre = "Pablo";

// primer argumento el index onde quiero hacer los cambios, el segundo, los registros que voy a modificar y el tercero los nuevos registros( si los hay)
const addNewName = nombres.splice(2, 0, newNombre);

console.log(nombres);

// //9. includes --> determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers.includes(5)); //devuelve true o false si se encuentra el numero en el array


// //10. concat --> se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

// const newNumbers = [7, 8, 9, 10]

// const newArrayOfNumbers = numbers.concat(newNumbers);

// console.log(newArrayOfNumbers);
// Contraer










