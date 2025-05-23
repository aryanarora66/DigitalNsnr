// components/HeroSection.tsx

'use client'; // Mark as client component

import { useState, useEffect, useRef, JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useMotionValue, useSpring, useAnimate } from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRocket,
  FaChartLine,
  FaLightbulb,
  FaArrowRight,
  FaStar,
} from 'react-icons/fa';
import type { Variants } from 'framer-motion';

const dynamicWords: string[] = [
  'Redefined',
  'Amplified',
  'Transformed',
  'Innovated',
  'Elevated',
  'Optimized'
];

export default function HeroSection(): JSX.Element {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [showIcons, setShowIcons] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [magnetStrength, setMagnetStrength] = useState<number>(0);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  const featureCardsInView = useInView(featureCardsRef, { once: false, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: false, amount: 0.5 });
  const [scope, animate] = useAnimate();
  
  // Mouse follower physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax and scroll effects
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -70]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const backgroundBlur = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const parallax3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  // Initialize window size and client state
  useEffect(() => {
    setIsClient(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 3D tilt effect based on mouse position - now safe with windowSize state
  const tiltX = useTransform(mouseX, [0, windowSize.width], [15, -15]);
  const tiltY = useTransform(mouseY, [0, windowSize.height], [-15, 15]);
  
  // Magnetic effect for cursor
  useEffect(() => {
    if (!isClient) return;
    
    let timeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
      
      // Reset the magnetic strength
      clearTimeout(timeout);
      setMagnetStrength(1);
      
      // Gradually decrease the magnetic strength
      timeout = setTimeout(() => setMagnetStrength(0), 1000);
      
      // Apply spotlight effect to the hero image
if (heroImageRef.current) {
  const rect = heroImageRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Calculate distance from mouse to image center (normalized 0-1)
  const dx = (clientX - centerX) / (window.innerWidth / 2);
  const dy = (clientY - centerY) / (window.innerHeight / 2);
  
  // Instead of directly manipulating DOM transform, use mouseX/Y values
  // that will be used by Framer Motion
  mouseX.set(clientX);
  mouseY.set(clientY);
  
  // Only update the highlight
  const highlight = document.getElementById('image-highlight');
  if (highlight) {
    const highlightX = (dx * 10) + 50;
    const highlightY = (dy * 10) + 50;
    highlight.style.background = `radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`;
  }
   }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [mouseX, mouseY, isClient]);
  
  // Word rotation interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  
  // Scroll detection for showing social icons
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setShowIcons(rect.top <= 0 && rect.bottom > 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);
  
  // Split text for character animations
  const splitText = (text: string) => {
    return Array.from(text).map((char, index) => (
      <motion.span 
        key={index} 
        variants={textCharacterVariants}
        className={char === ' ' ? 'inline-block mr-1' : ''}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };
  
  // Animation variants
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };
  
  const textCharacterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      rotateX: 90,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        damping: 12 
      }
    }
  };
  const morphingBackgroundVariants: Variants = {
    initial: { 
      borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%",
      filter: "hue-rotate(0deg)"
    },
    animate: { 
      borderRadius: "30% 70% 70% 30% / 50% 50% 50% 50%",
      filter: "hue-rotate(90deg)",
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };
  
  const heroImageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      filter: "blur(10px) brightness(0.8)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px) brightness(1)",
      transition: { 
        duration: 1.5, 
        ease: [0.25, 1, 0.5, 1],
        delay: 0.3
      }
    },
    hover: {
      scale: 1.03,
      filter: "brightness(1.05)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  const featureCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -30, 
      scale: 0.9,
      filter: "blur(8px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }),
    hover: {
      scale: 1.08,
      boxShadow: "0 25px 35px -15px rgba(238, 165, 62, 0.3)",
      y: -10,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }
    }
  };
  
  const wordAnimationVariants = {
    enter: { 
      opacity: 0, 
      y: 20, 
      skewX: 10,
      filter: "blur(10px)"
    },
    center: { 
      opacity: 1, 
      y: 0, 
      skewX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      skewX: -10,
      filter: "blur(10px)",
      transition: {
        duration: 0.4
      }
    }
  };
  
  const socialIconsVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
        delayChildren: 0.3,
        bounce: 0.4,
        type: "spring"
      }
    }
  };
  
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0, 
      rotate: -20,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.3, 
      rotate: 5,
      y: -5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };
  
  const counterVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 30,
      filter: "blur(8px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }),
    hover: {
      scale: 1.08,
      y: -10,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.1)"
    },
    tap: { scale: 0.98 }
  };
  
  const glowVariants = {
    initial: {
      opacity: 0.5,
      scale: 1
    },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="hero-section"
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#faca88] via-white to-white text-white overflow-hidden min-h-screen perspective-1200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ 
          opacity: backgroundOpacity,
          filter: `blur(${backgroundBlur}px)` 
        }}
      >
        {/* Primary gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#f2ca92] via-white to-white opacity-70"
          style={{ y: parallax1 }}
        />
        
        {/* Animated morphing backgrounds */}
        {isClient && (
          <>
            <motion.div
              className="absolute -left-[20%] -top-[30%] w-3/4 h-3/4 bg-gradient-to-br from-orange-300/40 to-yellow-200/30"
              variants={morphingBackgroundVariants}
              initial="initial"
              animate="animate"
              style={{ y: parallax2 }}
            />
            
            <motion.div
              className="absolute -right-[20%] -bottom-[30%] w-3/4 h-3/4 bg-gradient-to-br from-purple-300/20 to-blue-200/10"
              variants={morphingBackgroundVariants}
              initial="initial"
              animate="animate"
              style={{ 
                y: parallax3,
                animationDelay: "-5s"
              }}
            />
            
            <motion.div
              className="absolute left-[10%] top-[40%] w-1/3 h-1/3 rounded-full"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              style={{
                background: "radial-gradient(circle, rgba(255,226,169,0.4) 0%, rgba(255,226,169,0) 70%)",
                filter: "blur(30px)"
              }}
            />
            
            <motion.div
              className="absolute right-[20%] top-[20%] w-1/4 h-1/4 rounded-full"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              style={{
                background: "radial-gradient(circle, rgba(238,165,62,0.3) 0%, rgba(238,165,62,0) 70%)",
                filter: "blur(40px)",
                animationDelay: "-1.5s"
              }}
            />
          </>
        )}
        
        {/* Pattern overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{
            backgroundImage: "url('/pattern-dots.svg')",
            backgroundSize: "30px",
            opacity: 0.1,
            y: parallax1
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-stretch md:text-left text-center gap-8 lg:gap-12 min-h-[700px]">
          {/* Left Side Content */}
          <motion.div 
            className="md:w-2/5 space-y-8 z-10 flex flex-col justify-center"
            style={{ 
              y: titleY,
              perspective: "1000px"
            }}
          >
            {/* Main Heading with Character Animation */}
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={textContainerVariants}
            >
              <motion.h1 
                className="text-5xl text-black md:text-7xl font-extrabold tracking-tight leading-tight"
                custom={0}
                variants={fadeInUpVariants}
                style={{
                  textShadow: "0 5px 30px rgba(0,0,0,0.05)"
                }}
              >
                <span className="inline-block">
                  {splitText('Digital Growth')}
                </span>{' '}
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={currentWordIndex}
                    className="block sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    style={{ 
                      backgroundSize: "300% auto",
                      filter: "drop-shadow(0 0 2px rgba(140, 80, 200, 0.3))"
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={wordAnimationVariants}
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>
            </motion.div>
            
            {/* Subtitle with Animation */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-black max-w-xl leading-relaxed"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              NSNR FUTURE delivers cutting-edge digital marketing solutions that drive real business results.
              Experience unparalleled growth and innovation with our expert strategies.
            </motion.p>
            
            {/* CTA Buttons with Advanced Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:justify-start gap-5"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="w-full sm:w-auto relative"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#eea53e] to-[#f9c76b] rounded-lg shadow-lg w-full sm:w-auto overflow-hidden z-10"
                >
                  {/* Button glow effect */}
                  <motion.span 
                    className="absolute -inset-1 rounded-lg opacity-70 blur-xl bg-gradient-to-r from-[#eea53e] to-[#f9c76b] group-hover:opacity-100 transition duration-1000 group-hover:duration-200 z-0"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Button background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] rounded-lg z-0"></span>
                  
                  {/* Button hover effect */}
                  <motion.span 
                    className="absolute inset-0 w-full h-full bg-white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.5, 
                      opacity: 0.2,
                      transition: { duration: 0.5 }
                    }}
                    style={{ originX: 0, originY: 0 }}
                  />
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <motion.span
                      className="ml-2"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                className="w-full sm:w-auto relative"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#eea53e] bg-transparent border-2 border-[#edb464] rounded-lg hover:text-white w-full sm:w-auto overflow-hidden z-10"
                >
                  {/* Button border glow */}
                  <motion.span 
                    className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 blur-sm bg-[#edb464] transition duration-300 z-0"
                  />
                  
                  {/* Button hover fill effect */}
                  <motion.span 
                    className="absolute inset-0 w-0 bg-[#edb464]"
                    initial={{ width: "0%" }}
                    whileHover={{ 
                      width: "100%",
                      transition: { duration: 0.4 }
                    }}
                    style={{ originX: 0 }}
                  />
                  
                  {/* Button content */}
                  <span className="relative z-10">Learn More</span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Floating badges with staggered animation */}
            <motion.div
              className="flex flex-wrap gap-4 mt-6 justify-center sm:justify-start"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 1.2
                  }
                }
              }}
            >
              {[
                { text: "Award Winning", icon: <FaStar className="text-yellow-500" /> },
                { text: "24/7 Support", icon: <FaRocket className="text-blue-500" /> },
                { text: "Results Driven", icon: <FaChartLine className="text-green-500" /> }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Center Feature Cards with 3D Rotation */}
          <motion.div 
            ref={featureCardsRef}
            className="hidden lg:flex flex-col items-center space-y-6 px-4 z-10"
            style={{
              perspective: "1200px",
              rotateY: tiltX,
              rotateX: tiltY,
              translateZ: "0px"
            }}
          >
            <motion.div 
              className="w-1 h-24 bg-gradient-to-b from-[#eea53e] to-[#edb464] rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.div 
              className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-5 w-40 text-center transform"
              custom={0}
              initial="hidden"
              animate={featureCardsInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={featureCardVariants}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                className="mb-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                  <FaRocket className="text-white text-xl" />
                </div>
              </motion.div>
              <h3 className="text-black text-lg font-bold mb-1">Fast Execution</h3>
              <p className="text-black text-sm">Sprint to market with our agile approach</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-5 w-40 text-center transform"
              custom={1}
              initial="hidden"
              animate={featureCardsInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={featureCardVariants}
              style={{ transformStyle: "preserve-3d", zIndex: 10 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ 
                  delay: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                className="mb-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto flex items-center justify-center">
                  <FaChartLine className="text-white text-xl" />
                </div>
              </motion.div>
              <h3 className="text-black text-lg font-bold mb-1">ROI Driven</h3>
              <p className="text-black text-sm">Measurable results that matter</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-5 w-40 text-center transform"
              custom={2}
              initial="hidden"
              animate={featureCardsInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={featureCardVariants}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                className="mb-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto flex items-center justify-center">
                  <FaLightbulb className="text-white text-xl" />
                </div>
              </motion.div>
              <h3 className="text-black text-lg font-bold mb-1">Smart Ideas</h3>
              <p className="text-black text-sm">Creative solutions that stand out</p>
            </motion.div>
            
            <motion.div 
              className="w-1 h-24 bg-gradient-to-b from-[#edb464] to-[#eea53e] rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Right Side: Hero Image with Enhanced 3D Effects */}
          <motion.div 
            className="md:w-[45%] w-full relative z-10 flex items-center justify-center md:justify-end"
            ref={heroImageRef}
            style={{ 
              perspective: "1200px",
              transformStyle: "preserve-3d",
              y: imageY
            }}
          >
            {/* 3D Effect Container */}
            <motion.div 
              className="w-full max-w-[600px] relative"
              style={{ 
                scale: imageScale,
                rotateY: imageRotate,
                transformStyle: "preserve-3d"
              }}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={heroImageVariants}
            >
              {/* Image Highlight Overlay (controlled by mouse movement) */}
              <div 
                id="image-highlight" 
                className="absolute inset-0 w-full h-full rounded-3xl z-10"
              />
              
              {/* Animated Frame */}
              <motion.div
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#eea53e]/50 to-[#f9c76b]/50 backdrop-blur-sm z-0"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(238, 165, 62, 0.5) 0%, rgba(249, 199, 107, 0.5) 100%)",
                    "linear-gradient(225deg, rgba(238, 165, 62, 0.5) 0%, rgba(249, 199, 107, 0.5) 100%)",
                    "linear-gradient(315deg, rgba(238, 165, 62, 0.5) 0%, rgba(249, 199, 107, 0.5) 100%)",
                    "linear-gradient(45deg, rgba(238, 165, 62, 0.5) 0%, rgba(249, 199, 107, 0.5) 100%)",
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Floating 3D particles around the image */}
              {isClient && (
                <>
                  <motion.div 
                    className="absolute -left-8 -top-8 w-20 h-20 rounded-full bg-blue-400/20 blur-md z-0"
                    animate={{
                      scale: [1, 1.2, 1],
                      x: [0, 15, 0],
                      y: [0, -15, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 7,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <motion.div 
                    className="absolute right-5 top-20 w-16 h-16 rounded-full bg-purple-400/20 blur-md z-0"
                    animate={{
                      scale: [1, 1.3, 1],
                      x: [0, -20, 0],
                      y: [0, 20, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div 
                    className="absolute left-20 bottom-10 w-12 h-12 rounded-full bg-yellow-400/20 blur-md z-0"
                    animate={{
                      scale: [1, 1.4, 1],
                      x: [0, 10, 0],
                      y: [0, 10, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />
                </>
              )}
              
              {/* Main Image with Enhanced Styling */}
              <motion.div
                className="relative z-[5] bg-[#faf0e0]/80 rounded-3xl p-3 backdrop-blur-sm overflow-hidden shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.15)", 
                    "0 30px 60px -12px rgba(0, 0, 0, 0.2)", 
                    "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Image Glow Effect */}
                  <motion.div
                    className="absolute -inset-4 z-0"
                    animate={{
                      background: [
                        "radial-gradient(circle at 50% 50%, rgba(255,236,173,0.4) 0%, rgba(255,236,173,0) 60%)",
                        "radial-gradient(circle at 60% 40%, rgba(255,236,173,0.5) 0%, rgba(255,236,173,0) 60%)",
                        "radial-gradient(circle at 40% 60%, rgba(255,236,173,0.4) 0%, rgba(255,236,173,0) 60%)",
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Animated Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-[#eea53e]/20 to-transparent z-[1] opacity-0"
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Improved Image with better content */}
                  <Image
                    src="/digital-marketing-professional.jpg.png" 
                    alt="Digital Marketing Professional"
                    width={800}
                    height={800}
                    quality={100}
                    priority
                    className="w-full h-auto object-cover rounded-2xl relative z-[2]"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Dynamic Gradient & CTA */}
            <motion.div 
              className="absolute -bottom-10 left-0 right-0 py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, type: "spring" }}
            >
              <motion.div
                className="relative mx-auto max-w-xs"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl -z-10 opacity-70"
                  animate={{
                    boxShadow: [
                      "0 0 20px 2px rgba(238, 165, 62, 0.5)",
                      "0 0 30px 5px rgba(238, 165, 62, 0.6)",
                      "0 0 20px 2px rgba(238, 165, 62, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
                
                {/* CTA Button */}
                <Link
                  href="/services"
                  className="group flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#eea53e] to-[#f9c76b] rounded-xl shadow-lg overflow-hidden relative z-10"
                >
                  <span>Explore Services</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                  
                  {/* Button Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 -z-10"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "100%",
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats Counters with Enhanced Styling */}
        <motion.div 
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          style={{ 
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Projects Counter */}
          <motion.div
            custom={0}
            variants={counterVariants}
            whileHover="hover"
            className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg transform relative overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              rotateX: isClient ? tiltY.get() * 0.05 : 0,
              rotateY: isClient ? tiltX.get() * 0.05 : 0
            }}
          >
            {/* Background Gradient Animation */}
            <motion.div
              className="absolute inset-0 -z-10 opacity-30"
              animate={{
                background: [
                  "linear-gradient(120deg, #f9c76b 0%, #f6e6c6 100%)",
                  "linear-gradient(240deg, #f9c76b 0%, #f6e6c6 100%)",
                  "linear-gradient(360deg, #f9c76b 0%, #f6e6c6 100%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-4 h-20 flex items-center justify-center"
            >
              <div className="relative w-16 h-16">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-yellow-400/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2
                  }}
                />
                <motion.div 
                  className="absolute inset-3 rounded-full bg-yellow-400/40"
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.3
                  }}
                />
                <motion.div 
                  className="absolute inset-6 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-xl font-bold">+</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Counter Text */}
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-1 relative">
              {isClient && (
                <CountUp 
                  end={500} 
                  duration={3} 
                  enableScrollSpy 
                  scrollSpyOnce={false}
                />
              )}
              <span className="text-yellow-600">+</span>
            </h3>
            <p className="text-gray-700 text-lg font-medium relative">Projects Completed</p>
          </motion.div>
          
          {/* Clients Counter */}
          <motion.div
            custom={1}
            variants={counterVariants}
            whileHover="hover"
            className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg transform relative overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              rotateX: isClient ? tiltY.get() * 0.05 : 0,
              rotateY: isClient ? tiltX.get() * 0.05 : 0,
              zIndex: 10
            }}
          >
            {/* Background Gradient Animation */}
            <motion.div
              className="absolute inset-0 -z-10 opacity-30"
              animate={{
                background: [
                  "linear-gradient(120deg, #60a5fa 0%, #c7d2fe 100%)",
                  "linear-gradient(240deg, #60a5fa 0%, #c7d2fe 100%)",
                  "linear-gradient(360deg, #60a5fa 0%, #c7d2fe 100%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-4 h-20 flex items-center justify-center"
            >
              <div className="relative w-16 h-16">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-400/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.1
                  }}
                />
                <motion.div 
                  className="absolute inset-3 rounded-full bg-blue-400/40"
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.4
                  }}
                />
                <motion.div 
                  className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: 0.7,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-xl font-bold">+</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Counter Text */}
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-1 relative">
              {isClient && (
                <CountUp 
                  end={300} 
                  duration={3} 
                  enableScrollSpy 
                  scrollSpyOnce={false}
                />
              )}
              <span className="text-blue-600">+</span>
            </h3>
            <p className="text-gray-700 text-lg font-medium relative">Happy Clients</p>
          </motion.div>
          
          {/* Satisfaction Counter */}
          <motion.div
            custom={2}
            variants={counterVariants}
            whileHover="hover"
            className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg transform relative overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              rotateX: isClient ? tiltY.get() * 0.05 : 0,
              rotateY: isClient ? tiltX.get() * 0.05 : 0
            }}
          >
            {/* Background Gradient Animation */}
            <motion.div
              className="absolute inset-0 -z-10 opacity-30"
              animate={{
                background: [
                  "linear-gradient(120deg, #4ade80 0%, #bbf7d0 100%)",
                  "linear-gradient(240deg, #4ade80 0%, #bbf7d0 100%)",
                  "linear-gradient(360deg, #4ade80 0%, #bbf7d0 100%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-4 h-20 flex items-center justify-center"
            >
              <div className="relative w-16 h-16">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-green-400/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.2
                  }}
                />
                <motion.div 
                  className="absolute inset-3 rounded-full bg-green-400/40"
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute inset-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-xl font-bold">%</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Counter Text */}
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-1 relative">
              {isClient && (
                <CountUp 
                  end={100} 
                  duration={3} 
                  enableScrollSpy 
                  scrollSpyOnce={false}
                />
              )}
              <span className="text-green-600">%</span>
            </h3>
            <p className="text-gray-700 text-lg font-medium relative">Satisfaction Rate</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Media Icons with Advanced Effects */}
      <AnimatePresence>
        {showIcons && isClient && (
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={socialIconsVariants}
          >
            <motion.div 
              className="bg-white/30 backdrop-blur-lg rounded-full px-8 py-4 shadow-2xl flex items-center space-x-7 border border-white/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* LinkedIn */}
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-600/20 -z-10"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                />
                <motion.span
                  className="absolute -top-8 opacity-0 bg-white/90 text-blue-800 text-xs font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  LinkedIn
                </motion.span>
                <FaLinkedinIn className="text-blue-800 text-2xl relative z-10" />
              </motion.a>
              
              {/* Instagram */}
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-pink-600/20 -z-10"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    repeatDelay: 1,
                    delay: 0.3,
                    ease: "easeInOut"
                  }}
                />
                <motion.span
                  className="absolute -top-8 opacity-0 bg-white/90 text-pink-600 text-xs font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Instagram
                </motion.span>
                <FaInstagram className="text-pink-600 text-2xl relative z-10" />
              </motion.a>
              
              {/* Facebook */}
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-600/20 -z-10"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    repeatDelay: 1,
                    delay: 0.6,
                    ease: "easeInOut"
                  }}
                />
                <motion.span
                  className="absolute -top-8 opacity-0 bg-white/90 text-blue-600 text-xs font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Facebook
                </motion.span>
                <FaFacebookF className="text-blue-600 text-2xl relative z-10" />
              </motion.a>
              
              {/* Twitter */}
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gray-600/20 -z-10"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    repeatDelay: 1,
                    delay: 0.9,
                    ease: "easeInOut"
                  }}
                />
                <motion.span
                  className="absolute -top-8 opacity-0 bg-white/90 text-black text-xs font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Twitter
                </motion.span>
                <FaXTwitter className="text-black text-2xl relative z-10" />
              </motion.a>
              
              {/* YouTube */}
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-600/20 -z-10"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    repeatDelay: 1,
                    delay: 1.2,
                    ease: "easeInOut"
                  }}
                />
                <motion.span
                  className="absolute -top-8 opacity-0 bg-white/90 text-red-600 text-xs font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  YouTube
                </motion.span>
                <FaYoutube className="text-red-600 text-2xl relative z-10" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Client-side only particle rendering */}
      {isClient && <UltraParticles />}

      {/* Custom CSS */}
      <style jsx global>{`
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .perspective-1200 {
          perspective: 1200px;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </motion.section>
  );
}

// Advanced particle system with client-side only rendering
function UltraParticles(): JSX.Element {
  // Deterministic particle configs to avoid hydration issues
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: 4 + (i % 12),
    top: `${(i * 2.5) % 100}%`,
    left: `${(i * 2.5) % 100}%`,
    delay: i * 0.2,
    duration: 10 + (i % 15),
    yOffset: 70 + (i * 2),
    xOffset: (i % 2 === 0) ? 30 : -30,
    rotation: (i % 2 === 0) ? 180 : -180,
    scale: 0.8 + (i % 5) * 0.1,
    blur: i % 5 === 0 ? 6 : i % 3 === 0 ? 3 : 0,
    opacity: 0.5 + (i % 5) * 0.1,
    // Select from a limited set of colors to maintain consistency
    color: i % 5 === 0 ? "#f9d6a3" : 
           i % 5 === 1 ? "#ffffff" : 
           i % 5 === 2 ? "#f3a952" : 
           i % 5 === 3 ? "#ffecd1" : "#ffe0a5"
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
<motion.div
  key={particle.id}
  className="absolute rounded-full"
  initial={{ opacity: 0 }}
  animate={{
    y: [0, -particle.yOffset],
    x: [0, particle.xOffset],
    opacity: [0, particle.opacity, 0],
    rotate: [0, particle.rotation],
    scale: [0, particle.scale, 0],
    filter: `blur(${particle.blur}px)`,
  }}
  transition={{
    duration: particle.duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay: particle.delay,
  }}
  style={{
    width: particle.size,
    height: particle.size,
    top: particle.top,
    left: particle.left,
    background: particle.color,
    boxShadow: `0 0 ${particle.size/2}px ${particle.color}`,
    willChange: "transform, opacity",
    transform: "translateZ(0)"
  }}
/>
      ))}
    </div>
  );
}
