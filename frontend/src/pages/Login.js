import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', values)
      .then(res => {
        if(res.data === "Success") {
            localStorage.setItem("user", JSON.stringify(values));
            window.dispatchEvent(new Event("storage"));
            navigate('/tracker');
        } else {
            setError("Invalid Email or Password");
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 fade-in">
          <div className="card fresh p-4">
            <h3 className="text-center mb-4">Welcome Back</h3>
            {}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p className="text-center mt-3 small">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;