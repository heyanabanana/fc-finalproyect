import React from "react";
import { useParams } from "react-router-dom";
import CandidateProfile from "../components/containers/CandidateProfile";
import DetailsMenu from "../components/containers/DetailsMenu";
import candidatesData from "../data/CANDIDATESDATA.json";

export function RenderPDF(path) {
  return (
    <iframe
      width="600px"
      height="900px"
      title="Curriculum Vitae candidato"
      src={path}
      className="rounded-2xl w-full h-full"
    >
      {" "}
      <p>This browser does not support PDF!</p>
    </iframe>
  );
}
const Candidatedetail = () => {
  const candidateId = useParams();
  const candidate = candidatesData[parseInt(candidateId.id, 10)];

  return (
    <div className="h-screen w-screen bg-gray-light p-10">
      <DetailsMenu />
      <span className="flex justify-evenly">
        <span className="w-2/5 m-5">
          <CandidateProfile
            avatar={candidate.avatar}
            fullname={candidate.fullname}
            city={candidate.city}
            country={candidate.country}
            skills={candidate.skills}
          />
        </span>
        <span className="w-2/4 m-5">{RenderPDF(candidate.curriculum)}</span>
      </span>
    </div>
  );
};

export default Candidatedetail;
