import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormSelectGroup = ({
  value,
  onChange,
  info,
  name,
  options,
  error
}) => {
  const selectedOption = options.map(option => (
    <option key={option.value}>{option.label}</option>
  ));
  return (
    <div className="form-content-i">
      {error && <span className="invalid-feedback-p">{error}</span>}
      <select
        value={value}
        onChange={onChange}
        name={name}
        error={error}
        className={classNames("form-data", {
          "is-info": info,
          "is-invalid": error
        })}
      >
        {selectedOption}
      </select>
      {info && <span className="info">{info}</span>}
    </div>
  );
};

FormSelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string
};

export default FormSelectGroup;
