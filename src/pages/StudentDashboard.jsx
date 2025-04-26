import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function StudentDashboard() {
  return (
    <div>
      <Navbar />
      <section className="student-dashboard-section">
        <h1>Student Dashboard</h1>
        <p>View your courses, grades, and notifications here.</p>
      </section>
      <Footer />
    </div>
  );
}

export default StudentDashboard;
