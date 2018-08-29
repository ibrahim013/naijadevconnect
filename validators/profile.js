const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateLoginInput = data => {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  
  
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if(Validator.isEmpty(data.email)){
    errors.email = "Enter a registered email"
  }
 
  if(Validator.isEmpty(data.password)){
    errors.password = "Enter a valid password"
  }
 
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
