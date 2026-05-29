import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Sparkles, Terminal } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32 relative bg-buttermilk text-center overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 bg-grid-dots opacity-5 rounded-full pointer-events-none"></div>

      <Card className="max-w-5xl mx-auto border-2 border-forest-green bg-muted-sage p-10 md:p-16 relative overflow-hidden shadow-card text-center rounded-[40px]">
        {/* Subtle interior patterns */}
        <div className="absolute inset-0 bg-grid-dots opacity-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full border-2 border-forest-green bg-sunshine-yellow text-xs font-bold text-forest-green uppercase shadow-[2px_2px_0px_0px_#10380b] tracking-wider mb-6 flex items-center gap-1.5 select-none">
            <Sparkles className="w-3.5 h-3.5" /> AGENTS DEPLOYED
          </span>

          <h2 className="font-editorial text-4xl md:text-6xl lg:text-[70px] text-forest-green leading-[0.85] font-black tracking-tight mb-6 max-w-3xl">
            RUN YOUR COMPANY <br />
            WITH AI.
          </h2>

          <p className="font-body text-base md:text-lg text-forest-green/90 max-w-xl mb-10 leading-relaxed font-medium">
            Deploy your first operating nodes in under five minutes. Autocompile weekly summaries, extract tasks, and broadcast pulse reports. No credit card required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto py-4 px-8 text-base">
              Start Free
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto py-4 px-8 text-base bg-parchment-white hover:bg-white flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" /> Book Demo
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};
export default FinalCTA;
