/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */

function sum(a, b) {
  return a + b
}

function substract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

function total(x, y) {
  let suma = sum(x, y)
  let sub = substract(x, y)
  let mult = multiply(x, y)
  let div = divide(x, y)
  return suma + sub + mult + div
}

module.exports = { sum, substract, multiply, divide, total }
