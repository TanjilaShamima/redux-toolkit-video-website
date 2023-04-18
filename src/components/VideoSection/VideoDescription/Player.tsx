import React from "react";
interface Props {
  videoLink: string;
  title: string;
}

const Player = ({ videoLink, title }: Props) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={videoLink}
      title={title}
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Player;
