import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  let location = useLocation();
  console.log(location);
  const { grid } = props;
  return (
    <>
      <div
        className={` ${
          location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"
        }  `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-02.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 packs multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={3}
              edit={false}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              popularised in the 1960s with
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="/images/prodcompare.svg" alt="addCar" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="addCar" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="addCar" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"
        }  `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-02.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 packs multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={3}
              edit={false}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              popularised in the 1960s with
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="/images/prodcompare.svg" alt="addCar" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="addCar" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="addCar" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
