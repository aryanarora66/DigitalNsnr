"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Users,
  Settings,
  Palette,
  Server,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: <Code className="h-8 w-8 text-blue-500" />,
    image: "/webdevelopment.jpg",
  },
  {
    title: "App Development",
    icon: <Smartphone className="h-8 w-8 text-green-500" />,
    image: "/appdevelopment.jpg",
  },
  {
    title: "Digital Marketing",
    icon: <Users className="h-8 w-8 text-purple-500" />,
    image: "/digital marketing.jpg",
  },
  {
    title: "Google Ads",
    icon: <Settings className="h-8 w-8 text-yellow-500" />,
    image: "/websitemaintenance.jpg",
  },
  {
    title: "Facebook Ads",
    icon: <Palette className="h-8 w-8 text-red-500" />,
    image: "/graphicsdesign.png",
  },
  {
    title: "SEO Optimization",
    icon: <Server className="h-8 w-8 text-teal-500" />,
    image: "/domainhosting.png",
  },
];

const howWeWork = [
  {
    step: "Step 1",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your vision, goals, and challenges to craft a tailored digital strategy.",
  },
  {
    step: "Step 2",
    title: "Design & Development",
    description:
      "Our team creates stunning, high-performing digital products that align perfectly with your brand and audience.",
  },
  {
    step: "Step 3",
    title: "Launch & Optimization",
    description:
      "After launch, we monitor and refine performance to ensure your product drives real results and growth.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

        {/* Service Cards Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-lg hover:-translate-y-2 transition transform duration-300 shadow-lg group cursor-pointer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="p-6 flex items-center justify-between">
                {service.icon}
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
              <div className="px-6 pb-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <div className="w-full h-32 relative rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Cards Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {services.slice(4).map((service, index) => (
            <motion.div
              key={index + 4}
              className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-lg hover:-translate-y-2 transition transform duration-300 shadow-lg group cursor-pointer"
              custom={index + 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="p-6 flex items-center justify-between">
                {service.icon}
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
              <div className="px-6 pb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-3">
                  {service.title}
                </h3>
                <div className="w-full h-32 relative rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How We Work Section */}
        <div className="mb-12 flex items-center gap-2">
          <h2 className="text-3xl font-bold">How We Work</h2>
          <ArrowRight className="w-6 h-6 text-[#eea53e]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {howWeWork.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/40 backdrop-blur-lg rounded-xl p-6 shadow-md"
              custom={index + 6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h4 className="text-[#eea53e] font-semibold text-sm mb-1">
                {item.step}
              </h4>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <div className="w-full border-t border-gray-300 mb-4"></div>
              <p className="text-gray-800 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="px-4 lg:px-0 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl font-bold">What We Do</h2>
            <ArrowRight className="w-6 h-6 text-[#eea53e]" />
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            We offer cutting-edge digital solutions tailored to your business needs. From mobile and web development to branding, design, and online marketing, our mission is to bring your ideas to life with efficiency, creativity, and strategy. Whether you're a startup or an established enterprise, we're here to help you thrive in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
}
