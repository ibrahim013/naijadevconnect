import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormFieldTextGroup = ({
  type,
  label,
  value,
  onChange,
  error,
  name,
  placeholder,
  glyphicon
}) => (
  <div className="form-content">
    <i className={glyphicon} />
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className={classNames("form-data", {"is-invalid": error})}
      placeholder={placeholder}
      id={name}
    />
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    {error && <span className="invalid-feedback">{error}</span>}
  </div>
);

FormFieldTextGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  glyphicon: PropTypes.string
};

FormFieldTextGroup.defaultProps = {
  type: "text"
};

export default FormFieldTextGroup;
