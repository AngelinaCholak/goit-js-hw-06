const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientsLi = document.createElement('li');
  ingredientsLi.textContent = ingredient;
  ingredientsLi.classList.add("item");
  return ingredientsLi;
});
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsList);