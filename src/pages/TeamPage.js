import React from "react";
import { useParams } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { useCurrentTeamDetailHook } from "../context/TeamHook";

export const TeamPage = () => {
  const { teamName } = useParams();
  const teamDetails = useCurrentTeamDetailHook(teamName);
  return (
    <>
      {/* <div>{teamName}</div> */}
      <SideBar />
    </>
  );
};
