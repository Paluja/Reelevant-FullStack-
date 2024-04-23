let inventory = []
const createProduct = (name,price,amount) =>{
    let product = 
        {
            name:name,
            price:price,
            amount:amount
        }
    
    return(product)
};


// const addProduct = (inventory,product) => {
//     if (product){
//         inventory.push(product);
//         console.log("Producto anyiadido con exito");
//     } else{
//         console.log("No nay ningun producto que anyiadir");
//     }
// }

const addProduct = (inventory,product) =>{
    let i = 0;
    if(product){
        while (i < inventory.length) {
            i++;
        }
        inventory[i] = product;
    }
    else{
        return null;
    }
}

addProduct(inventory,createProduct("Baston",1000,1));
addProduct(inventory,createProduct("Silla",150,6));
addProduct(inventory,createProduct("Escritorio",200,5));
addProduct(inventory,createProduct("Multiplicador",5,15));
addProduct(null);

console.log(inventory);

const findProduct = (inventory,nameProduct) =>{
    let product = {};
    for (let i = 0; i < inventory.length; i++) {
        if(inventory[i].name === nameProduct){
            product = inventory[i];
            return(product)
        }
    }
    console.log("Producto no encontrado");
    return (null);
}
console.log(findProduct(inventory,"si"));

const delProduct = (inventory,nameProduct) => {
    let exist = false;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === nameProduct) {
            for (let j = i; j < inventory.length - 1; j++) {
              inventory[j] = inventory[j + 1];  
            }
            inventory.length = inventory.length - 1;
            exist = true;
            break;
        }
    }
    if (exist == false) {
        console.log("No se puede borrar algo que no existe");
        return(null);
    }
}

delProduct(inventory,"Baston");
console.log(inventory);



