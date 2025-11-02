import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user data in localStorage:", error);
      }
    } else {
      setUser(null);
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header
      style={{
        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
        padding: "10px 30px",
        color: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="header-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Logo Section */}
        <div
          className="logo"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <i className="fas fa-shield-alt" style={{ fontSize: "1.5rem" }}></i>
          <h1 style={{ fontSize: "1.4rem", fontWeight: "bold" }}>SheShelter</h1>
        </div>

        {/* Navigation Links */}
        <nav
          className={`main-nav ${isMenuOpen ? "active" : ""}`}
          style={{
            display: isMenuOpen ? "block" : "flex",
            alignItems: "center",
            gap: "1.5rem",
            transition: "0.3s",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: isMenuOpen ? "block" : "flex",
              alignItems: "center",
              gap: "1.2rem",
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              <Link to="/" className={isActive("/")} style={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about")} style={linkStyle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/sos" className={isActive("/sos")} style={linkStyle}>
                Emergency SOS
              </Link>
            </li>
            <li>
              <Link
                to="/shelter"
                className={isActive("/shelter")}
                style={linkStyle}
              >
                Shelters
              </Link>
            </li>
            <li>
              <Link
                to="/threat-alert"
                className={isActive("/threat-alert")}
                style={linkStyle}
              >
                Report Threat
              </Link>
            </li>

            {/* ✅ Conditional Login/Profile Rendering */}
            {user ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    style={{
                      ...linkStyle,
                      background: "rgba(255,255,255,0.2)",
                      padding: "6px 12px",
                      borderRadius: "6px",
                    }}
                  >
                    👤 {user?.username || "Profile"}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    style={{
                      background: "white",
                      color: "#2575fc",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.background = "#e0e0e0")}
                    onMouseOut={(e) => (e.target.style.background = "white")}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  style={{
                    ...linkStyle,
                    background: "white",
                    color: "#2575fc",
                    fontWeight: "600",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.background = "#e0e0e0")
                  }
                  onMouseOut={(e) => (e.target.style.background = "white")}
                >
                  Login <i className="fas fa-user"></i>
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="mobile-menu-btn"
          onClick={toggleMenu}
          style={{
            display: "none",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-bars" style={{ fontSize: "1.4rem" }}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
  transition: "0.2s",
};
