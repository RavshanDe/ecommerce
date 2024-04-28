import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsTelegram,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";
import "../App.css";
export const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className="text-white mb-0">Sign Up for NewLetter</h2>
              </div>
            </div>
            <form className="col-7">
              <div class="input-group mb-0">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                  required
                />
                <span class="input-group-text" id="basic-addon2">
                  <button className="">Subscribe</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Bog'lanish</h4>
              <div className="text-white">
                <address className="fs-5">Tashkent, Uzbekistan</address>
                <a href="tel:998939984108" className="text-white py-4">
                  <span className="text-warning">Tel:</span> +998 93 998 41 08
                </a>
                <br />
                <a
                  href="mailto:ravshandevxamidov@gmail.com"
                  className="text-white"
                >
                  <span className="text-warning">Email:</span>{" "}
                  ravshandevxamidov@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 py-4">
                  <a href="#" className="text-white">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsTwitter className="text-white fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsTelegram className="text-white fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsFacebook className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Ma'lumotlar</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privecy-policy" className="text-white py-2 mb-1">
                  Maxfiylik va Xavfsizlik
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-white py-2 mb-1"
                >
                  Terms & Conditions
                </Link>
                <Link to="shipping-policy" className="text-white py-2 mb-1">
                  yuk tashish siyosati
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  To'lov qaytarish
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Akkount</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Biz Haqimizda</Link>
                <Link className="text-white py-2 mb-1">FaQ</Link>
                <Link className="text-white py-2 mb-1">
                  Biz Bilan Bog'lanish
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Havolalar</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Aksesuarlar</Link>
                <Link className="text-white py-2 mb-1">Noutbuklar</Link>
                <Link className="text-white py-2 mb-1">Quloqchinlar</Link>
                <Link className="text-white py-2 mb-1">Planshetlar</Link>
                <Link className="text-white py-2 mb-1">Soatlar</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Povered by RavshanDev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
