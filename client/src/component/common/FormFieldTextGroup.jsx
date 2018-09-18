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
  glyphicon,
  id
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
      id={id}
    />
    <label className="form-label" htmlFor={id}>
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
  glyphicon: PropTypes.string
};

FormFieldTextGroup.defaultProps = {
  type: "text"
};

export default FormFieldTextGroup;
