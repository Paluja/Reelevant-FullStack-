let contenedor = document.getElementById('contenedor');
let btnAdd = document.getElementById('btnAdd');
let btnRemove = document.getElementById('btnRemove');

btnAdd.addEventListener("click", () => {
    let newP = document.createElement('p');
    let randomNumber = Math.floor(Math.random() * 1000);
    newP.textContent = `Parrago numero: ${randomNumber}`;
    contenedor.appendChild(newP);
    addEvent(newP);

});


btnRemove.addEventListener("click", () => {
    if(contenedor.lastElementChild){
        contenedor.removeChild(contenedor.lastElementChild);
    } else{
        console.log("no hay elementos");
    }
})

const addEvent = (element) => {
    element.addEventListener("dblclick",()=>{
        element.remove();
    })
}




let btnReplace = document.getElementById('btnReplace');