import { motion } from "framer-motion";
import { NextJsLogo, ReactLogo, TailwindLogo, NodeJsLogo, GraphQLLogo, ShopifyLogo } from '@/components/ui/TechLogos';

export default function WebDevTechStack() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">Technology Stack</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Modern tools for building fast, scalable web experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              logo: <NextJsLogo className="h-12 w-auto text-white" />,
              name: "Next.js",
              description: "React framework for server-rendered apps"
            },
            {
              logo: <ReactLogo className="h-12 w-auto text-white" />,
              name: "React",
              description: "Component-based UI library"
            },
            {
              logo: <TailwindLogo className="h-12 w-auto text-white" />,
              name: "Tailwind CSS",
              description: "Utility-first CSS framework"
            },
            {
              logo: <NodeJsLogo className="h-12 w-auto text-white" />,
              name: "Node.js",
              description: "JavaScript runtime for APIs"
            },
            {
              logo: <GraphQLLogo className="h-12 w-auto text-white" />,
              name: "GraphQL",
              description: "Modern API query language"
            },
            {
              logo: <ShopifyLogo className="h-12 w-auto text-white" />,
              name: "Shopify",
              description: "E-commerce platform"
            }
          ].map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.03, 
                boxShadow: "0 10px 25px -5px rgba(238, 165, 62, 0.1)",
                borderColor: "rgba(238, 165, 62, 0.2)"
              }}
              className="bg-[rgba(255,255,255,0.03)] backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 text-center group"
            >
              <motion.div 
                className="flex justify-center mb-4 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tech.logo}
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#eea53e]/10 to-[#f9c76b]/10 blur-md -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                />
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-[#eea53e] group-hover:to-[#f9c76b] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
              >
                {tech.name}
              </motion.h3>
              <p className="text-white/70 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
