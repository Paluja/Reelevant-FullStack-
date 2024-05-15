
const hiddenContainer = document.querySelectorAll(".hidden");
const addForm = document.querySelector('#form1');
const taskForm = document.querySelector("#form2");
const selectPj = document.querySelector("#select-pj");
const selectPoints = document.querySelector("#select-points");
const taskList = document.querySelector("#task-list");


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
        hiddenContainer[0].classList.remove("hidden"); 
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
    }
    taskForm.reset();
})

const addTask = (task,pjSelected,pointsSelected)=>{
    const li = document.createElement("li");
    const pj = document.createElement("span");
    const points = document.createElement("span");
    
    pj.textContent = pjSelected;
    li.appendChild(pj);
    li.append(task);
    points.textContent = pointsSelected;
    li.appendChild(points);
    taskList.appendChild(li);
}


const addMember = (member)=>{
    const pj = document.createElement("option");
    pj.textContent = member;
    pj.value = member;
    selectPj.appendChild(pj);
}