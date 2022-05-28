const body = document.querySelector('body')
const button = document.querySelector('.change-color')
const colorName = document.querySelector('.color')
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  colorName.textContent = getRandomHexColor()
  body.style.backgroundColor = colorName.textContent
  
}

button.addEventListener('click', changeColor)