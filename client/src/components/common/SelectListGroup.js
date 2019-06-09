import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  let selectOptions;

  console.log(options);

  if (name === "made" || name === "model") {
    selectOptions = options.map(option => {
      return (
        <option key={option.key} value={option.props.value}>
          {option.props.value}
        </option>
      );
    });
  } else {
    selectOptions = options.map(option => {
      return (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      );
    });
  }

  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
