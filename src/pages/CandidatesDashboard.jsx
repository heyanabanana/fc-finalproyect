import React from "react";
import Candidatetable from "../components/containers/CandidateTable";
import DashboardMenu from "../components/containers/DashboardMenu";

const CandidatesDashboard = () => {
  return (
    <div className="bg-gray-light h-screen w-full p-10">
      <DashboardMenu />
      <span className="flex justify-center h-auto items-center mt-5 bg-gray-light">
        <Candidatetable />
      </span>
    </div>
  );
};

export default CandidatesDashboard;
