'use strict';

function formValidator(formSelector) {
  const form = document.querySelector(formSelector);

  const validator = {
    required(label) {
      return function (value) {
        if (!value) return `Please enter your ${label}.`;
      };
    },

    email(value) {
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (pattern.test(value)) return;

      return 'Your email is invalid.';
    },

    min(minLength, label) {
      return function (value) {
        if (value.length < minLength)
          return `Your ${label} must be at least ${minLength} characters.`;
      };
    },

    passwordConfirmation(value) {
      const password = form.querySelector('[name=password]').value;

      if (value !== password)
        return 'Your password confirmation does not match.';
    },
  };

  const rule = {};

  const validation = element => {
    const errors = rule[element.name].map(item => item(element.value));

    return errors.find(item => item !== undefined);
  };

  const validateValue = element => {
    const targetElement = element.target;

    const parentElement = targetElement.closest('.form__group');
    if (!parentElement) return;

    const warningElement = parentElement.querySelector('.form__warning');
    if (!warningElement) return;

    const errMsg = validation(targetElement);
    if (!errMsg) {
      return parentElement.classList.remove('invalid');
    }
    parentElement.classList.add('invalid');
    warningElement.textContent = errMsg;

    return errMsg;
  };

  const validationElements = form.querySelectorAll('[name][rules]');

  for (const element of validationElements) {
    const elementRules = element
      .getAttribute('rules')
      .split('|')
      .map(item => {
        if (item === 'required') {
          return validator.required(element.ariaLabel);
        }

        if (item.includes(':')) {
          item = item.split(':');
          return validator[item[0]](item[1], element.ariaLabel);
        }

        return validator[item];
      });

    rule[element.name] = elementRules;

    element.addEventListener('blur', validateValue);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    let isValid = true;
    for (const element of validationElements) {
      if (validateValue({ target: element })) isValid = false;
    }

    if (!isValid) return;

    form.submit();
  });
}

formValidator('#register-form');
