const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", updateNameOutput);

function updateNameOutput() {
    nameOutput.textContent = nameInput.value ? nameInput.value : 'Anonymous';
}
console.log(updateNameOutput);

