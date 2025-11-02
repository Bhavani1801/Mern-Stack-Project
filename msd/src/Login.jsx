import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = "Username or email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3030/login", {
        username: formData.username, // backend expects "username"
        password: formData.password,
      });

      if (res.data.success) {
        alert("✅ Login successful!");

        // ✅ Save login info
        localStorage.setItem(
          "user",
          JSON.stringify({ username: formData.username })
        );

        // ✅ Redirect to home
        navigate("/");
      } else {
        alert(res.data.message || "❌ Invalid credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Login failed! Check your credentials or server.");
    }
  };

  return (
    <div className="auth-container">
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="auth-box">
          <h1>Login to Your Account</h1>

          <div className="form-group">
            <label htmlFor="user">Username or Email</label>
            <input
              id="user"
              type="text"
              name="username"
              placeholder="Enter your username or email"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="error-message" id="usernameError">
              {errors.username}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="error-message" id="passwordError">
              {errors.password}
            </div>
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
            <Link to="/" className="back-link">
              ← Back to Home
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
