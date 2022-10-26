function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");
const colorBody = document.querySelector("body");
console.log(colorBody);

colorBtn.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  colorName.textContent = randomColor;
  colorBody.style.backgroundColor = randomColor;
});
