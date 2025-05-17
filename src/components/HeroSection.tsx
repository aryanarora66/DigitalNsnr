// components/HeroSection.js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaRocket,
  FaChartLine,
  FaLightbulb,
} from 'react-icons/fa';

export default function HeroSection() {
  const dynamicWords = ['Redefined', 'Amplified', 'Transformed', 'Innovated', 'Elevated', 'Optimized'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setShowIcons(rect.top <= 0 && rect.bottom > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-r from-[#faca88] via-white to-white text-white overflow-hidden min-h-screen"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2ca92] via-white to-white opacity-70"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 md:py-40 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-stretch md:text-left text-center gap-12 min-h-[600px]">
          {/* Left Side */}
          <div className="md:w-2/5 space-y-6 z-10 flex flex-col justify-center">
            <h1 className="text-5xl text-black md:text-7xl font-extrabold tracking-tight leading-tight">
              Digital Growth{' '}
              <span className="block sm:inline-block animate-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {dynamicWords[currentWordIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black max-w-xl leading-relaxed">
              NSNR FUTURE delivers cutting-edge digital marketing solutions that drive real business results.
              Experience unparalleled growth and innovation with our expert strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold text-white bg-[#eea53e] rounded-lg shadow-lg hover:bg-[#edb464] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold text-black bg-transparent border-2 border-[#edb464] rounded-lg hover:bg-[#edb464] hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Center Segment */}
          <div className="hidden md:flex flex-col items-center space-y-6 px-4 z-10">
            <div className="w-1 h-24 bg-[#edb464] rounded-full" />
            <div className="bg-white shadow-lg rounded-lg p-4 w-36 text-center">
              <FaRocket className="text-[#edb464] text-2xl mx-auto mb-1" />
              <p className="text-black text-sm font-semibold">Fast Execution</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 w-36 text-center">
              <FaChartLine className="text-[#edb464] text-2xl mx-auto mb-1" />
              <p className="text-black text-sm font-semibold">ROI Driven</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 w-36 text-center">
              <FaLightbulb className="text-[#edb464] text-2xl mx-auto mb-1" />
              <p className="text-black text-sm font-semibold">Smart Ideas</p>
            </div>
            <div className="w-1 h-24 bg-[#edb464] rounded-full" />
          </div>

          {/* Right Side: Image */}
          <div className="md:w-2/5 w-full relative z-10 flex items-center justify-center md:justify-end">
            <div className="w-full h-full max-h-[600px] flex items-center justify-center">
              <Image
                src="/remove.png"
                alt="Hero"
                width={800}
                height={800}
                priority
                className="w-full h-full object-contain md:max-h-[90vh]"
              />
            </div>

            {/* Background Gradient & CTA */}
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[#edb464] to-transparent text-center py-4">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold text-white bg-[#eea53e] rounded-lg shadow-lg hover:bg-[#edb464] transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="mt-16 grid grid-cols-1  sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-black">
              <CountUp end={500} duration={3} />+
            </h3>
            <p className="text-black mt-2">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">
              <CountUp end={300} duration={3} />+
            </h3>
            <p className="text-black mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">
              <CountUp end={100} duration={3} />%
            </h3>
            <p className="text-black mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      {showIcons && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-[#edb464] bg-opacity-80 backdrop-blur-lg rounded-full px-6 py-4 shadow-xl flex items-center space-x-6 transition-all duration-300">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-blue-800 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-sky-500 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-black text-2xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Gradient Animation Style */}
      <style jsx global>{`
        @keyframes gradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientText 4s ease infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
