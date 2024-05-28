let city = '';
const btn = document.querySelector('button');
const container = document.querySelector('#result');
const getCity = () => {
    const input = document.querySelector('#city');
    city = input.value;
}

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a35a6b82bcmshf508d3f4e137b49p1b3a49jsn9e6e0dbe554e',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

const getWeather = async () => {
    try {
    	const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/EN`, options);
    	if(!response.ok)
            throw new Error("Error al obtener los datos");
        const result = await response.json();
        const weather = result.weather[0];
        const main = result.main;
        console.log(result);
        showWeather(result, weather, main);
    } catch (error) {
    	console.error(error);
    }
}




const showWeather = (result, weather, main) => {
    const container = document.querySelector('#result');
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather');

    const city = document.createElement('h2');
    city.textContent = `Weather in ${result.name}`;

    const temp = document.createElement('p');
    temp.textContent = `Temperature: ${main.temp} °C`;

    const feelsLike = document.createElement('p');
    feelsLike.textContent = `Feels like: ${main.feels_like} °C`;

    const weatherDesc = document.createElement('p');
    weatherDesc.textContent = `Weather: ${weather.description}`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${main.humidity} %`;

    const pressure = document.createElement('p');
    pressure.textContent = `Pressure: ${main.pressure} hPa`;

    weatherDiv.appendChild(city);
    weatherDiv.appendChild(temp);
    weatherDiv.appendChild(feelsLike);
    weatherDiv.appendChild(weatherDesc);
    weatherDiv.appendChild(humidity);
    weatherDiv.appendChild(pressure);

    container.appendChild(weatherDiv);
}

btn.addEventListener('click', () => {
    getCity();
    container.innerHTML = '';
    getWeather();
});

document.addEventListener('DOMContentLoaded', getWeather);