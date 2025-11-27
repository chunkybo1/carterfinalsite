"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

const attorneys = [
  {
    id: 1,
    name: "James Carter",
    title: "Founding Partner",
    bio: "With over 25 years of experience fighting for injured victims, James brings unparalleled expertise and dedication to every case.",
    image: "/attorney-1.jpg", // Placeholder path
  },
  {
    id: 2,
    name: "Sarah Carter",
    title: "Senior Partner",
    bio: "A third-generation attorney, Sarah continues the family legacy of championing justice for those who need it most.",
    image: "/attorney-2.jpg", // Placeholder path
  },
  {
    id: 3,
    name: "Michael Carter",
    title: "Partner",
    bio: "Specializing in complex personal injury cases, Michael has secured millions in compensation for his clients.",
    image: "/attorney-3.jpg", // Placeholder path
  },
];

export const Attorneys = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-navy"
          >
            Meet the Attorneys
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={attorney.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-gold overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="w-full h-80 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500">
                  [Attorney Photo]
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-navy mb-2">{attorney.name}</h3>
                <p className="text-gold font-semibold mb-4 uppercase tracking-wide text-sm">{attorney.title}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{attorney.bio}</p>
                <Link href={`/attorneys/${attorney.id}`}>
                  <Button variant="primary" size="md" className="w-full bg-gold hover:bg-gold-hover text-white border-none">
                    Read Bio
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};




