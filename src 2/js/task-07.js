const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");


inputEl.addEventListener('input', () => {
    const fontSize = inputEl.value + 'px';
    textEl.style.fontSize = fontSize;
});
