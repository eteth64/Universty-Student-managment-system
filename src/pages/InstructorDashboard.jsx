import React from 'react';

function InstructorDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Instructor Dashboard</h1>
      <p className="text-gray-800 text-center max-w-2xl">
        Welcome, Instructor! 👨‍🏫
        <br />
        Manage your classes, assignments, and interact with students.
      </p>
    </div>
  );
}

export default InstructorDashboard;
