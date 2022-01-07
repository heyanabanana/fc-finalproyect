import React from "react";

const LoginImage = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="pl-20 object-center object-cover hidden xl:inline w-3/4"
    />
  );
};

export default LoginImage;
