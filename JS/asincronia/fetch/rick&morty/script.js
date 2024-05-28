let characters = []
// Dentro de la funcion fetch hacemos la solicitud a la API de Rick and Morty
// luego a los datos guardados le asignamos una funcion asincrona para que se ejecute
// nada mas llegan los datos, despues esa funcion podremos volverla a llamar con los
//datos que queramos filtrar y se nos mostran confome a esos datos 
const getcharacter = async () => {
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if(!response.ok)
            throw new Error("Error al obtener los datos");
        const data = await response.json();
        characters = data.results;
        showCharacters(characters); // Llamamos a la función que muestra los personajes
    } catch(error) {
        console.error('Hubo un problema con la solicitud fetch: ', error);
    }
}

const filterCharacters = (filter) => { // Función que filtra los personajes
    const filteredCharacters = characters.filter(obj => {
        return obj.name.toLowerCase().includes(filter);
    });
    console.log(filteredCharacters);
    return filteredCharacters;
}   

document.querySelector("#search").addEventListener("input", (e) => { // Evento que se dispara al escribir en el input
    const filter = e.target.value.toLowerCase().trim();
    console.log(filter);
    if (filter != "") {
        const filteredCharacters = filterCharacters(filter);
        showCharacters(filteredCharacters);
    } else {
        showCharacters(characters);
    }
});

const showCharacters = (characters) => {
    const container = document.querySelector('#characters');
    container.innerHTML = '';
    
    
    characters.forEach(obj => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');

        const name = document.createElement('h2');
        name.textContent = obj.name;
        
        const status = document.createElement('p');
        status.textContent = `Status: ${obj.status}`;
        
        const species = document.createElement('p');
        species.textContent = `Species: ${obj.species}`;
        
        const location = document.createElement('p');
        location.textContent = `Location: ${obj.location.name}`;

        const img = document.createElement('img');
        img.src = obj.image;

        characterDiv.appendChild(name);
        characterDiv.appendChild(status);
        characterDiv.appendChild(species);
        characterDiv.appendChild(location);
        characterDiv.appendChild(img);
        characterDiv.addEventListener('click', () => {
            window.location.href = `detail.html?id=${obj.id}`;
        });
        container.appendChild(characterDiv);
    });
};


document.addEventListener('DOMContentLoaded', getcharacter);