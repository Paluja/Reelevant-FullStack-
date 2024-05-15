const wrapper = document.querySelector("#wrapper")
const title = document.querySelector(".title");
const link = document.querySelector(".link.bold");
const inputNumber = document.querySelector('[type=number]');

console.dir(wrapper)

const userName = prompt("Introduce tu nombre");
title.textContent = `Hola Bienvenido al Dom ${userName} klk`;

const img = document.querySelector('[data-identificador="img"]');
const figcaption = document.querySelector("figcaption");

console.log(img.attributes);
img.src = "https://gaming-cdn.com/images/products/731/screenshot/lego-lord-of-the-rings-pc-juego-steam-wallpaper-1.jpg?v=1662555958"

figcaption.textContent = img.dataset.textoMostrar;