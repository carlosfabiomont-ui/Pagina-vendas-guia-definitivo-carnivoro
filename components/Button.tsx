import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-display font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";
  
  const variants = {
    // Primary is now Gold Gradient with Dark text for maximum contrast on dark backgrounds
    primary: "bg-gradient-to-r from-carnivore-400 to-carnivore-500 hover:from-carnivore-300 hover:to-carnivore-400 text-dark-900 shadow-carnivore-500/20",
    secondary: "bg-white text-dark-900 hover:bg-gray-100",
    outline: "border-2 border-carnivore-500 text-carnivore-400 hover:bg-carnivore-500 hover:text-dark-900"
  };

  const pulseAnimation = pulse ? "animate-pulse" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseAnimation} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};