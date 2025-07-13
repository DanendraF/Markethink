import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/6281346781150"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-7 h-7 animate-pulse" />
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
    </a>
  );
};

export default WhatsAppButton;