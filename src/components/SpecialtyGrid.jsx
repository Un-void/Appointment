// import React, { useState } from 'react';
// import { LucideHeartPulse, LucideBone, LucideStethoscope, LucideEye, LucideSun, Tooth, LucideBrain, LucideSyringe, LucideThermometer, LucideEar } from 'lucide-react';

// const specialties = [
//   { name: 'Cardiology', icon: <LucideHeartPulse size={32} /> },
//   { name: 'Orthopedics', icon: <LucideBone size={32} /> },
//   { name: 'General', icon: <LucideStethoscope size={32} /> },
//   { name: 'Ophthalmology', icon: <LucideEye size={32} /> },
//   { name: 'Dermatology', icon: <LucideSun size={32} /> },
//   { name: 'Dentistry', icon: <Tooth size={32} /> },
//   { name: 'Neurology', icon: <LucideBrain size={32} /> },
//   { name: 'Vaccination', icon: <LucideSyringe size={32} /> },
//   { name: 'Fever Clinic', icon: <LucideThermometer size={32} /> },
//   { name: 'ENT', icon: <LucideEar size={32} /> },
// ];

// const SpecialtyGrid = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Explore Specialties</h2>
//       <div className="grid grid-cols-5 grid-rows-2 gap-4 transition-all duration-300">
//         {specialties.map((specialty, index) => {
//           const isHovered = hoveredIndex === index;
//           const isAnyHovered = hoveredIndex !== null;

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className={`flex flex-col items-center justify-center p-4 bg-blue-100 rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out 
//                 ${isHovered ? 'scale-110' : isAnyHovered ? 'scale-90 opacity-70' : 'scale-100'}
//               `}
//             >
//               <div className="mb-2">{specialty.icon}</div>
//               <p className="font-semibold text-center text-sm">{specialty.name}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SpecialtyGrid;
import React, { useState } from 'react';
import {
  HeartPulse,
  Bone,
  Stethoscope,
  Eye,
  Sun,
  Pill,
  Brain,
  Syringe,
  Thermometer,
  Ear,
} from 'lucide-react';

const specialties = [
  { name: 'Cardiology', icon: <HeartPulse size={32} /> },
  { name: 'Orthopedics', icon: <Bone size={32} /> },
  { name: 'General', icon: <Stethoscope size={32} /> },
  { name: 'Ophthalmology', icon: <Eye size={32} /> },
  { name: 'Dermatology', icon: <Sun size={32} /> },
  { name: 'Dentistry', icon: <Pill size={32} /> },
  { name: 'Neurology', icon: <Brain size={32} /> },
  { name: 'Vaccination', icon: <Syringe size={32} /> },
  { name: 'Fever Clinic', icon: <Thermometer size={32} /> },
  { name: 'ENT', icon: <Ear size={32} /> },
];

const SpecialtyGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold m-4 pb-4 text-center ">Explore Specialties</h2>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 transition-all duration-300 m-5">
        {specialties.map((specialty, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <div key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}
              className={`flex flex-col items-center justify-center p-4 bg-blue-100 rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out 
                ${isHovered ? 'scale-110 bg-blue-400' : isAnyHovered ? 'scale-90 opacity-70' : 'scale-100'}
              `}
            >
              <div className="mb-2">{specialty.icon}</div>
              <p className="font-semibold text-center text-sm">{specialty.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialtyGrid;
