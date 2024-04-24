// Crear producto con id, nombre,cantidad, precio

let inventory = [];

const createProduct = (id, name, quantity, price) => {
    if (!Number.isInteger(id) || (!Number.isInteger(quantity) && quantity >= 0)
        ||isNaN(price) || typeof name !== 'string') {
        console.log('Error: bad arguments');
        return;
    }
    let product = {
        id: id,
        name: name,
        quantity: quantity,
        price: price
    }
    console.log("Producto creado con exito");
    return(product);
}

createProduct();
createProduct(2, "Fanta", 10, 1.7);
createProduct(3, "Sprite", 10, 1.3);
createProduct(4, "Agua", 10, 0.5);
console.log(createProduct(5, "Cerveza", 10, 1.0));

// funcion para añadir producto al inventario

const addProduct = (inventory,product) =>{
    if (product != undefined || product != null) {
        inventory.push(product);
    }
    else{
        console.log("No se pudo añadir el producto vacio");
        return null;
    }
    
}
console.log("--------------------Adicion de productos------------------------");
addProduct(inventory,createProduct());
addProduct(inventory,createProduct(2, "Fanta", 0, 1.7));
addProduct(inventory,createProduct(3, "Sprite", 4, 1.3));
addProduct(inventory,createProduct(4, "Agua", 5, 0.5));
addProduct(inventory,createProduct(5, "Cerveza", 10, 1.0));
console.log(inventory);
console.log("------------------------------------------------------------------");
// buscar producto por id

const findProductById = (inventory,productId)=>{
    const product = inventory.find(
        (prodcut) => prodcut.id === productId
    )
    if (product == undefined) {
        console.log("Producto no encontrado");
        return null;
    } 
    console.log("Producto encontrado con exito");
    return (product);
}
console.log("------------FindProduct---------------")
console.log(findProductById(inventory,2));
console.log("------------------------------------------------------------------");
//eliminar producto por id
const deleteProductById = (inventory,productId) =>{
    const i = inventory.findIndex(
        (product) => product.id === productId
    );
    if (i === -1) {
        console.log("No existe el producto a eliminar");
        return null;
    }
    console.log("Producto eliminado con exito");
    inventory.splice(i,1);
}
console.log("-------------------Borrado de producto--------------------------")
deleteProductById(inventory,4);
console.log(inventory);
console.log("----------------------------------------------------------------");
//esta el produdcto dispnible
const isProductAvailable = (inventory,productId)=>{
    const product = inventory.find(
        (prodcut) => prodcut.id === productId
    )
    if (product == undefined) {
        console.log("Producto no existente");
        return null;
    }
    else if (product.quantity === 0){
        console.log("Producto fuera de stock");
        return false;
    }
    console.log(`Producto disponible con stock: ${product.quantity}`);
    return (true);
}
console.log("--------------------------Buscar disponibilidad---------------------------");
console.log(inventory);
console.log(isProductAvailable(inventory,2));
console.log(isProductAvailable(inventory,3));

