import React from "react";
import PropTypes from "prop-types";

const FormFieldTextGroup = ({
  type,
  label,
  value,
  onChange,
  error,
  name,
  placeholder,
  id,
  disabled,
  className,
  cLabel
}) => (
  <div className="form-content">
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className={className}
      placeholder={placeholder}
      id={id}
      disabled={disabled}
    />
      <label className={cLabel} htmlFor={id}>
      {label}
    </label>
    {error && <span className="invalid-feedback">{error}</span>}
  </div>
);

FormFieldTextGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string,
  className: PropTypes.object.isRequired
};

FormFieldTextGroup.defaultProps = {
  type: "text"
};

export default FormFieldTextGroup;
