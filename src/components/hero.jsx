import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import Boy from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className="hero bg-black">
      <div className="container col-xxl-8 px-4 py-4">
        <div className="row flex-lg-row-reverse align-items-center g-4 py-3">
          <div className="hero-image col-12 col-md-6 col-lg-6 text-center">
            <img
              className="d-block mx-auto img-fluid"
              src={Boy}
              alt="Bootstrap Themes"
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 text-white">
            <h1 className="display-5 fw-bold lh-1 mb-3">Your Next Great Read</h1>
            <p className="lead">
              Explore a vast collection of e-books across various genres and
              subjects. Our platform offers high-quality, easy-to-read digital
              books, perfect for your reading pleasure. Enjoy the convenience of
              downloading your favorite titles instantly and start reading on
              any device.
            </p>
            <div className="d-md-flex justify-content-center">
              <Link to="/about-us" className="btn btn-primary btn-lg px-5">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
