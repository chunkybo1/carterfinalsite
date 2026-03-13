"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { CaseReviewForm } from "@/components/ui/CaseReviewForm";

export const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Modal Container - preventing click propagation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg mx-auto my-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-bronze transition-colors p-2"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Form */}
              <CaseReviewForm dark={true} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};



