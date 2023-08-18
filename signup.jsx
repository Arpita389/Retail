import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    alert(
      `Account created successfully!\nEmail: ${email}\nPassword: ${password}`
    );
    navigate("../menu/menupage");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img
            src="https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg"
            alt="Sign Up"
          />
          <div className="signup-image-overlay">
            <h3>Login to explore our products</h3>
          </div>
        </div>
        <div className="signup-form">
          <h2 className="signup-title">Login</h2>
          <form>
            <div className="form-group">
              <label className="form-label">Email ID:</label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password:</label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="signup-button"
              type="button"
              onClick={handleSignUp}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
