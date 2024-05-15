/*
Los eventos en JavaScript son acciones o sucesos que ocurren dentro del entorno del navegador
y que el código JavaScript puede "escuchar" para responder adecuadamente.
Los eventos son fundamentales para la interacción del usuario con la página web, 
permitiendo que se ejecuten acciones como resultado de ciertas actividades del usuario (clics,
desplazamientos, entradas de teclado, etc.) o de cambios en el DOM (carga de la página, 
errores, etc.).
*/

//Conceptos Clave sobre Eventos del DOM

//1. Evento:  Un suceso o acción que ocurre, generalmente desencadenado por la interacción del usuario o por el navegador mismo.

//2. Manejador de ecentos ( Event handler ): Una función que se ejecuta en respuesta a un evento.

//3. Propagación del evento: 
/*
Captura: El evento se propaga desde el nodo raíz hacia el elemento objetivo.
Burbujeo: El evento se propaga desde el elemento objetivo hacia arriba, a través de sus padres en el DOM.
*/

/*
Prevención de la propagación: Puedes detener la propagación de un evento usando event.stopPropagation().
Prevención de acciones por defecto: Algunos eventos tienen acciones por defecto, como enviar un formulario o seguir un enlace. Puedes evitar estas acciones usando event.preventDefault().
*/

/* EVENTOS : 
Evento de click: Se activa cuando un usuario hace clic en un elemento.
LOAD: Se activa cuando un recurso (como una imagen o la página web) se ha cargado completamente.
Evento de entrada de teclado (keydown, keyup, keypress): Se activa cuando se presiona o se libera una tecla.
Evento de cambio (change): Se activa cuando cambia el valor de un elemento de entrada (como un campo de texto o un menú desplegable).
Evento de ratón (mouseover, mouseout): Se activan cuando el ratón pasa sobre o sale de un elemento.
*/

let parrafo = document.getElementById("miParrafo");
let div = document.getElementById("miDiv");

parrafo.addEventListener("click", function(event){
    parrafo.textContext = "Se ha hecho click en el parrafo";
    event.stopPropagation();
})

div.addEventListener("click", function(){
    alert("Se ha hecho click en el DIV");
})

