import React from "react";
import { useParams } from "react-router-dom";
import CandidateProfile from "../components/containers/CandidateProfile";
import candidatesData from "../data/CANDIDATESDATA.json";

const Candidatedetail = () => {
  const candidateId = useParams();
  const candidate = candidatesData[parseInt(candidateId.id, 10)];

  return (
    <div className="h-screen w-screen bg-gray-light p-10">
      <CandidateProfile
        avatar={candidate.avatar}
        fullname={candidate.fullname}
        city={candidate.city}
        country={candidate.country}
      />
      {console.log(candidate.avatar)}
    </div>
  );
};

export default Candidatedetail;
