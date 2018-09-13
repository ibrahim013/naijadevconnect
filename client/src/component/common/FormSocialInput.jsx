import React from "react";
import PropTypes from "prop-types";

const FormSocialInput = ({
  icon,
  value,
  onChange,
  name,
  type,
  placeholder
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
        <i className={icon}></i>
        </span>
      </div>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
FormSocialInput.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};
FormSocialInput.defaultProps = {
  type: "text"
};
export default FormSocialInput;
