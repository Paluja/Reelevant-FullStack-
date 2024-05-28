document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('id');

    if (characterId){
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
            if (!response.ok){
                throw new Error("Error al obtener los datos");
            }
            const character = await response.json();
            console.log(character);
            showDetails(character);
        }
        catch(error){
            console.error("Problema con el fetch makina",error);
        }
    }
});

const showDetails = (character)=>{
    const characterName = document.querySelectorAll('.character-name');
    const characterDetails = document.getElementById('character-detail');
    
    characterName.forEach(name => 
        name.textContent = `Detalles de ${character.name}`);

    const name = document.createElement('h2');
    name.textContent = character.name;

    const status = document.createElement('p');
    status.textContent = `Status: ${character.status}`;
    
    const species = document.createElement('p');
    species.textContent = `Species: ${character.species}`;
    
    const gender = document.createElement('p');
    gender.textContent = `Gender: ${character.gender}`;
    
    const origin = document.createElement('p');
    origin.textContent = `Origin: ${character.origin.name}`;
    
    const location = document.createElement('p');
    location.textContent = `Location: ${character.location.name}`;    
    
    const img = document.createElement('img');
    img.src = character.image;    

    characterDetails.appendChild(name);
    characterDetails.appendChild(status);
    characterDetails.appendChild(species);
    characterDetails.appendChild(gender);
    characterDetails.appendChild(origin);
    characterDetails.appendChild(location);
    characterDetails.appendChild(img);
    // container.appendChild(characterDetails);
};
