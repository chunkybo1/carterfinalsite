"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Understanding Your Rights After a Truck Accident",
    excerpt: "Learn about the legal protections available to victims of commercial truck accidents and how to protect your claim.",
    date: "March 15, 2024",
    image: "/article-1.jpg",
  },
  {
    id: 2,
    title: "Workplace Injury Claims: What You Need to Know",
    excerpt: "Navigating workers' compensation and personal injury claims can be complex. Here's what every injured worker should understand.",
    date: "March 10, 2024",
    image: "/article-2.jpg",
  },
  {
    id: 3,
    title: "The Importance of Acting Quickly After an Injury",
    excerpt: "Time is critical in personal injury cases. Discover why prompt action can significantly impact your case outcome.",
    date: "March 5, 2024",
    image: "/article-3.jpg",
  },
];

export const News = () => {
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
            Articles & News
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-gold overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500 text-sm">
                  [Article Image]
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-serif font-bold text-navy mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <Link href={`/articles/${article.id}`} className="inline-flex items-center text-gold font-semibold hover:text-gold-hover transition-colors group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/articles">
            <Button variant="ghost" size="lg" className="bg-black text-white hover:bg-charcoal border-none">
              View All Articles
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};




