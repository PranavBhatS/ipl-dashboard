import React from "react";
import { Header } from "../components/Header";
import { TeamTile } from "../components/TeamTile";
import { useTeamHooks } from "../context/TeamHook";

export const HomePage = () => {
  const teams = useTeamHooks();

  return (
    <div>
      <div className="homePage">
        <Header name="IPL Dashboard" />
        <div className="team-grid">
          {teams && teams.map((team) => <TeamTile key={team.id} team={team} />)}
        </div>
      </div>
    </div>
  );
};
