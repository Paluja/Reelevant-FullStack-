let user = {};

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


const getUsers = async () => {
    try {
    	const response = await fetch('https://dummyapi.io/data/v1/user?limit=10', getUserOptions);
    	if(!response.ok)
            throw new Error("Error al obtener los datos");
        const result = await response.json();
        console.log(result.data);
        user = result.data;
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

const editUser = async (userId, user) => {
    try {
        const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}`, {
            method: 'PUT',
            headers: {
                'app-id': '6655bc199d926479175f28c2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al editar los datos: ${errorText}`);
        }
        getUsers();
    } catch (error) {
        console.error(error);
    }
}
const addUser = async (user) => {
    try {
        const response = await fetch(`https://dummyapi.io/data/v1/user/create`, {
            method: 'POST',
            headers: {
                'app-id': '6655bc199d926479175f28c2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al añadir333333 los datos: ${errorText}`);
        }
        getUsers();
    } catch (error) {
        console.error(error);
    }
}

const hiddenContainers = document.querySelectorAll('.hidden');

const showUsers = (result) => {
    const container = document.querySelector('#results');
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
            document.getElementById('title__edit__add').textContent = 'Edit User';
        });
    });
}

const showEditUser = (user) => {
    const container = document.querySelector('#edit-form');
    container.innerHTML = '';

    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Title';
    title.value = user.title || '';

    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.placeholder = 'First Name';
    firstName.value = user.firstName || '';

    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.placeholder = 'Last Name';
    lastName.value = user.lastName || '';

    const picture = document.createElement('input');
    picture.type = 'text';
    picture.placeholder = 'Picture URL';
    picture.value = user.picture || '';

    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Submit';

    container.appendChild(title);
    container.appendChild(firstName);
    container.appendChild(lastName);
    container.appendChild(picture);
    container.appendChild(btnEdit);
    
    btnEdit.addEventListener('click', () => {
      
        console.log(firstName.value, lastName.value, picture.value, title.value);       
        
        const updatedUser = {
            firstName: firstName.value,
            lastName: lastName.value,
            picture: picture.value,
            title: title.value
        };
        console.log("Updating user with data: ", updatedUser);
        editUser(user.id, updatedUser);
    });
}

const showAddUserForm = () => {

    const container = document.querySelector('#add-form');
    container.innerHTML = '';

    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Title';

    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.placeholder = 'First Name';
    firstName.attributes.required = true;
    
    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.placeholder = 'Last Name';
    lastName.attributes.required = true;

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'Email';
    email.attributes.required = true;

    const picture = document.createElement('input');
    picture.type = 'text';
    

    const btnAdd = document.createElement('button');
    btnAdd.textContent = 'Create User';

    container.appendChild(title);
    container.appendChild(firstName);
    container.appendChild(lastName);
    container.appendChild(picture);
    container.appendChild(btnEdit);

    btnAdd.addEventListener('click', () => {
        const newUser = {
            firstName: firstName.value,
            lastName: lastName.value,
            picture: picture.value,
            title: title.value
        };
        console.log("Adding user with data: ", newUser);
        addUser(newUser);
    });


}

document.getElementsByid('add-user').addEventListener('click', () => {
    // showAddUserForm();
    // document.getElementById('title__edit__add').textContent = 'Add User';
    // hiddenContainers[1].classList.remove('hidden');
});

// const updatedUser = (firstName,lastName,picture,title) =>{
//     const user = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//         picture: picture.value,
//         title: title.value
//     }
//     return user;
// }


document.addEventListener('DOMContentLoaded', getUsers);