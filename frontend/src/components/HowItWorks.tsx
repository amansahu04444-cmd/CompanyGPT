import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, BrainCircuit, ShieldCheck, Forward } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Upload meetings & docs",
    description: "Connect your workspace tools or upload transcripts, audio files, and PDFs directly to CompanyGPT.",
    icon: UploadCloud,
    color: "bg-[#dbe8ac]", // Muted Sage
  },
  {
    number: "02",
    title: "AI analyzes workflows",
    description: "Our proprietary local models analyze the materials, identifying team efforts, blocks, and burnout parameters.",
    icon: BrainCircuit,
    color: "bg-[#fce519]/30", // Yellow tint
  },
  {
    number: "03",
    title: "Tasks & charts generated",
    description: "Instantly maps extracted tasks to your team boards, compiles progress metrics, and highlights risk factors.",
    icon: ShieldCheck,
    color: "bg-vivid-mint/20", // Mint tint
  },
  {
    number: "04",
    title: "Reports delivered",
    description: "Dispatches summarized operations reports directly to Slack, email, or WhatsApp, keeping admins in the loop.",
    icon: Forward,
    color: "bg-white",
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32 bg-muted-sage/10 border-t-2 border-dashed border-forest-green/20 relative">
      
      {/* Decorative Dot Grid Background */}
      <div className="absolute inset-0 bg-grid-dots opacity-5 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24 relative z-10">
        <span className="px-4 py-1.5 rounded-full border-2 border-forest-green bg-sunshine-yellow text-xs font-bold text-forest-green uppercase shadow-[2px_2px_0px_0px_#10380b] tracking-wider select-none">
          TIMELINE
        </span>
        <h2 className="font-editorial text-4xl md:text-5xl lg:text-[54px] text-forest-green font-black leading-tight mt-6 mb-6">
          FOUR SIMPLE STEPS. TOTAL AUTOMATION.
        </h2>
        <p className="font-body text-base md:text-lg text-forest-green/80">
          How CompanyGPT orchestrates business intelligence and tasks without human intervention.
        </p>
      </div>

      {/* Horizontal Steps Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center relative group"
            >
              
              {/* Card Container */}
              <div className="w-full border-2 border-forest-green bg-parchment-white rounded-[32px] p-6 shadow-card hover:shadow-[12px_12px_0px_0px_#10380b] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center">
                
                {/* Number Circle and Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-full border-2 border-forest-green ${step.color} flex items-center justify-center shadow-[3px_3px_0px_0px_#10380b] group-hover:rotate-12 transition-transform duration-200`}>
                    <Icon className="w-8 h-8 text-forest-green" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full border-2 border-forest-green bg-sunshine-yellow flex items-center justify-center font-editorial font-bold text-sm text-forest-green shadow-[1px_1px_0px_0px_#10380b]">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="font-editorial text-2xl font-black text-forest-green mb-3">
                  {step.title}
                </h3>
                
                <p className="font-body text-sm md:text-base text-forest-green/80 leading-relaxed">
                  {step.description}
                </p>

              </div>

              {/* Connecting Vector Arrow (Desktop only - hides on final step) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-[52px] -right-[18%] w-[32%] z-20 pointer-events-none">
                  <svg width="100%" height="24" viewBox="0 0 100 24" fill="none" preserveAspectRatio="none">
                    <path
                      d="M0,12 C25,0 75,24 100,12"
                      stroke="#10380b"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    <polygon points="98,12 92,8 94,12 92,16" fill="#10380b" stroke="#10380b" strokeWidth="1" />
                  </svg>
                </div>
              )}

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};
export default HowItWorks;
