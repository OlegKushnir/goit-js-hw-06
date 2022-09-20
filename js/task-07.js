const sizeControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
const sizeControlValue = sizeControl.addEventListener('input', ()=> {
    textSize.style.fontSize = `${sizeControl.valueAsNumber}px`;
})