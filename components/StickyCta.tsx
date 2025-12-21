import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { trackConversion } from '../services/trackingService';

export const StickyCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleBuyClick = () => {
    trackConversion('begin_checkout_sticky');
    window.open("https://pay.hotmart.com/W103017615F", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-dark-950/90 backdrop-blur-md border-t border-carnivore-500/20 lg:hidden animate-in slide-in-from-bottom duration-300">
      <button 
        onClick={handleBuyClick}
        className="w-full bg-green-600 text-white font-bold py-3.5 rounded-lg shadow-lg flex items-center justify-center gap-2 animate-pulse hover:bg-green-500 transition-colors"
      >
        <ShoppingCart size={20} />
        COMPRAR AGORA - R$ 47,00
      </button>
    </div>
  );
};