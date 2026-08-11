import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PublicationsSection } from './components/PublicationsSection';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('academic_profile_lang');
    if (saved === 'es' || saved === 'pt' || saved === 'en') {
      return saved as Language;
    }
    return 'es';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('academic_profile_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div
      className="min-h-screen text-slate-800 font-sans antialiased relative overflow-x-hidden selection:bg-indigo-900 selection:text-white"
      style={{
        background: 'radial-gradient(circle at 0% 0%, #cbd5e1 0%, #f1f5f9 50%, #94a3b8 100%)',
      }}
    >
      {/* Background Ambient Frosted Orbs */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-blue-100/70 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed top-[30%] right-[-120px] w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] left-[20%] w-96 h-96 bg-slate-100/80 rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
          <Hero currentLang={currentLang} />
          <About currentLang={currentLang} />
          <PublicationsSection currentLang={currentLang} />
          <Timeline currentLang={currentLang} />
          <Contact currentLang={currentLang} />
        </main>
        <Footer currentLang={currentLang} />
      </div>
    </div>
  );
}
