import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <h1>Welcome to the University Student Management System</h1>
        <p>Manage Your Academic Journey with Ease</p>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
