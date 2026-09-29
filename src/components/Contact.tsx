import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, ExternalLink, Check, Copy, AlertCircle, HelpCircle, MessageSquare } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

interface ContactProps {
  onOpenLinkedInPlaceholder: () => void;
  onOpenEmailPlaceholder: () => void;
  onOpenGuideModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onOpenLinkedInPlaceholder,
  onOpenEmailPlaceholder,
  onOpenGuideModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionState, setSubmissionState] = useState<{
    submitted: boolean;
    copied: boolean;
    mailToUrl: string;
  } | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest handling: construct a clean mailto URI or clipboard copy
    const targetEmail = PORTFOLIO_CONFIG.personal.social.email || 'pavan.madhav.contact@example.com';
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Pavan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    const mailToUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    setSubmissionState({
      submitted: true,
      copied: false,
      mailToUrl,
    });
  };

  const handleCopyFormattedMessage = () => {
    const textToCopy = `To: Pavan Madhav Kaki\nFrom: ${formData.name} <${formData.email}>\nSubject: Portfolio Inquiry\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    if (submissionState) {
      setSubmissionState({ ...submissionState, copied: true });
      setTimeout(() => {
        setSubmissionState((prev) => (prev ? { ...prev, copied: false } : null));
      }, 2500);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmissionState(null);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                <span>Direct Communication</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Let's Connect and Build Something.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                I'm always interested in learning from others, discussing technology, and exploring opportunities to collaborate on interesting projects.
              </p>

              {/* Profiles & Channels */}
              <div className="space-y-3.5 mb-8">
                {/* GitHub */}
                <a
                  href={PORTFOLIO_CONFIG.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Code Repository</div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        github.com/Pavan-Madhav
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>

                {/* LinkedIn Placeholder */}
                <button
                  type="button"
                  onClick={onOpenLinkedInPlaceholder}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-dashed border-slate-300 hover:border-blue-400 transition-all text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-medium">Professional Network</span>
                        <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded">
                          Placeholder
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                        LinkedIn Profile (Awaiting URL)
                      </div>
                    </div>
                  </div>
                  <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </button>

                {/* Email Placeholder */}
                <button
                  type="button"
                  onClick={onOpenEmailPlaceholder}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-dashed border-slate-300 hover:border-blue-400 transition-all text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-medium">Direct Inbox</span>
                        <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded">
                          Placeholder
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                        Personal Email (Awaiting Configuration)
                      </div>
                    </div>
                  </div>
                  <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </button>
              </div>
            </div>

            {/* Quick config assistant note */}
            <div className="p-4 rounded-lg bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
              <span>Ready to personalize links?</span>
              <button
                type="button"
                onClick={onOpenGuideModal}
                className="font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                View Setup Guide →
              </button>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Send a Message
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-sans">
                  Direct client-side dispatch
                </span>
              </div>

              {!submissionState ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g., Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-hidden ${
                        errors.name
                          ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g., alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-hidden ${
                        errors.email
                          ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hi Pavan, I saw your portfolio and would like to discuss..."
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-hidden resize-y ${
                        errors.message
                          ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Honest delivery note & submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare &amp; Send Message</span>
                    </button>
                    <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
                      <strong>Transparency Notice:</strong> To avoid exposing sensitive credentials on a client-side portfolio, clicking "Send" validates your input and provides ready-to-dispatch options (Email client or copy to clipboard).
                    </p>
                  </div>
                </form>
              ) : (
                /* Post-Submission State */
                <div className="py-4 space-y-5 animate-in fade-in duration-150">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-900">
                        Message Formatted Successfully!
                      </h4>
                      <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                        Your message from <strong>{formData.name}</strong> has been structured. Choose how you would like to transmit it below:
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Message Draft Preview
                    </div>
                    <div className="text-xs font-mono bg-white p-3 rounded-lg border border-slate-200 text-slate-700 whitespace-pre-wrap">
                      {`From: ${formData.name} <${formData.email}>\n\n${formData.message}`}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Mailto link */}
                    <a
                      href={submissionState.mailToUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    {/* Copy to clipboard */}
                    <button
                      type="button"
                      onClick={handleCopyFormattedMessage}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm border border-slate-300 shadow-2xs transition-colors cursor-pointer"
                    >
                      {submissionState.copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>

                    {/* Write another */}
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs text-slate-500 hover:text-slate-800 underline px-2 py-1 ml-auto cursor-pointer"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
