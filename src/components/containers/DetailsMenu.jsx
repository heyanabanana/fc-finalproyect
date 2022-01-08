import React from "react";
import { Link } from "react-router-dom";
import Backbutton from "../layout/Buttons/BackButton";
import SiteTitle from "../layout/Site/SiteTitle";
import UserMenu from "../layout/Site/UserMenu";

const DetailsMenu = () => {
  return (
    <span className="flex flex-col md:flex-row md:items-center items-right justify-between">
      <Link to="/dashboard">
        <Backbutton />
      </Link>
      <UserMenu />
    </span>
  );
};

export default DetailsMenu;
