"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm here to help. What type of injury case do you have?" }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: option },
      { type: "bot", text: "Thank you. A member of our team will be with you shortly. Please call (555) 123-4567 for immediate assistance." }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-navy p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="font-bold">Carter Law Assistant</span>
              </div>
              <button onClick={toggleChat} className="text-white/80 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-navy text-white rounded-br-none"
                        : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Auto Accident", "Workplace Injury", "Slip & Fall", "Other"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionClick(opt)}
                      className="text-xs bg-white border border-gold text-navy px-3 py-2 rounded-full hover:bg-gold hover:text-white transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gold"
              />
              <button className="p-2 bg-gold text-white rounded-md hover:bg-gold-hover">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="h-14 w-14 rounded-full bg-gold text-white shadow-lg flex items-center justify-center hover:bg-gold-hover transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  );
};




