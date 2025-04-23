export function validatePassword(password: string): string {
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>\-_=+]/.test(password);
  const hasWhitespace = /\s/.test(password);
  const hasMinLength = password.length >= 10;

  if (!hasUppercase) {
    return 'Das Passwort muss mindestens einen Großbuchstaben enthalten.';
  }

  if (!hasSpecialChar) {
    return 'Das Passwort muss mindestens ein Sonderzeichen enthalten.';
  }

  if (hasWhitespace) {
    return 'Das Passwort darf keine Leerzeichen enthalten.';
  }

  if (!hasMinLength) {
    return 'Das Passwort muss mindestens 10 Zeichen lang sein.';
  }

  return '';
}

