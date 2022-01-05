import React from "react";
import PropTypes from "prop-types";

const TextInput = (props) => {
  return (
    <input
      type={props.type}
      className="bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
      placeholder={props.placeholder}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
