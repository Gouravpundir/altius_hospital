 const onlyAplha = function onlyAplha(value) {
  return /^[a-zA-Z/s]/.test(value);
}

const validateMobile= function validateMobile($phone) {
  var phoneReg = /^[6789]\d{9}$/;
  if (!phoneReg.test($phone)) {
    return false;
  } else {
    return true;
  }
}

const validateEmail= function validateEmail($email) {
  var emailReg = /^(\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3}))$/;
  if (!emailReg.test($email)) {
    return false;
  } else {
    return true;
  }
}

const isValidDate= function isValidDate(value) {
  return /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(
    value
  );
}

module.exports = { isValidDate, onlyAplha, validateEmail, validateMobile };
