import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormInputTextGroup = ({
  type,
  value,
  onChange,
  info,
  error,
  name,
  placeholder,
}) => (
  <div className="form-content-i">
  {error && <span className="invalid-feedback-p">{error}</span>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      error={error}
      className={classNames("form-data", {"is-info": info, "is-invalid": error})}
      placeholder={placeholder}
    />
    {info && <span className="info">{info}</span>}
  </div>
);

FormInputTextGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string
};

FormInputTextGroup.defaultProps = {
  type: "text"
};

export default FormInputTextGroup;
