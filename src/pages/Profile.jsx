// src/pages/Profile.jsx
import React from 'react';
import { Mail, Phone, User, Shield } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="My Profile" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {user?.fullName || user?.username}
                  </h2>
                  <p className="text-gray-600 mt-1">{user?.email}</p>
                  <span className="inline-block mt-3 px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {user?.role || 'User'}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Profile Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Username */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Username
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {user?.username}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Email Address
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {user?.email}
                    </p>
                  </div>
                </div>

                {/* Full Name */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Full Name
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {user?.fullName || 'Not set'}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Role
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {user?.role || 'User'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Account Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">0</div>
                <p className="text-gray-600">Total Logins</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Active</div>
                <p className="text-gray-600">Account Status</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {new Date().toLocaleDateString()}
                </div>
                <p className="text-gray-600">Member Since</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;