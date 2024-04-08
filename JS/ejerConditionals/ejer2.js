//definir una funcion para determinar el mayor de tres numeros ingresados por consola
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));



function getGreaterNumber(num1, num2, num3)
{
    if (num1 > num2 && num1 > num3)
    {
        console.log("El numero mayor es: " + num1);
    }
    else if (num2 > num1 && num2 > num3)
    {
        console.log("El numero mayor es: " + num2);
    }
    else if (num3 > num1 && num3 > num2)
    {
        console.log("El numero mayor es: " + num3);
    }
    else
    {
        console.log("Los numeros son iguales");
    }
}
getGreaterNumber(num1, num2, num3);