
const hiddenContainer = document.querySelectorAll(".hidden");
const addForm = document.querySelector('#form1');
const taskForm = document.querySelector("#form2");
const selectPj = document.querySelector("#select-pj");
const selectPoints = document.querySelector("#select-points");
const taskList = document.querySelector("#task-list");
const scoreList = document.querySelector("#score-list");
const pjs = [];

addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let input = addForm.querySelector("input");
    let member = input.value;
    const isAlphabet = /^[a-zA-Z\s]+$/.test(member);

    if (!isAlphabet|| member.trim() === ""){
        alert("Introduced value is not a string");
        return;
    } else {
        addMember(member);
        hiddenContainer[1].classList.remove("hidden"); 
    }
    addForm.reset();
})



taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let input = taskForm.querySelector("input");
    let task = input.value;
    let pjSelected = selectPj.value;
    let pointsSelected = selectPoints.value;
    const isAlphabet = /^[a-zA-Z\s]+$/.test(task);

    if (!isAlphabet || task.trim() === ""){
        alert("Introduced value is not a string");
        return;
    } else {
        addTask(task,pjSelected,pointsSelected);
        hiddenContainer[1].classList.remove("hidden");
        hiddenContainer[0].classList.remove("hidden");
    }
    taskForm.reset();
})

const addTask = (task,pjSelected,pointsSelected)=>{
    const li = document.createElement("li");
    const pj = document.createElement("span");
    const points = document.createElement("span");
    
    //aniadir el pj a la tarea
    pj.className = "pj";
    pj.textContent = pjSelected + " - ";
    li.appendChild(pj);
    //aniadir la tarea a la lista
    li.append(task);
    //aniadir los puntos a la tarea
    points.className = "points";
    points.textContent = pointsSelected;
    li.appendChild(points);
    const pjObj = createObject(pjSelected);
    addToArray(pjs,pjObj);
    //eventListener para acabar la tarea
    li.addEventListener("dblclick",(e)=>{
        hiddenContainer[2].classList.remove("hidden"); 
        li.classList.add("done");
        removeTask(scoreList,pjSelected,pointsSelected);
    });
    
    //aniadir la tarea a la lista
    taskList.appendChild(li);

}

const removeTask = (scoreList,pjSelected,pointsSelected)=>{
    const score = document.createElement("li");
    const pj = document.createElement("span");
    const points = document.createElement("span");

    pj.className = "pj";
    pj.textContent = pjSelected + " - ";
    score.appendChild(pj);
    
    points.className = "points";
    points.textContent = pointsSelected;
    score.appendChild(points);

    scoreList.appendChild(score);
}

const addMember = (member)=>{
    const pj = document.createElement("option");
    pj.textContent = member;
    pj.value = member;
    selectPj.appendChild(pj);
}

const createObject = (pj)=>{
    const pj = {
        pj: pj,
        score: 0
    }
    pjs.push(pj);
}



const addToArray = (inventory,product) =>{
    if ((product != undefined || product != null) && findPj(inventory,product))
        inventory.push(product);
    else{
        console.log("No se pudo añadir el producto vacio");
        return null;
    }
    
}

const findPj = (pjArray,pj)=>{
    const pj = pjArray.find(
        (pj) => pj.pj === pj
    )
    if (pj == undefined) {
        console.log("Personaje no encontrado");
        return (false);
    } 
    console.log("Personaje encontrado con exito");
    return (true);
}