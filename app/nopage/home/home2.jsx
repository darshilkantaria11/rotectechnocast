'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
    {
        title: 'Step 1: Buying Metal Scrap',
        description: 'The process starts with acquiring high-quality cast iron scrap from trusted suppliers.',
        image: '/P1.jpeg',
    },
    {
        title: 'Step 2: Melting the Scrap',
        description: 'The metal scrap is melted in a high-temperature furnace, transforming it into liquid metal.',
        image: '/P2.jpeg',
    },
    {
        title: 'Step 3: Creating Sand Molds',
        description: 'Sand is put into a molding machine to create one-time-use dies.',
        image: '/P3.jpeg',
    },
    {
        title: 'Step 4: Extracting Molten Metal',
        description: 'The molten metal is carefully taken out of the furnace in a heat-resistant bucket.',
        image: '/P4.jpeg',
    },
    {
        title: 'Step 5: Pouring Molten Metal into Molds',
        description: 'The molten metal is poured into sand molds, taking the shape of the desired casting.',
        image: '/P5.jpeg',
    },
    {
        title: 'Step 6: Cooling & Strengthening',
        description: 'The cast metal is allowed to cool naturally for strength. If cooled too quickly, it may lose durability.',
        image: '/P6.jpeg',
    },
    {
        title: 'Step 7: Shot Blasting & Finishing',
        description: 'Before delivery, the metal pieces go through a shot blasting machine to remove dust and impurities.',
        image: '/P1.jpeg',
    },
];

export default function ProcessSection() {
    return (
        <div className="bg-black text-white py-20 px-5">
            <motion.div
                className="max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-extrabold text-[#f58731] mb-8 tracking-wide">
                    Our <span className="text-[#a2223d]">Metal Casting</span> Process
                </h2>
                <motion.p
                    className="text-lg text-gray-300 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    From scrap to masterpiece - our detailed and precise metal casting process ensures high-quality output.
                </motion.p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-20">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full md:w-1/2">
                            <Image src={step.image} alt={step.title} width={500} height={300} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-[#f58731] mb-3">{step.title}</h3>
                            <p className="text-gray-300 text-lg">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
