import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Card({
  id,
  name,
  image,
  price,
  brand,
  rating,
  numReviews,
  description,
}) {
  return (
    <div className="card" key={id}>
      <Link to={`/product/${id}`}>
        <img src={image} alt="product" className="img_medium" />
      </Link>

      <div className="card-body">
        <Link to={`/product/${id}`}>
          <h2>{name}</h2>
        </Link>

        <Rating ratings={rating} />

        <div className="price">${`${price}`}</div>
      </div>
    </div>
  );
}

export default Card;
