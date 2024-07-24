import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/main-logo.jpg";
import './signup.css';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const validateFirstName = () => {
        const isValidFirstName = /^[a-zA-Z]+$/;
        setFirstNameValid(isValidFirstName.test(firstName));
    };
    const validateLastName = () => {
        const isValidLastName = /^[a-zA-Z]+$/;
        setLastNameValid(isValidLastName.test(lastName));
    };
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailRegex.test(email));
    };
    const validatePhoneNumber = () => {
        setPhoneNumberValid(phoneNumber.trim() !== '' && /[0-9]/.test(phoneNumber));
    };
    const validatePassword = () => {
        setPasswordValid(password.trim().length > 0);
    };
    const validateConfirmPassword = () => {
        setConfirmPasswordValid(confirmPassword === password && confirmPassword !== '');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validatePhoneNumber();

        // Check if both email and password are valid
        if (emailValid && passwordValid && confirmPassword && phoneNumber) {
            // Perform form submission logic here
            console.log('Form submitted');
        }
    };

    return (
        <div>
            <Navbar collapseOnSelect className="bg-white">
                <Nav className="login-signup px-2 py-2">
                    If you have an account,
                    <Nav.Link href="/login" className="login-Button p-0 text-primary">Log in</Nav.Link>
                </Nav>
            </Navbar>
            <div className="form-signin m-auto mt-5">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src={Logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
                    <Row>
                        <Col sm>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className={`form-control ${firstNameValid ? '' : 'border border-danger'}`}
                                    id="floatingInput"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    onBlur={validateFirstName}
                                />
                                <label htmlFor="floatingInput">First Name</label>
                                {!firstNameValid && <div className="text-danger mb-3">Invalid First Name.</div>}
                            </div>
                        </Col>
                        <Col sm>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className={`form-control ${lastNameValid ? '' : 'border border-danger'}`}
                                    id="floatingInput"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    onBlur={validateLastName}
                                />
                                <label htmlFor="floatingInput">Last Name</label>
                                {!lastNameValid && <div className="text-danger mb-3">Invalid Last Name.</div>}
                            </div>
                        </Col>
                    </Row>
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
                        {!emailValid && <div className="text-danger mb-3">Please enter a valid email address.</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="tel"
                            className={`form-control input-phone ${phoneNumberValid ? '' : 'border border-danger'}`}
                            id="floatingInput"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            onBlur={validatePhoneNumber}
                        />
                        <label htmlFor="floatingInput">Phone Number</label>
                        {!phoneNumberValid && <div className="text-danger mb-3">Please enter a valid phone number.</div>}
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
                        {!passwordValid && <div className="text-danger mb-2">Please enter a password.</div>}
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
                    <div className="form-floating">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className={`form-control ${confirmPasswordValid ? '' : 'border border-danger'}`}
                            id="floatingPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={validateConfirmPassword}
                        />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                        {(!confirmPasswordValid && confirmPassword !== '') && (
                            <div className="text-danger mb-2">Passwords do not match.</div>
                            )}
                        <div className="input-group-append">
                            <button
                                className="eye-btn"
                                type="button"
                                onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                            >
                                <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                            </button>
                        </div>
                    </div>
                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <a href="/" className="btn btn-primary w-100 mb-3 py-2" type="submit">Sign Up</a>
                </form>
            </div>
        </div>
    );
};
export default Signup;