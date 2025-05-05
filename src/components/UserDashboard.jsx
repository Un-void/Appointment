import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/appointments/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(res.data);
      } catch (err) {
        setError('Failed to fetch appointments');
      }
    };
    if (user) fetchAppointments();
  }, [user]);

  if (!user) {
    return (
      <div className="text-center mt-40">
        Please <Link to="/login" className="text-blue-400">login</Link> to view your appointments.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-40 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Appointments</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {appointments.length === 0 ? (
        <p className="text-center">No appointments booked.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointments.map((appt) => (
            <div
              key={appt._id}
              className="p-6 shadow-lg rounded-lg bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white"
            >
              <p className="text-xl">Doctor ID: {appt.doctorId}</p>
              <p>Date: {new Date(appt.date).toLocaleDateString()}</p>
              <p>Time: {appt.slot}</p>
              <p>Status: {appt.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;