import React from "react";
import PropTypes from "prop-types";

const FileInput = (props) => {
  return (
    <button class=" cursor-pointer bg-gray-dark rounded-xl text-white font-semibold py-3 px-4 w-fit inline-flex items-center">
      {props.icon}
      <span class="ml-2">{props.text}</span>{" "}
      <input
        class=" absolute block opacity-0 pin-r pin-t"
        type="file"
        name="vacancyImageFiles"
        onChange={props.onChange}
      />
    </button>
  );
};

FileInput.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default FileInput;
