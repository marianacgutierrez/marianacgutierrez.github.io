import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Globe, Menu, X, ExternalLink, GraduationCap } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navLinks = [
    { href: "#about", label: t.navAbout },
    { href: "#publications", label: t.navPublications },
    { href: "#trajectory", label: t.navTrajectory },
    { href: "#contact", label: t.navContact },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇦🇷' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-3 z-40 bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-xl text-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Academic Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-900 border border-indigo-800 flex items-center justify-center text-white group-hover:bg-indigo-950 transition-all shadow-md">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-indigo-950 block leading-snug">
                Dra. Mariana Carla Gutiérrez
              </span>
              <span className="text-xs text-slate-600 font-medium block">
                CONICET • UNC - IECET
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-xl text-xs lg:text-sm font-semibold text-slate-700 hover:text-indigo-950 hover:bg-white/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Language Switcher */}
          <div className="hidden md:flex items-center gap-2 border-l border-white/40 pl-4">
            <div className="flex items-center gap-1 bg-white/40 p-1 rounded-full border border-white/60 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-indigo-900 ml-1.5" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all flex items-center gap-1 ${
                    currentLang === lang.code
                      ? 'bg-indigo-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-indigo-950 hover:bg-white/50'
                  }`}
                  title={lang.label}
                >
                  <span>{lang.flag}</span>
                  <span className="uppercase">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Compact Lang Switcher for Mobile */}
            <div className="flex items-center bg-white/40 rounded-full p-0.5 border border-white/60">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                    currentLang === lang.code ? 'bg-indigo-900 text-white' : 'text-slate-600'
                  }`}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-indigo-950 hover:bg-white/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-2xl border-t border-white/50 px-4 pt-3 pb-6 space-y-2 rounded-b-3xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-800 hover:text-indigo-950 hover:bg-white/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/40 flex items-center justify-between text-xs text-slate-600 px-3">
            <span>CONICET Author ID: 71390</span>
            <a
              href="https://ri.conicet.gov.ar/author/71390"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-900 font-bold flex items-center gap-1 hover:underline"
            >
              RI CONICET <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
