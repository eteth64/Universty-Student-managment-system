import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LoginPage() {
  return (
    <div>
      <Navbar />
      <section className="login-section">
        <h1>Login</h1>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default LoginPage;
// This code defines a LoginPage component for a university management system. The component includes a Navbar at the top, a login form with fields for email and password, and a Footer at the bottom. The form is styled with CSS classes for layout and design. The component is exported for use in other parts of the application. The LoginPage component is a functional component that returns a div containing the Navbar, login form, and Footer.