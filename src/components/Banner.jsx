import React from 'react';
import Doc from '../assets/Doc.png';
import Doc2 from '../assets/Doc2.png'

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-between p-6 gap-4 mt-40 w-full max-w-[1200px] mx-auto flex-wrap">
      <div className="bg-blue-600 text-white p-4 rounded-md shadow-2xl flex-1 min-w-[280px] max-w-[500px]">
        <p className="text-xl sm:text-2xl font-mono">Instant Appointments with</p>
        <p className="text-xl sm:text-2xl font-mono">BEST doctors. <span className="font-bold text-black">Guaranteed</span></p>
        <div className="mt-4 text-base sm:text-lg font-serif space-y-1">
          <p>✔ Hundreds of verified doctors</p>
          <p>✔ Lakhs of Satisfied patients</p>
          <p>✔ 10K+ patient's first preference</p>
        </div>
      </div>
      <img src={Doc} alt="Doctor" className="hidden xs:block flex-1 min-w-[200px] max-w-[640px] w-full h-auto"/>
      <img src={Doc2} alt="Doctor" className="block xs:hidden flex-1 min-w-[200px] max-w-[640 px] w-full h-auto"/>
    </div>
  );
};

export default Banner;
