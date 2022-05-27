const body = document.querySelector('body')
const button = document.querySelector('.change-color')

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor()
}

button.addEventListener('click', changeColor)