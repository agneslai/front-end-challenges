const signUpCard = document.getElementById('sign-up-card');
const successCard = document.getElementById('success-card');
const form = document.getElementById('sign-up-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const confirmText = document.getElementById('confirm-text');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (validateEmail(emailInput.value)) {
    emailInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
    signUpCard.style.display = 'none';
    confirmText.innerHTML = `A confirmation email has been sent to <span class="bold">${emailInput.value}</span>. Please open it and click the button inside to confirm your subscription.`
    successCard.style.display = 'block';
  } else {
    emailInput.classList.add('input-error');
    errorMessage.style.display = 'block';
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