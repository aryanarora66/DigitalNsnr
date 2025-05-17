'use client';

import { ExternalLink } from 'lucide-react';

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

export default function ClientWebsites() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-2xl font-medium text-">Our Clients</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-4">
          A Trusted Digital Marketing Partner
        </h3>
        <p className="text-lg text-black max-w-2xl mx-auto">
          We delivered digital marketing services to brands of all sizes.
        </p>
      </div>

      {/* Row 1 */}
      <div className="relative overflow-x-hidden  from-white via-white to-white mb-8">
        <div className="flex space-x-6 animate-slide-left whitespace-nowrap px-4 py-2">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`row1-${index}`}
              className="min-w-[220px] max-w-[220px]  bg-[#fdf2e2] rounded-lg shadow p-4 border border-[#1e293b] inline-block overflow-hidden"
            >
              <h4 className="text-black font-semibold text-lg mb-2 break-words">{client.name}</h4>
              <p className="text-sm black-white mb-3 break-words">{client.description}</p>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:underline text-sm"
              >
                Visit website <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative overflow-x-hidden mb-12">
        <div className="flex space-x-6 animate-slide-right whitespace-nowrap px-4 py-2">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`row2-${index}`}
              className="min-w-[220px] max-w-[220px] bg-[#f4e7d6] rounded-lg shadow p-4 border border-[#1e293b] inline-block overflow-hidden"
            >
              <h4 className="text-font-semibold text-lg mb-2 break-words">{client.name}</h4>
              <p className="text-sm text-black mb-3 break-words">{client.description}</p>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:underline text-sm"
              >
                Visit website <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-action Button */}
      <div className="flex justify-center">
        <button className="text-black border border-[#1e293b] px-6 py-3 rounded-md hover:bg-[#eea53e] transition duration-300">
          LET’S DISCUSS YOUR GROWTH
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-slide-left {
          animation: slide-left 35s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
