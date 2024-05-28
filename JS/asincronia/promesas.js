// Objetivo: Mostrar el uso de promesas en JS
// Las promesas son objetos que representan la terminación o el fracaso de una operación asíncrona.
// Una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.
// fetch("/releevant.txt")
//     .then((response) => {
//         console.log(response);
//         return response.text();
//     })
//     .catch((error) => {
//     console.log(error);
//     })
//     .finally(() => {
//         console.log("Proceso finalizado");
//     });

// EJEMPLO DE PROMESAS 2 --------------------------------------------------------------------------------------------------

const getData = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const succes = true;
            if(succes){
                resolve("Datos obtenidos");
            } else {
                reject("Error al obtener los datos");
            }
        },2000);
    });
}

getData()
    .then(data => console.log(data))
    .catch(error => console.log(error))