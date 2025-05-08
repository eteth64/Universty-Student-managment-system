import React, { useState } from 'react';

const sampleStudents = [
  { id: 'AAU/EC/001/15', name: 'Abel Kebede' },
  { id: 'AAU/EC/002/15', name: 'Sara Mekonnen' },
  { id: 'AAU/EC/003/15', name: 'Mekdes Alemu' },
];

function InstructorGradingPage() {
  const [grades, setGrades] = useState({});

  const handleGradeChange = (studentId, value) => {
    setGrades(prev => ({ ...prev, [studentId]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitted Grades:', grades);
    alert('Grades submitted successfully!');
    // Here you can send to backend via fetch/axios
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-5xl p-8 mx-auto bg-white shadow-md rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-green-700">
          Grade Submission
        </h1>

        <table className="w-full border border-collapse border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="p-3 text-left border border-gray-300">Student ID</th>
              <th className="p-3 text-left border border-gray-300">Full Name</th>
              <th className="p-3 text-left border border-gray-300">Grade</th>
            </tr>
          </thead>
          <tbody>
            {sampleStudents.map(student => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="p-3 border border-gray-300">{student.id}</td>
                <td className="p-3 border border-gray-300">{student.name}</td>
                <td className="p-3 border border-gray-300">
                  <input
                    type="text"
                    placeholder="e.g. 89"
                    value={grades[student.id] || ''}
                    onChange={(e) => handleGradeChange(student.id, e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl"
          >
            Submit Grades
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstructorGradingPage;
