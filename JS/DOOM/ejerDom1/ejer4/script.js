// Ejercicio 4:
// Crea un texto o párrafo que indique algo, como "Doble clic para cambiar estilo".
// Al hacer doble clic, cambia el estilo del elemento (color de fondo, color de texto, etc.).
// Usa una variable boolean o clase para alternar entre dos estilos diferentes.

const p = document.querySelector("p");
let isClicked = false

function getRandomColor() {
    const getByte = () => 255 * Math.random();
    const color = `rgb(${getByte()},${getByte()},${getByte()})`;
    return color;
}

p.addEventListener("dblclick",()=>{
    if(!isClicked){
        p.style.backgroundColor = getRandomColor();
        return(isClicked = true);
    }else{
        p.style.backgroundColor = ""
        return(isClicked = false);
    }
})