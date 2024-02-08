const form = document.getElementById('sign-up-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateEmail(emailInput.value)) {
    emailInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
    // TODO: Send the form data to the server or perform any other action
    console.log('Email is valid: ' + emailInput.value);
  } else {
    emailInput.classList.add('input-error');
    errorMessage.style.display = 'block';
    console.log('Invalid email: ' + emailInput.value);
  }
});

emailInput.addEventListener('input', function() {
  if (emailInput.value.trim() === '') {
    emailInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
  }
});

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};