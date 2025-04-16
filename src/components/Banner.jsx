// // import React from 'react'
// // import Doc from '../assets/Doc.png'

// // const Banner = () => {
// //   return (
// //     <div className='flex flex-row md:flex-row mt-[10%] items-center md:items-start'>
// //       <div className='mt-5 md:mt-[5%] md:ms-[10%] text-lg md:text-2xl font-mono text-white p-3 shadow-2xl bg-blue-600 rounded-md md:h-[12%] w-[90%] md:w-auto'>
// //         <p>Instant Appointments with</p>
// //         <p>BEST doctors. <span className='font-bold text-2xl text-black'>Guaranteed</span></p>
// //         <div className='text-lg font-serif mt-3'>
// //           <p>✔ Hundreds of verified doctors</p>
// //           <p>✔ Lakhs of Satisfied patients</p>
// //           <p>✔ 10K+ patient's first preference</p>
// //         </div>
// //       </div>
// //       <img src={Doc} loading="lazy" className='w-full md:w-[60%]' />
// //     </div>
// //   )
// // }

// // export default Banner
// import React from 'react';
// import Doc from '../assets/Doc.png';

// const Banner = () => {
//   return (
//     <div className="flex flex-row items-center justify-between px-4 py-6 gap-4 mt-40 sm:mt-32 w-full max-w-[1200px] mx-auto flex-wrap">
//       <div className="bg-blue-600 text-white p-4 rounded-md shadow-2xl flex-1 min-w-[280px] max-w-[500px]">
//         <p className="text-xl sm:text-2xl font-mono">Instant Appointments with</p>
//         <p className="text-xl sm:text-2xl font-mono">BEST doctors. <span className="font-bold text-black">Guaranteed</span></p>
//         <div className="mt-4 text-base sm:text-lg font-serif space-y-1">
//           <p>✔ Hundreds of verified doctors</p>
//           <p>✔ Lakhs of Satisfied patients</p>
//           <p>✔ 10K+ patient's first preference</p>
//         </div>
//       </div>
//       <img src={Doc} loading="lazy" alt="Doctor" className="flex-1 min-w-[200px] max-w-[600px] w-full h-auto" />
//     </div>
//   );
// };

// export default Banner;

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
