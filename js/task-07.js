const fontSizeControl = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

const textResize = () => {
    text.style.fontSize = `${fontSizeControl.value}px`
}

fontSizeControl.addEventListener("input", textResize)