import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormTextAreaGroup = ({
  type,
  value,
  onChange,
  info,
  name,
  placeholder,
  glyphicon
}) => (
  <div className="form-content-i">
    <i className={glyphicon} />
    <textarea
      value={value}
      onChange={onChange}
      name={name}
      className={classNames("form-data text", {"is-info": info})}
      placeholder={placeholder}
    />
    {info && <span className="info">{info}</span>}
  </div>
);

FormTextAreaGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  glyphicon: PropTypes.string
};

export default FormTextAreaGroup;
