const onInput = document.querySelector('input#name-input');
const userName = document.querySelector('span#name-output');

onInput.addEventListener('input', changeName );

function changeName (event) {
    userName.textContent = event.currentTarget.value;
    if(userName.textContent === '') {
        userName.textContent = 'Anonymous';
    }
}