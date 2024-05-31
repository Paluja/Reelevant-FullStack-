
let delOptions = {
    method: 'DELETE',
    headers: {
        'app-id': '6655bc199d926479175f28c2'
    }
};

const getUserOptions = {
	method: 'GET',
	headers: {
		'app-id': '6655bc199d926479175f28c2'
	}
};
// const editOptions = {
//     method: 'PUT',
//     headers: {
//         'app-id': '6655bc199d926479175f28c2',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
// };

const getUsers = async () => {
    try {
    	const response = await fetch('https://dummyapi.io/data/v1/user?limit=10', getUserOptions);
    	if(!response.ok)
            throw new Error("Error al obtener los datos");
        const result = await response.json();
        console.log(result.data);
        showUsers(result.data);
    } catch (error) {
    	console.error(error);
    }
}

const deleteUser = async (userId) => {
    try {
        const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}`, delOptions);
        if(!response.ok)
            throw new Error("Error al eliminar los datos");
        getUsers();
    } catch (error) {
        console.error(error);
    }
}

// const editUser = async (userId) => {
//     try {
//         const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}`, editOptions);
//         if(!response.ok)
//             throw new Error("Error al editar los datos");
//         getUsers();
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

const showUsers = (result) => {
    const container = document.querySelector('#results');
    const hiddenContainers = document.querySelectorAll('.hidden');
    container.innerHTML = '';
    result.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const name = document.createElement('h2');
        name.textContent = user.firstName + ' ' + user.lastName;

        const img = document.createElement('img');
        img.src = user.picture;
        
        const btnCont = document.createElement('div');
        btnCont.classList.add('btn-container');

        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnCont.appendChild(btnEdit);

        const btnDel = document.createElement('button');
        btnDel.textContent = 'Delete';
        btnCont.appendChild(btnDel);
        
        userDiv.appendChild(name);
        userDiv.appendChild(img);
        userDiv.appendChild(btnCont);
        img.addEventListener('click', () => {
            window.location.href = `details.html?id=${user.id}`;
        });

        container.appendChild(userDiv);
        btnDel.addEventListener('click', () => {
            deleteUser(user.id);
        });

        btnEdit.addEventListener('click', () => {
            showEditUser(user);
            console.log(user);
            hiddenContainers[0].classList.remove('hidden');
        });
    });
}

showEditUser = (user) => {
    const container = document.querySelector('#edit-form');
    container.innerHTML = '';
    
    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = user.title;

    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.placeholder = user.firstName;

    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.placeholder = user.lastName;

    const picture = document.createElement('input');
    picture.type = 'text';
    picture.placeholder = user.picture;

    container.appendChild(title);
    container.appendChild(firstName);
    container.appendChild(lastName);
    container.appendChild(picture);

}



document.addEventListener('DOMContentLoaded', getUsers);