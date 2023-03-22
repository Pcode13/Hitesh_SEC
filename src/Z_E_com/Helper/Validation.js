export function isEmptyValue(value) {
  return !value || value?.length === 0;
}

export function isValidEmailId(emailId) {
  let errorMessage = '';
  let isEmailValid = true;
  if (isEmptyValue(emailId)) {
    isEmailValid = false;
    errorMessage = 'Field cannot be empty';
    return {isEmailValid, errorMessage};
  }
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  isEmailValid = reg.test(emailId);
  if (isEmailValid === false) {
    errorMessage = 'Please Enter Valid Email';
    return {isEmailValid, errorMessage};
  }
  return {isEmailValid, errorMessage};
}

export function isValidMobileNumber(mobileNo) {
  let errorMessage = '';
  let isMobileNoValid = true;
  if (isEmptyValue(mobileNo)) {
    isMobileNoValid = false;
    errorMessage = 'Field cannot be empty';
    return {isMobileNoValid, errorMessage};
  }
  const reg = /^[0]?[6789]\d{9}$/;

  isMobileNoValid = reg.test(mobileNo);
  if (isMobileNoValid === false) {
    errorMessage = 'Please Enter Valid Mobile Number';
    return {isMobileNoValid, errorMessage};
  }
  return {isMobileNoValid, errorMessage};
}


export function isValidPassword(password) {
  let errorMessage = '';
  let isPasswordValid = true;
  if (isEmptyValue(password)) {
    isPasswordValid = false;
    errorMessage = 'Field cannot be empty';
    return {isPasswordValid, errorMessage};
  }
  const reg = /^.{8,}$/;

  isPasswordValid = reg.test(password);
  if (isPasswordValid === false) {
    errorMessage = 'Password must be at least 8 characters long.';
    return {isPasswordValid, errorMessage};
  }
  return {isPasswordValid, errorMessage};
}
