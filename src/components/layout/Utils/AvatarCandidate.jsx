import React from "react";

const AvatarCandidate = (props) => {
  return (
    <img
      src={props.avatar}
      alt={props.fullname}
      className="w-32 h-32 overflow-hidden rounded-3xl border border-4 mr-5"
    />
  );
};

export default AvatarCandidate;
