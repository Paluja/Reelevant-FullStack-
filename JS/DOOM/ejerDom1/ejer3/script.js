// Ejercicio 3:
// Crea un botón que diga "Hacer algo".
// Cuando se hace clic en el botón, cambia su texto a "Hecho".
// Si se vuelve a hacer clic, restaura el texto original.

const btn = document.getElementById("btn");
const OgText = btn.textContent;
let isClicked = false;

btn.addEventListener("click",()=>{
    if(!isClicked){
        btn.textContent = "NO";
        return(isClicked = true);
    }else{
        btn.textContent = OgText;
        return(isClicked = false);
    }
})