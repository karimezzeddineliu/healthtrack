import React, { useState } from 'react';
import axios from 'axios';
function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/contact', values)
      .then(res => {
        if(res.data === "Success") {
            alert("Message Sent Successfully!");
            setValues({name: '', email: '', message: ''}); 
        } else {
            alert("Failed to send message");
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="container py-5 fade-in">
      <div className="row justify-content-center">
        {}
        <div className="col-lg-5 mb-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-white" style={{backgroundColor: '#2bb6a3'}}>
            <h3>Contact Information</h3>
            <p className="mb-4">Fill up the form and our team will get back to you within 24 hours.</p>   
            <div className="mb-4">
              <h5>Our Address</h5>
              <p>Beirut, Lebanon</p>
            </div>
            <div className="mb-4">
              <h5>Phone Number</h5>
              <p>+961 76 896 635</p>
            </div>
            <div className="mb-4">
              <h5>Email Address</h5>
              <p>support@healthtrack.com</p>
            </div>
          </div>
        </div>
        {}
        <div className="col-lg-7">
          <div className="card fresh p-5 h-100">
            <h2 className="mb-4" style={{color: '#333'}}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder=""
                    value={values.name}
                    onChange={handleInput}
                    required 
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder=""
                    value={values.email}
                    onChange={handleInput}
                    required 
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  className="form-control" 
                  rows="5" 
                  placeholder="How can we help you?"
                  value={values.message}
                  onChange={handleInput}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;