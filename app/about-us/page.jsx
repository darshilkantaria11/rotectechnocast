'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Metal from "../../public/metal-casting.jpg"

export default function AboutUs() {
    return (
        <div className="bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative w-full h-[80vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <Image src={Metal} alt="About Us" fill className="object-cover brightness-50" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl font-extrabold text-[#f58731] mb-4">About <span className="text-[#a2223d]">Us</span></h1>
                    <p className="text-lg text-gray-300">
                        Crafting excellence in metal casting with precision and dedication.
                    </p>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="max-w-6xl mx-auto py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold text-[#f58731] mb-6">Our Story</h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Started with a passion for high-quality casting, we have grown into a leading provider of industrial metal casting solutions.
                        Our commitment to precision, innovation, and sustainability drives our success in the metal industry.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Vision Section */}
            <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                    <h3 className="text-3xl font-semibold text-[#f58731] mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-300">
                        To provide top-quality metal casting solutions through innovative technology, superior craftsmanship, and sustainable practices.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                    <h3 className="text-3xl font-semibold text-[#a2223d] mb-4">Our Vision</h3>
                    <p className="text-lg text-gray-300">
                        To be a globally recognized leader in the metal casting industry, setting new standards in quality and sustainability.
                    </p>
                </motion.div>
            </section>

            {/* Meet Our Team Section */}
            {/* <section className="bg-gray-800 py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-[#f58731] mb-12">Meet Our Team</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[
                            { name: "John Doe", role: "Founder & CEO", image: "/team1.jpg" },
                            { name: "Jane Smith", role: "Head of Operations", image: "/team2.jpg" },
                            { name: "Robert Johnson", role: "Lead Engineer", image: "/team3.jpg" }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-700 p-6 rounded-lg shadow-lg"
                            >
                                <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Call to Action */}
            <section className="text-center py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-[#f58731] mb-6">Join Us in Our Journey</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
                        We are always innovating and pushing the boundaries in metal casting. Be a part of our growing success story.
                    </p>
                    <a href="/contact-us" className="bg-[#f58731] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#a2223d] transition duration-300">
                        Contact Us
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
