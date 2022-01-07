import React from "react";
import SiteTitle from "../layout/Site/SiteTitle";
import UserMenu from "../layout/Site/UserMenu";

const DashboardMenu = () => {
  return (
    <span className="flex flex-col md:flex-row md:items-center items-right justify-between">
      <SiteTitle title="Open BootCamp" subtitle="Alumnos" />
      <UserMenu />
    </span>
  );
};

export default DashboardMenu;
