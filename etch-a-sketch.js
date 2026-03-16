const content = document.querySelector(".container");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.className("square");
        square.style.height = `${100 / Math.sqrt(gridSize)}%`;
        square.style.width = `${100 / Math.sqrt(gridSize)}%`;
        square.addEventListener("mouseover", function changeColor() {
            square.style.backgroundColor = "black";
        })
        content.appendChild(square);
    }
}

createGrid(1000);