import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Activities } from './components/Activities';
import { LearningGoals } from './components/LearningGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InfoModals } from './components/InfoModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<'linkedin' | 'email' | 'repo' | 'guide' | null>(null);
  const [repoProjectTitle, setRepoProjectTitle] = useState<string>('');

  const handleOpenRepoHelp = (projectTitle: string) => {
    setRepoProjectTitle(projectTitle);
    setActiveModal('repo');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Navigation */}
      <Navbar onOpenGuideModal={() => setActiveModal('guide')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenLinkedInPlaceholder={() => setActiveModal('linkedin')} />
        <About />
        <Skills />
        <Projects onOpenRepoHelp={handleOpenRepoHelp} />
        <Activities />
        <LearningGoals />
        <Contact
          onOpenLinkedInPlaceholder={() => setActiveModal('linkedin')}
          onOpenEmailPlaceholder={() => setActiveModal('email')}
          onOpenGuideModal={() => setActiveModal('guide')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLinkedInPlaceholder={() => setActiveModal('linkedin')}
        onOpenGuideModal={() => setActiveModal('guide')}
      />

      {/* Helper & Placeholder Modals */}
      <InfoModals
        modalType={activeModal}
        repoProjectTitle={repoProjectTitle}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
