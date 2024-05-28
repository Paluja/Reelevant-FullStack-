const options = {
	method: 'GET',
	headers: {
		'app-id': '6655bc199d926479175f28c2'
	}
};

const getUsers = async () => {
    try {
    	const response = await fetch('https://dummyapi.io/data/v1/user?limit=10', options);
    	if(!response.ok)
            throw new Error("Error al obtener los datos");
        const result = await response.json();
        showUsers(result);
    } catch (error) {
    	console.error(error);
    }
}

const showUsers = (result) => {
    const container = document.querySelector('#results');
    result.data.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const name = document.createElement('h2');
        name.textContent = user.firstName + ' ' + user.lastName;

        const img = document.createElement('img');
        img.src = user.picture;
        
        const btnCont = document.createElement('div');
        btnCont.classList.add('btn-container');

        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        btnCont.appendChild(edit);

        const del = document.createElement('button');
        del.textContent = 'Delete';
        btnCont.appendChild(del);
````````````````
        userDiv.appendChild(name);
        userDiv.appendChild(img);
        userDiv.appendChild(btnCont);

        container.appendChild(userDiv);
    });
}

document.addEventListener('DOMContentLoaded', getUsers);