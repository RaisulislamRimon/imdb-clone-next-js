import React from "react";

const Card = ({ result }) => {
  return (
    <div>
      <div>
        {/* {result.id} */}
        <p>{result.title}</p>
        <h1>Title</h1>
        <p>Overview</p>
      </div>
    </div>
  );
};

export default Card;
