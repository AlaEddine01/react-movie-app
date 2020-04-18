import React from "react";

const Rating = (props) => {
  const { count, change } = props;
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      star.push(
        <span onClick={(e) => change(i + 1)}>
          <i
            className="material-icons"
            style={{ fontSize: "20px", color: "gold", width: "20px" }}
          >
            star_rate
          </i>
        </span>
      );
    } else {
      star.push(
        <span onClick={(e) => change(i + 1)}>
          <i
            className="material-icons"
            style={{ fontSize: "20px", color: "grey", width: "20px" }}
          >
            star_border
          </i>
        </span>
      );
    }
  }
  return <div className="card_movie_rating">{star}</div>;
};
export default Rating;
