"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import { ContactModal } from "@/components/ui/ContactModal";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      {children}
      <ContactModal />
    </ModalProvider>
  );
};

