import React from 'react';
import { Card } from './Card';
import { Heart } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "“Before CompanyGPT, my Fridays were lost in standup logs and Slack threads. Now, it delivers a flawless operations report right to my phone. Genuinely feels like having a chief of staff on autopilot.”",
    author: "Marc Andreessen",
    role: "General Partner",
    company: "Future Capital",
    avatarText: "MA",
    bgColor: "bg-[#dbe8ac]", // Muted Sage
  },
  {
    quote: "“The task extraction alone saved us dozens of hours. Our Zoom meetings conclude, and 5 minutes later the extracted action items are organized on our Kanban board automatically. Insane.”",
    author: "Sarah Drasner",
    role: "VP of Product",
    company: "Syntax Labs",
    avatarText: "SD",
    bgColor: "bg-sunshine-yellow/30",
  },
  {
    quote: "“We were skeptical about AI wrappers, but CompanyGPT is built differently. The team burnout insights helped us reallocate tasks and keep our remote developers perfectly balanced. Essential.”",
    author: "Tobi Lütke",
    role: "CEO & Founder",
    company: "Merchant.ly",
    avatarText: "TL",
    bgColor: "bg-vivid-mint/10",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32 text-center bg-muted-sage/10 border-y-2 border-forest-green relative">
      
      {/* Decorative Dots */}
      <div className="absolute top-12 left-12 w-20 h-20 bg-grid-dots opacity-10 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto mb-16 md:mb-24">
        <span className="px-4 py-1.5 rounded-full border-2 border-forest-green bg-sunshine-yellow text-xs font-bold text-forest-green uppercase shadow-[2px_2px_0px_0px_#10380b] tracking-wider select-none">
          REVIEWS
        </span>
        <h2 className="font-editorial text-4xl md:text-5xl lg:text-[54px] text-forest-green font-black leading-tight mt-6 mb-6">
          KUDOS FROM RUGGED FOUNDERS
        </h2>
        <p className="font-body text-base md:text-lg text-forest-green/80">
          Here's what builders, executives, and AI-first managers say about migrating their operations to CompanyGPT.
        </p>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <Card
            key={idx}
            className="flex flex-col justify-between border-2 border-forest-green text-left p-8 bg-parchment-white min-h-[380px]"
          >
            {/* Playful Doodles Header inside Review */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-sunshine-yellow text-lg">★</span>
                ))}
              </div>
              <Heart className="w-4 h-4 text-forest-green fill-forest-green" />
            </div>

            {/* Handwritten-Style Quote */}
            <p className="font-body font-medium italic text-base md:text-[17px] text-forest-green leading-relaxed mb-8 flex-1">
              {t.quote}
            </p>

            {/* Bio Row */}
            <div className="flex items-center gap-3.5 border-t-2 border-dashed border-forest-green/10 pt-4">
              <div className={`w-10 h-10 rounded-full border-2 border-forest-green ${t.bgColor} flex items-center justify-center font-bold text-xs shadow-[2px_2px_0px_0px_#10380b]`}>
                {t.avatarText}
              </div>
              <div>
                <h4 className="font-body font-bold text-sm text-forest-green leading-none">{t.author}</h4>
                <p className="font-body text-xs text-forest-green/60 mt-1 font-semibold">
                  {t.role}, <span className="underline">{t.company}</span>
                </p>
              </div>
            </div>

          </Card>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
