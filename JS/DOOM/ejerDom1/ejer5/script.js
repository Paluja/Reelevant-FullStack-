// Ejercicio 5:
// Crea un formulario con un campo de entrada y un botón de envío.
// Al enviar el formulario, añade una nueva tarea a una lista.
// Cada tarea debe tener un botón para eliminarla.
// Al eliminar una tarea, actualiza el mensaje de la lista para indicar cuántas tareas quedan.
const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // let inputValue = input.value;
    // const newLi = document.createElement('li');
    // const btnDel = document.createElement('button');
    
    // btnDel.textContent = "X";
    // newLi.textContent = inputValue;
    
    // newLi.appendChild(btnDel);
    // list.appendChild(newLi);
    
    // btnDel.addEventListener("click",(e)=>{
    //     // btnDel.previousSibling.remove();
    //     newLi.remove();
    // })
    form.reset();
})



btn.addEventListener("click",(e)=>{
    let inputValue = input.value;
    const newLi = document.createElement('li');
    const btnDel = document.createElement('button');
    
    btnDel.textContent = "X";
    newLi.textContent = inputValue;
    
    newLi.appendChild(btnDel);
    list.appendChild(newLi);
    
    btnDel.addEventListener("click",(e)=>{
        // btnDel.previousSibling.remove();
        newLi.remove();
    })
});



