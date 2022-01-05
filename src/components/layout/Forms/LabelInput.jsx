import React from "react";
import PropTypes from "prop-types";

const LabelInput = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="text-black font-semibold mb-3">
      {props.label}
    </label>
  );
};

LabelInput.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
};

export default LabelInput;
