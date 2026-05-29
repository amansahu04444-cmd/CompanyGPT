import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, x: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      className={`bg-parchment-white border-2 border-forest-green rounded-[40px] p-6 shadow-card hover:shadow-[12px_12px_0px_0px_#10380b] transition-shadow duration-200 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
