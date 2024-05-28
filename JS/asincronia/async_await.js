const getData = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const succes = false;
            if(succes){
                resolve("Datos obtenidos");
            } else {
                reject("Error al obtener los datos");
            }
        },2000);
    });
}

const manageData = async () => {
    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    console.log("Proceso finalizado");
}

console.log("Inicio");
manageData();


const getWeather = (city) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (city)
                resolve(`El clima de ${city} es soleado`);
            else
                reject("No se ha encontrado la ciudad");
        },3000);
    })
}

showWeather = async (city) => {
    try {
        const weather = await getWeather(city);
        console.log(weather);
    } catch (error) {
        console.log(error);
    }
}

showWeather("");