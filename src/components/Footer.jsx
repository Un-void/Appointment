import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001233] text-white py-6 mt-10 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">A.Ment</h2>
          <p className="text-sm text-gray-300">Doctor Appointment Manager App</p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:text-blue-300 transition">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-blue-300 transition">Terms</a>
          <a href="#" className="text-sm hover:text-blue-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
