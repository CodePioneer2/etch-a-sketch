const grid = document.querySelector(".grid-container");
const changeBtn = document.querySelector("#changeBtn");
const clearBtn = document.querySelector("#clearBtn");
let size = 0;

const drawGrid = (size) => {
  grid.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const square = document.createElement("div");
    square.setAttribute(
      "style",
      "border: 1px solid black; height: 25px; width: 25px;"
    );
    square.addEventListener("mouseover", (e) => {
      square.classList.add("paint-div");
    });
    grid.setAttribute("style", `width: calc(25 * ${size / 10}px)`);
    grid.appendChild(square);
  }
};

drawGrid(100);

changeBtn.addEventListener("click", () => {
  size = prompt("change size");
  drawGrid(size);
});
clearBtn.addEventListener("click", () => {
  drawGrid(100);
});
