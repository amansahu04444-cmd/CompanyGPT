import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Check, Info } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Starter Bundle",
      price: billingCycle === 'monthly' ? 29 : 24,
      description: "Ideal for small modern teams getting started with operational automation.",
      features: [
        "10 Meeting transcriptions / mo",
        "100 AI Operations / day",
        "Automated Slack reports",
        "Standard Document Intelligence (up to 10MB)",
        "2 Seats included"
      ],
      highlight: false,
      btnText: "Get Started",
      btnVariant: "secondary" as const,
      color: "bg-white"
    },
    {
      name: "Pro Operations",
      price: billingCycle === 'monthly' ? 79 : 64,
      description: "Best for growing organizations and high-velocity remote businesses.",
      features: [
        "UNLIMITED Transcriptions",
        "1,000 AI Operations / day",
        "Full WhatsApp & Slack Delivery",
        "Team Burnout & Velocity Analytics",
        "Advanced Semantic Search (up to 50MB)",
        "10 Seats included",
        "AI Chat Workspace Bot Integration"
      ],
      highlight: true,
      btnText: "Upgrade to Pro",
      btnVariant: "primary" as const,
      color: "bg-sunshine-yellow"
    },
    {
      name: "Enterprise Core",
      price: "Custom",
      description: "For scaled enterprises demanding local models, high compliance, and custom nodes.",
      features: [
        "Dedicated Local Model endpoints",
        "UNLIMITED Daily Operations",
        "Tailored custom dashboards",
        "Full compliance SOC-2 audit logs",
        "Custom CRM & WhatsApp connectors",
        "Unlimited Seats",
        "24/7 Priority support SLA"
      ],
      highlight: false,
      priceOverride: true,
      btnText: "Book Core Demo",
      btnVariant: "secondary" as const,
      color: "bg-white"
    }
  ];

  return (
    <section id="pricing" className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32 bg-buttermilk text-center relative">
      
      {/* Background Doodles */}
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-grid-dots opacity-5 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto mb-12 md:mb-16">
        <span className="px-4 py-1.5 rounded-full border-2 border-forest-green bg-sunshine-yellow text-xs font-bold text-forest-green uppercase shadow-[2px_2px_0px_0px_#10380b] tracking-wider select-none">
          PRICING
        </span>
        <h2 className="font-editorial text-4xl md:text-5xl lg:text-[54px] text-forest-green font-black leading-tight mt-6 mb-6">
          TRANSPARENT, HASSLE-FREE PRICING
        </h2>
        <p className="font-body text-base md:text-lg text-forest-green/80">
          Scale automation at your own pace. All plans include core AI summarization features.
        </p>
      </div>

      {/* Monthly / Annual Toggle */}
      <div className="inline-flex items-center gap-1.5 border-2 border-forest-green rounded-full bg-parchment-white p-1 mb-16 shadow-[4px_4px_0px_0px_#10380b] select-none">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-5 py-2.5 rounded-full font-body font-bold text-xs transition-all ${
            billingCycle === 'monthly'
              ? 'bg-[#10380b] text-white'
              : 'text-forest-green hover:bg-[#10380b]/5'
          }`}
        >
          Bill Monthly
        </button>
        <button
          onClick={() => setBillingCycle('annual')}
          className={`px-5 py-2.5 rounded-full font-body font-bold text-xs transition-all flex items-center gap-1.5 ${
            billingCycle === 'annual'
              ? 'bg-[#10380b] text-white'
              : 'text-forest-green hover:bg-[#10380b]/5'
          }`}
        >
          Bill Annually <span className="bg-sunshine-yellow text-forest-green text-[9px] px-1.5 py-0.5 rounded border border-forest-green">-20% SAVE</span>
        </button>
      </div>

      {/* Grid of Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
        {plans.map((p, idx) => (
          <Card
            key={idx}
            hoverEffect={true}
            className={`flex flex-col justify-between border-2 border-forest-green text-left p-8 ${
              p.highlight ? 'bg-parchment-white shadow-[12px_12px_0px_0px_#10380b] -translate-y-2' : 'bg-parchment-white'
            }`}
          >
            <div>
              {/* Highlight ribbon */}
              {p.highlight && (
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-sunshine-yellow text-forest-green border-2 border-forest-green font-body font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#10380b]">
                    MOST POPULAR
                  </span>
                  <span className="text-xs text-forest-green/60 font-bold flex items-center gap-1"><Info className="w-3.5 h-3.5" /> High Demand</span>
                </div>
              )}

              {/* Title */}
              <h3 className="font-editorial text-3xl font-black text-forest-green mb-2">{p.name}</h3>
              <p className="font-body text-xs text-forest-green/70 mb-6 font-semibold">{p.description}</p>
              
              {/* Pricing section */}
              <div className="flex items-baseline gap-1 mb-8 border-b-2 border-dashed border-forest-green/10 pb-6">
                {p.priceOverride ? (
                  <span className="font-editorial text-4xl md:text-5xl font-black text-forest-green">{p.price}</span>
                ) : (
                  <>
                    <span className="font-editorial text-2xl font-bold text-forest-green/60 align-top leading-none">$</span>
                    <span className="font-editorial text-5xl md:text-6xl font-black text-forest-green leading-none">{p.price}</span>
                    <span className="font-body text-xs text-forest-green/60 font-bold ml-1">/ month</span>
                  </>
                )}
              </div>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                <h4 className="font-body text-xs font-bold text-forest-green/60 uppercase tracking-widest mb-2">INCLUDED UTILITIES</h4>
                {p.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-sm font-semibold">
                    <span className="w-5 h-5 rounded-full border border-forest-green bg-[#30be60]/10 flex items-center justify-center text-vivid-mint shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-forest-green" />
                    </span>
                    <span className="text-forest-green/90 leading-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action button */}
            <div>
              <Button variant={p.btnVariant} className="w-full py-4 text-base font-bold shadow-[4px_4px_0px_0px_#10380b]">
                {p.btnText}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Pricing;
