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
                      href="#collapseService" // Changed ID
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseService"
                    >
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <div
                    className="collapse d-lg-block"
                    id="collapseService" // Changed ID
                    data-bs-parent="#ft-links"
                  >
                    <ul className="list-unstyled mb-0 py-3 py-lg-0">
                      <li className="mb-2">Free Books</li>
                      <li className="mb-2">1000+ Books</li>
                      <li className="mb-2">Easy Access</li>
                      <li className="mb-2">24/7 Support</li>
                      <li className="mb-2">100% Privacy</li>
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
                        <Link
                          to="/"
                          className="text-white text-decoration-none"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/"
                          className="text-white text-decoration-none"
                        >
                          Categories
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/about-us"
                          className="text-white text-decoration-none"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/"
                          className="text-white text-decoration-none"
                        >
                          Contact Us
                        </Link>
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
                    <li className="mb-2">React.js</li>
                    <li className="mb-2">Sanity</li>
                    <li className="mb-2">Bootstrap</li>
                    <li className="mb-2">HTML</li>
                    <li className="mb-2">CSS</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="position-relative">
                  <div className="mb-3 pb-2 d-flex justify-content-between border-dark-subtle border-bottom border-bottom-lg-0">
                    <h4 className="text-white">Creators</h4>
                    <a
                      className="d-block d-lg-none stretched-link text-body"
                      data-bs-toggle="collapse"
                      href="#collapseCreators" // Changed ID
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseCreators"
                    >
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <div
                    className="collapse d-lg-block"
                    id="collapseCreators" // Changed ID
                    data-bs-parent="#ft-links"
                  >
                    <ul className="list-unstyled mb-0 py-3 py-lg-0">
                      <li className="mb-2">Kushagra Pandey</li>
                      <li className="mb-2">Arjav Jain</li>
                      <li className="mb-2">Abhey Tiwari</li>
                    </ul>
                  </div>
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
              <span>
                <Link to="/" className="text-primary">
                  {" "}
                  Pustak Ghar{" "}
                </Link>
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
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76c-.198.509-.33 1.091-.372 1.945C0 5.556 0 5.829 0 8s.01 2.444.048 3.297c.04.854.174 1.436.372 1.945.198.509.487.972.923 1.417a3.918 3.918 0 0 0 1.417.923c.509.198 1.091.33 1.945.372.853.039 1.126.048 3.297.048s2.444-.01 3.297-.048c.854-.04 1.436-.174 1.945-.372a3.913 3.913 0 0 0 1.417-.923 3.927 3.927 0 0 0 .923-1.417c.198-.509.33-1.091.372-1.945C16 10.444 16 10.171 16 8s-.01-2.444-.048-3.297c-.04-.854-.174-1.436-.372-1.945A3.913 3.913 0 0 0 14.576.42 3.927 3.927 0 0 0 13.16.048C12.307.01 11.724 0 8 0zm0 1.5c3.084 0 3.444.006 4.356.016.851.01 1.36.035 1.694.174.388.163.676.38.917.62.242.242.459.529.62.917.139.334.163.843.174 1.694.01.912.016 1.272.016 4.356s-.006 3.444-.016 4.356c-.01.851-.035 1.36-.174 1.694a2.91 2.91 0 0 1-.62.917 2.917 2.917 0 0 1-.917.62c-.334.139-.843.163-1.694.174-.912.01-1.272.016-4.356.016s-3.444-.006-4.356-.016c-.851-.01-1.36-.035-1.694-.174a2.911 2.911 0 0 1-.917-.62 2.91 2.91 0 0 1-.62-.917c-.139-.334-.163-.843-.174-1.694C1.506 11.444 1.5 11.084 1.5 8s.006-3.444.016-4.356c.01-.851.035-1.36.174-1.694A2.91 2.91 0 0 1 2.12.62a2.917 2.917 0 0 1 .917-.62c.334-.139.843-.163 1.694-.174C4.556 1.506 4.916 1.5 8 1.5zm0 5.6A2.4 2.4 0 1 0 8 10.5a2.4 2.4 0 0 0 0-4.4zm0 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zm3.51-4.973a.7.7 0 1 0-.02-1.4.7.7 0 0 0 .02 1.4z" />
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
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.582 8 8 8 4.419 0 8-3.58 8-8 0-4.42-3.581-8-8-8zM8 15.5A7.5 7.5 0 1 1 8 1.5a7.5 7.5 0 0 1 0 14zm1.23-11.65h-1.1c-.175 0-.32.1-.32.265v1.102h1.414l-.185 1.462h-1.229V15.5H7.23v-5.302H6v-1.462h1.23V4.45c0-1.18.56-2.213 2.23-2.213 1.058 0 1.755.075 1.755.075v1.953h-1.029c-.513 0-.663.245-.663.655v.898h1.415l-.185 1.462z" />
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
