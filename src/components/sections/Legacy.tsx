"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const Legacy = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
              Three Generations of Fighting for Justice
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Carter legacy began over 60 years ago when my grandfather stood witness at the signing of the Americans with Disabilities Act. That moment sparked a fire in our family—a commitment to ensure that the rights of the vulnerable are protected against the powerful.
              </p>
              <p>
                Today, Carter Law Firm continues that mission across Texas, Arizona, and New Mexico. We are not just a team of attorneys; we are a family dedicated to treating every client like one of our own.
              </p>
              <p>
                When you hire us, you don&apos;t just get legal representation; you get a champion who understands the weight of your struggle and has the expertise to win.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about">
                <Button variant="primary" size="lg">
                  Learn More About Our Team
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl bg-gray-300">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-navy/20" />
              <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
                [Image: Mr. Carter or Family of Lawyers]
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

