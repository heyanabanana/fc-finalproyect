import React from "react";
import { Link } from "react-router-dom";
import SiteTitle from "../layout/Site/SiteTitle";
import UserMenu from "../layout/Site/UserMenu";

const DashboardMenu = () => {
  return (
    <span className="flex flex-col md:flex-row md:items-center items-right justify-between">
      <Link to="/dashboard">
        <button className="w-fit pb-5">
          <SiteTitle title="Open BootCamp" subtitle="Alumnos" />
        </button>
      </Link>
      <UserMenu />
    </span>
  );
};

export default DashboardMenu;
