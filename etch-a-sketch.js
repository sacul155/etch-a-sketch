const content = document.querySelector("body");

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        content.appendChild(square);
    }
}

createGrid(16);