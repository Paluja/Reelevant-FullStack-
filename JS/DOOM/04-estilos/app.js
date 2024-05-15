const title = document.querySelector(".title");
const inputColor = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range"]');

/**
 * CSSOM --> CSS Object Model
 * Que es la manera de representar css como objeto, esto nos permite
 * modificar el css de nuestro proyecto. Para poder obtener o declarar un
 * estilo en css tenemos la propiedad style. Es un objeto que podemos obtener
 * un estilo o determinar un estilo. Esta propiedad determina los estilos en
 * linea.
 *
 * Por ejemplo vamos a ir a title.style y vamos a pasar ese valor por consola.
 * Esto nos retorna todas las propiedades existentes de css.
 *
 * Aunque el title tiene estilos no aparecen porque solo muestra los estilos
 * en linea.
 * Hay que tener en cuenta que los estilos en linea van a romper la especificidad.
 * --- Añadimos un estilo en linea para el color en el html. ---
 *
 * Este objeto (style) tiene una caracteristica, que sus propiedades van en camelCase
 */
console.log(title.style.color);

title.style.fontFamily = "cursive";
title.style.fontSize = "4rem";
title.style.color = "darkgreen";

/**
 * Si vamos al elemento vemos q tiene una propiedad style con los estilos q agregue arriba. Para obtener los
 * estilos de un elemento del objeto style solo tengo q hacerle un log a title.style.fontFamily x ej.
 * Y si quiero crear una custom property lo hariamos de la siguiente forma:
 */

title.style.color = "var(--color-title)";

/**
 * Le vamos a poner una custom property a documentElement que es el html con el metodo setProperty.
 * Es otra manera de agregar estilos al objeto style.Su primer valor sera la propiedad que queremos agregar.
 */

document.documentElement.style.setProperty("--color-title", "hotpink");


/**
 * Si quisieramos eliminar un estilo en linea de un elemento hay 3 maneras:
 *
 * Antes de eso veamos que en el title estan los stylos en linea y q el html tiene la custom property css
 *
 */

console.log(title.style); // Ver los estilos en lineas y la custom property

title.style.removeProperty("font-family");
title.style.color = "";
title.setAttribute("style", "") //esta elimina todos los estilos en linea

//Borramos o comentamos todo lo anterior

inputColor.addEventListener("change", function(e){
    const newColor = e.target.value
    console.log(newColor);
    title.style.color = newColor;
})

inputRange.addEventListener("change", function(e){
    const newFontSize = e.target.value; //me da el tamaño del fontsize pero en valor absoluto, hay q añadir px

    title.style.setProperty("font-size", newFontSize + "px", "important"); //alternativa a la linea 63

    /**
   * getPropertyPriority nos ayuda a saber si un elemento tiene una propiedad important
   */
    console.log(title.style.getPropertyPriority("font-size"));
})

/**
 * El objeto style tiene metodos q nos permiten manipular sus estilos de una manera mas sencilla,
 * con el metodo getPropertyValue()
 */

console.log(title.style.getPropertyValue("font-family"));

/**
 * getComputedStyle retorna los estilos finales o valores computados de un elemento sin importar
 * si estos son estilos en linea o de css.
 * Añadimos un bgcolor al css de title para ver luego x consola su valor
 */

console.log(getComputedStyle(title).background);


/**
 * Lo que retorna es el valor final q se le añade a title, bgcolor es una propiedad del shorthand bg
 * Si copiamos lo q tenemos en la consola en la propiedad background tendremos lo mismo, xq eso es
 * su valor final o computado.
 */

const titleStyle = getComputedStyle(title); //añadimos un color al title en css y nos da un rgb como valor final
console.log(titleStyle.color);
console.log(titleStyle.fontSize); //me lo va a dar en px xq es su valor final

const estilosTitle = getComputedStyle(title, "::after"); //creamos un pseudo elemento en css

/**
 * El primer parametro se utiliza para especificar al elemento de referencia y el segundo para el
 * pseudo elemento. Tenemos los estilos de un pseudo elemento con el codigo de arriba.
 *
 * Puedo obtener el contenido de este pseudo elemento o puedo utilizar el metodo getPropertyValue
 */

console.log(estilosTitle.content);

console.log(estilosTitle.getPropertyValue("margin"));
