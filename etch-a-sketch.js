const content = document.querySelector(".container");

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        content.appendChild(square);
    }
}

createGrid(16);