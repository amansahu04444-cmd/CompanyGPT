import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, MessageSquare, CheckSquare, BarChart3, AlertCircle } from 'lucide-react';
import Button from './Button';

export const Hero: React.FC = () => {
  const [count, setCount] = useState(1324);

  // Animated operations counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 pt-12 pb-20 md:py-24 overflow-hidden">
      {/* Decorative Doodles Background */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-grid-dots opacity-40 rounded-full pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          
          {/* Operations Counter Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 border-2 border-forest-green bg-parchment-white px-4 py-2 rounded-full shadow-[3px_3px_0px_0px_#10380b] font-body text-sm font-bold text-forest-green"
          >
            <Sparkles className="w-4 h-4 text-sunshine-yellow animate-spin" style={{ animationDuration: '4s' }} />
            <span>{count.toLocaleString()} Operations Automated Today</span>
          </motion.div>

          {/* Main Massive Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            className="font-editorial text-5xl md:text-[86px] leading-[0.85] tracking-tight font-black text-forest-green text-left mb-6"
          >
            YOUR AI <br />
            OPERATING SYSTEM <br />
            <span className="relative inline-block mt-1">
              FOR MODERN TEAMS
              <span className="absolute left-0 bottom-1 w-full h-4 bg-sunshine-yellow -z-10 -rotate-1 rounded-sm"></span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl text-forest-green/90 max-w-xl mb-8 leading-relaxed"
          >
            AI-powered workspace that transforms meetings, documents, tasks, and company operations into intelligent automated workflows. Delivered directly to your tools.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto"
          >
            <Button variant="primary" className="w-full sm:w-auto">
              Start Free
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-forest-green" /> Watch Demo
            </Button>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full border-t-2 border-dashed border-forest-green/20 pt-6"
          >
            <p className="font-body font-bold text-xs uppercase tracking-widest text-forest-green/60 mb-3">
              TRUSTED BY RADICAL TEAMS AT
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-editorial font-bold text-xl md:text-2xl text-forest-green/75">
              <span className="hover:text-forest-green transition-colors cursor-default select-none">✨ METATECH</span>
              <span className="hover:text-forest-green transition-colors cursor-default select-none">⚡ CODEX</span>
              <span className="hover:text-forest-green transition-colors cursor-default select-none">🌐 BEYOND.AI</span>
              <span className="hover:text-forest-green transition-colors cursor-default select-none">🛰️ VECTOR</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Layered Premium SaaS Composition */}
        <div className="lg:col-span-6 relative w-full h-[480px] md:h-[600px] flex items-center justify-center">
          
          {/* Card Base: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: -0.5 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="w-full max-w-[500px] bg-parchment-white border-2 border-forest-green rounded-[40px] p-6 shadow-card relative z-0 flex flex-col justify-between"
          >
            {/* Header bar of base dashboard */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-forest-green/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-forest-green"></span>
                <span className="font-body font-bold text-xs text-forest-green/80">workspace_hub</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-muted-sage/40 text-[10px] font-bold text-forest-green uppercase border border-forest-green/20">LIVE METRICS</span>
            </div>

            {/* Core Stats in Mockup */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border-2 border-forest-green p-3.5 rounded-[20px] bg-white">
                <span className="font-body font-bold text-[10px] text-forest-green/50 uppercase">Team Output</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-editorial text-2xl font-bold text-forest-green">94.8%</span>
                  <span className="text-[10px] text-vivid-mint font-bold">▲ +4%</span>
                </div>
              </div>
              <div className="border-2 border-forest-green p-3.5 rounded-[20px] bg-white">
                <span className="font-body font-bold text-[10px] text-forest-green/50 uppercase">Daily Burnout risk</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-editorial text-2xl font-bold text-forest-green">LOW</span>
                  <span className="text-[10px] text-forest-green/60 font-bold">Safe</span>
                </div>
              </div>
            </div>

            {/* Micro Chart Illustration */}
            <div className="border-2 border-forest-green p-4 rounded-[24px] bg-white flex flex-col gap-2 mb-2">
              <span className="font-body font-bold text-[10px] text-forest-green/60 flex items-center gap-1"><BarChart3 className="w-3.5 h-3.5" /> Automations Weekly Load</span>
              <div className="flex items-end justify-between h-20 pt-2 gap-1.5">
                {[45, 60, 35, 78, 55, 90, 85].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                    className={`w-full rounded-t-lg border-x border-t border-forest-green ${i === 5 ? 'bg-sunshine-yellow' : 'bg-muted-sage'}`}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Card 1: AI Auto-Reporter Notification */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-[5%] right-[-5%] md:right-[0%] w-[240px] md:w-[280px] bg-white border-2 border-forest-green rounded-[24px] p-4 shadow-[6px_6px_0px_0px_#10380b] z-20 flex items-start gap-3"
          >
            <div className="p-2 bg-muted-sage border border-forest-green rounded-full text-forest-green shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center justify-between gap-1">
                <h4 className="font-body font-bold text-xs text-forest-green">AI Auto-Reporter</h4>
                <span className="text-[8px] text-forest-green/50">Just now</span>
              </div>
              <p className="font-body text-[11px] text-forest-green/80 mt-1 leading-snug">
                Weekly Ops summary compiled. Sent automatically to <span className="font-bold">#admin</span> via WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Floating Card 2: Task Extraction */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[5%] left-[-8%] md:left-[0%] w-[220px] md:w-[260px] bg-white border-2 border-forest-green rounded-[24px] p-4 shadow-[6px_6px_0px_0px_#10380b] z-20 flex items-start gap-3"
          >
            <div className="p-2 bg-sunshine-yellow border border-forest-green rounded-full text-forest-green shrink-0">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div className="w-full">
              <h4 className="font-body font-bold text-xs text-forest-green">Task Extraction</h4>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-vivid-mint"></span>
                  <span className="font-body text-[10px] text-forest-green/70 line-through">Publish release notes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunshine-yellow animate-pulse"></span>
                  <span className="font-body text-[10px] text-forest-green font-bold">Schedule client check-in</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3: Burnout / Predictive Warning */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] right-[-10%] md:right-[-4%] w-[180px] md:w-[200px] bg-parchment-white border-2 border-forest-green rounded-[20px] p-3 shadow.card z-20 flex items-center gap-2.5 shadow-[4px_4px_0px_0px_#10380b]"
          >
            <div className="p-1.5 bg-[#fce519]/30 border border-forest-green rounded-full text-forest-green shrink-0">
              <AlertCircle className="w-3.5 h-3.5 text-forest-green" />
            </div>
            <div>
              <h5 className="font-body font-bold text-[10px] text-forest-green uppercase tracking-wide">AI PREDICTION</h5>
              <p className="font-body text-[11px] text-forest-green/90 mt-0.5 leading-none">
                Burnout risk: <span className="font-bold text-[#e1523d]">9.4% (LOW)</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
