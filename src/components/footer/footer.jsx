import React from "react";
import { Link, useLocation } from "react-router-dom";
import NoFooterPaths from "./NoFooterPaths";
import "./footer.css";
import Logo from "../../assets/main-logo.jpg";
const Footer = () => {
  const { pathname } = useLocation();

  if (NoFooterPaths().includes(pathname)) {
    return null;
  }
  return (
    <footer className="main mt-4 pt-5 bg-black text-white">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-9 col-12">
            <div className="row" id="ft-links">
              <div className="col-lg-3 col-12">
                <div className="position-relative">
                  <div className="mb-3 pb-2 d-flex justify-content-between border-dark-subtle border-bottom border-bottom-lg-0">
                    <h4 className="text-white">Service</h4>
                    <a
                      className="d-block d-lg-none stretched-link text-body"
                      data-bs-toggle="collapse"
                      href="#collapseLanding"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseLanding"
                    >
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <div
                    className="collapse d-lg-block"
                    id="collapseLanding"
                    data-bs-parent="#ft-links"
                  >
                    <ul className="list-unstyled mb-0 py-3 py-lg-0">
                      <li className="mb-2">
                      Free Books
                      </li>
                      <li className="mb-2">
                      1000+ Books
                      </li>
                      <li className="mb-2">
                      Easy Access
                      </li>
                      <li className="mb-2">
                      24/7 Support
                      </li>
                      <li className="mb-2">
                      100% Pivacy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div>
                  <div className="mb-3 pb-2 d-flex justify-content-between border-dark-subtle border-bottom border-bottom-lg-0 position-relative">
                    <h4 className="text-white">Pages</h4>
                    <a
                      className="d-block d-lg-none stretched-link text-body"
                      data-bs-toggle="collapse"
                      href="#collapseAccounts"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseAccounts"
                    >
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <div
                    className="collapse d-lg-block"
                    id="collapseAccounts"
                    data-bs-parent="#ft-links"
                  >
                    <ul className="list-unstyled mb-0 py-3 py-lg-0">
                      <li className="mb-2">
                      <Link to="/" className="text-white text-decoration-none">Home</Link>
                      </li>
                      <li className="mb-2">
                      <Link to="/" className="text-white text-decoration-none">Categories</Link>
                      </li>
                      <li className="mb-2">
                      <Link to="/about-us" className="text-white text-decoration-none">About Us</Link>
                      </li>
                      <li className="mb-2">
                      <Link to="/" className="text-white text-decoration-none">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="mb-3 pb-2 d-flex justify-content-between border-dark-subtle border-bottom border-bottom-lg-0 position-relative">
                  <h4 className="text-white">Technology</h4>
                  <a
                    className="d-block d-lg-none stretched-link text-body"
                    data-bs-toggle="collapse"
                    href="#collapseResources"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseResources"
                  >
                    <i className="bi bi-chevron-down"></i>
                  </a>
                </div>
                <div
                  className="collapse d-lg-block"
                  id="collapseResources"
                  data-bs-parent="#ft-links"
                >
                  <ul className="list-unstyled mb-0 py-3 py-lg-0">
                    <li className="mb-2">
                    React.js
                    </li>
                    <li className="mb-2">
                      Sanity
                    </li>
                    <li className="mb-2">
                    Bootstrap
                    </li>
                    <li className="mb-2">
                    HTML
                    </li>
                    <li className="mb-2">
                    CSS
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-12">
              <div className="mb-3 pb-2 d-flex justify-content-between border-dark-subtle border-bottom border-bottom-lg-0">
                    <h4 className="text-white">Creators</h4>
                    <a
                      className="d-block d-lg-none stretched-link text-body"
                      data-bs-toggle="collapse"
                      href="#collapseLanding"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseLanding"
                    >
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <div
                    className="collapse d-lg-block"
                    id="collapseLanding"
                    data-bs-parent="#ft-links"
                  >
                    <ul className="list-unstyled mb-0 py-3 py-lg-0">
                      <li className="mb-2">
                      Kushagra Pandey
                      </li>
                      <li className="mb-2">
                      Abhey Tiwari
                      </li>
                      <li className="mb-2">
                      Arjav Jain
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="mt-4">
              <h4 className="text-white mb-4">Headquarters</h4>
              <p className="">
                Codescandy, 412, Residency Rd, Shanthala Nagar, Ashok Nagar,
                Bengaluru, Karnataka, India 560025
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-lg-5 pb-4  mb-4">
        <div className="row align-items-center">
          <div className="col-md-3 col">
            <Link className="mb-4 mb-lg-0 d-block" to="/">
              <img src={Logo} height={30} width={30} alt="Pustak Ghar" />
            </Link>
          </div>
          <div className="col-md-9 col-lg-6">
            <div className="small mb-3 mb-lg-0 text-lg-center">
              Copyright © 2024
              <span >
               <Link to="/" cassName="text-primary">{" "}Pustak Ghar{" "}</Link>
              </span>
              | Project
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-md-end">
              <a href="#!" className="text-reset btn btn-instagram btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76c-.198.509-.33 1.091-.372 1.945C0 5.556 0 5.829 0 8s.01 2.444.048 3.297c.04.854.174 1.436.372 1.945.198.509.487.972.923 1.417a3.918 3.918 0 0 0 1.417.923c.509.198 1.091.33 1.945.372.853.039 1.126.048 3.297.048s2.444-.01 3.297-.048c.854-.04 1.436-.174 1.945-.372a3.913 3.913 0 0 0 1.417-.923 3.927 3.927 0 0 0 .923-1.417c.198-.509.33-1.091.372-1.945.039-.853.048-1.126.048-3.297s-.01-2.444-.048-3.297c-.04-.854-.174-1.436-.372-1.945a3.917 3.917 0 0 0-.923-1.417A3.918 3.918 0 0 0 13.24.42c-.509-.198-1.091-.33-1.945-.372C10.444 0 10.171 0 8 0Zm0 1.459c2.137 0 2.39.01 3.233.047.78.035 1.204.166 1.485.276.373.145.64.32.92.6.28.28.455.547.6.92.11.281.24.705.276 1.485.037.843.047 1.096.047 3.233s-.01 2.39-.047 3.233c-.035.78-.166 1.204-.276 1.485-.145.373-.32.64-.6.92-.28.28-.547.455-.92.6-.281.11-.705.24-1.485.276-.843.037-1.096.047-3.233.047s-2.39-.01-3.233-.047c-.78-.035-1.204-.166-1.485-.276a2.458 2.458 0 0 1-.92-.6 2.458 2.458 0 0 1-.6-.92c-.11-.281-.24-.705-.276-1.485-.037-.843-.047-1.096-.047-3.233s.01-2.39.047-3.233c.035-.78.166-1.204.276-1.485.145-.373.32-.64.6-.92.28-.28.547-.455.92-.6.281-.11.705-.24 1.485-.276.843-.037 1.096-.047 3.233-.047ZM8 3.889a4.111 4.111 0 1 0 0 8.222 4.111 4.111 0 0 0 0-8.222Zm0 1.459a2.652 2.652 0 1 1 0 5.304 2.652 2.652 0 0 1 0-5.304Zm5.223-.42a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92Z" />
                </svg>
              </a>
              <a href="#!" className="text-reset btn btn-facebook btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 4.02 2.938 7.347 6.75 7.93v-5.62H4.897V8h1.852V6.291c0-1.837 1.096-2.85 2.769-2.85.803 0 1.646.144 1.646.144v1.811H9.953c-.915 0-1.2.57-1.2 1.152V8H11.6l-.297 2.31H8.75v5.62C12.563 15.348 16 12.02 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
              </a>
              <a href="#!" className="text-reset btn btn-twitter btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15C11.073 15 14.318 9.804 14.318 5.146c0-.172 0-.343-.012-.513A7.59 7.59 0 0 0 16 3.107a7.466 7.466 0 0 1-2.12.583 3.72 3.72 0 0 0 1.641-2.038 7.51 7.51 0 0 1-2.384.912A3.706 3.706 0 0 0 7.875 6.14a10.508 10.508 0 0 1-7.63-3.867 3.654 3.654 0 0 0-.5 1.865c0 1.289.656 2.426 1.656 3.095a3.695 3.695 0 0 1-1.68-.464v.047a3.707 3.707 0 0 0 2.965 3.632 3.716 3.716 0 0 1-.974.13 3.72 3.72 0 0 1-.698-.067 3.708 3.708 0 0 0 3.465 2.575A7.443 7.443 0 0 1 0 13.292a10.463 10.463 0 0 0 5.661 1.656" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
