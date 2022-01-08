import React from "react";
import PropTypes from "prop-types";

const TagAccent = (props) => {
  return (
    <span
      value={props.value}
      className="w-fit px-3 py-1 m-1 flex items-center uppercase leading-wide font-semibold text-xs rounded-lg  bg-primary text-white "
    >
      {props.skill} <button onClick={props.onClick}>{props.icon}</button>
    </span>
  );
};

TagAccent.propTypes = {
  skill: PropTypes.string,
  value: PropTypes.string,
  key: PropTypes.string,
};

export default TagAccent;
