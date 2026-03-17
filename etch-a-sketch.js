const content = document.querySelector(".container");
const body = document.querySelector("body");

const button = document.createElement("button");
body.insertBefore(button, content);
button.className = "refresh";
button.textContent = "New Game";
//button added, need to add event listener so when button is clicked, prompt pops up, user enters new grid size,
//old grid gets deleted, new one gets made


function createGrid(gridSize) {
    let totalSquares = gridSize * gridSize;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.height = `${100 / gridSize}%`;
        square.style.width = `${100 / gridSize}%`;
        square.addEventListener("mouseover", function changeColor() {
            square.style.backgroundColor = "black";
        })
        content.appendChild(square);
    }
}

createGrid(50);

function updateGrid() {
    const oldSquares = document.querySelectorAll(".square");
    oldSquares.forEach(square => square.remove());
    newSize = prompt("Enter new grid size:");
    createGrid(newSize);
}
button.addEventListener('click', updateGrid);

