const squares = document.querySelectorAll('td');
const restart = document.querySelector('button');
// const rows = document.querySelectorAll()
const board = [];
const win = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const winX = [];
const winO = [];
    
let turn = 0;

restart.addEventListener('click', () => {
    squares.forEach(
        (obj) => {
            obj.textContent = '';
            obj.style.pointerEvents = 'auto';
    }
    )}
)

const handleClick = (e, i) => {
    
    const box = e.target;
    let content = '';
    
    turn ++;
    if (turn % 2)
        content = 'X';
    else
    content = 'O';
    box.classList.add(content);
    box.textContent = content;
    board[i] = content;
    if (checkWin()) {
        e.EventListener("click");
    }

    box.style.pointerEvents = 'none';

    
};

const checkWin = () => {
    win.forEach(e => {
        if (board[e[0]] && board[e[0]] === board[e[1]] && board[e[0]]=== board[e[2]] && board[e[1]] === board[e[2]]){
            alert(`EL ganador ha sido ${board[e[0]]}`);
            return (true);
        }
    });  
}


squares.forEach(
    (obj, i) => {
        obj.addEventListener('click', (e) => handleClick(e,i))
    }
);
