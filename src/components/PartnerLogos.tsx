import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
  {
    name: "Greg.",
    logo: (
      <div className="flex items-center">
        <span className="text-3xl font-bold text-[#222222]">Greg</span>
        <span className="text-3xl font-bold text-[#FFD700]">.</span>
      </div>
    )
  },
  {
    name: "Solstice",
    logo: (
      <span className="text-3xl font-bold text-[#FF8C37]">
        Solstice
      </span>
    )
  },
  {
    name: "RevUp Solution",
    logo: (
      <div className="flex items-center">
        <span className="text-3xl font-bold text-[#E63946]">Rev</span>
        <span className="text-3xl font-bold text-[#6B7280]">Up</span>
      </div>
    )
  },
  {
    name: "Trophenix",
    logo: (
      <span className="text-3xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-transparent bg-clip-text">
        Trophenix
      </span>
    )
  }
];

export default function PartnerLogos() {
  const [currentPair, setCurrentPair] = useState(0);
  const totalPairs = Math.ceil(partners.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % totalPairs);
    }, 4000); // Increased duration between transitions

    return () => clearInterval(timer);
  }, [totalPairs]);

  const getCurrentPair = () => {
    const startIndex = currentPair * 2;
    return partners.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="h-24 flex justify-center items-center">
          <div className="w-[600px] relative"> {/* Fixed width container for consistent spacing */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPair}
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -1000, opacity: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 70, // Reduced stiffness for smoother motion
                  damping: 20, // Reduced damping for smoother motion
                  mass: 1.5, // Added mass for more natural movement
                  duration: 1 // Increased duration of the animation
                }}
                className="absolute inset-0 flex justify-between items-center px-12" // Changed to justify-between and added padding
              >
                {getCurrentPair().map((partner) => (
                  <motion.div
                    key={partner.name}
                    className="transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {partner.logo}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}