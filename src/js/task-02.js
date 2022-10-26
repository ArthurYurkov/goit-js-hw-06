const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const fruits = document.querySelector("#ingredients");

const createMarkup = (ingr) => {
  return ingr.map((ingredient) => {
    const liItem = document.createElement("li");
    liItem.classList.add("item");
    liItem.textContent = ingredient;
    return liItem;
  });
};
fruits.append(...createMarkup(ingredients));
console.log(fruits);
