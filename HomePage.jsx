import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to University Student Management System
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Manage students, instructors, and administration easily in one platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/register-student"
              className="bg-white text-blue-700 font-semibold py-3 px-6 rounded hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-transparent border border-white py-3 px-6 rounded font-semibold hover:bg-white hover:text-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
            <p className="text-gray-600">
              Easily register and manage student information with our intuitive system.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4">Instructor Dashboard</h2>
            <p className="text-gray-600">
              Instructors can view and manage their assigned students and courses.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4">Admin Management</h2>
            <p className="text-gray-600">
              Full administrative control over users, reports, and system settings.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">Register now and manage your university easily!</p>
          <Link
            to="/register-student"
            className="bg-white text-blue-700 font-semibold py-3 px-6 rounded hover:bg-gray-100"
          >
            Register Student
          </Link>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
