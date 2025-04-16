import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h3 className="text-xl font-semibold text-[#0353a4] mb-4">{message}</h3>
        <button
          onClick={onClose}
          className="bg-[#0353a4] text-white px-4 py-2 rounded-lg hover:bg-[#023e7d] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
