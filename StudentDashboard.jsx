import React from 'react';

function StudentDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-green-100">
      <h1 className="mb-6 text-4xl font-bold text-green-700">Student Dashboard</h1>
      <p className="max-w-2xl mb-8 text-center text-gray-800">
        Welcome, dear student! 🎓<br />
        Here you can manage your profile, enroll in courses, and view your academic progress.
      </p>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Profile Management */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Manage Profile</h2>
          <p className="text-gray-600">Update your personal information and account settings.</p>
        </div>

        {/* View Courses */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">View Courses</h2>
          <p className="text-gray-600">Explore your enrolled courses and materials.</p>
        </div>

        {/* View Grades */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">View Grades</h2>
          <p className="text-gray-600">Check your grades and track your academic performance.</p>
        </div>

        {/* Academic Calendar or Resources */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Academic Resources</h2>
          <p className="text-gray-600">Access the academic calendar, announcements, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
