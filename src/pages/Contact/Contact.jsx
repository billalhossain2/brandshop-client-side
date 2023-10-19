import React from 'react';
import useTitle from '../../hooks/useTitle';

const Contact = () => {
  useTitle("Contact - Tech Store")
  return (
    <div className="container lg:max-w-[500px] mx-auto p-4 border-[1px] border-solid border-[#f5941d7e] rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p>If you have any questions or need assistance, please don't hesitate to get in touch with us.</p>

      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          className="text-[#F5921D] border-solid border-[#F5921D] border-[1px] font-bold hover:bg-[#F5921D] hover:text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
