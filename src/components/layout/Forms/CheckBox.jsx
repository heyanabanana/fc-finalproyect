import React from "react";

const CheckBox = React.forwardRef(
  ({ placeholder, type, value, name, change, ...rest }, ref) => {
    return (
        <input
          type="checkbox"
          className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          name={name}
          ref={ref}
          {...rest}
        />
    );
  }
);


export default CheckBox;
