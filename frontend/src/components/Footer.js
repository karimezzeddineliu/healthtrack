import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer style={{background: 'linear-gradient(135deg, #e0f7f5, #ffffff)', paddingTop: '3rem', paddingBottom: '3rem'}}>
      <div className="container">
        <div className="row g-4">
          {}
          <div className="col-md-4 text-center text-md-start fade-in">
            <h3 style={{color: '#2bb6a3', fontWeight: 700, marginBottom: '0.5rem'}}>HealthTrack</h3>
            <p className="small text-muted">
              Track your wellness, privacy-first. Simple, beautiful, and easy to use.
            </p>
          </div>
          {}
          <div className="col-md-4 text-center fade-in">
            <h6 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/features" className="text-muted text-decoration-none">Features</Link></li>
              <li><Link to="/tracker" className="text-muted text-decoration-none">Tracker</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          {}
          <div className="col-md-4 text-center text-md-end fade-in">
            <h6 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <BsFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <BsTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <BsInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <BsLinkedin />
              </a>
            </div>
          </div>

        </div>
        <hr style={{margin: '2rem 0', borderColor: 'rgba(43,182,163,0.2)'}} />
        <div className="text-center small text-muted fade-in">
          © {new Date().getFullYear()} HealthTrack — Built by Karim Ezziddine
        </div>
      </div>
      {}
      <style>{`
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          color: #2bb6a3;
          font-size: 1.2rem;
          box-shadow: 0 4px 12px rgba(43,182,163,0.15);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #2bb6a3;
          color: #ffffff;
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 6px 18px rgba(43,182,163,0.25);
        }
        @media (max-width: 767px){
          .social-icon { width: 32px; height: 32px; font-size: 1rem; }
        }
      `}</style>
    </footer>
  );
}
export default Footer;