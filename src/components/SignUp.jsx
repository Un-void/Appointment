import React, { useState } from 'react';
import Popup from './Popup'; 

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Submitted", form);
    setForm({
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
    setShowPopup(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md relative mt-40 sm:mt-32">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#0353a4]">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-[#0353a4] text-white p-2 rounded-lg hover:bg-[#023e7d] transition"
        >
          Sign Up
        </button>
      </form>

      {showPopup && <Popup message="Signup Successful!" onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default SignUp;
