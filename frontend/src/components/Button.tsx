import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'mint';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyle = "font-body font-bold text-base md:text-lg rounded-full border-2 border-forest-green px-6 py-3.5 flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none select-none shadow-[4px_4px_0px_0px_#10380b] hover:shadow-[6px_6px_0px_0px_#10380b] active:shadow-[1px_1px_0px_0px_#10380b] active:translate-x-[3px] active:translate-y-[3px]";
  
  const variants = {
    primary: "bg-sunshine-yellow text-forest-green hover:bg-[#ffe200]",
    secondary: "bg-transparent text-forest-green hover:bg-parchment-white/40",
    mint: "bg-vivid-mint text-forest-green hover:bg-[#3ce576]",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
export default Button;
