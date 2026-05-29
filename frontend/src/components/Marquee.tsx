import React from 'react';
import { Sparkles, MessageSquare, ShieldAlert, Award, Bot, FileText, Zap, BarChart } from 'lucide-react';

const badges = [
  { name: 'AI Meetings', icon: Zap },
  { name: 'AI Reports', icon: FileText },
  { name: 'WhatsApp Alerts', icon: MessageSquare },
  { name: 'Task Automation', icon: Bot },
  { name: 'Predictive Analytics', icon: BarChart },
  { name: 'Company AI Chat', icon: Sparkles },
  { name: 'Team Health Insights', icon: ShieldAlert },
  { name: 'Document Intelligence', icon: Award },
];

export const Marquee: React.FC = () => {
  // Duplicate badges list to ensure a seamless infinite scrolling width
  const doubleBadges = [...badges, ...badges, ...badges, ...badges];

  return (
    <section className="relative w-full overflow-hidden bg-muted-sage/30 border-y-2 border-forest-green py-8 select-none">
      {/* Editorial side fades */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-buttermilk to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-buttermilk to-transparent z-10 pointer-events-none"></div>

      {/* Row 1: Left scrolling */}
      <div className="flex overflow-hidden">
        <div className="flex gap-5 animate-marquee whitespace-nowrap">
          {doubleBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={`r1-${idx}`}
                className="inline-flex items-center gap-2.5 border-2 border-forest-green bg-parchment-white px-6 py-3.5 rounded-full shadow-[4px_4px_0px_0px_#10380b] hover:shadow-[6px_6px_0px_0px_#10380b] hover:-translate-y-0.5 transition-all duration-200 font-body text-sm md:text-base font-bold text-forest-green cursor-default"
              >
                <span className="w-6 h-6 rounded-full bg-sunshine-yellow border border-forest-green flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-forest-green" />
                </span>
                <span>{badge.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Marquee;
