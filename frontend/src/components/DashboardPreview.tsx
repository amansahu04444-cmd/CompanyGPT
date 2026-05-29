import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card';
import {
  LayoutDashboard,
  CheckSquare,
  MessageSquare,
  Sparkles,
  BarChart3,
  TrendingUp
} from 'lucide-react';

type TabType = 'analytics' | 'kanban' | 'chat';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('analytics');

  return (
    <section id="analytics" className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32 bg-buttermilk relative">
      
      {/* Decorative Dot Grid Background */}
      <div className="absolute inset-0 bg-grid-dots opacity-5 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 relative z-10">
        <span className="px-4 py-1.5 rounded-full border-2 border-forest-green bg-sunshine-yellow text-xs font-bold text-forest-green uppercase shadow-[2px_2px_0px_0px_#10380b] tracking-wider select-none">
          DASHBOARD PREVIEW
        </span>
        <h2 className="font-editorial text-4xl md:text-5xl lg:text-[54px] text-forest-green font-black leading-tight mt-6 mb-6">
          THE ENTIRE COMPANY OPERATIONS. <br />
          UNDER YOUR COMMAND.
        </h2>
        <p className="font-body text-base md:text-lg text-forest-green/80">
          An enterprise-grade operating system designed to give leaders and teams a clear, data-driven view of organizational throughput.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap justify-center gap-3.5 mb-8 relative z-10">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-5 py-3 rounded-full font-body font-bold text-sm border-2 border-forest-green flex items-center gap-2 transition-all ${
            activeTab === 'analytics'
              ? 'bg-sunshine-yellow text-forest-green shadow-[3px_3px_0px_0px_#10380b]'
              : 'bg-parchment-white text-forest-green/70 hover:bg-parchment-white hover:text-forest-green shadow-[1px_1px_0px_0px_#10380b] active:translate-y-0.5'
          }`}
        >
          <BarChart3 className="w-4 h-4" /> Operational Analytics
        </button>
        <button
          onClick={() => setActiveTab('kanban')}
          className={`px-5 py-3 rounded-full font-body font-bold text-sm border-2 border-forest-green flex items-center gap-2 transition-all ${
            activeTab === 'kanban'
              ? 'bg-sunshine-yellow text-forest-green shadow-[3px_3px_0px_0px_#10380b]'
              : 'bg-parchment-white text-forest-green/70 hover:bg-parchment-white hover:text-forest-green shadow-[1px_1px_0px_0px_#10380b] active:translate-y-0.5'
          }`}
        >
          <CheckSquare className="w-4 h-4" /> AI-Extracted Kanban
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-5 py-3 rounded-full font-body font-bold text-sm border-2 border-forest-green flex items-center gap-2 transition-all ${
            activeTab === 'chat'
              ? 'bg-sunshine-yellow text-forest-green shadow-[3px_3px_0px_0px_#10380b]'
              : 'bg-parchment-white text-forest-green/70 hover:bg-parchment-white hover:text-forest-green shadow-[1px_1px_0px_0px_#10380b] active:translate-y-0.5'
          }`}
        >
          <MessageSquare className="w-4 h-4" /> Company AI Chat
        </button>
      </div>

      {/* Main Large Dashboard Container */}
      <Card className="w-full border-2 border-forest-green p-4 md:p-6 bg-parchment-white shadow-card relative overflow-hidden z-10 max-w-6xl mx-auto rounded-[32px] md:rounded-[40px]">
        
        {/* Fake Desktop Titlebar */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-forest-green/10 mb-4 px-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-forest-green"></span>
              <span className="w-3 h-3 rounded-full bg-muted-sage"></span>
              <span className="w-3 h-3 rounded-full bg-sunshine-yellow"></span>
            </div>
            <span className="hidden sm:inline-block h-4 w-[1px] bg-forest-green/20 mx-2"></span>
            <span className="hidden sm:inline-block font-body font-bold text-xs text-forest-green/60">https://app.companygpt.com/workspace</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-vivid-mint animate-pulse"></span>
            <span className="font-body font-bold text-[10px] text-forest-green/80 tracking-wider uppercase">CONNECTED: 4 AGENTS ONLINE</span>
          </div>
        </div>

        {/* Outer Dashboard Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[460px]">
          
          {/* Dashboard Left Sidebar */}
          <div className="lg:col-span-3 border-2 border-forest-green rounded-[24px] bg-white p-4 flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-2">
              <div className="p-2 border border-forest-green/20 rounded-xl bg-parchment-white/50 flex items-center justify-between mb-4">
                <span className="font-editorial text-lg font-bold text-forest-green">✨ METATECH INC</span>
                <span className="w-5 h-5 rounded-full bg-[#10380b] flex items-center justify-center text-[10px] text-white">M</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-sunshine-yellow/20 text-forest-green border border-sunshine-yellow/40 font-body font-bold text-sm">
                <LayoutDashboard className="w-4 h-4 shrink-0" />
                <span>Overview Hub</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-forest-green/60 hover:bg-forest-green/5 font-body font-semibold text-sm cursor-pointer">
                <CheckSquare className="w-4 h-4 shrink-0" />
                <span>AI Backlog</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-forest-green/60 hover:bg-forest-green/5 font-body font-semibold text-sm cursor-pointer">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Operations Chat</span>
              </div>
            </div>

            {/* User Profile Card */}
            <div className="border-t border-forest-green/10 pt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-muted-sage border-2 border-forest-green flex items-center justify-center font-bold text-xs">
                JD
              </div>
              <div>
                <h4 className="font-body font-bold text-xs text-forest-green leading-none">Jack Dorsey</h4>
                <span className="text-[10px] text-forest-green/50">Admin Role</span>
              </div>
            </div>
          </div>

          {/* Dashboard Right Main Panels */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              
              {/* Tab 1: Operational Analytics View */}
              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Top KPIs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border-2 border-forest-green p-4 rounded-[20px] bg-white flex flex-col">
                      <span className="font-body text-[10px] font-bold text-forest-green/50 uppercase">TOTAL JOBS EXECUTED</span>
                      <span className="font-editorial text-3xl font-black text-forest-green mt-1">14,290+</span>
                      <span className="text-[9px] text-vivid-mint font-bold mt-1">▲ +12% this week</span>
                    </div>
                    <div className="border-2 border-forest-green p-4 rounded-[20px] bg-white flex flex-col">
                      <span className="font-body text-[10px] font-bold text-forest-green/50 uppercase">AVG MEETING EFFICIENCY</span>
                      <span className="font-editorial text-3xl font-black text-forest-green mt-1">91.4%</span>
                      <span className="text-[9px] text-forest-green/60 font-bold mt-1">Optimal Range</span>
                    </div>
                    <div className="border-2 border-forest-green p-4 rounded-[20px] bg-white flex flex-col">
                      <span className="font-body text-[10px] font-bold text-forest-green/50 uppercase">BURNOUT RISK METRIC</span>
                      <span className="font-editorial text-3xl font-black text-vivid-mint mt-1">4.2%</span>
                      <span className="text-[9px] text-[#30be60] font-bold mt-1">▼ -1.8% decrement</span>
                    </div>
                  </div>

                  {/* Operational Chart */}
                  <div className="border-2 border-forest-green rounded-[24px] bg-white p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4 border-b border-forest-green/5 pb-3">
                      <h4 className="font-body font-bold text-sm text-forest-green flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" /> Weekly Operations Output
                      </h4>
                      <span className="text-[9px] font-bold text-forest-green bg-sunshine-yellow border border-forest-green px-2 py-0.5 rounded">
                        24H SYNC ACTIVE
                      </span>
                    </div>
                    
                    <div className="flex items-end justify-between h-44 pt-4 gap-2">
                      {[35, 60, 50, 75, 40, 85, 95, 65, 80, 55, 90, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                          <div style={{ height: `${h}%` }} className={`w-full border-x border-t border-forest-green rounded-t-md transition-all duration-500 ${i === 6 ? 'bg-sunshine-yellow' : 'bg-muted-sage'}`}></div>
                          <span className="text-[9px] font-bold text-forest-green/40 font-body">W{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: AI-Extracted Kanban View */}
              {activeTab === 'kanban' && (
                <motion.div
                  key="kanban"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {/* Column 1: To Do */}
                  <div className="border-2 border-forest-green rounded-[24px] bg-white p-4 flex flex-col gap-3 min-h-[300px]">
                    <div className="flex items-center justify-between border-b border-forest-green/10 pb-2 mb-1">
                      <span className="font-editorial text-sm font-bold text-forest-green uppercase">TO DO</span>
                      <span className="w-5 h-5 rounded-full border border-forest-green bg-muted-sage/30 flex items-center justify-center text-[10px] font-bold">2</span>
                    </div>
                    <div className="border-2 border-forest-green rounded-xl bg-parchment-white/40 p-3 text-left">
                      <h5 className="font-body font-bold text-xs text-forest-green">Refactor core auth flow</h5>
                      <p className="text-[9px] text-forest-green/60 mt-1 leading-snug">Prepare migration scripts for PostgreSQL v16.</p>
                    </div>
                    <div className="border-2 border-forest-green rounded-xl bg-parchment-white/40 p-3 text-left">
                      <h5 className="font-body font-bold text-xs text-forest-green font-bold">Optimize dynamic caching</h5>
                      <p className="text-[9px] text-forest-green/60 mt-1 leading-snug">Review Redis database instances performance details.</p>
                    </div>
                  </div>

                  {/* Column 2: In Progress */}
                  <div className="border-2 border-forest-green rounded-[24px] bg-white p-4 flex flex-col gap-3 min-h-[300px]">
                    <div className="flex items-center justify-between border-b border-forest-green/10 pb-2 mb-1">
                      <span className="font-editorial text-sm font-bold text-forest-green uppercase">IN PROGRESS</span>
                      <span className="w-5 h-5 rounded-full border border-forest-green bg-sunshine-yellow/50 flex items-center justify-center text-[10px] font-bold">1</span>
                    </div>
                    <div className="border-2 border-forest-green rounded-xl bg-[#fce519]/5 p-3 text-left border-dashed">
                      <h5 className="font-body font-bold text-xs text-forest-green flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-sunshine-yellow rounded-full animate-ping"></span>
                        <span>Client portal redesign</span>
                      </h5>
                      <p className="text-[9px] text-forest-green/60 mt-1 leading-snug">Revising layout configurations according to brand specifications.</p>
                    </div>
                  </div>

                  {/* Column 3: Extracted by AI */}
                  <div className="border-2 border-forest-green rounded-[24px] bg-white p-4 flex flex-col gap-3 min-h-[300px]">
                    <div className="flex items-center justify-between border-b border-forest-green/10 pb-2 mb-1">
                      <span className="font-editorial text-sm font-bold text-forest-green uppercase flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-forest-green" /> EXTRACTED BY AI
                      </span>
                      <span className="w-5 h-5 rounded-full border border-forest-green bg-vivid-mint/40 flex items-center justify-center text-[10px] font-bold">2</span>
                    </div>
                    <div className="border-2 border-forest-green rounded-xl bg-vivid-mint/5 p-3 text-left">
                      <div className="flex items-center justify-between">
                        <h5 className="font-body font-bold text-xs text-forest-green">Review security audit logs</h5>
                        <span className="text-[8px] font-bold text-vivid-mint bg-vivid-mint/10 border border-vivid-mint/20 px-1 rounded">NEW</span>
                      </div>
                      <p className="text-[9px] text-forest-green/60 mt-1 leading-snug">Extracted automatically from #dev Slack thread at 14:22 PM.</p>
                    </div>
                    <div className="border-2 border-forest-green rounded-xl bg-vivid-mint/5 p-3 text-left">
                      <div className="flex items-center justify-between">
                        <h5 className="font-body font-bold text-xs text-forest-green">Update billing contracts</h5>
                        <span className="text-[8px] font-bold text-vivid-mint bg-vivid-mint/10 border border-vivid-mint/20 px-1 rounded">NEW</span>
                      </div>
                      <p className="text-[9px] text-forest-green/60 mt-1 leading-snug">Extracted automatically from Zoom transcript sync file.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Company AI Chat View */}
              {activeTab === 'chat' && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="border-2 border-forest-green rounded-[24px] bg-white p-4 flex flex-col justify-between h-[360px] text-left"
                >
                  {/* Chat logs */}
                  <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-muted-sage border border-forest-green flex items-center justify-center font-bold text-[10px]">
                        JD
                      </div>
                      <div className="bg-[#10380b]/5 border border-forest-green/20 rounded-xl p-2.5 max-w-[80%] text-xs font-semibold">
                        What was the main blocker discussed in the team standup yesterday?
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5 self-end justify-end">
                      <div className="bg-sunshine-yellow border-2 border-forest-green rounded-xl p-3 max-w-[80%] text-xs shadow-[2px_2px_0px_0px_#10380b]">
                        <div className="flex items-center gap-1 mb-1 font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-forest-green" />
                          <span>CompanyGPT Agent</span>
                        </div>
                        <p className="font-body text-forest-green/90 leading-relaxed">
                          Yesterday's Standup transcript reveals that <span className="font-bold">DevOps integration setup</span> was blocked due to delay in QA server configuration. 
                          I have extracted a task: <span className="font-bold underline">Setup security QA environments</span> and routed it to sprint log board.
                        </p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-sunshine-yellow border-2 border-forest-green flex items-center justify-center font-bold text-[10px] shrink-0">
                        ⚡
                      </div>
                    </div>
                  </div>

                  {/* Interactive Prompt Field mockup */}
                  <div className="mt-4 pt-3 border-t border-forest-green/10 flex gap-2">
                    <input
                      type="text"
                      readOnly
                      placeholder="Ask CompanyGPT about task metrics, operations, or blockers..."
                      className="flex-1 bg-parchment-white border-2 border-forest-green rounded-full px-4 py-2.5 text-xs text-forest-green font-semibold focus:outline-none"
                    />
                    <button className="bg-[#10380b] hover:bg-forest-green/90 text-white rounded-full px-4 py-2 text-xs font-bold font-body transition-colors">
                      Query
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </Card>
    </section>
  );
};
export default DashboardPreview;
