import React from 'react';
import { Card } from './Card';
import {
  FileText,
  Volume2,
  CheckSquare,
  TrendingUp,
  Smartphone,
  MessageCircle,
  FileCode,
  Layers,
  Heart
} from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
  illustration: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    icon: FileText,
    title: "AI Auto-Reporter",
    description: "Automatically generates intelligent, hyper-detailed reports on team progress, bottlenecks, and completed milestones.",
    color: "bg-[#dbe8ac]", // Muted Sage
    illustration: (
      <div className="mt-4 border-2 border-forest-green rounded-[20px] bg-white p-3 flex flex-col gap-2 shadow-[2px_2px_0px_0px_#10380b]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-forest-green/60">weekly_sync.pdf</span>
          <span className="text-[9px] font-bold text-vivid-mint bg-vivid-mint/10 px-1.5 py-0.5 rounded border border-vivid-mint/20">READY</span>
        </div>
        <div className="w-full bg-[#10380b]/10 h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#10380b] h-full w-[88%]"></div>
        </div>
      </div>
    )
  },
  {
    icon: Volume2,
    title: "Meeting Intelligence",
    description: "Converts transcripts and audio files from Zoom/Google Meet into concise meeting summaries and immediate next steps.",
    color: "bg-[#fce519]/25", // Yellow tint
    illustration: (
      <div className="mt-4 border-2 border-forest-green rounded-[20px] bg-white p-3 flex items-center justify-between shadow-[2px_2px_0px_0px_#10380b]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e1523d] animate-pulse"></div>
          <span className="text-[10px] font-bold text-forest-green/80">Transcribing Meet #42</span>
        </div>
        <span className="text-[10px] font-editorial font-bold text-forest-green">04:22</span>
      </div>
    )
  },
  {
    icon: CheckSquare,
    title: "AI Task Extraction",
    description: "Intelligently extracts hidden tasks and commitments from text conversations and schedules them on your dashboard automatically.",
    color: "bg-[#30be60]/15", // Mint tint
    illustration: (
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 border-2 border-forest-green rounded-full bg-white px-3 py-1.5 shadow-[2px_2px_0px_0px_#10380b]">
          <span className="w-4 h-4 border-2 border-forest-green rounded-md bg-sunshine-yellow shrink-0"></span>
          <span className="text-[10px] font-body font-bold text-forest-green text-left">Deploy hotfix for client portal</span>
        </div>
      </div>
    )
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Monitors velocity trends and flags potential deadline delays and operational overload before they impact the sprint.",
    color: "bg-[#fefde6]", // Parchment White
    illustration: (
      <div className="mt-4 border-2 border-forest-green rounded-[20px] bg-white p-3 flex flex-col justify-between h-20 shadow-[2px_2px_0px_0px_#10380b]">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-forest-green/50">PROJECT VELOCITY</span>
          <span className="text-[10px] text-vivid-mint font-bold">OPTIMAL</span>
        </div>
        <div className="flex items-end justify-between h-8 gap-1 pt-1">
          {[20, 40, 30, 55, 75, 95].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className="w-full bg-[#dbe8ac] border border-forest-green rounded-t-sm"></div>
          ))}
        </div>
      </div>
    )
  },
  {
    icon: Smartphone,
    title: "WhatsApp Delivery",
    description: "Delivers aggregated performance reports and critical delay warnings directly to owners and HR leads on their mobile.",
    color: "bg-[#30be60]/10",
    illustration: (
      <div className="mt-4 border-2 border-forest-green rounded-[20px] bg-[#dbe8ac]/40 p-3 shadow-[2px_2px_0px_0px_#10380b]">
        <div className="bg-white border-2 border-forest-green rounded-xl p-2 text-[9px] font-body text-forest-green/90 leading-tight">
          💬 <span className="font-bold">CompanyGPT:</span> Sales target achieved! 🚀 142 contracts automated.
        </div>
      </div>
    )
  },
  {
    icon: MessageCircle,
    title: "Company AI Chat",
    description: "Ask anything about your company's documents, meeting transcripts, or performance trends and receive instant answers.",
    color: "bg-[#fce519]/10",
    illustration: (
      <div className="mt-4 border-2 border-forest-green rounded-[20px] bg-white p-3 shadow-[2px_2px_0px_0px_#10380b] flex flex-col gap-1.5">
        <span className="text-[9px] font-bold text-forest-green/50">ASK ANYTHING...</span>
        <div className="border border-forest-green rounded-lg p-1.5 text-[10px] text-forest-green/80 bg-parchment-white/40">
          "Who is handling client onboarding?"
        </div>
      </div>
    )
  },
  {
    icon: FileCode,
    title: "Document Intelligence",
    description: "Upload dense contracts, standard operating guidelines, or spreadsheets and extract semantic insights in seconds.",
    color: "bg-[#fefde6]",
    illustration: (
      <div className="mt-4 border-2 border-forest-green rounded-[20px] bg-white p-3 shadow-[2px_2px_0px_0px_#10380b] flex items-center justify-between">
        <span className="text-[10px] font-bold text-forest-green">SLA_Agreement_2026.docx</span>
        <span className="text-[9px] font-bold text-forest-green/60 bg-[#dbe8ac] px-2 py-0.5 rounded border border-forest-green">PDF</span>
      </div>
    )
  },
  {
    icon: Layers,
    title: "Productivity Dashboard",
    description: "A beautifully consolidated interface monitoring tasks, workload metrics, and automated summaries in one place.",
    color: "bg-[#dbe8ac]/20",
    illustration: (
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        <div className="h-10 border-2 border-forest-green rounded-lg bg-[#30be60]/10 flex flex-col items-center justify-center">
          <span className="text-[8px] font-bold text-forest-green/50">KPI</span>
          <span className="text-[10px] font-bold text-[#30be60]">98%</span>
        </div>
        <div className="h-10 border-2 border-forest-green rounded-lg bg-[#fce519]/10 flex flex-col items-center justify-center">
          <span className="text-[8px] font-bold text-forest-green/50">JOBS</span>
          <span className="text-[10px] font-bold text-forest-green">412</span>
        </div>
        <div className="h-10 border-2 border-forest-green rounded-lg bg-[#10380b]/5 flex flex-col items-center justify-center">
          <span className="text-[8px] font-bold text-forest-green/50">TIME</span>
          <span className="text-[10px] font-bold text-forest-green">1.2s</span>
        </div>
      </div>
    )
  },
  {
    icon: Heart,
    title: "Team Health Insights",
    description: "Understand individual team load distributions and receive recommendations to balance the work efficiently.",
    color: "bg-[#30be60]/20",
    illustration: (
      <div className="mt-4 border-2 border-forest-green rounded-[20px] bg-white p-3 shadow-[2px_2px_0px_0px_#10380b] flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-vivid-mint/10 border border-vivid-mint flex items-center justify-center text-vivid-mint">
          ❤
        </div>
        <div>
          <h5 className="font-body font-bold text-[10px] text-forest-green leading-none">Team Equilibrium</h5>
          <p className="font-body text-[9px] text-forest-green/60 mt-0.5">Workloads balanced flawlessly.</p>
        </div>
      </div>
    )
  }
];

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32 text-center">
      
      {/* Section Headers */}
      <div className="max-w-2xl mx-auto mb-16 md:mb-24">
        <span className="px-4 py-1.5 rounded-full border-2 border-forest-green bg-sunshine-yellow text-xs font-bold text-forest-green uppercase shadow-[2px_2px_0px_0px_#10380b] tracking-wider select-none">
          CAPABILITIES
        </span>
        <h2 className="font-editorial text-4xl md:text-5xl lg:text-[54px] text-forest-green font-black leading-tight mt-6 mb-6">
          HANDCRAFTED FEATURES FOR POWER USERS
        </h2>
        <p className="font-body text-base md:text-lg text-forest-green/80">
          Ditch generic AI wrappers. We've built an interconnected ecosystem designed to run your business operations on autopilot.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="flex flex-col justify-between border-2 border-forest-green text-left min-h-[360px]"
            >
              {/* Feature Icon Header */}
              <div>
                <div className={`w-12 h-12 rounded-full border-2 border-forest-green ${feature.color} flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_#10380b]`}>
                  <Icon className="w-6 h-6 text-forest-green" />
                </div>
                
                {/* Heading */}
                <h3 className="font-editorial text-2xl font-black text-forest-green mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="font-body text-sm md:text-base text-forest-green/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Dynamic Illustrated Doodles */}
              <div>
                {feature.illustration}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
export default FeatureGrid;
