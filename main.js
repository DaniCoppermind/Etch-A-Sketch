const board = document.getElementById('board');
const mode =  document.getElementById('mode');
let color = 'black';
let click = true;

let varColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

function placeBoard(size) {
    let gridSquares = board.querySelectorAll("div");
    gridSquares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalSize = size * size;
    for (let i = 0; i < totalSize; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', paintSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
} 

placeBoard(16);

board.addEventListener('click', () => {
    click = !click;
    if (click) {
        mode.textContent = "Mode: Coloring";
    } else {
        mode.textContent = "Mode: Not Coloring";
    }
})

function paintSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
};

function changeColor(choice) {
    color = choice;
};

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        placeBoard(input);
    } else {
        alert("Too many Spaces :c");
    }
};

function resetBoard() {
    let gridSquares = board.querySelectorAll("div");
    gridSquares.forEach((div) => div.style.backgroundColor = 'white');
}

