import React from "react";
import PropTypes from "prop-types";

const SiteTitle = (props) => {
  return (
    <span className="text-2xl">
      <span className="">{props.title}</span>{" "}
      <span className="text-primary font-semibold">| {props.subtitle}</span>
    </span>
  );
};

SiteTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SiteTitle;
