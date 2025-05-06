import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Calendar, FileText, Search } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="font-sans">
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="absolute inset-0">
          <img src="/hero-image.jpg" alt="Healthcare Hero" className="w-full h-full object-cover opacity-50"/>
        </div>
        <div className="relative z-10 text-center px-4">
          <img
            src="/logo.png"
            alt="Healthcare App Logo"
            className="mx-auto h-20 mb-6"
          />
          <h1 className="text-5xl font-bold mb-4">Revolutionizing Healthcare</h1>
          <p className="text-2xl mb-8">Connect with doctors, manage your health, all in one place.</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-16 bg-white text-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">What We Do</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Our platform empowers patients to connect with top doctors, schedule appointments effortlessly, and manage health records securely, all in a user-friendly environment.
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Calendar size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Appointment Scheduling</h3>
                <p>Book appointments with doctors easily and quickly.</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
            >
              <FileText size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Secure Health Records</h3>
                <p>Store and access your health records securely.</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Search size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Doctor Directory</h3>
                <p>Find and connect with top doctors in your area.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;