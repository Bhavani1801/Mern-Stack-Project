import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ThreatAlert = () => {
  const [formData, setFormData] = useState({
    location: '',
    threatType: '',
    description: '',
    urgency: 'medium',
    contact: ''
  });

  const navigate = useNavigate();

  // ✅ Check login status on component mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("⚠️ Please log in first to report a threat.");
      navigate("/login"); // redirect to login
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("You must be logged in to report a threat.");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3030/report-threat", {
        username: user.username, // attach logged-in user's name
        ...formData,
      });

      if (res.data.success) {
        alert("✅ Threat report submitted successfully!");
        setFormData({
          location: '',
          threatType: '',
          description: '',
          urgency: 'medium',
          contact: ''
        });
      } else {
        alert("❌ Failed to submit threat report.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting threat report.");
    }
  };

  return (
    <main className="threat-alert-container">
      <div className="page-header">
        <h2>Report a Threat</h2>
        <p>Help keep your community safe by reporting suspicious activities or threats</p>
      </div>

      <div className="threat-form-container">
        <form className="threat-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter the location of the threat"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="threatType">Type of Threat *</label>
            <select
              id="threatType"
              name="threatType"
              value={formData.threatType}
              onChange={handleChange}
              required
            >
              <option value="">Select threat type</option>
              <option value="harassment">Harassment</option>
              <option value="stalking">Stalking</option>
              <option value="suspicious_activity">Suspicious Activity</option>
              <option value="domestic_violence">Domestic Violence</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Please provide details about the threat"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="urgency">Urgency Level *</label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact">Your Contact Information</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Phone number or email (optional)"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Report Threat</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ThreatAlert;
