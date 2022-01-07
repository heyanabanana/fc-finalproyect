import React from "react";
import Candidatetable from "../components/containers/CandidateTable";
import DashboardMenu from "../components/containers/DashboardMenu";

const CandidatesDashboard = () => {
  return (
    <div className="bg-gray-light h-screen p-10">
      <DashboardMenu />
      <span className="flex justify-center items-center mt-5">
        <Candidatetable />
      </span>
    </div>
  );
};

export default CandidatesDashboard;
