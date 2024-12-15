function createSquare() {
const parentDiv = document.querySelector("#parent-div");
const square = document.createElement("div");
square.style.cssText = "width: 100px; height: 100px; color: blue; border: 3px solid black;";
parentDiv.append(square);
}

for (let i = 0; i < 16; i++) {
  createSquare();
}