const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = inputEl.value  +'px';

inputEl.addEventListener('input', () => {
    const fontSize = inputEl.value + 'px';
    textEl.style.fontSize = fontSize;
});




