const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateProfileInput = data => {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
 
  if(!Validator.isLength(data.handle, {min: 2, max: 40})){
    errors.handle = "This handle is too short"
  }
  if(Validator.isEmpty(data.handle)){
    errors.handle = "handle field is required"
  }

  if(Validator.isEmpty(data.status)){
    errors.status = "status field is required"
  }
  if(Validator.isEmpty(data.skills)){
    errors.skills = "skills are required"
  }

  if(!isEmpty(data.website)){
    if(!Validator.isURL(data.website)){
      errors.website = "enter a vaild URL"
    }
  }

  if(!isEmpty(data.youtube)){
    if(!Validator.isURL(data.youtube)){
      errors.youtube = "enter a vaild youtube url"
    }
  }

  if(!isEmpty(data.twitter)){
    if(!Validator.isURL(data.twitter)){
      errors.twitter = "enter a vaild twitter url"
    }
  }

  if(!isEmpty(data.linkedin)){
    if(!Validator.isURL(data.linkedin)){
      errors.linkedin = "enter a vaild linkedin url"
    }
  }

  if(!isEmpty(data.instagram)){
    if(!Validator.isURL(data.instagram)){
      errors.instagram = "enter a vaild instagram url"
    }
  }
  
  if(!isEmpty(data.facebook)){
    if(!Validator.isURL(data.facebook)){
      errors.facebook = "enter a vaild facebook url"
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
