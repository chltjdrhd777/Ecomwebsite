import React from "react";
import { data } from "data";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  const { id } = props.match.params;
  const targetProduct = data.products.find((x) => x.id === parseInt(id));

  const ColumnMiddle = () => {
    return (
      <div className="col-1">
        <ul>
          <li>
            <h1>{targetProduct.name}</h1>
          </li>
          <li>
            <Rating ratings={targetProduct.rating} />
          </li>
          <li>Price : $ {targetProduct.price}</li>
          <li>
            Description : <p>{targetProduct.description}</p>
          </li>
        </ul>
      </div>
    );
  };

  const ColumnRight = () => {
    return (
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="Price">& {targetProduct.price}</div>
              </div>
            </li>

            <li>
              <div className="row">
                <div>Status</div>
                {targetProduct.countStocks > 0 ? (
                  <span className="success">In stock</span>
                ) : (
                  <span className="error">Unavailable</span>
                )}
              </div>
            </li>

            <li>
              <button className="primary block">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <main>
      {targetProduct === undefined ? (
        <div>404 not found</div>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img src={`/${targetProduct.image}`} alt="product_image" />
            </div>

            <ColumnMiddle />

            <ColumnRight />
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductScreen;
