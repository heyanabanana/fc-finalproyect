import React from "react";
import PropTypes from "prop-types";
import { CloudUploadIcon } from "@heroicons/react/outline";
const FileInput = (props) => {
  //TODO: CLEAR AND CHANGE FILE TO FILEPOND/PRIMEREACT

  return (
    <span className="flex flex-col mb-8">
      <label htmlFor={props.file} className="text-black font-semibold mb-3">
        {props.label}
      </label>
      <span className="flex items-center">
        <button className=" cursor-pointer bg-gray-dark rounded-xl text-white font-semibold py-3 px-4 w-fit inline-flex items-center">
          <CloudUploadIcon className="w-5" />
          <span className="ml-2">{props.text}</span>{" "}
          <input
            className=" absolute block opacity-0 pin-r pin-t"
            type="file"
            name="vacancyImageFiles"
            onChange={props.onChange}
          />
        </button>
        <span className="flex flex-col ml-5">
          <span className="flex text-xs mb-2">
            <p className="font-semibold text-gray-dark pr-1">
              Archivos soportados:
            </p>
            <p className="font-bold">{props.filesType}</p>
          </span>
          <span className="flex text-xs">
            <p className="font-semibold text-gray-dark pr-1">
              Tamaño de archivo máximo:
            </p>
            <p className="font-bold">{props.filesSize}</p>
          </span>
        </span>
      </span>
    </span>
  );
};

FileInput.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default FileInput;
