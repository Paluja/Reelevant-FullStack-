// Hola mundo en JS en la consola

//console.log("Hola mundo desde Cheatsheet JS");

//Variables y constantes

/**
 * Variables
 * var --> demonio
 * let
 * const
 */

var userName = "Nacho";
console.log(userName);

// DATOS SIMPLES

//string
// Son valores de texto. Siempre se van a representar con comillas dobles o simples
let welcome = "Bienvenido a JS";

//number
//Son numeros, tanto decimales como enteros
let km = 340;

//boolean
//Son valores que van a ser siempre verdadero o falso.
//Y se representan con las palabras reservadas true y false
let isAlive = true;
console.log(typeof isAlive + " Este es el tipo de dato de la variable isAlive");
//undefined
//Quiere decir que esa variable no esta definida. No debe confundirse con null
let notDefine;
console.log(typeof notDefine);
//null
//Esta variable si que tiene un valor y su valor es "ninguno"
let address = null;

// DATOS COMPLEJOS

//objetos
/**
 * Los objetos se crean igual que cualquier otra variable pero al crearlos utilizaremos {}
 * Dentro de los objetos lo que vamos a tener van a ser propiedades:
 * propiedad/valor ---> key/value
 * Para darl valor a una proiedad se utilizan los dos puntos :
 * Dentro de un objeto, sus propiedades pueden ser de cualquier tipo
 * Las propiedades se separan por coma
 */

let user = {
  name: "Nacho",
  surname: "Viano",
  isAlive: true,
  address: {
    street: "Calle Larios",
    number: 23,
  },
};

//Para acceder a alguna propiedad de nuestro objeto, se hara a traves del punto .

console.log(user.surname);

//array / listas
/**
 * Los arrays son listas de elementos (string,number,object,array)
 * Los arrays esta siempre compuestos por los mismo elementos
 * Se representan con los corchetes []
 * El primer elemento de un array esta en la posicion 0
 */

let notes = [4, 7, 6, 3];

//Para acceder a un elemento de nuestra lista se utilizan los corchetes indicando su posicion
console.log(notes[1]);

let students = [
  { name: "Nadine", age: 24 },
  { name: "Carla", age: 25 },
  { name: "Abraham", age: 21 },
];

console.log(students[0].age);

//Comparaciones / Asignaciones

//Asignacion
//Para asignarle un valor a una variable se utiliza un solo igual =
let x = 4;

//Doble igual ==

/**
 * Con el doble igual lo que estamos haciendo es comparando si dos variables tienen el mismo
 * valor independientemente de su tipo
 */

let a = 2;
let b = "2";
console.log(a == b); //este resultado va a ser true, aunque sea un str detecta que es el mismo resultado

//Triple igual ===
//Compara si dos variables son estrictamente iguales. Incluye el tipo

let c = 3;
let d = "3";
console.log(c === d); //este resultado va a ser false

//Diferente de !=
//Compara si dos variables son distintas independientemente de su tipo

let f = 2;
let h = "2";
console.log(f != h); //este resultado va a ser false

//Estrictamente diferente !==
//Compara el valor de dos variables incluyendo su tipo
console.log(f !== h); //este resultado va a ser true

//Condicionales
//Se utilizan cuando queremos tener un resultado dependiendo de si cumplen o no las condiciones
let demon = "var";
let isDemon = demon === "var" && isAlive === false; //
console.log(isDemon);
// && significa "y" y lo que comprueba es que las condiciones se cumplan

let isGod = demon === "var" || isAlive === true;
console.log(isGod);
// || significa "o" y lo que comprueba es que una de las condiciones se cumpla

//Negacion
//Se utiliza la exclamacion para cambiarle el valor a un tipo de dato booleano
let isDead = !isAlive;
console.log(isDead); 

//Valores truthy y falsy
//Todos estos valores retornan false

Boolean(false);
Boolean(0);
Boolean(-0);
Boolean(0n);
Boolean("");
Boolean(``);
Boolean(null);
Boolean(undefined);
Boolean(NaN);

//Cualquier otro valor retorna true

Boolean(true);
Boolean([]);
Boolean({});
Boolean("Hola mundo");
Boolean(new Date());