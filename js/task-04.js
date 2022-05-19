const valueCounter = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const increment = () => {
  valueCounter.textContent++;
};

const decrement = () => {
    valueCounter.textContent--;
};
    
incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);

