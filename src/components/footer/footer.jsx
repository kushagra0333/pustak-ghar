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
                  <div className="mb-3 pb-2 d-flex justify-content-center border-dark-subtle border-bottom border-bottom-lg-0">
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
                  <div className="mb-3 pb-2 d-flex justify-content-center border-dark-subtle border-bottom border-bottom-lg-0 position-relative">
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
                <div className="mb-3 pb-2 d-flex justify-content-center border-dark-subtle border-bottom border-bottom-lg-0 position-relative">
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
                  <div className="mb-3 pb-2 d-flex justify-content-center border-dark-subtle border-bottom border-bottom-lg-0">
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
            <div className="mt-4 ">
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
      className="bi bi-instagram text-white"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>
              </a>
              <a href="#!" className="text-reset btn btn-facebook btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.13v-3.622h3.13v-2.671c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.762v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z" />
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
