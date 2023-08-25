const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulListEl = document.querySelector('#ingredients')

const markup = ingredients.map(item => {
  const liEl = document.createElement('li')
  liEl.textContent = item
  liEl.classList.add('.item')
  return liEl
})

ulListEl.append(...markup)
