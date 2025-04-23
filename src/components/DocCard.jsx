import { useParams, Link } from 'react-router';
import useData from '../utils/useData';
import Logo from '../assets/ProfileLogo.png'

const DocCard = () => {
  const { name, docId } = useParams();
  const specialtyData = useData();

  const doctors = specialtyData[name?.toLowerCase()] ?? [];

  const doctor = doctors.find((doc) => doc.id === parseInt(docId));

  if (!doctor) {
    return (
      <div className="w-[300px] m-auto p-6 shadow-lg rounded-lg mt-[30vh] text-gray-200 font-semibold text-center">
        Doctor not found
      </div>
    );
  }

  return (
    <div className='mt-[30vh] flex'>
      <Link
        to={`/specialty/${name}`}
        className="w-1/12 h-1/5 p-2 ms-[10%] rounded-lg bg-blue-900 text-center text-white hover:bg-blue-800"
      >
        Back
      </Link>
      <div
        className="w-8/12 p-6 mt-6 ms-[5%] h-[70vh] shadow-lg rounded-lg font-semibold bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
        id={doctor.id}
      >
        <div className='flex'>
          <img src={Logo} alt="Logo" className='w-[15%] h-auto max-w-full' />
          <p className="font-bold text-4xl">Dr. {doctor.name}</p>
        </div>
        <p className="text-lg my-5 text-end">- {doctor.specialization}</p>
        <p className="text-xl">Clinic Address - {doctor.city}, {doctor.address}</p>
        <p className="text-xl">Consultation Charges - {doctor.fees} ₹</p>
        <p className="text-md">Connect @- {doctor.email}</p>
        <div className='text-right'>
          <Link className='p-3 bg-blue-900 rounded-lg'>Request an appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default DocCard;