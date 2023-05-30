import { RegistrationFormValues } from "./RegistrationPage";

const regexps = {
  username: /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i,
  password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
  name: /^[a-z ,.'-]+$/i,
};

const validateErrors = (errors: object) => {
  for (const error of Object.values(errors)) {
    if (error) return errors;
  }

}

const validate_username = (username) => {
  if (!username) {
    return 'username is required';
  } else if (!regexps.username.test(username)) {
    return 'username must be is 6-20 characters long';
  }
};

const validate_password = (password) => {
  if (!password) {
    return 'password is required';
  } else if (!regexps.password.test(password)) {
    return 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';
  }
};

export const validateRegistration = (values: RegistrationFormValues) => {
  const errors: Partial<typeof values> = {};
  errors.username = validate_username(values.username);
  errors.password = validate_password(values.password);
  errors.inputTextLabel = !values.inputTextLabel.length ? 'Error message informing me of a problem' : undefined;

  return validateErrors(errors);
}