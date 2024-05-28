// Obteniendo datos de una API con fetch
const getUser = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        if(!response.ok)
            throw new Error("Error al obtener los datos");
        const data = await response.json();
        console.log("Users: ",data);
    } catch(error) {
        console.log(error);
    }
}

getUser();

const createPost = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 3,
                title: 'New post',
                body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
            })
        });
       if (!response.ok)
            throw new Error("Error al crear el post");
        
        const data = await response.json();
        console.log("Post created: ",data);
    } 
    catch(error) {
        console.log(error);
    }
}

createPost();