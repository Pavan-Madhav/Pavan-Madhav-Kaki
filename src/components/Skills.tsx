import React from 'react';
import { Terminal, Globe, Cpu, Lightbulb, CheckCircle, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

export const Skills: React.FC = () => {
  const { programming, webDevelopment, artificialIntelligence, developmentInterests } = PORTFOLIO_CONFIG.skills;

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <span>Capabilities &amp; Curriculum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Technical Skills &amp; Focus Areas
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A transparent overview of the technologies I am currently practicing and exploring in my first semester.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1: Programming */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Programming</h3>
                  <p className="text-xs text-slate-500">Core algorithmic language</p>
                </div>
              </div>
              <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                Foundational
              </span>
            </div>

            <div className="space-y-4">
              {programming.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      {item.name}
                      <span className="text-xs font-normal text-slate-500">({item.level})</span>
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200/60 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Web Development */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Web Development</h3>
                  <p className="text-xs text-slate-500">Structure &amp; styling fundamentals</p>
                </div>
              </div>
              <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                Frontend Basics
              </span>
            </div>

            <div className="space-y-4">
              {webDevelopment.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      {item.name}
                      <span className="text-xs font-normal text-slate-500">({item.level})</span>
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Artificial Intelligence */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Artificial Intelligence</h3>
                  <p className="text-xs text-slate-500">Generative models &amp; tools</p>
                </div>
              </div>
              <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                Active Frontier
              </span>
            </div>

            <div className="space-y-4">
              {artificialIntelligence.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      {item.name}
                      <span className="text-xs font-normal text-slate-500">({item.level})</span>
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Development Interests */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Development Interests</h3>
                  <p className="text-xs text-slate-500">Areas of passion &amp; mindset</p>
                </div>
              </div>
              <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                Mindset
              </span>
            </div>

            <div className="space-y-3">
              {developmentInterests.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ethical / Honest Skill Policy Notice */}
        <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Zero-Inflation Policy:</strong> Skills are marked strictly at current foundational and learning levels. No arbitrary percentages or false seniority claims.
            </span>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            Status: Real-world learning in progress
          </div>
        </div>
      </div>
    </section>
  );
};
