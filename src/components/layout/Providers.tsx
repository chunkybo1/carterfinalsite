"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import { ContactModal } from "@/components/ui/ContactModal";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      {children}
      <ContactModal />
      <MobileStickyCTA />
    </ModalProvider>
  );
};



