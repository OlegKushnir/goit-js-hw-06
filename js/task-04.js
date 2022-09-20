let value = document.querySelector('#value'); 
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => value.textContent = counterValue -= 1);
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => value.textContent = counterValue += 1);
