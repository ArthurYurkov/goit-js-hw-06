const inputBlur = document.querySelector("#validation-input");

const inputData = Number(inputBlur.dataset.length);

inputBlur.addEventListener("blur", (event) => {
  event.target.classList.remove("valid", "invalid");
  if (event.target.value.length === inputData) {
    event.target.classList.add("valid");
  } else {
    event.target.classList.add("invalid");
  }
  console.log(1, 2, 3);
});
console.log(inputData);
