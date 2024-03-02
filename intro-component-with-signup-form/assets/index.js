const form = document.getElementById('signupForm');
const inputs = document.querySelectorAll('input');

const validateEmail = (email) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validateForm = (event) => {
  event.preventDefault();
  let formIsValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      input.parentNode.nextElementSibling.innerHTML = `${input.name} cannot be empty`;
      input.parentNode.nextElementSibling.style.display = 'block';
      input.nextElementSibling.style.display = 'block';
      formIsValid = false;
    }

    if (input.type === 'email' && input.value) {
      if (!validateEmail(input.value)) {
        input.parentNode.nextElementSibling.innerHTML =
          'Looks like this is not an email';
        input.parentNode.nextElementSibling.style.display = 'block';
        input.nextElementSibling.style.display = 'block';
        formIsValid = false;
      }
    }
  });

  if (formIsValid) {
    form.submit();
  }
};

form.addEventListener('submit', validateForm);

inputs.forEach((input) => {
  input.addEventListener('focus', (e) => {
    input.parentNode.nextElementSibling.style.display = 'none';
    input.nextElementSibling.style.display = 'none';
  });
});
