'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactCTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSectionVisible, setSectionVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [activeField, setActiveField] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isSectionVisible && !isDismissed) {
      const timer = setTimeout(() => {
        setIsFormOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSectionVisible, isDismissed]);

  useEffect(() => {
    if (!isFormOpen) return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsFormOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isFormOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsFormOpen(false);
  };

  const handleDismissSection = () => {
    setIsFormOpen(false);
    setSectionVisible(false);
    setIsDismissed(true);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('contactSectionDismissed', 'true');
    }
  };

  const handleRestoreSection = () => {
    setSectionVisible(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <AnimatePresence>
        {isSectionVisible && (
          <motion.section
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="relative bg-cover bg-center bg-no-repeat text-black"
            style={{ backgroundImage: "url('/contactus2.jpg')" }}
          >
            {/* Highlighted Cross Button for the entire section */}
            <div className="absolute top-4 right-4 z-30">
              <button
                onClick={handleDismissSection}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg border-2 border-white"
                aria-label="Dismiss contact section"
              >
                {/* Inline SVG cross icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="bg-opacity-60 w-full h-full absolute inset-0 z-0" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div>
                <h4 className="text-base text-blue-300 uppercase mb-2 tracking-wide">Contact Us</h4>
                <h2 className="text-4xl text-black md:text-5xl font-bold leading-tight">
                  Ready to Experience <br /> <span className="text-blue-400">Upstage Yourself</span>?
                </h2>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsFormOpen(true)}
                  className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-8 rounded-xl font-bold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-300/50 focus:outline-none"
                >
                  Contact Us Now
                </motion.button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Restore button - appears if section was dismissed */}
      {!isSectionVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRestoreSection}
          className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-600 transition-all duration-300"
        >
          <span>Contact Us</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </motion.button>
      )}

      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 transition-all"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden"
            >
              {/* Timer Circle */}
              <div className="absolute -right-3 -top-3 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-red-100 z-30">
                <svg className="w-20 h-20">
                  <circle
                    className="text-gray-200"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-red-500"
                    strokeWidth="5"
                    strokeDasharray="188.5"
                    strokeDashoffset={188.5 - (188.5 * timeLeft) / 120}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="40"
                    cy="40"
                    style={{ transition: 'stroke-dashoffset 1s' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-bold text-red-600">{formatTime(timeLeft)}</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-100 opacity-50 rounded-full z-0"></div>
              <div className="absolute right-20 top-40 w-20 h-20 bg-yellow-100 opacity-60 rounded-full z-0"></div>
              
              {/* Highly visible close button for the form */}
              <div className="absolute top-0 leftp-2 z-30">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-md"
                  aria-label="Close form"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-2 bg-gradient-to-r from-blue-400 to-blue-600 mb-6 mx-auto rounded-full"></div>
                  <h3 className="text-2xl font-bold text-center text-gray-800">Get in Touch</h3>
                  <p className="text-center text-gray-500 mt-2">Limited time offer! Fill out the form below</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5 relative z-20">
                  <div 
                    className={`transition-all duration-300 bg-white rounded-xl shadow-sm ${activeField === 'name' ? 'shadow-blue-200 ring-2 ring-blue-400' : 'hover:shadow-md'}`}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 px-4 pt-3">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField('')}
                      placeholder="Varun Sharma"
                      required
                      className="w-full px-4 pb-3 bg-transparent border-none focus:outline-none text-gray-900 font-medium"
                    />
                  </div>
                  
                  <div 
                    className={`transition-all duration-300 bg-white rounded-xl shadow-sm ${activeField === 'email' ? 'shadow-blue-200 ring-2 ring-blue-400' : 'hover:shadow-md'}`}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 px-4 pt-3">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField('')}
                      placeholder="varun@example.com"
                      required
                      className="w-full px-4 pb-3 bg-transparent border-none focus:outline-none text-gray-900 font-medium"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={`transition-all duration-300 bg-white rounded-xl shadow-sm ${activeField === 'phone' ? 'shadow-blue-200 ring-2 ring-blue-400' : 'hover:shadow-md'}`}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 px-4 pt-3">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField('')}
                        placeholder="+91"
                        className="w-full px-4 pb-3 bg-transparent border-none focus:outline-none text-gray-900 font-medium"
                      />
                    </div>
                    
                    <div 
                      className={`transition-all duration-300 bg-white rounded-xl shadow-sm ${activeField === 'service' ? 'shadow-blue-200 ring-2 ring-blue-400' : 'hover:shadow-md'}`}
                    >
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 px-4 pt-3">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setActiveField('service')}
                        onBlur={() => setActiveField('')}
                        required
                        className="w-full px-4 pb-3 bg-transparent border-none focus:outline-none text-gray-900 font-medium appearance-none"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                      >
                        <option value="" disabled>Select</option>
                        <option value="seo">SEO</option>
                        <option value="ppc">PPC</option>
                        <option value="social">Social Media</option>
                        <option value="web">Web Dev</option>
                        <option value="app">App Dev</option>
                        <option value="branding">Branding</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div 
                    className={`transition-all duration-300 bg-white rounded-xl shadow-sm ${activeField === 'message' ? 'shadow-blue-200 ring-2 ring-blue-400' : 'hover:shadow-md'}`}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 px-4 pt-3">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField('')}
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="w-full px-4 pb-3 bg-transparent border-none focus:outline-none text-gray-900 font-medium resize-none"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-300/50 focus:outline-none"
                  >
                    Submit Request
                  </motion.button>
                  
                  <p className="text-xs text-center text-gray-500 mt-1">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
