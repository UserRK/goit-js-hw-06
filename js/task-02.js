const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map((ingredient) => {
  const ingredientsLi = document.createElement('li');
  ingredientsLi.textContent = ingredient;
  ingredientsLi.classList.add('item');
  return ingredientsLi;
});

ingredientsList.append(...ingredientsArray);

