const countUlCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${countUlCategories.length}`);

countUlCategories.forEach(element => {
    const ulCategoryTitle = element.querySelector('h2');
    const liCount = element.querySelectorAll('li');
    console.log(`Category: ${ulCategoryTitle.textContent}`);
    console.log(`Elements: ${liCount.length}`);
});