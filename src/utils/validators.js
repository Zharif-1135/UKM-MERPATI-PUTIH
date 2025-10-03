export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isStrongPassword(password) {
  // min 6 karakter, ada huruf & angka
  return /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password);
}

export function isNotEmpty(value) {
  return value && value.trim().length > 0;
}
