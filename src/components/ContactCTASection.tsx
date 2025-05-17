'use client';

import { useState } from 'react';

export default function ContactCTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/contactus2.jpg')" }} // replace with your image path
    >
      <div className=" bg-opacity-60 w-full h-full absolute inset-0 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h4 className="text-base text-blue-300 uppercase mb-2 tracking-wide">Contact Us</h4>
          <h2 className="text-4xl text-white md:text-5xl font-bold leading-tight">
            Ready to Experience <br /> <span className="text-blue-400">Upstage Yourself</span>?
          </h2>
        </div>
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-200 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Let’s Get Started
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg w-full max-w-lg p-8 relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Get in Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
