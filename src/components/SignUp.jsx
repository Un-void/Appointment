import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { User, Mail, Lock } from 'lucide-react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Sign-up failed');
    }
  };

  return (
    <div className="max-w-md w-full m-auto mt-40">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-mono text-center mb-8">
        Sign Up
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="bg-gradient-to-br w-full from-gray-800 via-gray-700 to-gray-600 p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Full Name
            </label>
            <div className="mt-1 relative">
              <User size={20} className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
                placeholder="Your Full Name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <div className="mt-1 relative">
              <Mail size={20} className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <div className="mt-1 relative">
              <Lock size={20} className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
                placeholder="Your Password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-900 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-200 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;