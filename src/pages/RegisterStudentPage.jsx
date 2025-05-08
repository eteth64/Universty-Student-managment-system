import React from 'react';
import { Link } from 'react-router-dom';

function RegisterStudentPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-lg p-10 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Student Registration
        </h2>

        <form className="space-y-6">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-2 text-sm text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2 text-sm text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700" htmlFor="studentId">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. ETS0117/15"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. 0912XXXXXX"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. student@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700" htmlFor="department">
              Department
            </label>
            <select
              id="department"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">-- Select Department --</option>
              <option value="freshman">Freshman</option>
              <option value="software">Software Engineering</option>
              <option value="computer">Computer Engineering</option>
              <option value="electrical">Electrical Engineering</option>
            </select>
          </div>
          {/* <div>
            <label className="block mb-2 text-sm text-gray-700" htmlFor="department">
              Department
            </label>
            <input
              type="text"
              id="department"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. Electrical Engineering"
              required
            />
          </div> */}

          <button
            type="submit"
            className="w-full py-3 text-white transition duration-300 bg-green-600 rounded-xl hover:bg-green-700"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterStudentPage;
