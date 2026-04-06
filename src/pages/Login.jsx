import React, { useState, useContext } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import CosmicLogo from "../components/CosmicLogo.png";
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+\d{1,3})?[-.\s]?\d{6,}$/;

    if (!value) {
      setErrors("Please enter email or phone number");
      return false;
    }
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      setErrors("Please enter a valid email or phone number");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      setErrors("");
    }
  };

  const handleSendOTP = () => {
    if (validateInput(input)) {
      const userData = {
        name: input.includes("@") ? input.split("@")[0] : "",
        email: input.includes("@") ? input : "",
        phone: input.includes("@") ? "" : input,
        contact: input,
      };

      login(userData);
      navigate("/");
      alert("Login successful! OTP sent to " + input);
      // Add your OTP sending logic here
    }
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="login-container pt-28 pb-10">
      {/* Background Image */}
      <div className="login-background"></div>

      {/* Login Form */}
      <div className="login-form-wrapper">
        <div className="login-form">
          {/* Logo */}
          <div className="logo-section">
            <img src={CosmicLogo} alt="Company Logo" className="company-logo" />
          </div>

          {/* Heading */}
          <h1 className="login-heading">
            Joshi Nirav Bharatkumar
            <br />
            <span className="heading-subtitle">
              Proprietor of Kutch Capital Research
            </span>
          </h1>

          {/* Hindi Text */}
          <div className="hindi-text">ज्ञानं मूलं निवेशः</div>

          {/* Login Title */}
          <h2 className="login-title">Login or Register with Phone or Email</h2>

          {/* Subtitle */}
          <span className="login-subtitle">
            Fast secure access with OTP verification.
          </span>

          {/* Input Section */}
          <div className="input-section">
            <label className="input-label">Phone (WhatsApp Enabled)</label>
            <input
              type="text"
              placeholder="Email or phone"
              className="login-input"
              value={input}
              onChange={handleInputChange}
            />
            <p className="input-helper-text">
              Use WhatsApp number or email. Phone supports optional country code
              (e.g. +91).
            </p>
            {errors && <span className="error-text">{errors}</span>}
          </div>

          {/* Send OTP Button */}
          <button
            className={`send-otp-button ${!input ? "disabled" : ""}`}
            onClick={handleSendOTP}
            disabled={!input}
          >
            Send OTP
          </button>

          {/* Bottom Buttons */}
          <div className="button-row">
            <button
              className="bottom-button return-home-btn"
              onClick={handleReturnHome}
            >
              <AiOutlineHome className="button-icon" />
              <span>Return to Home</span>
            </button>
            <button className="bottom-button nri-login-btn">
              <AiOutlineUser className="button-icon" />
              <span>NRI Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
