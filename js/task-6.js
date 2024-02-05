function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = Number(userInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    userInput.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesDiv.innerHTML = "";

  let initialBoxSize = 30;
  let boxSizeIncrement = 10;
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${initialBoxSize}px`;
    box.style.height = `${initialBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);

    initialBoxSize += boxSizeIncrement;
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}