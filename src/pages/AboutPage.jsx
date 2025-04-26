import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className="about-section">
        <h1>About University Student Management System</h1>
        <p>This platform helps manage students, instructors, and administrators in an efficient way.</p>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
