import React from 'react';
import { Calendar, Users2, Lightbulb, Code2, Sparkles, PlusCircle } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

export const Activities: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return Calendar;
      case 'Hackathons':
        return Users2;
      case 'Ideathons':
        return Lightbulb;
      case 'Projects':
        return Code2;
      case 'AI Exploration':
        return Sparkles;
      default:
        return Calendar;
    }
  };

  return (
    <section id="activities" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <span>Engagement &amp; Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Learning Beyond the Classroom
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            An honest overview of my collegiate coursework, technical interests, problem-solving activities, and exploratory initiatives.
          </p>
        </div>

        {/* Timeline / Activity Cards */}
        <div className="space-y-6 mb-12">
          {PORTFOLIO_CONFIG.activities.map((activity, index) => {
            const IconComponent = getCategoryIcon(activity.category);
            return (
              <div
                key={activity.id}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-shadow relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                          {activity.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-medium text-slate-500">
                          {activity.roleOrFocus}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {activity.title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/80 shrink-0 self-start">
                    {activity.period}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {activity.description}
                </p>

                {/* Key Takeaways */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Areas of Focus:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activity.keyTakeaways.map((takeaway, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/70 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Expansion Slot Card */}
        <div className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-6 text-center">
          <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            <PlusCircle className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-slate-800 mb-1">
            Future Milestones &amp; Verified Event Details
          </h4>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            As I participate in upcoming hackathons, campus ideations, and open-source contributions during my B.Tech studies, verified dates, team roles, and project outcomes will be added right here.
          </p>
        </div>
      </div>
    </section>
  );
};
