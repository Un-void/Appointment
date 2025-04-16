import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0 
      w-full sm:w-4/5 m-auto bg-[#bde0fe] border-blue-700 border-2 rounded-2xl 
      p-4 mt-3 fixed inset-x-0 top-0 z-50 shadow-md">
      
      <h1 className="font-extrabold text-3xl sm:text-4xl font-mono">
        A.Ment
      </h1>

      <nav className="flex flex-row items-center gap-2 sm:gap-6 text-base sm:text-lg font-semibold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/signup" className="hover:underline rounded-xl bg-white text-black text-sm sm:text-base px-4 py-1">
          SignUp
        </Link>
      </nav>
    </div>
  );
};

export default Header;
