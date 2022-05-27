const input = document.querySelector("#validation-input")

const inputValidation = () => {
    if(input.value.length < input.dataset.length) {
        input.classList.remove('valid')
        input.classList.add('invalid')
    } 
    else {
        input.classList.replace('invalid', "valid")
    }
}

input.addEventListener('blur', inputValidation)