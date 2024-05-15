// const button = document.getElementById("btn");
const title = document.getElementById("title");
// const text = document.getElementById("text");

// button.addEventListener("click",function(){
//     title.textContent = "Modificao";
//     text.style.backgroundColor = "#000";
//     text.style.color = "#fff";
// });

// let isClicked = false;

// button.addEventListener("click", function() {
//     if (!isClicked) {
//         title.textContent = "Modificado";
//         text.style.backgroundColor = "#000";
//         text.style.color = "#fff";
//     } else {
//         title.textContent = "Hola";
//         text.style.backgroundColor = "";
//         text.style.color = "";
//     }
//     isClicked = !isClicked;
// });




let isClicked = false;

const changeImg = (cardId,imgSrc) =>{
    let card = document.getElementById(cardId);
    let text = card.querySelector("#text");
    let img = card.querySelector("img");
    let oldTextContent = text.textContent;
    let oldImgSrc = img.src;

    if (!isClicked) {
        img.src = imgSrc;
        text.textContent = "Shrekized";
        text.style.color = "#fff";
        text.style.background.color = "green";
    } else {
        Eimg.src = oldImgSrc;
        text.textContent = oldTextContent;
        text.style.color = ""
        text.style.background.color = ""
    }
    isClicked = !isClicked;
}

let btn1 = document.getElementById("btn1");
let bnt2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click",function(){
    changeImg("card1","https://pics.filmaffinity.com/Shrek-903764423-large.jpg")
})
btn2.addEventListener("click",function(){
    changeImg("card2","https://pics.filmaffinity.com/Shrek-903764423-large.jpg")
})
btn3.addEventListener("click",function(){
    changeImg("card3","https://pics.filmaffinity.com/Shrek-903764423-large.jpg")
})

