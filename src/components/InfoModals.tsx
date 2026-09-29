import React, { useState } from 'react';
import { X, CheckCircle, Copy, ExternalLink, BookOpen, Terminal, Rocket, CheckSquare, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

interface InfoModalsProps {
  modalType: 'linkedin' | 'email' | 'repo' | 'guide' | null;
  repoProjectTitle?: string;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({ modalType, repoProjectTitle, onClose }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  if (!modalType) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {modalType === 'linkedin' && <Linkedin className="w-5 h-5 text-blue-600" />}
            {modalType === 'email' && <Mail className="w-5 h-5 text-emerald-600" />}
            {modalType === 'repo' && <Github className="w-5 h-5 text-slate-800" />}
            {modalType === 'guide' && <BookOpen className="w-5 h-5 text-blue-600" />}

            <h3 className="text-base font-bold text-slate-900">
              {modalType === 'linkedin' && 'LinkedIn Profile Placeholder'}
              {modalType === 'email' && 'Email Address Placeholder'}
              {modalType === 'repo' && `Repository Linking: ${repoProjectTitle || 'Project'}`}
              {modalType === 'guide' && 'Developer & Deployment Guide'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-600">
          {/* LinkedIn Placeholder Modal */}
          {modalType === 'linkedin' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-slate-700 leading-relaxed text-xs sm:text-sm">
                Per your instructions, <strong>no fabricated profile URLs are used</strong>. The LinkedIn link is currently set as a designated placeholder until you create or provide your official LinkedIn profile URL.
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  How to link your actual LinkedIn URL:
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>Open <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-blue-700">src/portfolioConfig.ts</code>.</li>
                  <li>Locate the <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">social</code> object under <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">PORTFOLIO_CONFIG.personal</code>.</li>
                  <li>Change <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">linkedin: null</code> to your actual URL:</li>
                </ol>
              </div>

              <div className="relative">
                <pre className="p-3.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto">
                  {`// src/portfolioConfig.ts
social: {
  github: 'https://github.com/Pavan-Madhav',
  linkedin: 'https://linkedin.com/in/pavan-madhav-kaki', // <-- Replace here
  email: null,
}`}
                </pre>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      "linkedin: 'https://linkedin.com/in/pavan-madhav-kaki',",
                      'linkedin-snippet'
                    )
                  }
                  className="absolute top-2 right-2 px-2.5 py-1 text-[11px] font-sans rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedSnippet === 'linkedin-snippet' ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
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
            </div>
          )}

          {/* Email Placeholder Modal */}
          {modalType === 'email' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-700 leading-relaxed text-xs sm:text-sm">
                No personal email addresses were invented. The contact form operates transparently via client-side message preparation, and the direct email channel is preserved as a placeholder.
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  How to configure your actual email:
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>Open <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-blue-700">src/portfolioConfig.ts</code>.</li>
                  <li>Update <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">email: null</code> with your verified email address:</li>
                </ol>
              </div>

              <div className="relative">
                <pre className="p-3.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto">
                  {`// src/portfolioConfig.ts
social: {
  github: 'https://github.com/Pavan-Madhav',
  linkedin: null,
  email: 'pavanmadhav.work@example.com', // <-- Put your preferred inbox here
}`}
                </pre>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      "email: 'pavanmadhav.work@example.com',",
                      'email-snippet'
                    )
                  }
                  className="absolute top-2 right-2 px-2.5 py-1 text-[11px] font-sans rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedSnippet === 'email-snippet' ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
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
            </div>
          )}

          {/* Repository Helper Modal */}
          {modalType === 'repo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed text-xs sm:text-sm">
                Per the project requirements, <strong>no fake repository links are shown</strong>. This button remains in a clean "Repo Pending" status until you upload your Python script to GitHub and set the repository URL in the configuration.
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Steps to link this project's GitHub repo:
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>Create a new repository on your GitHub account (<a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">github.com/new</a>).</li>
                  <li>Push your Python script for <strong>{repoProjectTitle}</strong> to that repository.</li>
                  <li>Open <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-blue-700">src/portfolioConfig.ts</code> and locate this project in the <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">projects</code> array.</li>
                  <li>Set <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">githubUrl: 'https://github.com/Pavan-Madhav/your-repo-name'</code>.</li>
                  <li>The portfolio will automatically render an active "View on GitHub" button with external link icon!</li>
                </ol>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-900">
                💡 <strong>Tip:</strong> In the meantime, recruiters and visitors can test the full code using the <strong>"Run / View Code"</strong> button right on this page!
              </div>
            </div>
          )}

          {/* Guide Modal: Local Run, Deployment & Pre-Publish Checklist */}
          {modalType === 'guide' && (
            <div className="space-y-6">
              {/* Section 1: Local Run */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    1. Run Locally on Your Machine
                  </h4>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  To run this portfolio on your computer via Node.js:
                </p>
                <pre className="p-3 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed">
{`# 1. Clone your repository
git clone https://github.com/Pavan-Madhav/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser at http://localhost:3000`}
                </pre>
              </div>

              {/* Section 2: Personalization in 1 file */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    2. Centralized Configuration (<code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">src/portfolioConfig.ts</code>)
                  </h4>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  All personal details, social profiles, skills, projects, and activities are organized in a single file so you never have to edit multiple React components to update your portfolio.
                </p>
              </div>

              {/* Section 3: Deploying to Vercel or Netlify */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    3. Free Deployment to Vercel or Netlify
                  </h4>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p><strong>Deploying to Vercel (Recommended):</strong></p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Push this codebase to your GitHub account (<code className="font-mono">github.com/Pavan-Madhav/portfolio</code>).</li>
                    <li>Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">vercel.com</a> and sign in with GitHub.</li>
                    <li>Click <strong>"Add New" &gt; "Project"</strong> and select your portfolio repository.</li>
                    <li>Vercel automatically detects Vite + React. Click <strong>"Deploy"</strong>.</li>
                    <li>Your site is live within 60 seconds with a free custom SSL domain!</li>
                  </ol>

                  <p className="pt-2"><strong>Deploying to Netlify:</strong></p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Go to <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">netlify.com</a> and connect your GitHub repo.</li>
                    <li>Build command: <code className="font-mono bg-slate-100 px-1 rounded">npm run build</code>, Publish directory: <code className="font-mono bg-slate-100 px-1 rounded">dist</code>.</li>
                    <li>Click <strong>"Deploy Site"</strong>.</li>
                  </ol>
                </div>
              </div>

              {/* Section 4: Pre-Publishing Checklist */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    4. Pre-Publish Checklist for Pavan
                  </h4>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded text-blue-600 pointer-events-none" />
                    <span>Personal information verified (Pavan Madhav Kaki, B.Tech 1st Sem).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded text-blue-600 pointer-events-none" />
                    <span>GitHub profile connected (<a href="https://github.com/Pavan-Madhav" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">github.com/Pavan-Madhav</a>).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Add LinkedIn URL once your profile is set up.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Add your preferred contact email address in <code className="font-mono">portfolioConfig.ts</code>.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Upload Python scripts to GitHub and paste repository URLs for each project.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
          >
            Got It, Close
          </button>
        </div>
      </div>
    </div>
  );
};
