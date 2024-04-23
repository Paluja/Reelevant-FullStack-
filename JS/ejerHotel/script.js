// CreateRoom(number,type) --> Crea el obj habitacion

const crateRoom = (number, type) => {
    return {
        number:number,
        type:type,
        isBooked:false
    }
}

// CreateRooms(rooms) --> se le pasa un array de tipos de habitaciones
// y esta crea una lista que se le aplica el numero autoincrementado

let roomsType=["simple","doble","suite","simple","doble","suite","simple","doble","suite","simple","doble","suite"];
const createRooms = (roomsType) => {
    let rooms = [];
    let i = 0;
    roomsType.forEach(element => {
        rooms.push(crateRoom(i,element));
        i++;
    });
    return(rooms);
}

let habitaculos = createRooms(roomsType);
console.log("----------------------------------------");
console.log(habitaculos);
//Reservar habitacion si esta no lo esta ya

const bookRoom = (room) => {
    if (room == undefined) {
        console.log("Habitacion no existente");
        return null;
    }
    if (room.isBooked === false) {
        room.isBooked = true;
        console.log("Habitacion reservada");
    } else{
        console.log("Habitacion ocupada");
    }
}

bookRoom(habitaculos,1);
bookRoom(habitaculos,5);
console.log("------------DESPUES DE RESERVAR-----------");
console.log(habitaculos);
console.log("-------------------------------------------");


//Cancelar una reserva

const cancelBookedRoom = (room) => {
    if (room == undefined) {
        console.log("Habitacion no existente");
        return null;
    }
    if (room.isBooked === false) {
        console.log("Habitacion sin reservar");
    } else{
        room.isBooked = false;
        console.log("Cancelacion completada con existo");
    }
}

// cancelBookedRoom(habitaculos,1);
// cancelBookedRoom(habitaculos,5);
// console.log("------------DESPUES DE CANCELAR RESERVA-----------");
// console.log(habitaculos);
// console.log("---------------------------------------------------"); 

//checkea si hay un tipo de habitacion disponible, se le pasa el array y el tipo y devuelve la habitacion
const availabilityRoom = (rooms,roomType) => {
    const roomsChecked = rooms.filter(
        (room) => room.type === roomType
    );
    for (let i = 0; i < roomsChecked.length; i++) {
        if (!roomsChecked[i].isBooked) {
            return(roomsChecked[i]);
        }
    }
    console.log("No quedan disponibles habitaciones de este tipo");
    return(null);
}

const bookAllType = (rooms,type)=>{
    const simpleRooms = rooms.filter(
        (room) => room.type === type
    );
    simpleRooms.forEach(room =>{
        bookRoom(room)
    })
}
bookAllType(habitaculos,"doble");
availabilityRoom(habitaculos,"simple");

const findeAvilityRooms = (rooms,type) =>{
    let filteredRooms = rooms.filter(
        (room) => room.type === type
    );
    filteredRooms=filteredRooms.filter(
        (room)=> room.isBooked === false
    );
    if (filteredRooms.length === 0) {
        return null
    } else {
        return(filteredRooms);
    }
}

console.log(findeAvilityRooms(habitaculos,"suite"));