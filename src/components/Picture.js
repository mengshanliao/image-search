import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.original} alt="" />
      </div>
      <p>Photographer : {data.photographer}</p>
      <a href={data.src.original} target="_blank" rel="noreferrer">
        Download image
      </a>
    </div>
  );
};

export default Picture;
