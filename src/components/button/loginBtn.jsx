import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginBtn = () => {
  return (
    <section className="Login bg-black p-3">
      <Container>
        <div className=" text-center mb-2">
          <h2 className="m-3 text-white">"Access Your Account"</h2>
          <p className="m-3 text-white">
            "Sign in to unlock all features and get the best experience on our
            platform."
          </p>
          <Link className="btn btn-primary px-5 mt-2 mb-3" to="/login">Log-In</Link>
        </div>
      </Container>
    </section>
  );
};
export default LoginBtn;