const input = document.querySelector("#validation-input")

const inputValidation = () => {
    if(input.value.length < input.dataset.length || input.value.length > input.dataset.length) {
        input.classList.add('invalid')
        input.classList.remove('valid')
        
    } 
    else {
        input.classList.replace('invalid', "valid")
    }
}

input.addEventListener('blur', inputValidation)