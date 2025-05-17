"use client"; // Added for Next.js App Router client components

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, User, Tag } from 'lucide-react';
// Link component is not used in this version, but can be kept if you plan to add internal navigation from this page.
// import Link from 'next/link';

/**
 * ContactUsPage Component
 * A comprehensive contact page with a form, direct contact options (call, WhatsApp),
 * and a section for an address and map.
 */
const ContactUsPage: React.FC = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmissionMessage('Please fill in all fields.');
        setIsSubmitted(false); // Ensure it's not marked as successfully submitted
        // Clear message after 3 seconds
        setTimeout(() => setSubmissionMessage(''), 3000);
        return;
    }

    // Set a loading message
    setSubmissionMessage('Sending your message...');
    setIsSubmitted(false);

    try {
      // Send form data to your Next.js API route
      // This API route (/api/contact) needs to be implemented on your backend
      // to handle the actual email sending to "contact@nsnrfuture.com".
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionMessage('Thank you! Your message has been sent.');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        // Try to get an error message from the API response body
        let errorMessage = 'Sorry, something went wrong. Please try again.';
        try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
                errorMessage = errorData.message;
            }
        } catch (parseError) { // 'parseError' is defined here
            // FIX: Use the parseError variable, e.g., by logging it
            console.error("Error parsing server's error response:", parseError);
            // If parsing JSON fails, use a generic server error message
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
    // Clear message after 5 seconds
    setTimeout(() => setSubmissionMessage(''), 5000);
  };

  const phoneNumber = "+918800625883";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`; // Removes non-digits for the link
  
  // Updated mapEmbedUrl with new coordinates and zoom level - corrected format
  const mapLatitude = "28.60618";
  const mapLongitude = "77.42965";
  const mapZoomLevel = "17"; // Zoom level (e.g., 15-17 for a specific building/mall)
  // Corrected and more standard Google Maps embed URL (Consider reviewing this URL format for correctness)
  // A more typical format might be: `https://maps.google.com/maps?q=${mapLatitude},${mapLongitude}&z=${mapZoomLevel}&output=embed&hl=en`
  // Or using the q parameter with an address if that's more suitable.
  // The original URL: `https://maps.google.com/maps?q=${mapLatitude},${mapLongitude}&hl=en&z=${mapZoomLevel}&output=embed` 
  // might have an issue with `0{mapLatitude}`.
  // For now, using the user-provided one, but it's worth verifying.
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapLatitude},${mapLongitude}&z=${mapZoomLevel}&output=embed&hl=en`;


  // Subject options for the dropdown
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Contact Details & Direct Actions */}
            <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Call Us</h3>
                      <a href={`tel:${phoneNumber}`} className="text-blue-600 hover:text-blue-800 transition-colors text-lg">
                        {phoneNumber}
                      </a>
                      <p className="text-sm text-gray-500">Mon - Fri, 9am - 6pm IST</p>
                    </div>
                  </div>
                  {/* WhatsApp */}
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">WhatsApp</h3>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700 transition-colors text-lg"
                      >
                        Chat on WhatsApp
                      </a>
                       <p className="text-sm text-gray-500">Typically replies within an hour</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Email Us</h3>
                      <a href="mailto:info@nsnrfutur.com" className="text-blue-600 hover:text-blue-800 transition-colors text-lg">
                        info@nsnrfutur.com 
                      </a>
                        <p className="text-sm text-gray-500">We aim to reply within 24 hours</p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Our Office</h3>
                      {/* Updated Address */}
                      <p className="text-gray-600 text-lg">
                        Office No. 1473 14th Floor Gaur City Mall, Greater Noida West Road, Near
                        Gaur City Centre, Sector 4, Greater Noida, <br />
                        Ghaziabad, Uttar Pradesh 201318, India.
                      </p>
                        <p className="text-sm text-gray-500">Visits by appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Direct Actions</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" /> Direct Call
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" /> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
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
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-gray-900"
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
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-gray-900"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input - Changed to Dropdown */}
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
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-gray-900 appearance-none bg-white"
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
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-3 shadow-sm text-gray-900"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" /> Send Message
                  </button>
                </div>
                {/* Submission Message */}
                {submissionMessage && (
                  <p className={`mt-4 text-sm text-center ${isSubmitted ? 'text-green-600' : 'text-red-600'}`}>
                    {submissionMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Google Maps Embed */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Find Us On The Map</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src={mapEmbedUrl} // Using the potentially revised mapEmbedUrl
              width="100%"
              height="450" // Standard height for embedded maps
              style={{ border: 0 }}
              allowFullScreen={true} // Use boolean true for React props
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Recommended for map embeds
              title="Our Office Location - Gaur City Mall" // Updated title for accessibility
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUsPage;