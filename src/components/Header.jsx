import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between  h-auto rounded-2xl w-4/5 m-auto bg-[#bde0fe] border-blue-700 border-2 items-center p-2 mt-3 fixed inset-x-0 top-0">
      <h1 className="font-extrabold text-4xl ms-[3%] font-mono">
        A.Ment
      </h1>
      <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-lg font-semibold me-[5%]">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/signup" className="hover:underline rounded-xl bg-white text-black text-base px-4">SignUp</Link>
      </nav>
    </div>
  );
};

export default Header;
