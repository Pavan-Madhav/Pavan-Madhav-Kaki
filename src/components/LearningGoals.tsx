import React from 'react';
import { Target, ArrowUpRight, Compass, CheckCircle } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

export const LearningGoals: React.FC = () => {
  return (
    <section id="goals" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <span>Growth &amp; Ambition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            What I'm Exploring Next
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            My roadmap as an aspiring AI engineer. These represent active learning targets and future exploration areas, not completed claims.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PORTFOLIO_CONFIG.learningGoals.map((goal, index) => {
            const isProgress = goal.status === 'In Progress';
            const isActiveExploration = goal.status === 'Active Exploration';

            return (
              <div
                key={goal.id}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      0{index + 1}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full border ${
                        isProgress
                          ? 'bg-blue-50 text-blue-700 border-blue-200/60'
                          : isActiveExploration
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200/60'
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      {goal.status}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    {goal.area}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {goal.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Target className="w-3.5 h-3.5 text-blue-600" />
                  <span>Roadmap Priority</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mindset Statement */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Philosophy: Foundations Before Complexity
              </div>
              <div className="text-xs text-slate-500">
                Prioritizing strong algorithmic thinking and software hygiene before jumping into advanced architectures.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap self-start sm:self-auto"
          >
            <span>Discuss Learning Resources</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
