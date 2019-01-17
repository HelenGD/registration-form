const inputUnit = document.querySelector('.entry-field .input');
const errorMessage = document.querySelector('.error-message');
console.log(errorMessage);
inputUnit.addEventListener('input', (e) => {
  if (!e.target.value) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
});

const inputLastName = document.querySelector('.second-field .input');
const errorLastName = document.querySelector('.error-lastname');

inputLastName.addEventListener('input', (e) => {
  if (!e.target.value) {
    errorLastName.style.display = 'block';
  } else {
    errorLastName.style.display = 'none';
  }
});

const inputPhoneNumber = document.querySelector('.third-field .input');
const errorPhoneNumber = document.querySelector('.error-phone');

inputPhoneNumber.addEventListener('input', (e) => {
  if (!e.target.value) {
    errorPhoneNumber.style.display = 'block';
  } else {
    errorPhoneNumber.style.display = 'none';
  }
});

const inputEmail = document.querySelector('.fourth-field .input');
const secondErrorMessage = document.querySelector('.error-email');

inputEmail.addEventListener('input', (e) => {
  if (e.target.value.includes('@')) {
    secondErrorMessage.style.display = 'none';
  } else {
    secondErrorMessage.style.display = 'block';
  }
});

const inputPassword = document.querySelector('.fifth-field .input');
const errorPassword = document.querySelector('.error-password');

inputPassword.addEventListener('input', (e) => {
  if (!e.target.value) {
    errorPassword.style.display = 'block';
  } else if (confirmPassword.value && e.target.value !== confirmPassword.value) {
    errorConfirm.style.display = 'block';
  } else {
    errorPassword.style.display = 'none';
  }
});

const confirmPassword = document.querySelector('.sixth-field .input');
const errorConfirm = document.querySelector('.error-confirm');

confirmPassword.addEventListener('input', (e) => {
  if (!e.target.value) {
    errorConfirm.style.display = 'block';
  } else if (e.target.value !== inputPassword.value) {
    errorConfirm.style.display = 'block';
  } else {
    errorConfirm.style.display = 'none';
  }
}); 