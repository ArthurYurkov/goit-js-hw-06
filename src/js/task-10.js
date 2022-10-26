function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainer = document.querySelector("#boxes");
const inputValue = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let arrey = [];

function removeEl() {
  boxContainer.innerHTML = "";
  inputValue.value = "";
  arrey = [];
}

function createBoxes(amount) {
  boxContainer.innerHTML = "";
  arrey = [];
  for (let i = 0; i < inputValue.value; i += 1) {
    const box = document.createElement("div");

    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrey.push(box);
  }
  boxContainer.append(...arrey);
}

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", removeEl);
