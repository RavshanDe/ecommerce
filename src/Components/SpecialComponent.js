import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialComponent = () => {
  return (
    <div className="col-6 mb-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Samsung Galaxy S24 Ultra</h6>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={4}
              edit={false}
            />
            <p className="price">
              <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <Link className="button">Add to Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialComponent;
