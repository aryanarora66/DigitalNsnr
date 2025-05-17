'use client';

import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Pause, Play } from 'lucide-react';

const clients = [
  {
    name: "Networty Ideas",
    url: "https://networtyideas.com",
    description: "Innovative web solutions for modern businesses",
  },
  {
    name: "Networty",
    url: "https://networty.com",
    description: "Comprehensive digital marketing services",
  },
  {
    name: "EaseCiti",
    url: "https://easeciti.com",
    description: "Simplifying urban living with technology",
  },
  {
    name: "TechNova",
    url: "https://technova.com",
    description: "Next-gen tech solutions for enterprises",
  },
  {
    name: "BrightEdge",
    url: "https://brightedge.com",
    description: "Cutting-edge digital analytics for smart insights",
  },
  {
    name: "MarketMinds",
    url: "https://marketminds.com",
    description: "Strategic marketing consultancy for new-age businesses",
  },
  {
    name: "CityNest",
    url: "https://citynest.com",
    description: "Smart real estate platforms transforming urban life",
  },
];

const ClientCard = ({ client, index, className }:any) => (
  <div
    key={index}
    className={`min-w-[250px] max-w-[250px] bg-gradient-to-br from-[#fdf2e2] to-[#f4e7d6] rounded-lg shadow-md p-5 border border-[#1e293b] inline-block overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`}
  >
    <h4 className="text-black font-semibold text-lg mb-2 line-clamp-1">
      {client.name}
    </h4>
    <p className="text-sm text-gray-700 mb-3 line-clamp-2 h-10">
      {client.description}
    </p>
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group"
      aria-label={`Visit ${client.name} website`}
    >
      Visit website{" "}
      <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  </div>
);

export default function ClientWebsites() {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile screen size
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle animation state
  const animationState = isPaused || isHovering ? 'paused' : 'running';
  
  // Duplicate clients for seamless scrolling
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section 
      className="py-16 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 id="clients-heading" className="text-2xl font-medium text-black">
          Our Clients
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-4">
          A Trusted Digital Marketing Partner
        </h3>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          We delivered digital marketing services to brands of all sizes.
        </p>
      </div>

      {/* Animation controls */}
      <div className="flex justify-center mb-6">
        {/* <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center gap-2 bg-white border border-[#1e293b] px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          aria-label={isPaused ? "Play animation" : "Pause animation"}
        >
          {isPaused ? (
            <Play className="h-4 w-4" />
          ) : (
            <Pause className="h-4 w-4" />
          )}
          <span>{isPaused ? "Play" : "Pause"} scrolling</span>
        </button> */}
      </div>

      {/* Scrolling client rows */}
      <div className="space-y-8 mb-12">
        {/* Row 1 */}
        <div 
          className="relative overflow-hidden" 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-label="Client showcase row 1"
        >
          <div 
            className="flex space-x-6 px-4 py-2"
            style={{
              animationName: 'slide-left',
              animationDuration: '45s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: animationState,
              width: 'max-content'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <ClientCard 
                key={`row1-${index}`} 
                client={client} 
                index={index} 
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-label="Client showcase row 2"
        >
          <div 
            className="flex space-x-6 px-4 py-2"
            style={{
              animationName: 'slide-right',
              animationDuration: '40s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: animationState,
              width: 'max-content'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <ClientCard 
                key={`row2-${index}`} 
                client={client} 
                index={index}
                className="bg-gradient-to-br from-[#f4e7d6] to-[#fdf2e2]" 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-action Button */}
      <div className="flex justify-center">
        <button 
          className="text-black bg-gradient-to-r from-[#fdf2e2] to-[#f4e7d6] border border-[#1e293b] px-8 py-4 rounded-lg hover:from-[#eea53e] hover:to-[#eea53e] transition-all duration-300 font-semibold tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          LET'S DISCUSS YOUR GROWTH
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flex {
            animation-duration: 0s !important;
          }
        }
      `}</style>
    </section>
  );
}
