/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

function compareThreeNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num3 && num2 != num1) {
    return num2
  } else if (num3 != num1) {
    return num3
  } else {
    return 'iguales'
  }
}
console.log(compareThreeNumbers(5, 8, 2))
module.exports = { compareThreeNumbers }
