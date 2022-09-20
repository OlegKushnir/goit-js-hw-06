function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', onChangeColor);
function onChangeColor (event) {
   const bgColor = getRandomHexColor();
   document.body.style.backgroundColor = bgColor;
   colorValue.textContent = bgColor;
}
