"use strict";

const liElItems = document.querySelectorAll(".item");
console.log("Number of categories:", liElItems.length);

liElItems.forEach((elem) => {
  console.log("Category: ", elem.querySelector("h2").textContent);
  console.log("Elements: ", elem.querySelectorAll("li").length);
});
