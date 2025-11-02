import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="animated-bg"></div>
      
      <section className="hero-with-bg">
        <div className="hero-content">
          <h2>Empowering Women Through Safety</h2>
          <p className="tagline">Find immediate shelter, connect with support networks, and access emergency services when you need them most.</p>
          <div className="hero-buttons">
            <Link to="/sos" className="btn emergency-btn">
              <i className="fas fa-bell"></i> Emergency SOS
            </Link>
            <Link to="/shelter" className="btn shelter-btn">
              <i className="fas fa-map-marker-alt"></i> Find Nearest Shelter
            </Link>
          </div>
        </div>
      </section>

      <section className="safety-features">
        <div className="section-header">
          <h3>Your Safety is Our Priority</h3>
          <p>Comprehensive protection features designed for women's security</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon pulse">
              <i className="fas fa-shield-virus"></i>
            </div>
            <h4>Instant Protection</h4>
            <p>One-tap emergency alerts with your location sent to authorities and trusted contacts</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon pulse">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h4>Smart Shelter Map</h4>
            <p>Real-time updated database of verified women's shelters and safe spaces</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon pulse">
              <i className="fas fa-user-shield"></i>
            </div>
            <h4>Trust Network</h4>
            <p>Connect with verified support groups and community volunteers</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon pulse">
              <i className="fas fa-comments"></i>
            </div>
            <h4>24/7 Support</h4>
            <p>Anonymous chat with trained counselors and legal advisors</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-header">
          <h3>Stories of Safety</h3>
          <p>Hear from women who found help through SheShelter</p>
        </div>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="testimonial-text">"When I needed to leave quickly, SheShelter showed me the nearest safe place. The staff were expecting me and I felt protected immediately."</p>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah M." />
              <div>
                <h5>Sarah M.</h5>
                <p>Survivor & Advocate</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="testimonial-text">"The emergency SOS feature gave me confidence to walk home at night. Knowing help is just one tap away makes all the difference."</p>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya K." />
              <div>
                <h5>Priya K.</h5>
                <p>University Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="emergency-quick-access">
        <Link to="/sos" className="emergency-btn">
          <i className="fas fa-bell"></i> EMERGENCY
        </Link>
      </div>
    </div>
  );
};

export default Home;