import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <section className="admin-dashboard-section">
        <h1>Admin Dashboard</h1>
        <p>Manage students, instructors, and system settings here.</p>
      </section>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
// This code defines the AdminDashboard component, which serves as the main interface for administrators to manage various aspects of the university student management system. It includes a navigation bar and a footer for consistent layout across the application.