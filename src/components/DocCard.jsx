const DocCard = ({ id, name, specialization, city, fees }) => {
    return (
      <div key={id} className="p-6 shadow-lg rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300 text-gray-200 font-semibold justify-around">
        <p className="font-semibold text-2xl m-auto">Dr. {name}</p>
        <p className="text-md mt-5">Based in - {city}</p>
        <p className="text-md mt-3">Meeting Charges - {fees} ₹</p>
        <p className="text-md my-5">{specialization}</p>
        <hr />
        <button className="p-2 rounded-lg mt-4 bg-blue-900  ">Book Now</button>
      </div>
    );
  };
  
  export default DocCard;
  