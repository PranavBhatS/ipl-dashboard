import React from "react";
import { Link } from "react-router-dom";

export const TeamTile = ({ team }) => {
  return (
    <Link to={`/teams/${team.teamName}`}>
      <div className="team-tile">
        <span className="team-tile__icon">
          {team.teamName.match(/\b(\w)/g).join("")}
        </span>
        <h3 className="heading-tertiary team-tile__text">{team.teamName}</h3>
      </div>
    </Link>
  );
};
