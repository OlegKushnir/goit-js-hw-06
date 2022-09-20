const selectedInput = document.querySelector('#validation-input');
const dataLength = Number(selectedInput.getAttribute('data-length'));

selectedInput.addEventListener('blur', checkInput);
function checkInput(event) {
  
  if (event.currentTarget.value.length === dataLength) {
    selectedInput.classList.add('valid');
    selectedInput.classList.remove('invalid');
  } else {
    selectedInput.classList.remove('valid');
    selectedInput.classList.add('invalid');
  }
  
}
