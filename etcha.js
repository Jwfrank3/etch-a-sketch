function createSquare() {
  const parentDiv = document.querySelector("#parent-div");
  const square = document.createElement("div");
  square.style.cssText =
    "width: 30px; height: 30px; color: blue; border: 1px solid black;";
  parentDiv.append(square);
}

for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    if (i < 16) {
      createSquare();
    } else if (i === 16) {
      const parentDiv = document.querySelector("#parent-div");
      const square = document.createElement("div");
      square.style.cssText =
        "width: 100px; height: 100px; color: blue; border: 3px solid black;";
      const newLine = document.createElement("br");
      parentDiv.append(square);
      square.append(newLine);
    }
  }
}
