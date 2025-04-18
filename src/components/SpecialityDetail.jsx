import { useParams } from 'react-router';
import useData from '../utils/useData';
import { Link } from 'react-router';
import DocCard from './DocCard';

const SpecialtyDetail = () => {
  const { name } = useParams();
  const specialtyData = useData();

  const doctors = specialtyData[name?.toLowerCase()] ?? [];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-40">
      <Link to="/" className="p-3 rounded-md w-[10%] mb-10 bg-blue-400">Back</Link>
      <h2 className="text-2xl text-white font-bold m-auto rounded-xl my-4 p-3 text-center w-[50%] bg-blue-700">
        {name} Doctors ({doctors.length})
      </h2>
      <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {doctors.map((doc) => (
          // <div key={doc.id} className="bg-white p-4 shadow rounded">
          //   <p className="font-semibold">{doc.name}</p>
          //   <p className="text-sm text-gray-600">{doc.specialization}</p>
          // </div>
          <DocCard {...doc} key={doc.id}/>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyDetail;
