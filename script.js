function isEmail(value) {
  return value.includes('@');
}

function isEmpty(value = '') {
  return !(value.trim());
}

function isPhone(value = '') {
  // input
  // 8 987 654 32 10 - true
  // +7 987-654-32-10 - true
  // +7 (987) 654-32-10 - true
  // +7(987) 654 32 10 - true
  // 8987654 - false
  // +79876543210 - true

  // заменить первую 8 на +7
  // +7 987 654 32 10
  // +7 987-654-32-10
  // +7 (987) 654-32-10
  // +7(987) 654 32 10
  // +7987654
  // +79876543210

  // удалить все символы кроме + (первый символ)
  // +79876543210
  // +79876543210
  // +79876543210
  // +79876543210
  // +7987654
  // +79876543210

  // проверить длину номера (11 символов)
  // 79876543210 - true
  // 79876543210 - true
  // 79876543210 - true
  // 79876543210 - true
  // 7987654 - false
  // 79876543210 - true
  const formattedPhone = value
    .replace(/^8/, '+7')
    .replace(/\D/g, '');

  return formattedPhone.length === 11;
}

function showError(inputEl, errorMessage) {
  const errorEl = inputEl.parentElement.querySelector('.error');
  errorEl.style.display = 'block';

  if (errorMessage) {
    errorEl.textContent = errorMessage;
  }
}

function hideError(inputEl) {
  const errorEl = inputEl.parentElement.querySelector('.error');
  errorEl.style.display = 'none';
}

const inputUnit = document.querySelector('.entry-field .input');

inputUnit.addEventListener('input', (e) => {
  if (isEmpty(e.target.value)) {
    showError(e.target, '*Нужно ввести имя');
  } else {
    hideError(e.target);
  }
});

const inputLastName = document.querySelector('.second-field .input');

inputLastName.addEventListener('input', (e) => {
  if (isEmpty(e.target.value)) {
    showError(e.target, '*Нужно ввести фамилию');
  } else {
    hideError(e.target);
  }
});

const inputPhoneNumber = document.querySelector('.third-field .input');

inputPhoneNumber.addEventListener('input', (e) => {
  if (!isPhone(e.target.value)) {
    showError(e.target, '*Нужно ввести номер телефона');
  } else {
    hideError(e.target);
  }
});

const inputEmail = document.querySelector('.fourth-field .input');

inputEmail.addEventListener('input', (e) => {
  if (isEmail(e.target.value)) {
    hideError(e.target);
  } else {
    showError(e.target, '*Нужно ввести e-mail');
  }
});

const inputPassword = document.querySelector('.fifth-field .input');

inputPassword.addEventListener('input', (e) => {
  if (isEmpty(e.target.value)) {
    showError(e.target, '*Нужно ввести пароль');
  } else if (confirmPassword.value && e.target.value !== confirmPassword.value) {
    showError(e.target, '*Нужно подтвердить пароль');
  } else {
    hideError(e.target);
  }
});

const confirmPassword = document.querySelector('.sixth-field .input');

confirmPassword.addEventListener('input', (e) => {
  if (isEmpty(e.target.value)) {
    showError(e.target, '*Нужно подтвердить пароль');
  } else if (e.target.value !== inputPassword.value) {
    showError(e.target, '*Нужно подтвердить пароль');
  } else {
    hideError(e.target);
  }
});
