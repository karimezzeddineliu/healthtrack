import React from 'react';
import { Link } from 'react-router-dom';
import { BsShieldCheck, BsLightningCharge, BsPhone } from 'react-icons/bs';
import heroImg from '../assets/logo.png';
function Home() {
  return (
    <div className="container" style={{overflowX: 'hidden'}}>
      {}
      <section className="row align-items-center min-vh-75 py-5 fade-in">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="display-4 mb-3" style={{fontWeight: 800, letterSpacing: '-1px', color: '#1e293b'}}>
            Master Your Health <br />
            <span style={{
              background: 'linear-gradient(135deg, #2bb6a3 0%, #1f8c7d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              One Day at a Time.
            </span>
          </h1>
          <p className="lead text-muted mb-4" style={{maxWidth: '500px'}}>
            Track exercise, sleep, water, and mood in a simple environment.
            Now connected to a MySQL database for permanent storage.
          </p>
          <div className="d-flex gap-3">
            <Link to="/signup" className="btn btn-primary btn-lg px-4 shadow-sm">
              Get Started Free
            </Link>
            <Link to="/features" className="btn btn-outline-primary btn-lg px-4">
              Explore Features
            </Link>
          </div>
          <div className="mt-4 pt-3 d-flex align-items-center gap-3 text-muted small">
            <div className="d-flex align-items-center">
              <BsShieldCheck className="me-1 text-primary"/> Secure
            </div>
            <div className="vr"></div>
            <div className="d-flex align-items-center">
              <BsLightningCharge className="me-1 text-primary"/> Fast
            </div>
            <div className="vr"></div>
            <div className="d-flex align-items-center">
              <BsPhone className="me-1 text-primary"/> Mobile Ready
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center position-relative fade-in" style={{animationDelay: '0.2s'}}>
          {}
          <div className="position-absolute top-50 start-50 translate-middle"
               style={{
                 width: '350px', height: '350px',
                 background: 'radial-gradient(circle, rgba(43,182,163,0.15) 0%, rgba(255,255,255,0) 70%)',
                 zIndex: -1, borderRadius: '50%'
               }}>
          </div>
          <img src={heroImg} alt="HealthTrack Interface"
               className="img-fluid"
               style={{maxHeight: '400px', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))', transform: 'scale(1.05)'}}
          />
        </div>
      </section>
      {}
      <section className="py-5 mb-5 fade-in" style={{animationDelay: '0.4s'}}>
        <div className="text-center mb-5">
          <h2 style={{fontWeight: 700, color: '#1e293b'}}>Why HealthTrack?</h2>
          <p className="text-muted">Built for modern life. Simple enough for anyone, powerful enough for you.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card fresh h-100 p-4 text-center border-0 hover-lift">
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                   style={{width: 60, height: 60, background: '#e0f2f1', borderRadius: '50%', color: '#2bb6a3'}}>
                <BsShieldCheck size={28} />
              </div>
              <h5 className="fw-bold">Data Privacy</h5>
              <p className="text-muted small">Your data is stored in your local database. We never sell your personal wellness history.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card fresh h-100 p-4 text-center border-0 hover-lift">
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                   style={{width: 60, height: 60, background: '#e0f2f1', borderRadius: '50%', color: '#2bb6a3'}}>
                <BsPhone size={28} />
              </div>
              <h5 className="fw-bold">Any Device</h5>
              <p className="text-muted small">Start on your laptop, continue on your phone. Our responsive design fits your lifestyle.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card fresh h-100 p-4 text-center border-0 hover-lift">
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                   style={{width: 60, height: 60, background: '#e0f2f1', borderRadius: '50%', color: '#2bb6a3'}}>
                <BsLightningCharge size={28} />
              </div>
              <h5 className="fw-bold">Instant Insights</h5>
              <p className="text-muted small">Log in seconds. View your history instantly. No clutter, just the data you need.</p>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-5 my-5 text-center fade-in" style={{animationDelay: '0.6s'}}>
        <div className="card fresh p-5 border-0 bg-primary text-white position-relative overflow-hidden"
             style={{background: 'linear-gradient(135deg, #2bb6a3 0%, #1a5c53 100%)'}}>
          <div className="position-relative z-1">
            <h2 className="fw-bold text-white mb-3">Ready to transform your habits?</h2>
            <p className="mb-4 text-white-50">Join now and start tracking your wellness journey today.</p>
            <Link to="/signup" className="btn btn-light btn-lg px-5 fw-bold" style={{color: '#2bb6a3'}}>
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
export default Home;