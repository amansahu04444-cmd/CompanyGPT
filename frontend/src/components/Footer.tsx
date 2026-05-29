import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer id="docs" className="w-full bg-parchment-white border-t-2 border-forest-green relative overflow-hidden select-none">
      
      {/* Decorative Dot Grid Background */}
      <div className="absolute inset-0 bg-grid-dots opacity-5 pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-6 pt-16 pb-12 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b-2 border-forest-green/10">
          
          {/* Logo & Branding Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a href="#" className="flex items-center gap-2 font-editorial font-bold text-2xl tracking-wide mb-6 group">
              <span className="w-8 h-8 rounded-full bg-sunshine-yellow border-2 border-forest-green flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b] group-hover:rotate-12 transition-transform duration-200">
                <Sparkles className="w-4 h-4 text-forest-green" />
              </span>
              <span className="text-forest-green text-3xl font-editorial font-bold tracking-tight">CompanyGPT</span>
            </a>
            
            <p className="font-body text-sm text-forest-green/80 max-w-sm mb-6 leading-relaxed">
              Handcrafted AI productivity operating system for modern business teams. Transcribe sync meetings, extract actionable tasks, and broadcast pulse reports automatically.
            </p>

            {/* Social Icons Row using robust custom SVGs */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter/X Link" className="w-10 h-10 border-2 border-forest-green bg-white hover:bg-sunshine-yellow rounded-full flex items-center justify-center text-forest-green shadow-[2px_2px_0px_0px_#10380b] hover:shadow-[3px_3px_0px_0px_#10380b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#10380b] transition-all">
                <svg className="w-4 h-4 fill-forest-green" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub Link" className="w-10 h-10 border-2 border-forest-green bg-white hover:bg-sunshine-yellow rounded-full flex items-center justify-center text-forest-green shadow-[2px_2px_0px_0px_#10380b] hover:shadow-[3px_3px_0px_0px_#10380b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#10380b] transition-all">
                <svg className="w-4.5 h-4.5 fill-forest-green" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn Link" className="w-10 h-10 border-2 border-forest-green bg-white hover:bg-sunshine-yellow rounded-full flex items-center justify-center text-forest-green shadow-[2px_2px_0px_0px_#10380b] hover:shadow-[3px_3px_0px_0px_#10380b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#10380b] transition-all">
                <svg className="w-4.5 h-4.5 fill-forest-green" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col items-start text-left">
            <h4 className="font-body font-bold text-xs text-forest-green/50 uppercase tracking-widest mb-6">RESOURCES</h4>
            <div className="flex flex-col gap-4 font-body font-bold text-sm text-forest-green">
              <a href="#features" className="hover:underline">Capabilities</a>
              <a href="#ai-reporter" className="hover:underline">AI Auto-Reporter</a>
              <a href="#analytics" className="hover:underline">KPI Dashboard</a>
              <a href="#pricing" className="hover:underline">Pricing Plans</a>
            </div>
          </div>

          {/* Nav Column 2 */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-body font-bold text-xs text-forest-green/50 uppercase tracking-widest mb-6">COMPLIANCE</h4>
            <div className="flex flex-col gap-4 font-body font-bold text-sm text-forest-green">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Security Hub</a>
              <a href="#" className="hover:underline">API Reference</a>
            </div>
          </div>

          {/* Newsletter subscription Column */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-body font-bold text-xs text-forest-green/50 uppercase tracking-widest mb-6">OPERATIONAL MEMOS</h4>
            <p className="font-body text-xs text-forest-green/80 mb-4 leading-relaxed font-semibold">
              Subscribe to get our weekly frameworks on remote operations and AI automation.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full font-body font-bold text-xs text-forest-green border-2 border-forest-green bg-white rounded-full pl-10 pr-4 py-3 focus:outline-none placeholder:text-forest-green/40 shadow-[2px_2px_0px_0px_#10380b]"
                />
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-forest-green/50" />
              </div>
              <Button variant="primary" type="submit" className="w-full py-3.5 text-xs font-bold font-body">
                Join Dispatch
              </Button>
            </form>
          </div>

        </div>

        {/* Lower Row: Copyright and oversized backing */}
        <div className="flex flex-wrap items-center justify-between pt-8 gap-4">
          <p className="font-body text-xs font-bold text-forest-green/50">
            © 2026 CompanyGPT Inc. Handcrafted in Seattle. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs font-bold text-forest-green/50">
            <a href="#" className="hover:underline">Cookie preferences</a>
            <a href="#" className="hover:underline">System Status (99.9%)</a>
          </div>
        </div>

        {/* Giant Oversized Editorial Logo Background */}
        <div className="w-full text-center mt-12 opacity-5 select-none pointer-events-none">
          <h1 className="font-editorial text-[90px] md:text-[180px] lg:text-[230px] font-black text-forest-green leading-none tracking-tighter">
            COMPANYGPT
          </h1>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
