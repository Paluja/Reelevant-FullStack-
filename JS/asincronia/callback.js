//CALLBACK --> Función que se pasa como argumento a otra función

console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000);

console.log("Fin");

//EJEMPLO DE CALLBACK --------------------------------------------------------------------------------------------------

const alarm = (callback) => {
    setTimeout(() => {
        callback();
    }, 3000);
}

const wakiWaki = () => {
    console.log("Waki Waki its time to school");
}

alarm(wakiWaki);

//EJEMPLO DE CALLBACK 2 --------------------------------------------------------------------------------------------------

const getUser = (callback) => {
    console.log("Obteniendo datos...");
    setTimeout(() => {
        const user = {
            id: 1,
            name: "Name surname"
        };
        callback(user);
    }, 2000);
}

const showUser = (user) => {
    console.log(`Hola ${user.name}`);
}

getUser(showUser);

