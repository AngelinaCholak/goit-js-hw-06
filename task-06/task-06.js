const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const dataLength = parseInt(input.getAttribute('data-length'));
  const inputValueLength = input.value.length;

  input.classList.toggle('valid', inputValueLength === dataLength);
  input.classList.toggle('invalid', inputValueLength !== dataLength);
});