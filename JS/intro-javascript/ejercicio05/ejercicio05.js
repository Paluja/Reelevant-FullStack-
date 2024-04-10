/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */

function determinarTipoNumero() {
    if (isNaN(num)) {
        if (num > 0) 
        {
            return("Negativo");
        }
        if (num < 0) 
        {
            return("Positivo");
        }
        else
        {
            return("Nulo");
        }
    } else {
        return("Introduce un numero anda");
    }
}

module.exports = { determinarTipoNumero };
