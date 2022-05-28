const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingredientsList = document.querySelector("#ingredients")
const itemArr = []

ingredients.map((ingredient) => {
  let item = document.createElement("li")
  item.classList.add('item')
  item.textContent = ingredient;
  itemArr.push(item)
});
ingredientsList.append(...itemArr)