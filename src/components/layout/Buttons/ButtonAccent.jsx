import React from "react";
import PropTypes from "prop-types";

const ButtonAccent = (props) => {
  return (
    <button
      className="bg-primary p-4 text-white font-semibold rounded-xl"
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

ButtonAccent.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default ButtonAccent;
