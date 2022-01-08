import React from "react";
import BoldTitle from "./BoldTitle";

const CardTitle = (props) => {
  return (
    <span className="flex w-full justify-between text-xl mb-8">
      <BoldTitle text={props.text} />
      <button onClick={props.onClick}>{props.icon}</button>
    </span>
  );
};

export default CardTitle;
