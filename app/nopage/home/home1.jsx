'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparks((prevSparks) => [
        ...prevSparks,
        { id: Math.random(), x: Math.random() * 100, y: Math.random() * 100 },
      ]);
      setTimeout(() => {
        setSparks((prevSparks) => prevSparks.slice(1));
      }, 2000);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden bg-cover bg-center">
      
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-[#a2223d] via-black to-black opacity-90" />

      {/* Floating Sparks Animation */}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute w-2 h-2 bg-[#f58731] rounded-full shadow-lg"
          style={{ top: `${spark.y}%`, left: `${spark.x}%` }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 2 }}
        />
      ))}

      {/* Main Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center mb-6"
      >
        <div className="mb-4 flex flex-col md:flex-row">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f58731] to-[#a2223d]"
          >
            MELT.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"
          >
            MOLD.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a2223d] to-[#f58731]"
          >
            MASTERPIECE.
          </motion.h1>
        </div>

        {/* Company Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-6xl px-6"
        >
          At <span className="text-[#f58731] font-bold">Rotec Techno Cast</span>, we craft precision metal castings that power industries worldwide. With expert craftsmanship and cutting-edge technology, we bring your visions to life with superior durability and design.
        </motion.p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="relative z-10 flex  mt-6  flex-col md:flex-row "
      >
        {/* Start Project Button */}
        <motion.a
          href="#"
          className="px-8 py-4 bg-[#f58731] text-lg font-bold rounded-full  hover:bg-[#a2223d] transition duration-100 m-2"
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project
        </motion.a>

        {/* View Work Button */}
        <motion.a
          href="#"
          className="px-8 py-4 border-2 border-[#f58731] text-lg font-bold rounded-full  text-[#f58731] hover:bg-[#f58731] hover:text-black transition duration-100 m-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View Our Work
        </motion.a>
      </motion.div>

      {/* Hover Glow Effect */}
      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0px 0px 10px rgba(245,135,49,0.5); }
            50% { text-shadow: 0px 0px 20px rgba(245,135,49,0.8); }
            100% { text-shadow: 0px 0px 10px rgba(245,135,49,0.5); }
          }
          .hover\:text-shadow-glow:hover {
            animation: glow 1.5s infinite alternate;
          }
        `}
      </style>
    </div>
  );
}
