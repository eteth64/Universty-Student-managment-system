import React from 'react';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Admin Dashboard</h1>
      <p className="text-gray-800 text-center max-w-2xl">
        Welcome, Administrator! 🛠️
        <br />
        Manage students, instructors, courses, and system settings.
      </p>
    </div>
  );
}

export default AdminDashboard;
