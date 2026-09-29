import React from 'react';
import { ArrowUp, Github, Linkedin, Heart, ExternalLink } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

interface FooterProps {
  onOpenLinkedInPlaceholder: () => void;
  onOpenGuideModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLinkedInPlaceholder,
  onOpenGuideModal,
}) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Identity & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
              <span className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                {PORTFOLIO_CONFIG.personal.monogram}
              </span>
              <span className="text-base font-bold text-slate-900">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {PORTFOLIO_CONFIG.personal.tagline}
            </p>
          </div>

          {/* Navigation & Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            <a
              href="#about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#activities"
              className="hover:text-blue-600 transition-colors"
            >
              Activities
            </a>
            <a
              href="#goals"
              className="hover:text-blue-600 transition-colors"
            >
              Roadmap
            </a>
            <button
              type="button"
              onClick={onOpenGuideModal}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Deployment Guide
            </button>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_CONFIG.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenLinkedInPlaceholder}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="LinkedIn Profile (Placeholder)"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            &copy; {currentYear} {PORTFOLIO_CONFIG.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
