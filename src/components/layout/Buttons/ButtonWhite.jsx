import React from "react";
import PropTypes from "prop-types";

const ButtonWhite = (props) => {
  return (
    <button
      className="bg-white font-semibold px-4 py-2 rounded-lg border border-gray-medium flex items-center hover:bg-gray-light"
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

ButtonWhite.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonWhite;
