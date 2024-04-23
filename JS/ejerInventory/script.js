//funcion para agregar un producto al inventario
const inventory = []
const createProduct = (name,price,amount) =>{
    let product = 
        {
            name:name,
            price:price,
            amount:amount
        }
    
    return(product)
};

const addProduct = (inventory,product) => {
    if (product){
        inventory.push(product);
        console.log("Producto anyiadido con exito");
    } else{
        console.log("No nay ningun producto que anyiadir");
    }
}
addProduct(inventory,createProduct("Baston",1000,1));
addProduct(inventory,createProduct("Silla",150,6));
addProduct(inventory,createProduct("Escritorio",200,5));
addProduct(inventory,createProduct("Multiplicador",5,15));
addProduct(null);

console.log(inventory);
const findProduct = (inventory,productName) =>{
    let find = inventory.find(
        (product) => product.name === productName
    );
    if (!find) {
        return "Producto no existente";
    }
    return(find);
}
// let tmp = inventory.findIndex((product) => product.name === "Baston");
// if(tmp >= 0){
//     console.log(tmp);
// }else{
//     console.log("no");
// }
const delProduct = (inventory,productName) =>{
    let index = inventory.findIndex(
        (product) => product.name === productName
    );
    if (index >= 0){
        inventory.splice(index,1);
    }
    else{
        console.log("Producto a borrar inexistente");
    }
}

// delProduct(inventory,"Baston");
// delProduct(inventory,"Escritorio");
// console.log(inventory);






