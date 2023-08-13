const categoriesEl = document.querySelector('#categories');
// itemm.forEach(({id}) => {
//     const markup = `<li>
//     <h2></h2>
//     </li>`
//     categories.insertAdjacentHTML('beforebegin', markup)
// });
console.log(`Number of categories: ${categoriesEl.children.length}`);
[...categoriesEl.children].forEach((category) => {
console.log(`Category: ${category.firstElementChild.textContent}`);
console.log(`Elements: ${category.lastElementChild.children.length}`);

})

