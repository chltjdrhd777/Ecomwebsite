import React from "react";
import { Link } from "react-router-dom";
import sampleImg from "images/happy.jpg";

function Main() {
  return (
    <main>
      <div className="row center">
        <div className="card">
          <Link to="/product">
            <img src={sampleImg} alt="product" className="img_medium" />
          </Link>

          <div className="card-body">
            <Link to="/product">
              <h2>Happy money</h2>
            </Link>

            <div className="rating">
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>

            <div className="price">$120</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
