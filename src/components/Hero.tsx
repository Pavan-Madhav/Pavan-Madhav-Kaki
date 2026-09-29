import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink, Terminal, Sparkles, CheckCircle2, Copy } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

interface HeroProps {
  onOpenLinkedInPlaceholder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLinkedInPlaceholder }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const pythonSnippet = `# profile.py — Pavan Madhav Kaki
class AspiringAIEngineer:
    def __init__(self):
        self.name = "Pavan Madhav Kaki"
        self.education = "B.Tech, 1st Semester"
        self.current_stack = ["Python", "HTML & CSS", "Generative AI"]
        self.motto = "Currently learning. Constantly building. Always curious."

    def current_mission(self):
        return "Mastering core CS logic & building practical software."

pavan = AspiringAIEngineer()
print(pavan.current_mission())`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pythonSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Stage Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{PORTFOLIO_CONFIG.personal.education}</span>
              <span className="text-blue-300">•</span>
              <span>First-Year Engineering</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600 inline-block">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
              .
            </h1>

            {/* Professional Headline */}
            <div className="text-lg sm:text-xl font-semibold text-slate-700 mb-5">
              {PORTFOLIO_CONFIG.personal.role}
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              {PORTFOLIO_CONFIG.personal.heroDescription}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm shadow-xs transition-colors text-center cursor-pointer"
              >
                Explore My Projects
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-300 transition-colors text-center cursor-pointer"
              >
                Connect With Me
              </button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Profiles:
              </span>

              {/* GitHub */}
              <a
                href={PORTFOLIO_CONFIG.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:text-blue-600 transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4 text-slate-800" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* LinkedIn (Placeholder Modal/Alert) */}
              <button
                type="button"
                onClick={onOpenLinkedInPlaceholder}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 bg-white border border-dashed border-slate-300 hover:border-blue-400 hover:text-blue-600 transition-colors cursor-pointer shadow-2xs"
                title="LinkedIn profile link is marked as placeholder"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded">
                  Placeholder
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Code Card Illustration */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Background ambient framing */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-xs -z-10" />

              {/* Card Window */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-xl overflow-hidden text-left font-mono">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <div className="ml-2 flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      <span>profile.py</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] font-sans text-slate-400 hover:text-slate-200 transition-colors px-2 py-0.5 rounded bg-slate-800/50 hover:bg-slate-800"
                    title="Copy code"
                  >
                    {copiedCode ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 text-xs leading-relaxed overflow-x-auto text-slate-300">
                  <div>
                    <span className="text-slate-500"># profile.py — Student Profile</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-indigo-400">class </span>
                    <span className="text-amber-300 font-semibold">AspiringAIEngineer</span>
                    <span className="text-slate-400">:</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">def </span>
                    <span className="text-blue-300">__init__</span>
                    <span className="text-slate-400">(self):</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-slate-400">self.name = </span>
                    <span className="text-emerald-300">"Pavan Madhav Kaki"</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-slate-400">self.stage = </span>
                    <span className="text-emerald-300">"B.Tech, 1st Semester"</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-slate-400">self.focus = </span>
                    <span className="text-slate-400">[</span>
                    <span className="text-emerald-300">"Python"</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-300">"Generative AI"</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-300">"Web"</span>
                    <span className="text-slate-400">]</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-slate-400">self.motto = </span>
                    <span className="text-emerald-300">"Constantly building."</span>
                  </div>

                  <div className="pl-4 mt-2">
                    <span className="text-indigo-400">def </span>
                    <span className="text-blue-300">current_mission</span>
                    <span className="text-slate-400">(self):</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-indigo-400">return </span>
                    <span className="text-emerald-300">"Mastering core logic & projects"</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800 text-slate-400">
                    <div>
                      <span className="text-slate-500">&gt;&gt;&gt; </span>
                      <span className="text-blue-300">pavan = AspiringAIEngineer()</span>
                    </div>
                    <div>
                      <span className="text-slate-500">&gt;&gt;&gt; </span>
                      <span className="text-emerald-400">"Mastering core logic &amp; projects"</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-sans text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Python 3.12 • Clean Logic</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    100% Student Authored
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
