export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isDateValid = (date) => {
  const parsedDate = new Date(date);
  const currentDate = new Date();
  return !isNaN(parsedDate.getTime()) && parsedDate < currentDate;
};

export const isCpfValid = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove todos os caracteres não numéricos
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let checkDigit1 = 11 - (sum % 11);
  if (checkDigit1 > 9) checkDigit1 = 0;

  if (checkDigit1 !== parseInt(cpf.charAt(9))) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  let checkDigit2 = 11 - (sum % 11);
  if (checkDigit2 > 9) checkDigit2 = 0;

  return checkDigit2 === parseInt(cpf.charAt(10));

};

export const isCnpjValid = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove todos os caracteres não numéricos

  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
    return false;
  }

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let checkDigit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (checkDigit1 !== parseInt(digits.charAt(0))) {
    return false;
  }

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let checkDigit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return checkDigit2 === parseInt(digits.charAt(1));
};

export const isMinLength = (value, valueMinLength) => {
  if(!valueMinLength) {
    return false;
  }
  if( value.length >= valueMinLength)  {
    return false
  }
  return true;
}


export const isMaxLength = (value, valueMaxLength) => {
  if(!valueMaxLength) {
    return false;
  }
  if( value.length <= valueMaxLength)  {
    return false
  }
  return true;
}