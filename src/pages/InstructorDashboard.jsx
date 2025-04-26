import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function InstructorDashboard() {
  return (
    <div>
      <Navbar />
      <section className="instructor-dashboard-section">
        <h1>Instructor Dashboard</h1>
        <p>Manage your courses, students, and grades here.</p>
      </section>
      <Footer />
    </div>
  );
}

export default InstructorDashboard;
