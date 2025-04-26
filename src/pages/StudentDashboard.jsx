import React from 'react';

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Student Dashboard</h1>
      <p className="text-gray-800 text-center max-w-2xl">
        Welcome, dear student! 🎓
        <br />
        Here you can manage your profile, view courses, and more.
      </p>
    </div>
  );
}

export default StudentDashboard;
