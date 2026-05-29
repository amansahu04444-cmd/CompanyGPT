import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'AI Reporter', href: '#ai-reporter' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full max-w-[1440px] mx-auto px-6 pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`pointer-events-auto w-full border-2 border-forest-green bg-parchment-white rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'shadow-[4px_4px_0px_0px_#10380b] translate-y-1' : 'shadow-[8px_8px_0px_0px_#10380b]'
        }`}
      >
        {/* Left Logo */}
        <a href="#" className="flex items-center gap-2 font-editorial font-bold text-2xl tracking-wide group select-none">
          <span className="w-8 h-8 rounded-full bg-sunshine-yellow border-2 border-forest-green flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b] group-hover:rotate-12 transition-transform duration-200">
            <Sparkles className="w-4 h-4 text-forest-green" />
          </span>
          <span className="text-forest-green text-3xl font-bold font-editorial tracking-tight leading-none pt-1">CompanyGPT</span>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-body font-semibold text-forest-green">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-base hover:text-forest-green after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#10380b] hover:after:w-full after:transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="font-body font-bold text-base hover:underline text-forest-green px-4 py-2 transition-all">
            Login
          </button>
          <Button variant="primary" className="!py-2 !px-5 !text-sm">
            Start Free
          </Button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 border-2 border-forest-green rounded-full bg-sunshine-yellow flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#10380b]"
        >
          {isOpen ? <X className="w-5 h-5 text-forest-green" /> : <Menu className="w-5 h-5 text-forest-green" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-auto mt-3 w-full border-2 border-forest-green bg-parchment-white rounded-[32px] p-6 shadow-[8px_8px_0px_0px_#10380b] flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body font-bold text-lg text-forest-green border-b-2 border-dashed border-forest-green/20 pb-2 hover:pl-2 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <button className="w-full font-body font-bold text-base py-3 rounded-full border-2 border-forest-green bg-transparent text-forest-green hover:bg-[#10380b]/5 transition-colors">
                Login
              </button>
              <Button variant="primary" className="w-full py-3" onClick={() => setIsOpen(false)}>
                Start Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
