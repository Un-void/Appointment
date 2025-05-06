// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import Logo from '../assets/Logo.png';
// import { AuthContext } from '../context/AuthContext.jsx';
// import Popup from './Popup.jsx';

// const Header = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [showPopup, setShowPopup] = useState(false);

//   const handleLogout = () => {
//     logout();
//     setShowPopup(true);
//     setTimeout(() => {
//       setShowPopup(false);
//       navigate('/');
//     }, 2000); // e.g., show popup for 2 seconds
//   };
//   // const handleLogout = () => {
//   //   logout();
//   //   navigate('/');
//   //   <Popup/>
//   // };

//   return (
//     <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0 
//       w-full sm:w-4/5 m-auto bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl 
//       px-5 mt-3 fixed inset-x-0 top-0 z-50 shadow-md">
//       <div className='flex'>
//         <img src={Logo} alt="" className='h-16 w-16 mx-2'/>
//         <h1 className="font-extrabold text-3xl sm:text-4xl font-mono mt-2">
//           A.Ment
//         </h1>
//       </div>
//       <nav className="flex flex-row items-center gap-2 sm:gap-6 text-base sm:text-lg font-semibold">
//         <Link to="/home" className="hover:underline">Home</Link>
//         {user ? (
//           <>
//             <Link to="/dashboard" className="hover:underline">My Appointments</Link>
//             <button onClick={handleLogout} className="hover:underline rounded-xl bg-white text-black text-sm sm:text-base px-4 py-1">Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:underline">Login</Link>
//             <Link to="/signup" className="hover:underline rounded-xl bg-white text-black text-sm sm:text-base px-4 py-1">SignUp</Link>
//           </>
//         )}
//         <Link to="/contact" className="hover:underline">Contact Us</Link>
//       </nav>
//     </div>
//   );
// };

// export default Header;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Logo from '../assets/Logo.png';
import { AuthContext } from '../context/AuthContext.jsx';
import Popup from './Popup.jsx';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const confirmLogout = () => {
    logout();
    setShowPopup(false);
    navigate('/');
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0
      w-full sm:w-4/5 m-auto bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl
      px-5 mt-3 fixed inset-x-0 top-0 z-50 shadow-md">
      
      <div className='flex'>
        <img src={Logo} alt="" className='h-16 w-16 mx-2'/>
        <h1 className="font-extrabold text-3xl sm:text-4xl font-mono mt-2">
          A.Ment
        </h1>
      </div>

      <nav className="flex flex-row items-center gap-2 sm:gap-6 text-base sm:text-lg font-semibold">
        <Link to="/home" className="hover:underline">Home</Link>

        {user ? (
          <>
            <Link to="/dashboard" className="hover:underline">My Appointments</Link>
            <button 
              onClick={() => setShowPopup(true)} 
              className="hover:underline rounded-xl bg-white text-black text-sm sm:text-base px-4 py-1"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link 
              to="/signup" 
              className="hover:underline rounded-xl bg-white text-black text-sm sm:text-base px-4 py-1"
            >
              SignUp
            </Link>
          </>
        )}

        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </nav>

      {showPopup && (
        <Popup
          message="Are you sure you want to logout?"
          onConfirm={confirmLogout}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Header;
