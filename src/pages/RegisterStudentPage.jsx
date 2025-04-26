import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RegisterStudentPage() {
  return (
    <div>
      <Navbar />
      <section className="register-section">
        <h1>Register as a Student</h1>
        <form className="register-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Student ID" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default RegisterStudentPage;
