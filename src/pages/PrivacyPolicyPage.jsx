import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar />
      <section className="privacy-policy-section">
        <h1>Privacy Policy</h1>
        <p>We are committed to protecting your personal information. All your data will be handled securely.</p>
      </section>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
