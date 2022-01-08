import React from "react";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/outline";

const TagGray = (props) => {
  return (
    <span
      className="mr-2 mt-2 uppercase bg-gray-medium rounded-full px-3 py-1 text-sm font-semibold flex items-center w-fit"
      value={props.value}
    >
      <span> {props.skill}</span>
      <button className="text-gray-dark" onClick={props.onClick}>
        <XIcon className="w-4 ml-2" />
      </button>
    </span>
  );
};

TagGray.propTypes = {
  skill: PropTypes.string,
  value: PropTypes.string,
  key: PropTypes.string,
  onClick: PropTypes.func,
};

export default TagGray;
