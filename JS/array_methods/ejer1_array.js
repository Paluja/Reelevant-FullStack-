//Imagina que estás construyendo una aplicación para gestionar una lista de tareas.
//Implementaremos las sihuentes funciones
/*
    Agregar una tarea a la lista.
    Eliminar una tarea de la lista.
    Encontrar una tarea específica en la lista.
    Filtrar las tareas completadas.
*/

const tasks = [
    {
        id: 1,
        name: "Buy groceries",
        completed: false
    },
    {
        id: 2,
        name: "Do homework",
        completed: true
    },
    {
        id: 3,
        name: "Clean the house",
        completed: false
    },
    {
        id: 4,
        name: "Walk the dog",
        completed: false
    }
];

const addTask = (taskName) => {
    const newTask = {
        id: tasks.length + 1,
        name: taskName,
        completed: false
    }
    tasks.push(newTask);
    return tasks;
}

const removeTask = (taskName) => {
    let index = tasks.findIndex(
        (task) => task.name = taskName
    );
    tasks.splice(index,1);
    return tasks;
}

const findTask = (taskName) => {
    let task = tasks.filter(
        (task) => task.name = taskName
    );
    return task
}

const completedTasks = (taskName) => {
    let task = tasks.filter(
        (task) => task.completed = true
    );
    return task
}