import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointment = ({ doctorId }) => {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (date) {
      const fetchSlots = async () => {
        try {
          const res = await axios.get(
            `http://localhost:5000/api/appointments/doctor/${doctorId}?date=${date}`
          );
          setAvailableSlots(res.data.availableSlots);
          setSlot(''); // Reset slot when date changes
        } catch (err) {
          setError('Failed to fetch available slots');
        }
      };
      fetchSlots();
    }
  }, [date, doctorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to book an appointment');
        return;
      }
      await axios.post(
        'http://localhost:5000/api/appointments/book',
        { doctorId, date, slot },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Appointment booked successfully!');
      setDate('');
      setSlot('');
      setAvailableSlots([]);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to book appointment');
    }
  };

  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">Book an Appointment</h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-200">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]} // Disable past dates
            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        {date && availableSlots.length > 0 && (
          <div>
            <label htmlFor="slot" className="block text-sm font-medium text-gray-200">
              Select Time Slot
            </label>
            <select
              id="slot"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select a slot</option>
              {availableSlots.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        )}
        {date && availableSlots.length === 0 && (
          <p className="text-yellow-400">No slots available for this date.</p>
        )}
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-all duration-300"
          disabled={!date || !slot}
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;