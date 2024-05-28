const getUser = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok)
            throw new Error("Error al obtener los datos");
        const users = await response.json();
        showUsers(users);
    } catch(error) {
        console.error('Hubo un problema con la solicitud fetch: ', error);
    }
}


const showUsers = (users) => {
    const container = document.querySelector('#users');
    users.forEach(obj => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const name = document.createElement('h2');
        name.textContent = obj.name;
        
        const email = document.createElement('p');
        email.textContent = `email: ${obj.email}`;
        
        const tlf = document.createElement('p');
        tlf.textContent = `tlf: ${obj.phone}`;
        
        const addres = document.createElement('p');
        addres.textContent = `Addres: ${obj.address.street} ${obj.address.suite} ${obj.address.city} ${obj.address.zipcode}`;

        const company = document.createElement('p');
        company.textContent = `Company: ${obj.company.name} ${obj.company.bs} `;
 

        userDiv.appendChild(name);
        userDiv.appendChild(email);
        userDiv.appendChild(tlf);
        userDiv.appendChild(addres);
        userDiv.appendChild(company);

        container.appendChild(userDiv);
    });
};


document.addEventListener('DOMContentLoaded', getUser);