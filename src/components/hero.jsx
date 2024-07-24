import React from "react";
import "./hero.css";
import { Link, useLocation } from "react-router-dom";
import Boy from "../assets/hero-image.jpg";
const Hero = () => {
  return (
    <div className="hero bg-black">
      <div class="container col-xxl-8">
        <div class="row  flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6 hero-image">
            <img
              class="d-block mx-lg-auto img-fluid"
              src={Boy}
              alt="Bootstrap Themes"
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
          <div class="col-lg-6 text-white ">
            <h1 class="display-5 fw-bold lh-1 mb-3">
            Your Next Great Read
            </h1>
            <p class="lead">
              Explore a vast collection of e-books across various genres and
              subjects. Our platform offers high-quality, easy-to-read digital
              books, perfect for your reading pleasure. Enjoy the convenience of
              downloading your favorite titles instantly and start reading on
              any device.
            </p>
            <div class="d-md-flex justify-content-md-start">
              <Link to="/about-us" type="button" class="btn btn-primary btn-lg px-5 m-auto">
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
