// import { Link } from 'react-router';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// const ContactUs = () => {
//   return (
//       <div className="max-w-5xl mx-auto mt-40 pb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
//           Contact Us
//         </h2>
//         <div className="bg-gradient-to-br w-8/12 m-auto from-gray-800 via-gray-700 to-gray-600 p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
//           <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-200">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-200">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-1 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-200">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 className="mt-1 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
//                 placeholder="Your Message"
//               ></textarea>
//             </div>
//             <button
//               className="w-full p-3 rounded-lg bg-blue-700 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 flex items-center justify-center space-x-2"
//             >
//               <span>Send Message</span>
//               <Send size={20} />
//             </button>
//           </div>
//         </div>
//         <div className="bg-gradient-to-br w-8/12 m-auto from-blue-900 via-blue-600 to-blue-300 p-8 rounded-xl shadow-lg translate-y-10 text-gray-200">
//             <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Mail size={24} className="text-blue-200" />
//                 <p>support@A.ment332.com</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone size={24} className="text-blue-200" />
//                 <p>+91 123-456-7890</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin size={24} className="text-blue-200" />
//                 <p>123 Health St, Wellness City, India</p>
//               </div>
//             </div>
//         </div> 
//       </div>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-40 pb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        Contact Us
      </h2>
      <div className="bg-gradient-to-br w-8/12 m-auto from-gray-800 via-gray-700 to-gray-600 p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
        {success && <p className="text-green-500 text-center">{success}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-700 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <Send size={20} />
          </button>
        </form>
      </div>
      <div className="bg-gradient-to-br w-8/12 m-auto from-blue-900 via-blue-600 to-blue-300 p-8 rounded-xl shadow-lg translate-y-10 text-gray-200">
        <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail size={24} className="text-blue-200" />
            <p>support@A.ment332.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone size={24} className="text-blue-200" />
            <p>+91 123-456-7890</p>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin size={24} className="text-blue-200" />
            <p>123 Health St, Wellness City, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;