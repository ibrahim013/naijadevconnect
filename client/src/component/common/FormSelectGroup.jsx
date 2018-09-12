import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormSelectGroup = ({
  value,
  onChange,
  info,
  name,
  glyphicon,
  options
}) => {
  const selectedOption = options.map(option => (
    <option key={option.value}>{option.label}</option>
  ))
  return(
<div className="form-content">
    <i className={glyphicon} />
    <select
      value={value}
      onChange={onChange}
      name={name}
      className={classNames("form-data", {"is-info": info})}
    >
    {selectedOption}
    </select>
    {info && <span className="info">{info}</span>}
  </div>
  )
  
};

FormSelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  glyphicon: PropTypes.string
};

FormSelectGroup.defaultProps = {
  type: "text"
};

export default FormSelectGroup;
