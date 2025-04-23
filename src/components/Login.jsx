import { Link } from 'react-router';
import { Mail, Lock } from 'lucide-react';

const Login = () => {
  return (
      <div className="max-w-md w-full m-auto mt-40">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 font-mono text-center mb-8">
          Login
        </h2>
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
          <div className="space-y-6">
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
                  className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
                  placeholder="Your Email"
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
                  className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
                  placeholder="Your Password"
                />
              </div>
            </div>
            <button
              className="w-full p-3 rounded-lg bg-blue-900 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800"
            >
              Sign In
            </button>
          </div>
          <p className="text-center text-gray-200 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Login;