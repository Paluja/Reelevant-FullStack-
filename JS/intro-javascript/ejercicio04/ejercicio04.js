/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

function sumOrMultiply(a,b,c) {
    if (isNaN(a) && isNaN(b) && isNaN(c))
    {
        if (a < 0) {
            return(a*b*c);
        } else {
            return(a+b+c);
        }
    }
    else
    {
        console.log("Los tres tienen que ser numeros, cabezon");
    }
}

module.exports = { sumOrMultiply };
