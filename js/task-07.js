const inputValue = document.querySelector("#font-size-control");
const inputWord = document.querySelector("#text");

inputValue.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);

  inputWord.style.fontSize = `${event.currentTarget.value}px`;
});
