let counterValue = 0;
let value = document.querySelector('#value')

const decrementEl = document.querySelector('button[data-action="decrement"]')
const decrementFn = () => { value.textContent = counterValue -= 1};

const incrementEl = document.querySelector('button[data-action="increment"]')
const incrementFn = () => { value.textContent = counterValue += 1};

decrementEl.addEventListener('click', decrementFn)
incrementEl.addEventListener('click', incrementFn)