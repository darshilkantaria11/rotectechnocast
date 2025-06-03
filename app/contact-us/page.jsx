'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // WhatsApp Pre-filled Message
    const whatsappMessage = `Hello, I would like to inquire about your services. My Name: ${name}`;

    return (
        <div className="bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* <Image src="/contact-hero.jpg" alt="Contact Us" fill className="object-cover brightness-50" /> */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl font-extrabold text-[#f58731] mb-4">Contact <span className="text-[#a2223d]">Us</span></h1>
                    <p className="text-lg text-gray-300">
                        Get in touch with us for inquiries, collaborations, or support.
                    </p>
                </motion.div>
            </section>

            {/* Contact Information Section */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold text-[#f58731] mb-6">Get in Touch</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Have a question? Reach out to us via email, phone, or WhatsApp. We'd love to hear from you!
                    </p>
                </motion.div>

                {/* Contact Details */}
                <div className="grid sm:grid-cols-2 gap-10 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-semibold text-[#f58731]">📍 Our Location</h3>
                        <p className="text-gray-300 mt-2">Rotec Techno Cast, Rajkot, Gujarat, India</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-semibold text-[#f58731]">📞 Contact Us</h3>
                        <p className="text-gray-300 mt-2">+91 9825610751</p>
                        <p className="text-gray-300 mt-2">+91 9925165711</p>
                        <p className="text-gray-300">rotectechnocast@gmail.com</p>
                    </motion.div>
                </div>
            </section>

             <section className="text-center pb-20">
                <Link href={`https://wa.me/919898144023?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-green-600 transition duration-300"
                    >
                        📲 Chat on WhatsApp
                    </motion.button>
                </Link>
            </section>

            {/* Google Maps Embed */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#f58731] text-center mb-6"
                >
                    Our Location
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="rounded-lg overflow-hidden shadow-lg"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.3103453620765!2d70.8212777753432!3d22.15225567979328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39584b8abc364cdd%3A0x482a07308e9297a3!2sROTEC%20TECHNO%20CAST!5e0!3m2!1sen!2sin!4v1740843712224!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </section>

            {/* Contact Form */}
            {/* <section className="max-w-4xl mx-auto py-16 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#f58731] text-center mb-6"
                >
                    Send Us a Message
                </motion.h2>
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                    <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-700 rounded-lg text-white mb-4" onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 rounded-lg text-white mb-4" onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Your Message" className="w-full p-3 bg-gray-700 rounded-lg text-white mb-4" rows={4} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="bg-[#f58731] text-white px-6 py-3 rounded-full font-semibold text-lg w-full">
                        Send Message
                    </button>
                </motion.form>
            </section> */}

            {/* WhatsApp Button */}
           
        </div>
    );
}
