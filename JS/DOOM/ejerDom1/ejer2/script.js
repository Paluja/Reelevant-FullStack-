// Ejercicio 2:
// Crea una lista de elementos (<ul>) con varios <li>.
// Al pasar el mouse por un elemento de la lista, cambia su color de fondo.
// Al quitar el mouse, vuelve al color original

const list = document.querySelectorAll("#list li");
console.log(list)

list.forEach(element => {
    let OgColor = element.style.backgroundColor;
    element.addEventListener("mouseenter",()=>{
        element.style.backgroundColor = "purple";
    })
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor = OgColor;
    })
});