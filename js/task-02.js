const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingredientsList = document.querySelector("#ingredients")
for (let ingredient of ingredients) {
  let item = document.createElement("li")
  item.classList.add('item')
  item.textContent = ingredient;
  ingredientsList.append(item)
}