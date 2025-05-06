// import { Link } from 'react-router';
// import { Mail, Lock } from 'lucide-react';

// const Login = () => {
//   return (
//       <div className="max-w-md w-full m-auto mt-40">
//         <h2 className="text-3xl md:text-5xl font-bold text-blue-900 font-mono text-center mb-8">
//           Login
//         </h2>
//         <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-200">
//                 Email
//               </label>
//               <div className="mt-1 relative">
//                 <Mail size={20} className="absolute left-3 top-3.5 text-gray-400" />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
//                   placeholder="Your Email"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-200">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <Lock size={20} className="absolute left-3 top-3.5 text-gray-400" />
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
//                   placeholder="Your Password"
//                 />
//               </div>
//             </div>
//             <button
//               className="w-full p-3 rounded-lg bg-blue-900 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800"
//             >
//               Sign In
//             </button>
//           </div>
//           <p className="text-center text-gray-200 mt-6">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-blue-400 hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock } from 'lucide-react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      login(res.data.token);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md w-full m-auto mt-40">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-900 font-mono text-center mb-8">
        Login
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
          <button type="submit" className="w-full p-3 rounded-lg bg-blue-900 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800">
            Sign In
          </button>
        </form>
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