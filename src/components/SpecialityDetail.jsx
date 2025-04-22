import { useParams, Link } from 'react-router';
import useData from '../utils/useData';

const SpecialtyDetail = () => {
  const { name } = useParams();
  const specialtyData = useData();

  const doctors = specialtyData[name?.toLowerCase()] ?? [];
  console.log(doctors);

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6">
      <Link
        to="/"
        className="inline-block p-3 rounded-md mb-10 bg-blue-400 text-white hover:bg-blue-500 transition"
      >
        Back
      </Link>
      <h2 className="text-2xl text-white font-bold m-auto rounded-xl my-4 p-3 text-center w-[50%] bg-blue-700">
        {name.charAt(0).toUpperCase() + name.slice(1)} Doctors ({doctors.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="p-6 shadow-lg rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300 text-gray-200 font-semibold justify-around"
          >
            <p className="font-semibold text-2xl m-auto">Dr. {doc.name}</p>
            <p className="text-md mt-5">Based in - {doc.city}</p>
            <p className="text-md mt-3">Meeting Charges - {doc.fees} ₹</p>
            <p className="text-md my-5">{doc.specialization}</p>
            <hr />
            <Link
              className="p-2 rounded-lg mt-4 bg-blue-900 text-center text-white hover:bg-blue-800"
              to={`/specialty/${name}/${doc.id}`}
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyDetail;