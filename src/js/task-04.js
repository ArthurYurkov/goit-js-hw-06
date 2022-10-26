let counterValue = 0;

const counter = document.querySelector("#counter");

const btnDecr = counter.querySelector('[data-action="decrement"]');

const btnIncr = counter.querySelector('[data-action="increment"]');

const valueNumber = counter.querySelector("#value");

btnDecr.addEventListener("click", (event) => {
  counterValue -= 1;
  valueNumber.textContent = counterValue;
  console.log(event);
});

btnIncr.addEventListener("click", (event) => {
  counterValue += 1;
  valueNumber.textContent = counterValue;
  console.log(event);
});
