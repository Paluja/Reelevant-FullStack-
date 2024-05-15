const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id= "name"]');
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');
const section = document.querySelector(".section");
const form = document.querySelector("#miForm");

form.addEventListener("submit", function(e){
    e.preventDefault();
})

input.addEventListener("change", function (e) {
    changeUser.textContent = e.target.value;
});

function controladorEvento(){
    const name = prompt("como te llamas?");
    alert(`Hola ${name}`);
}

buttonShow.onclick = controladorEvento;
buttonShow.onclick = null;

buttonShow.addEventListener("click",controladorEvento);

function showSection(){
    wrapper.className = "show"
}
function hideSection(){
    wrapper.className = "hide"
}

buttonShow.addEventListener("click",showSection)
buttonHide.addEventListener("click",hideSection)

//Cambia solo el el emento en el que clickamos dentro del wrapper
wrapper.addEventListener("click",function(e){
    console.log(e.target);
    e.target.style.backgroundColor = "red"
})


//PREGUNTAR COPILOT
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("hola");
})

form.onsubmit = function(){
    console.log("datos enviados");
    return false;
};
////////////////////////////////////////


function showSection2(e){
    e.preventDefault();
    wrapper.className = "show"
    this.textContent = "me han cambiado el texto";
}

buttonShow.addEventListener("click",showSection2);
buttonShow.removeEventListener("click",showSection2);