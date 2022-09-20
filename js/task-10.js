function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputCount = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('div#boxes');

let widthHeight = 30;


createBtn.addEventListener('click', onCreateBtn);
destroyBtn.addEventListener('click', onDestroyBtn);

function createBoxes(amount) {
  let allBoxes= '';
  
  for (let i = 0; i < amount; i+=1) {
    const bgColor = getRandomHexColor();
    const box = `<div style="width:${widthHeight}px; height:${widthHeight}px; background-color:${bgColor}"></div>`
    widthHeight += 10;
    allBoxes += box;
  }
  return allBoxes;
}
function onCreateBtn () {
  divBoxes.insertAdjacentHTML("beforeend", createBoxes(inputCount.valueAsNumber));   
}

function onDestroyBtn() {
  divBoxes.innerHTML = '';
  widthHeight = 30;
}