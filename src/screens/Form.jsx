import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BloodDonationForm = () => {

    const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    bloodGroup: '',
    email: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add form submission logic here
  };

  return (
    <div className="bg-red-600 shadow-md rounded-lg p-8 max-w-lg mx-auto mt-32">
       <img src="https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-back-icon-navigation-png-image_10603473.png" className='w-10 h-10 rounded-full border-2 border-stone-800 cursor-pointer' onClick={() => Navigate('/blood')} />
      <h2 className="text-2xl font-bold text-center mb-6">Blood Donation Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Blood Group */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodGroup">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-500 focus:border-red-500"
            required
          >
            <option value="" disabled>Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-500 focus:border-red-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-500 focus:border-red-500"
            placeholder="123-456-7890"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            onClick={() => Navigate("/home") }
            className="bg-red-900 text-white font-bold py-2 px-4 rounded-full hover:bg-red-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BloodDonationForm;
