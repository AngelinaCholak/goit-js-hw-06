const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ingredientsEl = document.querySelector('ingredients');
// const liList = document.createElement('li');
// const li1El = document.createElement('li');
// li1El.textContent = [ingredients];
// liList.appendChild(li1El);
// li.stule.listStule = "none";

// const li2El = document.createElement('li');
// li2El.textContent = 'Mushrooms';
// liList.appendChild(li2El)


// const exList = document.getElementById('ingredients');
// exList.insertAdjacentElement('afterbegin', liList);

// document.body.appendChild(liList);
// li.textContent = item.childten.length;
// item.append(li);


// console.log(liList);
// const categoriesEl = document.querySelector('#ingredients');
// const liList = document.createElement('li');
// const exList = document.getElementById('ingredients');
// exList.insertAdjacentElement('afterbegin', liList);


// [...liList.children].forEach((item) => {
//   `<li class="item"></li>`
//   List.textContent = [ingredients];
// })

// console.log(liList);

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientsLi = document.createElement('li');
  ingredientsLi.textContent = ingredient;
  ingredientsLi.classList.add("item");
  return ingredientsLi;
});
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsList);