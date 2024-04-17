
// 1- Agregar un artículo a la lista de compras.
// 2- Eliminar un artículo de la lista de compras.
// 3- Marcar un artículo como comprado.
// 4- Filtrar los artículos no comprados.

const products = [{
    id: 1,
    name: "Laptop",
    price: 1200,
    completed: false
}, {
    id: 2,
    name: "Mouse",
    price: 20,
    completed: false
}, {
    id: 3,
    name: "Keyboard",
    price: 40,
    completed: false
}, {
    id: 4,
    name: "Monitor",
    price: 200,
    completed: true
}]


console.log(`Antes del cambio`);
console.log(products);
const addProdcut = (productName) => {
    const newProduct = {
        id: products.length + 1,
        name: productName,
        price: 0,
        completed: false
    }
    products.push(newProduct);
    return products;
}
console.log("Despues del campo");
console.log(addProdcut("Chair"));


console.log(`Antes del cambio`);
console.log(products);
const removeProduct = (productName) =>{
    let index = products.findIndex(
       (product)=>product.name === productName
    );
    products.splice(index,1);
    return (products);
}
console.log("Despues del campo");
console.log(removeProduct("Chair"));



console.log(`Antes del cambio`);
console.log(products);
const buyedProduct = (productName) =>{
    let index = products.findIndex(
        (product) => product.name == productName
    );
    products[index].completed = true;
    return(products);
}
console.log("Despues del cambio");
console.log(buyedProduct("Laptop"));


const findProduct = (productName) =>{
    let product = products.filter(
        (product) =>product.completed == false
    );
    return(product);
}
console.log("Producto comprado");
console.log(findProduct("Laptop"));

//Imagina que estás construyendo una aplicación para gestionar una lista de tareas.
//Implementaremos las sihuentes funciones
/*
    Agregar una tarea a la lista.
    Eliminar una tarea de la lista.
    Encontrar una tarea específica en la lista.
    Filtrar las tareas completadas.
*/