import React from "react";

export const MainMenuButton = ({ url, fn }) => {
  return (
    <button onClick={fn}>
      <img src={url} alt="main-logo" width={36} />
    </button>
  );
};
