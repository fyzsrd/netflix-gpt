export function checkValidateData(name, email, password, isSignIn = true) {
  const errors = { name: "", email: "", password: "" };

  // Email Regex (basic RFC 5322 compliant)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password: at least 6 characters, one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  // Name: letters and spaces only
  const nameRegex = /^[a-zA-Z ]{2,}$/;

  if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!passwordRegex.test(password)) {
    errors.password =
      "Password must be at least 6 characters, with at least one letter and one number.";
  }

  if (!isSignIn && !nameRegex.test(name)) {
    errors.name = "Name must contain only letters and be at least 2 characters.";
  }

  if (!errors.name && !errors.email && !errors.password) {
    return null;
  }

  return errors;
}
