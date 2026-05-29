import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, AlertTriangle, Play, Sparkles, Send, MessageCircle } from 'lucide-react';
import { Card } from './Card';

export const AutoReporter: React.FC = () => {
  const [scanStep, setScanStep] = useState<'idle' | 'scanning' | 'sent'>('idle');
  const [progress, setProgress] = useState(0);

  // Auto-scan cycle trigger
  useEffect(() => {
    if (scanStep === 'scanning') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setScanStep('sent');
            }, 600);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [scanStep]);

  // Restart loop automatically for a live demo vibe
  useEffect(() => {
    if (scanStep === 'sent') {
      const timeout = setTimeout(() => {
        setScanStep('idle');
        setProgress(0);
      }, 7000);
      return () => clearTimeout(timeout);
    }
  }, [scanStep]);

  const handleStartScan = () => {
    setScanStep('scanning');
    setProgress(0);
  };

  return (
    <section id="ai-reporter" className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32">
      <Card className="w-full border-2 border-forest-green p-8 md:p-12 relative overflow-hidden bg-parchment-white shadow-card">
        
        {/* Dynamic Dot Grid Background */}
        <div className="absolute inset-0 bg-grid-dots opacity-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Report Details & Interactive Scanner */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="px-4 py-1.5 rounded-full border-2 border-forest-green bg-vivid-mint text-xs font-bold text-forest-green uppercase shadow-[2px_2px_0px_0px_#10380b] tracking-wider mb-6 select-none">
              CORE INNOVATION
            </span>
            
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-[56px] text-forest-green leading-[0.9] font-black tracking-tight mb-6">
              YOUR COMPANY REPORTS. <br />
              GENERATED AUTOMATICALLY.
            </h2>
            
            <p className="font-body text-base md:text-lg text-forest-green/80 max-w-xl mb-8 leading-relaxed">
              No more spending Fridays chasing standup updates or compiling status slides. CompanyGPT monitors project velocity, meeting transcripts, and task lists, compiling them into a beautiful executive brief.
            </p>

            {/* Giant Report Preview Card */}
            <div className="w-full border-2 border-forest-green rounded-[32px] bg-white p-6 shadow-[4px_4px_0px_0px_#10380b] relative overflow-hidden">
              
              {/* Scan Beam Overlay */}
              {scanStep === 'scanning' && (
                <motion.div
                  initial={{ top: '0%' }}
                  animate={{ top: ['0%', '98%', '0%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-[3px] bg-vivid-mint shadow-[0_0_12px_#30be60] z-20 pointer-events-none"
                />
              )}

              {/* Header inside Report Card */}
              <div className="flex flex-wrap items-center justify-between border-b-2 border-dashed border-forest-green/10 pb-4 mb-4 gap-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-forest-green" />
                  <div>
                    <h3 className="font-editorial font-bold text-lg text-forest-green leading-none">Operational Pulse Report</h3>
                    <span className="text-[10px] text-forest-green/50">Compiled automatically by CompanyGPT</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-forest-green bg-muted-sage px-2 py-0.5 rounded border border-forest-green/30">
                    WEEK 21
                  </span>
                </div>
              </div>

              {/* Report Body Items */}
              <div className="space-y-4">
                {/* Stat 1: Workload */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-body font-bold text-xs text-forest-green/70">TEAM VELOCITY INDEX</span>
                    <span className="font-editorial text-sm font-bold text-forest-green">94 / 100</span>
                  </div>
                  <div className="w-full bg-[#10380b]/10 h-3 rounded-full border border-forest-green/20 overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: scanStep === 'scanning' ? `${progress}%` : '94%' }}
                      transition={{ duration: 0.3 }}
                      className="bg-vivid-mint h-full rounded-full"
                    />
                  </div>
                </div>

                {/* Stat 2: Blocked Tasks List */}
                <div className="border-2 border-forest-green rounded-[20px] bg-parchment-white/40 p-4">
                  <h4 className="font-body font-bold text-xs text-forest-green/80 flex items-center gap-1.5 mb-2.5">
                    <AlertTriangle className="w-4 h-4 text-sunshine-yellow shrink-0" />
                    <span>OPERATIONAL BLOCKED TASKS</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-forest-green/70">Database migration setup</span>
                      <span className="text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">BLOCKED BY DEVOPS</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-forest-green/70">API Integration testing</span>
                      <span className="text-forest-green/60">Awaiting QA sign-off</span>
                    </div>
                  </div>
                </div>

                {/* Stat 3: AI Recommendations */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sunshine-yellow/20 border border-sunshine-yellow flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3 text-forest-green" />
                  </div>
                  <p className="font-body text-xs text-forest-green/80 leading-relaxed text-left">
                    <span className="font-bold text-forest-green">AI recommendation:</span> Reallocate QA resources from sprint backlog to unblock API integration testing.
                  </p>
                </div>
              </div>

              {/* Interactive Compilation Trigger */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-forest-green/10 flex items-center justify-between gap-4">
                <div>
                  {scanStep === 'idle' && <span className="text-xs font-semibold text-forest-green/60">Report idle. Click to scan.</span>}
                  {scanStep === 'scanning' && <span className="text-xs font-bold text-vivid-mint animate-pulse">Compiling database elements... {progress}%</span>}
                  {scanStep === 'sent' && <span className="text-xs font-bold text-vivid-mint flex items-center gap-1">✔ Compiled & delivered successfully.</span>}
                </div>
                {scanStep === 'idle' && (
                  <button
                    onClick={handleStartScan}
                    className="inline-flex items-center gap-2 border-2 border-forest-green bg-sunshine-yellow hover:bg-[#ffe200] px-4 py-2 rounded-full font-body font-bold text-xs text-forest-green shadow-[2px_2px_0px_0px_#10380b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#10380b] transition-all shrink-0"
                  >
                    <Play className="w-3 h-3 fill-forest-green" /> Scan & Generate
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: WhatsApp Phone Simulator Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            
            {/* Phone Chassis Container */}
            <div className="w-[300px] h-[520px] bg-white border-[3px] border-forest-green rounded-[48px] p-3 shadow-card relative overflow-hidden flex flex-col justify-between">
              
              {/* Camera Notch doodle */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-forest-green rounded-full flex items-center justify-center z-30">
                <span className="w-2.5 h-2.5 bg-white/20 rounded-full border border-white/10"></span>
              </div>

              {/* Chat Screen Background */}
              <div className="w-full h-full bg-[#f2ee98]/30 rounded-[38px] overflow-hidden flex flex-col justify-between relative pt-6">
                
                {/* WhatsApp Chat Header */}
                <div className="bg-[#10380b] text-white p-3 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 bg-[#fce519] border border-white rounded-full flex items-center justify-center text-xs font-bold text-forest-green">
                      C
                    </span>
                    <div>
                      <h4 className="text-[11px] font-bold leading-none">CompanyGPT Reporter</h4>
                      <span className="text-[8px] opacity-75 font-semibold">Active Bot</span>
                    </div>
                  </div>
                  <MessageCircle className="w-4 h-4 opacity-75" />
                </div>

                {/* Message Log View */}
                <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3 justify-end pb-4">
                  
                  {/* Prompt Bubble */}
                  <div className="max-w-[85%] bg-white border border-forest-green/20 text-forest-green p-2.5 rounded-2xl rounded-tl-sm self-start text-[10px] leading-tight font-semibold shadow-sm">
                    Hi CompanyGPT, please compile this week's synchronizations and dispatch them to the admin group.
                  </div>

                  {/* Delivery Status Animations */}
                  <AnimatePresence>
                    {scanStep === 'scanning' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="max-w-[85%] bg-white border-2 border-forest-green p-2.5 rounded-2xl rounded-tr-sm self-end text-[10px] leading-tight text-forest-green shadow-[2px_2px_0px_0px_#10380b] flex items-center gap-2"
                      >
                        <div className="w-3 h-3 border-2 border-forest-green border-t-transparent rounded-full animate-spin shrink-0"></div>
                        <span className="font-bold">Generating secure report...</span>
                      </motion.div>
                    )}

                    {scanStep === 'sent' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="max-w-[90%] bg-vivid-mint text-forest-green border-2 border-forest-green p-3 rounded-2xl rounded-tr-sm self-end text-[10px] leading-tight shadow-[3px_3px_0px_0px_#10380b]"
                      >
                        <div className="flex items-center gap-1.5 mb-1.5 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>WEEK 21 OP-REPORT</span>
                        </div>
                        <p className="font-body text-[9px] mb-2 leading-relaxed">
                          - <span className="font-bold">Team Load:</span> Stable (BURN-OUT risk low)<br />
                          - <span className="font-bold">Velocity Index:</span> 94/100 (Optimal)<br />
                          - <span className="font-bold">Action Needed:</span> API testing blocked. Resources reallocated.
                        </p>
                        <div className="flex items-center justify-between text-[8px] opacity-75 font-bold mt-1">
                          <span>Delivered to Admin</span>
                          <span>✓✓ 09:41 PM</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Fake Keyboard input strip */}
                <div className="bg-white p-2 border-t border-forest-green/10 flex items-center justify-between gap-2">
                  <div className="flex-1 bg-[#10380b]/5 border border-forest-green/20 rounded-full px-3 py-1.5 text-[10px] text-forest-green/50 text-left font-semibold">
                    Type a message...
                  </div>
                  <button className="w-7 h-7 bg-sunshine-yellow border border-forest-green rounded-full flex items-center justify-center shadow-[1px_1px_0px_0px_#10380b] active:scale-95">
                    <Send className="w-3.5 h-3.5 text-forest-green" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </Card>
    </section>
  );
};
export default AutoReporter;
