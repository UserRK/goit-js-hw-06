function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorButton: document.querySelector('.change-color'),
  textColor: document.querySelector('.color'),
  backgroundColor: document.querySelector('body'),
};

refs.colorButton.addEventListener('click', onColorChange);

function onColorChange() {
  refs.textColor.textContent = getRandomHexColor();
  refs.backgroundColor.style.backgroundColor = getRandomHexColor();
}

console.log(getRandomHexColor());