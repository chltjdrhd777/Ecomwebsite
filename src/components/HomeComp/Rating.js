import React from "react";

function Rating({ ratings }) {
  const ratingMaker = (number) => {
    if (ratings >= number) {
      return "fa fa-star";
    } else if (ratings >= number - 0.5) {
      return "fas fa-star-half-alt";
    } else {
      return "far fa-star";
    }
  };

  return (
    <div className="rating">
      <span>
        <i className={ratingMaker(1)}></i>
      </span>
      <span>
        <i className={ratingMaker(2)}></i>
      </span>
      <span>
        <i className={ratingMaker(3)}></i>
      </span>
      <span>
        <i className={ratingMaker(4)}></i>
      </span>
      <span>
        <i className={ratingMaker(5)}></i>
      </span>
    </div>
  );
}

export default Rating;
