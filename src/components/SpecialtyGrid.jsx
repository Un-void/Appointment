import React, { useState } from 'react';
import { HeartPulse, Bone, Stethoscope, Eye, Sun, Pill, Brain, Syringe, Thermometer, Ear } from 'lucide-react';
import { Link } from 'react-router';

const specialties = [
  { name: 'Cardiology', icon: <HeartPulse size={32} /> },
  { name: 'Orthopedics', icon: <Bone size={32} /> },
  { name: 'Physician', icon: <Stethoscope size={32} /> },
  { name: 'Dermatology', icon: <Sun size={32} /> },
  { name: 'Pediatrics', icon: <Pill size={32} /> },
  { name: 'Neurology', icon: <Brain size={32} /> },
  { name: 'Opthalmology', icon: <Eye size={32} /> },
  { name: 'Fever Clinic', icon: <Thermometer size={32} /> },
  { name: 'ENT', icon: <Ear size={32} /> },
  { name: 'Vaccination', icon: <Syringe size={32} /> },
];

const SpecialtyGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold m-4 pb-4 text-center">Explore Specialties</h2>
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search specialties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 transition-all duration-300 m-5">
        {filteredSpecialties.length === 0 ? (
          <p className="text-center col-span-5">No specialties found.</p>
        ) : (
          filteredSpecialties.map((specialty, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <Link
                key={index}
                to={`/specialty/${specialty.name.toLowerCase()}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col items-center justify-center p-4 bg-blue-100 rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out
                  ${isHovered ? 'scale-110 bg-blue-400' : isAnyHovered ? 'scale-90 opacity-70' : 'scale-100'}
                `}
              >
                <div className="mb-2">{specialty.icon}</div>
                <p className="font-semibold text-center text-sm">{specialty.name}</p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SpecialtyGrid;