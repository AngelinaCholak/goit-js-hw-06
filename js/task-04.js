
const refs = {
    
     decrementEl: document.querySelector('button[data-action="decrement"]'),
     incrementEl: document.querySelector('button[data-action="increment"]'),
     valueEl: document.querySelector('#value'),
};

refs.decrementEl.addEventListener("click", changesValue);
refs.incrementEl.addEventListener("click", changesValue);

let counterValue = 0;

function changesValue(evt) {
    evt.currentTarget.dataset.action === "decrement"
        ? (counterValue -= 1)
        : (counterValue += 1);
    refs.valueEl.textContent = counterValue;
}




