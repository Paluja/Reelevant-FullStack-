// Ejercicio 1:
// Crea un elemento <div> en la página con algún texto (por ejemplo, "Haz clic en mí").
// Al hacer clic en este <div>, cambia su color de fondo y su color de texto.
// Si se hace clic nuevamente, restaura sus colores originales.
const div = document.getElementById("colorsChange");
let isClicked = false;

div.addEventListener("click",()=>{
    if (!isClicked){
        div.style.color = "white";
        div.style.backgroundColor = "purple";
        return (isClicked = true);
    } else {
        div.style.color = "black";
        div.style.backgroundColor = "white";
        return (isClicked =false );
    }
});