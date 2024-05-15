const body = document.body;
console.log(body);

//para acceder a la lista de nodos hijos
const childNodes = document.body.childNodes;
console.log(childNodes)

//Acceder a su primer elemento hijo que seria el div con id wrapper
const wrapper = document.body.childNodes[1];
console.log(wrapper);

//Si queremso saber cuales son sus hijos accederemos a su porpiedad con childNodes

const wrapperChildrens = document.body.childNodes[3].childNodes;
console.log(wrapperChildrens);

//Para eliminar los casos nulos y vacios
const bodyChilds = document.body.children;
console.log(bodyChilds);


//Accedemos al wrapper
const elementBodyFirstChild = document.body.children[0];
console.log(elementBodyFirstChild)

//buscamos el hermano de elementBodyFirstChild(wrapper)
const div = elementBodyFirstChild.children[1];

console.log(div.nextElementSibling);


const anchor = div.children[0];
const h1 = div.previousElementsSibling;




const links = document.getElementById("link");
console.log(links);


const divs = document.getElementsByTagName("div");
console.log(divs);


const input = document.getElementsByName("telefono");
console.log(input);

