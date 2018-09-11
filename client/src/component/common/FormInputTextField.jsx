import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormInputTextGroup = ({
  type,
  value,
  onChange,
  info,
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
      className={classNames("form-data", {"is-info": info})}
      placeholder={placeholder}
    />
    <br/>
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
  glyphicon: PropTypes.string
};

FormInputTextGroup.defaultProps = {
  type: "text"
};

export default FormInputTextGroup;
