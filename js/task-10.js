function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input')
const boxes = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create=""]')
const destroyBtn = document.querySelector('button[data-destroy=""]')

let width = 30
let height = 30

const createBoxes = () => {
  if(input.value <= 100) {

    for (let i=1; i<=input.value; i+=1) {
      let div = document.createElement("div");
      div.style.width = `${width}px`
      div.style.height = `${height}px`
      div.style.backgroundColor = getRandomHexColor()

      boxes.append(div)
      
      width += 10
      height +=10
    }
  }
}

const destroyBoxes = () => {
  boxes.innerHTML = ""
  width = 30
  height = 30
  input.value = ""
}

destroyBtn.addEventListener('click', destroyBoxes)
createBtn.addEventListener('click', createBoxes)
