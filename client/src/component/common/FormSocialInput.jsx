import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormSocialInput = ({
  icon,
  value,
  onChange,
  name,
  type,
  placeholder,
  error
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <i className={icon} />
        </span>
      </div>
      <input
        type={type}
        className={classNames("form-control",{ "is-invalid": error} )}
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        error={error}
      />
      {error && <span className="invalid-feedback">{error}</span>}
    </div>
  );
};
FormSocialInput.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string
};
FormSocialInput.defaultProps = {
  type: "text"
};
export default FormSocialInput;
