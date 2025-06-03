'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-black text-gray-300 py-10 px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-[#f58731] mb-4">Rotec Techno Cast</h3>
          <p className="text-sm">Crafting excellence in metal casting, from raw scrap to high-quality finished products.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-[#f58731] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about-us" className="hover:text-white transition">About us</a></li>
            {/* <li><a href="/projects" className="hover:text-white transition">Projects</a></li> */}
            <li><a href="/contact-us" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-[#f58731] mb-4">Contact Us</h3>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaPhone className="text-[#f58731]" />
            <p className="text-sm">+91 9825610751</p>
          </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
            <FaPhone className="text-[#f58731]" />
            <p className="text-sm">+91 9925165711</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
            <FaEnvelope className="text-[#f58731]" />
            <p className="text-sm">rotectechnocast@gmail.com</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
            <FaMapMarkerAlt className="text-[#f58731]" />
            <p className="text-sm">Rajkot, India</p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} Rotec Techno Cast. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
