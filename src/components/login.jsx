import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/main-logo.jpg";
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = () => {
        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailRegex.test(email));
    };

    const validatePassword = () => {
        setPasswordValid(password.trim().length > 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();

        // Check if both email and password are valid
        if (emailValid && passwordValid) {
            // Perform form submission logic here
            console.log('Form submitted');
        }
    };

    return (
        <div>
            <Navbar collapseOnSelect className="bg-white">
                <Nav className="login-signup px-2 py-2">
                    If you don't have account,
                    <Nav.Link as={Link} to="/signup" className="signup-Button p-0 text-primary">Sign Up</Nav.Link>
                </Nav>
            </Navbar>
            <div className="form-signin m-auto mt-5">
                <form onSubmit={handleSubmit}>
                    <Link to="/">
                    <img className="mb-4" src={Logo} alt="" width="72" height="57" />
                    </Link>
                    <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

                    <div className="form-floating">
                        <input
                            type="email"
                            className={`form-control ${emailValid ? '' : 'border border-danger'}`}
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        {!emailValid && <div className="text-danger">Please enter a valid email address.</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className={`form-control ${passwordValid ? '' : 'border border-danger'}`}
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {!passwordValid && <div className="text-danger ">Please enter a password.</div>}
                        <div className="input-group-append">
                            <button
                                className="eye-btn"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </button>
                        </div>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <Link to='/' className="btn btn-primary w-100 mb-3 py-2" type="submit">Log in</Link>
                    <Link to='/signup' className="btn btn-primary w-100 py-2" type="button">Create an Account</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
