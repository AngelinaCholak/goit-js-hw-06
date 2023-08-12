const formEl = document.querySelector(".login-form");
formEl.addEventListener('submit', handleSubmit); 

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = {};
    formData.forEach((value, name) => {
        formObject[name] = value;

    });
   
if (!formObject.email || !formObject.password) {
    alert('Please fill in all fields.')
return;
}
    
console.log(formObject);
  formEl.reset();
  
  }
