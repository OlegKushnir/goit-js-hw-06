const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map(ingredient => 
  {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    return listItem;
  });
 

  const list = document.querySelector('#ingredients');

  list.append(...listItems);

