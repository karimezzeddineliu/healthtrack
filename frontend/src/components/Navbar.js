import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
function Navbar() {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          HealthTrack
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            {}
            {auth && (
              <li className="nav-item">
                <Link className="nav-link" to="/tracker" style={{color: '#2bb6a3', fontWeight: 'bold'}}>Tracker</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {}
            {auth ? (
              <li className="nav-item">
                <button className="btn btn-outline-danger ms-2 btn-sm mt-1" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary ms-2" to="/signup">Sign Up</Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;