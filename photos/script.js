const inputUnit = document.querySelector('.entry-field .input');
const errorMessage = document.querySelector('.error-message');
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