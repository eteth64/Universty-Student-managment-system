import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p>For support or inquiries, reach out to us!</p>
        {/* Include your contact details here */}
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
