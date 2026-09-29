import React, { useState } from 'react';
import { Github, Play, Code2, CheckCircle2, FileText, ExternalLink, HelpCircle } from 'lucide-react';
import { PORTFOLIO_CONFIG, ProjectItem } from '../portfolioConfig';
import { ProjectSimulatorModal } from './ProjectSimulatorModal';

interface ProjectsProps {
  onOpenRepoHelp: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenRepoHelp }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <span>Practical Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Projects I've Built
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Hands-on applications built to strengthen core programming concepts, algorithmic logic, and error handling in Python.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PORTFOLIO_CONFIG.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Body */}
              <div className="p-6">
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {project.description}
                </p>

                {/* Key Logic Features */}
                <div className="mb-5 space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Core Implementations:
                  </span>
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs font-mono font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                {/* Interactive Simulator / Code Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/70 rounded-lg transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-blue-600" />
                  <span>Run / View Code</span>
                </button>

                {/* GitHub Repo Button (Disabled/Placeholder per requirements until URL is set) */}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-800" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenRepoHelp(project.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-500 bg-white border border-dashed border-slate-300 hover:border-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                    title="Repository URL placeholder: Click to view instructions on how to link your GitHub repo"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-400" />
                    <span>Repo Pending</span>
                    <HelpCircle className="w-3 h-3 text-slate-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Transparency Note */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Project Integrity Note:</span>
            <span>All projects shown are built directly in Python to practice foundational algorithmic logic and user input workflows.</span>
          </div>
          <span className="text-slate-400 font-mono text-[11px] shrink-0">
            Source: Python 3 scripts available via "Run / View Code"
          </span>
        </div>
      </div>

      {/* Simulator Modal */}
      <ProjectSimulatorModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
