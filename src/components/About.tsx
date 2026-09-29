import React from 'react';
import { Sparkles, Brain, Code, Lightbulb, Users, Compass, BookOpenCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

export const About: React.FC = () => {
  const highlightPoints = [
    {
      icon: Brain,
      title: 'Curiosity About Artificial Intelligence',
      description:
        'Fascinated by how intelligent systems operate, from foundational mathematical reasoning to modern autonomous models.',
    },
    {
      icon: Code,
      title: 'Interest in Python & Web Development',
      description:
        'Actively building foundational muscle memory in Python syntax and structuring functional web interfaces with clean HTML/CSS.',
    },
    {
      icon: Sparkles,
      title: 'Early Exploration of Generative AI',
      description:
        'Experimenting with large language models, prompt engineering patterns, and understanding practical generative workflows.',
    },
    {
      icon: Lightbulb,
      title: 'Solving Problems Through Code',
      description:
        'Enjoying the process of taking abstract requirements, writing procedural and conditional logic, and debugging edge cases.',
    },
    {
      icon: Users,
      title: 'Hackathons & Ideathons',
      description:
        'Eager to collaborate in collegiate team competitions, ideating impactful solutions and delivering working prototypes under deadlines.',
    },
    {
      icon: BookOpenCheck,
      title: 'Commitment to Continuous Learning',
      description:
        'Practicing coding consistently alongside my coursework, embracing mistakes as feedback, and shipping small projects regularly.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            A Little About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {PORTFOLIO_CONFIG.personal.aboutIntro}
          </p>
        </div>

        {/* Personal Statement Quote Banner */}
        <div className="relative mb-14 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Personal Statement
              </span>
              <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 italic tracking-tight">
                "{PORTFOLIO_CONFIG.personal.motto}"
              </blockquote>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-md border border-slate-200">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>B.Tech Semester 1 Milestone</span>
            </div>
          </div>
        </div>

        {/* 6 Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Academic Note */}
        <div className="mt-10 p-4 rounded-lg bg-blue-50/50 border border-blue-100 flex items-start gap-3">
          <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
            i
          </div>
          <div className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-800">Academic Transparency:</span> As a first-semester B.Tech student, my primary mission is building rock-solid programming habits through daily problem solving and transparent progress. Everything on this portfolio reflects authentic, active work.
          </div>
        </div>
      </div>
    </section>
  );
};
