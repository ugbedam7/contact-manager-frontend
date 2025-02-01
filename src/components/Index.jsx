import React from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from './HowItWorks';
import PlatformFeatures from './PlatformFeatures';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div>
      <header
        className="hero-section text-center text-white py-5"
        style={{ backgroundColor: '#3F3F46' }}>
        <div className="container hero">
          <h1 className="display-4 fw-bold">Contact Manager Pro</h1>
          <p className="lead fs-5">
            Effortless Contact Management for Teams & Individuals
          </p>
          <p className="lead">
            <b className="fs-4">"Stay Connected. Stay Organized."</b>
          </p>
          <p className="lead fs-5 hero-cta">
            A modern, intuitive contact management solution designed to keep
            your relationships in sync. Manage contacts, track interactions, and
            collaborate with your team—all in one place.
          </p>
          <div className="mt-4">
            <Link
              to="/signup"
              className="btn btn-lg"
              style={{
                backgroundColor: '#FF6934',
                color: '#ffffff',
                marginRight: '10px'
              }}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <HowItWorks />
      <PlatformFeatures />
      <AboutUs />
      <ContactUs />

      <footer
        className="footer py-3 text-center"
        style={{ backgroundColor: '#1A202C' }}>
        <div className="container text-white">
          <p>&copy; 2025 Pluralcode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
