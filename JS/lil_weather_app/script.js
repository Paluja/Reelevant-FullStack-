// const fetch = require('node-fetch');
// const { parse } = require('path');


if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(position);
        getWeather(lat, lon);
    })
}


function getWeather(lat, lon) {
    const apiKey = 'be97b85044f5dbf8c0b0f2c5329ab3b6';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
        .then(response =>{
            console.log("RESPUESTA JSON");
            console.log(response.json);
            return response.json();})
        .then(data => {
            console.log("Esta es la data");
            console.log(data);
            const tempInKelvin = data.main.temp;
            const tempInCelsius = tempInKelvin - 273.15;
            console.log(`The temperature Is ${tempInCelsius} degrees Celsius.`);
        })
        .catch(error => console.error('Error:', error));
}
