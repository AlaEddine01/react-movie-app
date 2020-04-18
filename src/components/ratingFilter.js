import React from "react";
import Rating from "./rating";

const RatingFilter = ({ count, change }) => {
  return (
    <div>
      <Rating count={count} change={change} />
    </div>
  );
};
export default RatingFilter;
