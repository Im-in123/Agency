import React from "react";

const Stars = (props) => {
  if (!props.stars) return;
  const starCount = props.stars;
  const starsArray = [];

  for (let i = 0; i < starCount; i++) {
    starsArray.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m233-80 93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Z" />
      </svg>
    );
  }

  return <div>{starsArray}</div>;
};

export default Stars;
