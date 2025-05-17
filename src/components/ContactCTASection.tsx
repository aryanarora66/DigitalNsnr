'use client';

import { useEffect, useState } from 'react';

export default function ContactCTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormOpen(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timer if component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once after initial render

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsFormOpen(false);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/contactus2.jpg')" }}
    >
      <div className="bg-opacity-60 w-full h-full absolute inset-0 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h4 className="text-base text-blue-300 uppercase mb-2 tracking-wide">Contact Us</h4>
          <h2 className="text-4xl text-white md:text-5xl font-bold leading-tight">
            Ready to Experience <br /> <span className="text-blue-400">Upstage Yourself</span>?
          </h2>
        </div>
        {/* <div className="flex justify-center md:justify-end">
          <button
            // onClick={() => setIsFormOpen(true)}
            className="bg-blue-200 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Let's Get Started
          </button>
        </div> */}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50 transition-all duration-300">
          <div className="bg-white rounded-xl w-full max-w-lg p-8 relative shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black transition-colors"
              aria-label="Close form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="mb-6">
              <div className="w-16 h-1 bg-blue-500 mb-6 mx-auto rounded-full"></div>
              <h3 className="text-2xl font-bold text-center text-gray-800">Get in Touch</h3>
              <p className="text-center text-gray-500 mt-2">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="seo">SEO & Content Marketing</option>
                  <option value="ppc">PPC & Paid Advertising</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="branding">Branding & Design</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Request
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
