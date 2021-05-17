import React from "react";

export const Header = ({name}) => {
  return (
    <div className="header-section">
      <h1 className="app__name heading-primary--sub">{name}</h1>
    </div>
  );
};
