import React from 'react';
import {
  BsShieldLockFill,
  BsDatabaseFill,
  BsGlobe,
  BsJournalCheck,
  BsPhone,
  BsLightningChargeFill
} from 'react-icons/bs';
const featuresData = [
  {
    icon: <BsShieldLockFill size={32} color="#2bb6a3" />,
    title: 'Simple Login',
    desc: 'A straightforward login system using username and password to keep your personal logs separate.'
  },
  {
    icon: <BsDatabaseFill size={32} color="#2bb6a3" />,
    title: 'MySQL Database',
    desc: 'Your data is saved permanently in a local MySQL database, so you never lose your history.'
  },
  {
    icon: <BsGlobe size={32} color="#2bb6a3" />,
    title: 'Access Anywhere',
    desc: 'Log in from your browser and view your stored data instantly.'
  },
  {
    icon: <BsJournalCheck size={32} color="#2bb6a3" />,
    title: 'Activity Tracking',
    desc: 'Track Exercise, Sleep, Water, and Mood. Add, Edit, or Delete your logs easily.'
  },
  {
    icon: <BsLightningChargeFill size={32} color="#2bb6a3" />,
    title: 'Instant Updates',
    desc: 'The page updates immediately when you add or remove items.'
  },
  {
    icon: <BsPhone size={32} color="#2bb6a3" />,
    title: 'Modern Design',
    desc: 'A clean and beautiful "Glassmorphism" look that works well on all screen sizes.'
  }
];
function Features() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5 fade-in">
        <h2 className="mb-3" style={{color: '#1e293b'}}>Key Features</h2>
        <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>
          HealthTrack is designed to be simple and effective. We use a
          <strong> standard database connection</strong> to keep your records safe and organized.
        </p>
      </div>
      <div className="row g-4">
        {featuresData.map((f, i) => (
          <div className="col-md-6 col-lg-4 fade-in" key={i} style={{animationDelay: `${i * 100}ms`}}>
            <div className="card fresh h-100 p-4 d-flex flex-column align-items-start">
              <div className="feature-icon mb-3" style={{
                width: 50, height: 50,
                background: 'rgba(43,182,163,0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {f.icon}
              </div>
              <h5 className="mb-2" style={{fontWeight: 700, color: '#1e293b'}}>{f.title}</h5>
              <p className="text-muted mb-0 small" style={{lineHeight: '1.6'}}>
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Features;