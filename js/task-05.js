const input = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")

const inputFn = () => {
    if(input.value !== ""){
        nameOutput.textContent = input.value} 
    else {
        nameOutput.textContent = "Anonymous"}
}

input.addEventListener("input", inputFn)