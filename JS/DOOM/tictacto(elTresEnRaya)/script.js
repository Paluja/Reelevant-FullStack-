const squares = document.querySelectorAll('td');
const restart = document.querySelector('button');
// const rows = document.querySelectorAll()
const board = [];
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
    let content = 'oooo';
    
    turn ++;
    if (turn % 2)
        content = 'X';
    else
        content = 'O';
    box.textContent = content;    
    board[i] = content;
    box.style.pointerEvents = 'none';
};


// const its_win



squares.forEach(
    (obj, i) => {
        obj.addEventListener('click', (e) => handleClick(e,i))
    }
);
