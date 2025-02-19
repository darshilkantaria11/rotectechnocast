'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/ROTECmain.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black  text-white z-50 mt-2">
            <div className="px-4 md:px-8 py-1 flex justify-between items-center rounded-full   ">
                {/* Logo */}
                <Link href="/">
                    <Image src={Logo} alt="MetalWorks Logo" className="h-12 md:h-16 object-contain" ></Image>
                </Link>


                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
                    <Link href="/" className="hover:text-[#f58731] transition-all duration-300">Home</Link>
                    <Link href="#" className="hover:text-[#f58731] transition-all duration-300">Services</Link>
                    <Link href="#" className="hover:text-[#f58731] transition-all duration-300">Projects</Link>
                    <Link href="#" className="hover:text-[#f58731] transition-all duration-300">Contact</Link>
                </div>

                {/* CTA Button */}
                <motion.a
                    href="#"
                    className="hidden md:block px-6 py-2 bg-[#f58731] text-lg font-bold rounded-full shadow-md hover:bg-[#a2223d] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get a Quote
                </motion.a>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-3xl" onClick={toggleMenu}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="md:hidden overflow-hidden bg-[#a2223d]"
            >
                <div className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
                    <Link href="/" className="hover:text-[#f58731] transition-all duration-300">Home</Link>
                    <Link href="#" className="hover:text-[#f58731] transition-all duration-300">Services</Link>
                    <Link href="#" className="hover:text-[#f58731] transition-all duration-300">Projects</Link>
                    <Link href="#" className="hover:text-[#f58731] transition-all duration-300">Contact</Link>
                    <motion.a
                        href="#"
                        className="px-6 py-2 bg-[#f58731] text-lg font-bold rounded-full shadow-md hover:bg-[#a2223d] transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get a Quote
                    </motion.a>
                </div>
            </motion.div>
        </nav>
    );
}
