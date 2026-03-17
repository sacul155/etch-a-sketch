//Variable initialization for div.container and <body> elements
const content = document.querySelector(".container");
const body = document.querySelector("body");

//Variable initialization for button element, inserts element before div.container so button appears above grid
const button = document.createElement("button");
body.insertBefore(button, content);
button.className = "refresh";
button.textContent = "New Game";

//This function makes a new grid inside div.container made up of gridSize elements
//The for loop iterates one time for every square in the grid
//Height and width are sized to the same percentage of the parent container's dimensions
//Event is added to every square in the grid that changes its color when hovered over
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

//Initial grid size when page is loaded
createGrid(50);

//This function deletes all old square elements, removing the old grid
//The function then prompts the user for a new grid size, with the number being the dimensions of the grid
//The createGrid() function is called again with the new size from user
function updateGrid() {
    const oldSquares = document.querySelectorAll(".square");
    oldSquares.forEach(square => square.remove());
    newSize = prompt("Enter new grid size:");
    createGrid(newSize);
}

//Calls updateGrid() function when button is clicked
button.addEventListener('click', updateGrid);

