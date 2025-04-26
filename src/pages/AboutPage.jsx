import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">About Us</h1>
      <p className="text-gray-700 text-center max-w-2xl">
        University Portal is a modern web platform to easily manage university students, instructors, and admin tasks.
        <br />
        Our mission is to simplify education management through technology.
      </p>
    </div>
  );
}

export default AboutPage;
