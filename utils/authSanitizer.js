const phoneNumberHasCountryCode = (phoneNumber) => {
  return phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`;
};

module.exports = {
  phoneNumberHasCountryCode,
};
