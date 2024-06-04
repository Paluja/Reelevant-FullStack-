const container = document.querySelector('#results');
const options = {
	method: 'GET',
	headers: {
		'app-id': '6655bc199d926479175f28c2'
	}
};
document.addEventListener('DOMContentLoaded', async () =>{
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');
    
    if (userId){
        try {
            //lo de la pregunta por asi decirlo seria como para filtrar los datos al traerlos
            //sin pregunta seria como hacer un nuevo fetch
            const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}`, options);
            if(!response.ok)
                throw new Error("Error al obtener los datos");
            const result = await response.json();
            console.log ((result));
            showDetails(result);
        } catch (error) {
            console.error(error);
        }
        getPosts(userId);
    }
});


const getPosts = async (userId)  =>{
    try{
        const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}/post`, options); 
        if(!response.ok)
            throw new Error("Error al obtener los datos");
        const result = await response.json();
        console.log(result.data);
        showPosts(result.data);
    } catch {
        console.error(error);
    }
}

const showDetails = (result) =>{
    const userDiv = document.createElement('div');
    const userInfo = document.createElement('div');
    userDiv.classList.add('user-details');
    userInfo.classList.add('user-info');
    
    const name = document.createElement('h2');
    name.textContent = result.firstName + ' ' + result.lastName;

    const email = document.createElement('p');
    email.textContent = 'Email: ' +result.email;

    const gender = document.createElement('p');
    gender.textContent = 'Gender: ' + result.gender;

    const phone = document.createElement('p');
    phone.textContent = 'Phone' + result.phone;

    const location = document.createElement('p');
    location.textContent = `Localización: ${result.location.street} - ${result.location.city } - 
                            ${result.location.state} - ${result.location.country}`;
    const img = document.createElement('img');
    img.src = result.picture;

    userInfo.appendChild(name);
    userInfo.appendChild(email);
    userInfo.appendChild(gender);
    userInfo.appendChild(phone);
    userInfo.appendChild(location);
    
    userDiv.appendChild(userInfo);
    userDiv.appendChild(img);

    container.appendChild(userDiv);
}

const showPosts = (result) =>{
    const postsContainer = document.createElement('div');
    postsContainer.classList.add('posts-container');
    result.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-bx');

        
        const title = document.createElement('h3');
        title.textContent = post.text;

        const img = document.createElement('img');
        img.src = post.image;

        const likes = document.createElement('p');
        likes.textContent = 'Likes: ' + post.likes;

        const tags = document.createElement('p');
        tags.textContent = 'Tags: ' + post.tags;

        const date = document.createElement('p');
        date.textContent = 'Date: ' + post.publishDate;

        postDiv.appendChild(title);
        postDiv.appendChild(img);
        postDiv.appendChild(likes);
        postDiv.appendChild(tags);
        postDiv.appendChild(date);

        postsContainer.appendChild(postDiv);
    });
    container.appendChild(postsContainer);
}