import React from 'react';
function About() {
  return (
    <div className="container py-5">
      {}
      <section className="mb-5 fade-in">
        <h2>About HealthTrack</h2>
        <p className="text-muted">
            HealthTrack is a lightweight wellness tracking web app designed for students, fitness enthusiasts, and anyone who wants to keep track of their daily activities in a simple way.
        </p>
      </section>
      {}
      <section className="row g-4">
        <div className="col-md-6 fade-in">
          <div className="card fresh p-4 h-100">
            <h5>Our Mission</h5>
            <p className="text-muted">
                We aim to provide a simple, intuitive platform to track daily habits and wellness routines, without overwhelming features or complicated setups.
            </p>
          </div>
        </div>
        <div className="col-md-6 fade-in">
          <div className="card fresh p-4 h-100">
            <h5>Why HealthTrack?</h5>
            <p className="text-muted">
                HealthTrack is built with simplicity in mind. The design is mobile-first, responsive, and uses a clean database structure to keep your logs organized and accessible.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="mt-5 fade-in">
        <h5>How it Works</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item fresh mb-2">1. Create an account and Login.</li>
          <li className="list-group-item fresh mb-2">2. Add daily activities: Exercise, Sleep, Water, Meals, Mood.</li>
          <li className="list-group-item fresh mb-2">3. View a clean table of your history.</li>
        </ul>
      </section>

    </div>
  );
}
export default About;