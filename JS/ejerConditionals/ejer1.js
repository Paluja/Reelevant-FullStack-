// Crear una funcion que reciba un nombre y le de la bienvenida por consola --> Bienvenido Pepe
function welcome(name) {
    console.log(`Bienvenido ${name}`);
}


//Crear una funcion que recibiendo un nombre, un apellido y una edad devuelva un objeto con esas propiedades --> {name:"Pepe",apellido:"Perez",edad:34}
function createPerson(name, lastName, age) {
    return {
        name: name,
        last_name:lastName,
        age:age
    }
}


//Crear una funcion que reciba una edad y que dependiendo de si es mayor de 18 o no, te retorne "Es mayor de edad" o "No es mayor de edad"
const prompt = require('prompt-sync')();
let age = parseInt(prompt("Ingrese su edad"));

function isAdult(age) {
    if (age >= 18) {
        return "Es mayor de edad";
    } else {
        return "No es mayor de edad";
    }
}
console.log(isAdult(age));
/**
* Crear una función que tome como argumento la hora del día (en horas)
* y retorne un saludo adecuado ("Buenos días", "Buenas tardes", "Buenas noches").
* Teniendo en cuenta que antes de las 12 es "buenos dias" y mas tarde de las 20 es buenas noches
*/

function say_hello_time(time)
{
    if (time < 12 && time > 0)
    {
        console.log("Buenos dias");
    } 
    else if (time >= 12 && time <= 20)
    {
        console.log("Buenas tardes");
    }
    else if (time > 20 && time <= 24)
    {
        console.log("Buenas noches");
    }
}

function getCurrentHour()
{
    const date = new Date();
    const hour = date.getHours();
    say_hello_time(hour);
}

getCurrentHour();

// * Crear una funcion que convierta la temperatura de Celsius a Fahrenheit y viceversa. La funcion recibe dos argumentos:
// * el valor de la temperatura y la escala ("C" para Celsius y "F" para Fahrenheit) y
// * rentorna la temperatura convertida en la otra escala
// * Tendiendo en cuenta que:
// * Formula para convertir Celsius a Fahrenheit --> F = (C * 5/9) + 32
// * Formula para convertir Fahrenheit a Celsius --> C = (F -32) * 5/9
function convertTemperature(temperature, scale) {
    if (isNaN(temperature))
    {
        if (scale === "C") {
            // Convert Celsius to Fahrenheit
            return (temperature * 9/5) + 32;
        } else if (scale === "F") {
            // Convert Fahrenheit to Celsius
            return (temperature - 32) * 5/9;
        } else {
            console.log("Invalid scale. Please provide 'C' for Celsius or 'F' for Fahrenheit.");
        }
    }
    else
    {
        console.log("Invalid temperature. Please provide a number.");
    }
}


