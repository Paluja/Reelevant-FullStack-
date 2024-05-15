const container = document.querySelector(".container");
const buttonShow = document.querySelector(".button-show");
const buttonHide = document.querySelector(".button-hide");

buttonShow.addEventListener("click", function (){
    container.classList.add("show")
    container.classList.remove("hide");
})

buttonHide.addEventListener("click", function(){
    container.classList.remove("show");
    container.classList.add("hide");
})