import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password " />
      <BreadCrumb title="Forgot Password " />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset your Password</h3>
                <p className="text-center my-2 mb-3">
                  We will you an email to reset your password
                </p>
                <form className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center flex-column gap-15 align-items-center mt-3">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
