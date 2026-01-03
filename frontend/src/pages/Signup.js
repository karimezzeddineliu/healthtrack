import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://healthtrack-67vp.onrender.com/signup', values)
            .then(res => {
                if(res.data === "User registered") {
                    alert("Account created successfully! Redirecting to Login...");
                    navigate('/login'); 
                } 
                else if (res.data === "Email already exists") {
                    alert("This email is already registered. Please use a different email or try logging in.");
                }
                else {
                    alert("Signup Failed: " + JSON.stringify(res.data));
                }
            })
            .catch(err => {
                console.log(err);
                alert("Error connecting to server. Please try again.");
            });
    }
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-5 fade-in">
                    <div className="card fresh p-4">
                        <h3 className="text-center mb-4">Create Account</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label small text-muted">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
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
                            <button type="submit" className="btn btn-success w-100">Sign Up</button>
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