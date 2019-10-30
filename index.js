
/*const button = document.querySelector('button');



button.addEventListener('submit', e => {

    const email = document.querySelector('.input');
    const error = document.querySelector('.error');
    


    const testEmail = email.value;
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValidator.test(testEmail)) {
        e.preventDefault();
        email.classList.add('.error-border');
        error.style.display = 'block';
        error.textContent = 'Please provide a valid email';
    } else {
        email.classList.remove('.error-border');
        
    }

});
*/

const form = document.querySelector('.form');
const emailField = document.querySelector('.input');
const button = document.querySelector('.button');
const errorMessage = document.querySelector('.errorMessage');
const error = document.querySelector('.error');
  
emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();
  
  if ( isValidEmail ) {
    button.disabled = false;

  } else {
    button.disabled = true;
    error.style.display = 'block';
    errorMessage.textContent = 'Please provide a valid email';
    
  }
});
  
button.addEventListener('click', function (event) {
  signUpForm.submit();
});
