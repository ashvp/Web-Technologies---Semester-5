document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#event-signup-form');
  const submitButton = document.querySelector('#submit-button');

  const validationRules = {
    fullName: {
      validator: value => value.trim().length > 0,
      message: 'Full name is required.',
    },
    emailAddress: {
      validator: value => /^\S+@\S+\.\S+$/.test(value),
      message: 'Please enter a valid email address.',
    },
    phoneNumber: {
      validator: value => /^\d{10}$/.test(value),
      message: 'Phone number must be 10 digits.',
    },
    userAge: {
      validator: value => {
        const age = parseInt(value, 10);
        return !isNaN(age) && age >= 18;
      },
      message: 'You must be at least 18 years old.',
    },
  };

  const checkFieldValidity = (fieldId) => {
    const inputElement = document.getElementById(fieldId);
    const errorElement = inputElement.nextElementSibling;
    const rule = validationRules[fieldId];
    const value = inputElement.value;

    if (rule.validator(value)) {
      inputElement.classList.remove('invalid-input');
      inputElement.classList.add('valid-input');
      errorElement.textContent = '';
      return true;
    } else {
      inputElement.classList.remove('valid-input');
      inputElement.classList.add('invalid-input');
      errorElement.textContent = rule.message;
      return false;
    }
  };

  const checkAllFields = () => {
    let allFieldsValid = true;
    for (const fieldId in validationRules) {
      if (!checkFieldValidity(fieldId)) {
        allFieldsValid = false;
      }
    }
    return allFieldsValid;
  };

  signupForm.addEventListener('input', event => {
    if (event.target.tagName === 'INPUT') {
      checkFieldValidity(event.target.id);

      const allFieldsAreValid = Object.keys(validationRules).every(id => {
        const input = document.getElementById(id);
        return validationRules[id].validator(input.value);
      });

      submitButton.disabled = !allFieldsAreValid;
    }
  });

  signupForm.addEventListener('submit', event => {
    event.preventDefault();

    if (checkAllFields()) {
      alert('Thank you for registering for the event!');
      signupForm.reset();
      submitButton.disabled = true;
      document.querySelectorAll('.valid-input').forEach(input => {
        input.classList.remove('valid-input');
      });
    }
  });
});