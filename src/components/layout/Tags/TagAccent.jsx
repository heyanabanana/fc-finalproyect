import React from "react";
import PropTypes from "prop-types";

const TagGray = (props) => {
  return (
    <span
      value={props.value}
      key={props.key}
      className="w-auto px-2 py-1 m-1 uppercase leading-wide font-semibold text-xs rounded-md  bg-primary text-white"
    >
      {props.skill}
    </span>
  );
};

TagGray.propTypes = {
  skill: PropTypes.string,
  value: PropTypes.string,
  key: PropTypes.string,
};

export default TagGray;
