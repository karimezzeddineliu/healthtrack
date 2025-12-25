import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/signup', values)
      .then(res => {
        alert('Signup successful! Please login.');
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
        setError("Signup failed. Please try again.");
      });
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 fade-in">
          <div className="card fresh p-4">
            <h3 className="text-center mb-4">Create Account</h3>
            {}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small text-muted">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small text-muted">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small text-muted">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleInput}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
            <p className="text-center mt-3 small">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;