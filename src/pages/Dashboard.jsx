// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Users, BookOpen, GraduationCap, BarChart3 } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { studentService, courseService } from '../services/authService';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [studentsRes, coursesRes] = await Promise.all([
        studentService.getAll(),
        courseService.getAll(),
      ]);
      setStudents(studentsRes.data);
      setCourses(coursesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="Dashboard" />
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={Users}
              title="Total Students"
              value={students.length}
              color="bg-blue-500"
              trend="+12%"
            />
            <StatCard
              icon={BookOpen}
              title="Active Courses"
              value={courses.length}
              color="bg-green-500"
              trend="+3"
            />
            <StatCard
              icon={GraduationCap}
              title="Enrollments"
              value="156"
              color="bg-purple-500"
              trend="+8%"
            />
            <StatCard
              icon={BarChart3}
              title="Avg. Attendance"
              value="87%"
              color="bg-orange-500"
              trend="+2%"
            />
          </div>

          {/* Recent Students and Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Students */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Students
              </h3>
              <div className="space-y-3">
                {students.slice(0, 5).map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold">
                          {student.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{student.name}</p>
                        <p className="text-sm text-gray-500">{student.course}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(student.enrollmentDate).toLocaleDateString()}
                    </span>
                  </div>
                ))}
                {students.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No students yet</p>
                )}
              </div>
            </div>

            {/* Popular Courses */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Available Courses
              </h3>
              <div className="space-y-3">
                {courses.slice(0, 5).map((course) => (
                  <div
                    key={course.id}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium text-gray-800">{course.name}</p>
                      <span className="text-sm text-indigo-600 font-semibold">
                        {course.credits} credits
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{course.duration}</p>
                  </div>
                ))}
                {courses.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No courses yet</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;