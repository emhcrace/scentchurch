import React from "react";
import ReactPlayer from "react-player/youtube";

const Players = ({ url }) => {
  return (
    <>
      <ReactPlayer url={url} width="840" height="500" />
    </>
  );
};

export default Players;
