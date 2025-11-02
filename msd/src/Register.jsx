import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // ✅ Frontend validation
    if (!formData.username) newErrors.username = "Username is required";
    else if (formData.username.length < 3)
      newErrors.username = "Username must be at least 3 characters";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // ✅ Send registration data to backend
      const res = await axios.post("http://localhost:3030/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (res.data.success) {
        alert(res.data.message || "Registration successful!");
        navigate("/login"); // ✅ redirect after success
      } else {
        alert(res.data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response && err.response.data) {
        alert(err.response.data.message);
      } else {
        alert("Server not responding. Check backend connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="auth-box">
          <h1>Create Your Account</h1>

          <div className="form-group">
            <label htmlFor="regUsername">Username</label>
            <input
              id="regUsername"
              type="text"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="error-message">{errors.username}</div>
          </div>

          <div className="form-group">
            <label htmlFor="regEmail">Email</label>
            <input
              id="regEmail"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="error-message">{errors.email}</div>
          </div>

          <div className="form-group">
            <label htmlFor="regPassword">Password</label>
            <input
              id="regPassword"
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="error-message">{errors.password}</div>
          </div>

          <div className="form-group">
            <label htmlFor="regConfirmPassword">Confirm Password</label>
            <input
              id="regConfirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className="error-message">{errors.confirmPassword}</div>
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
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

export default Register;
