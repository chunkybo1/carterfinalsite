"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, HardHat, Footprints, PawPrint, Package, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

const caseTypes = [
  {
    id: 1,
    title: "Auto Accidents",
    icon: Car,
    href: "/auto-accidents",
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Workplace Injuries",
    icon: HardHat,
    href: "/workplace-injuries",
    color: "bg-orange-100",
  },
  {
    id: 3,
    title: "Slip & Fall",
    icon: Footprints,
    href: "/slip-and-fall",
    color: "bg-red-100",
  },
  {
    id: 4,
    title: "Dog Bites",
    icon: PawPrint,
    href: "/dog-bites",
    color: "bg-green-100",
  },
  {
    id: 5,
    title: "Product Liability",
    icon: Package,
    href: "/product-liability",
    color: "bg-purple-100",
  },
];

export const CaseTypes = () => {
  return (
    <section className="py-20 bg-light-grey">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-navy"
          >
            We Fight For All Injury Victims
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {caseTypes.map((type, index) => (
            <Link href={type.href} key={type.id} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
              >
                {/* Image Placeholder */}
                <div className={`h-48 w-full ${type.color} flex items-center justify-center`}>
                  <type.icon className="h-16 w-16 text-navy/50" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{type.title}</h3>
                  <div className="flex items-center text-gold font-medium text-sm">
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};




