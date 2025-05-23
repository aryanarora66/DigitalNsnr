"use client"; // Added for Next.js App Router client components

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, User, Tag } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmissionMessage('Please fill in all fields.');
      setIsSubmitted(false);
      setTimeout(() => setSubmissionMessage(''), 3000);
      return;
    }

    setSubmissionMessage('Sending your message...');
    setIsSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionMessage('Thank you! Your message has been sent.');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        let errorMessage = 'Sorry, something went wrong. Please try again.';
        try {
          const errorData = await response.json();
          if (errorData && errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (parseError) {
          console.error("Error parsing server's error response:", parseError);
          errorMessage = `Server error: ${response.statusText || 'Failed to send message.'}`;
        }
        setSubmissionMessage(errorMessage);
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionMessage('Sorry, an error occurred while sending your message. Please try again.');
      setIsSubmitted(false);
    }
    setTimeout(() => setSubmissionMessage(''), 5000);
  };

  const phoneNumber = "+918800625883";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  const mapLatitude = "28.60618";
  const mapLongitude = "77.42965";
  const mapZoomLevel = "17";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapLatitude},${mapLongitude}&z=${mapZoomLevel}&output=embed&hl=en`;

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Website Development', label: 'Website Development' },
    { value: 'Mobile App Development', label: 'Mobile App Development' },
    { value: 'UI/UX Design', label: 'UI/UX Design' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Partnership', label: 'Partnership' },
    { value: 'Career Opportunity', label: 'Career Opportunity' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with animated elements */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-20 animate-gradient-rotate"></div>
          
          {/* Animated heading */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 animate-fade-in-down">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
          
          {/* Animated decoration element */}
          <div className="mt-8 animate-bounce">
            <div className="inline-block bg-gradient-to-r from-[#eea53e] to-[#f9c76b] bg-clip-text text-transparent text-2xl">
              →
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Details & Direct Actions */}
            <div className="bg-white p-8 rounded-xl shadow-lg space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-gray-900 animate-fade-in-down">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start animate-fade-in-right">
                    <Phone className="h-6 w-6 text-[#eea53e] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Call Us</h3>
                      <a href={`tel:${phoneNumber}`} className="text-[#eea53e] hover:text-[#f9c76b] transition-colors duration-300">
                        {phoneNumber}
                      </a>
                      <p className="text-sm text-gray-500">Mon - Fri, 9am - 6pm IST</p>
                    </div>
                  </div>
                  {/* WhatsApp */}
                  <div className="flex items-start animate-fade-in-right" style={{animationDelay: '0.2s'}}>
                    <MessageSquare className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">WhatsApp</h3>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-yellow-700 transition-colors duration-300"
                      >
                        Chat on WhatsApp
                      </a>
                      <p className="text-sm text-gray-500">Typically replies within an hour</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start animate-fade-in-right" style={{animationDelay: '0.4s'}}>
                    <Mail className="h-6 w-6 text-[#eea53e] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Email Us</h3>
                      <a href="mailto:info@nsnrfutur.com" className="text-[#eea53e] hover:text-[#f9c76b] transition-colors duration-300">
                        info@nsnrfutur.com
                      </a>
                      <p className="text-sm text-gray-500">We aim to reply within 24 hours</p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                    <MapPin className="h-6 w-6 text-[#eea53e] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Our Office</h3>
                      <p className="text-gray-600">
                        Office No. 1473 14th Floor Gaur City Mall, Greater Noida West Road, Near
                        Gaur City Centre, Sector 4, Greater Noida, <br />
                        Ghaziabad, Uttar Pradesh 201318, India.
                      </p>
                      <p className="text-sm text-gray-500">Visits by appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#eea53e]/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in-down">
                  Direct Actions
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full flex items-center justify-center px-6 py-3 border border-[#eea53e]/20 rounded-lg shadow-sm text-base font-medium bg-[#eea53e]/10 hover:bg-[#f9c76b]/20 transition-colors duration-300 hover:scale-105"
                  >
                    <Phone className="h-5 w-5 mr-2" /> Direct Call
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-6 py-3 border border-[#eea53e]/20 rounded-lg shadow-sm text-base font-medium bg-[#eea53e]/10 hover:bg-[#f9c76b]/20 transition-colors duration-300 hover:scale-105"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" /> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form with animation */}
            <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 animate-fade-in-down">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:ring-[#eea53e] focus:border-[#eea53e] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-gray-900 animate-fade-in-right"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus:ring-[#eea53e] focus:border-[#eea53e] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-gray-900 animate-fade-in-right"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Tag className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="focus:ring-[#eea53e] focus:border-[#eea53e] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-gray-900 appearance-none bg-white animate-fade-in-right"
                    >
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="focus:ring-[#eea53e] focus:border-[#eea53e] block w-full sm:text-sm border-gray-300 rounded-md py-3 px-3 shadow-sm text-gray-900 animate-fade-in-right"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                {/* Submit Button with hover animation */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-[#eea53e] rounded-lg shadow-sm text-base font-medium text-white bg-[#eea53e] hover:bg-[#f9c76b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eea53e] transition-colors duration-300 transform hover:scale-105 animate-fade-in-up"
                  >
                    <Send className="h-5 w-5 mr-2" /> Send Message
                  </button>
                </div>

                {/* Submission Message with animation */}
                {submissionMessage && (
                  <p className={`mt-4 text-sm text-center animate-fade-in-up ${isSubmitted ? 'text-green-600' : 'text-red-600'}`}>
                    {submissionMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with fade-in animation */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center animate-fade-in-up">
            Find Us On The Map
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Office Location - Gaur City Mall"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-gradient-rotate {
          background-size: 400% 400%;
          animation: gradient-rotate 8s ease infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-bounce {
          animation: bounce 2s infinite ease;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out;
        }

        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default ContactUsPage;
