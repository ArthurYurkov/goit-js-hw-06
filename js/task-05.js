const inputWrite = document.querySelector("#name-input");

const inputChange = document.querySelector("#name-output");

inputWrite.addEventListener("input", (event) => {
  event.target.value;
  console.log(event.target.value);
  if (!event.target.value) {
    inputChange.textContent = "Anonymous";
  } else {
    inputChange.textContent = event.target.value;
  }
});
