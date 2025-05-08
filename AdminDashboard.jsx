import React from 'react';

function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-200">
      <h1 className="mb-6 text-4xl font-bold text-green-700">Admin Dashboard</h1>
      <p className="max-w-2xl mb-8 text-center text-gray-800">
        Welcome, Administrator! 🛠️<br />
        From here, you can register users, manage courses, and control the entire system.
      </p>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Register Students */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Register Students</h2>
          <p className="text-gray-600">Add new students to the system and assign them to courses.</p>
        </div>

        {/* Register Instructors */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Register Instructors</h2>
          <p className="text-gray-600">Add new instructors and manage their assignments.</p>
        </div>

        {/* Manage Courses */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Manage Courses</h2>
          <p className="text-gray-600">Create, update, or delete course offerings.</p>
        </div>

        {/* Manage Users */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Manage Users</h2>
          <p className="text-gray-600">View, edit, or remove any student or instructor profile.</p>
        </div>

        {/* System Settings */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">System Settings</h2>
          <p className="text-gray-600">Configure platform-wide settings and permissions.</p>
        </div>

        {/* Reports */}
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Reports & Analytics</h2>
          <p className="text-gray-600">Monitor user activity, course performance, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
