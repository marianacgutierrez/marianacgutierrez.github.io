import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { institutionalLinks } from '../data/profileData';
import { Download, ExternalLink, BookOpen, ShieldCheck, Award, Building2, FileText } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="relative bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800 overflow-hidden">
      
      {/* Background Soft Glow Inside Card */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Profile Headshot & Institutional Badges */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-white/80 shadow-xl bg-slate-300">
                <img
                  src="src/assets/images/mariana.jpeg"
                  alt="Dra. Mariana Carla Gutiérrez - CONICET UNC"
                  className="w-full h-full object-cover object-top grayscale contrast-105 brightness-95 transition duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-indigo-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
                <span>CONICET Researcher</span>
              </div>
            </div>

            {/* Quick Badges below photo */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              <a
                href={institutionalLinks.orcidUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/40 hover:bg-white/70 text-slate-700 text-xs font-medium rounded-full border border-white/60 shadow-sm transition-all"
                title="ORCID iD"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ORCID: {institutionalLinks.orcidId}</span>
              </a>
              <a
                href={institutionalLinks.conicetRi}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-white/40 hover:bg-white/70 text-indigo-900 text-xs font-bold rounded-full border border-white/60 shadow-sm transition-all"
              >
                <span>RI CONICET</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Bio Headline & Core Details */}
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            
            {/* Top Institutional Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/40 border border-white/60 text-indigo-950 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-indigo-900" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 tracking-tight leading-tight">
              {t.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug">
              {t.heroRole}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-medium">
              {t.heroAffiliation}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl pt-1">
              {t.heroBioShort}
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#publications"
                className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.viewPublications}</span>
              </a>

              <a
                href={institutionalLinks.conicetRi}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/40 hover:bg-white/70 text-slate-800 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-widest border border-white/60 shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-indigo-900" />
                <span>{t.viewConicetRI}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-950 hover:bg-indigo-900 text-white font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-widest shadow-md transition-all"
              >
                <Download className="w-4 h-4 text-emerald-300" />
                <span>{t.downloadCV}</span>
              </a>
            </div>

            {/* Quick Institutional Stats Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/40 mt-6">
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/50 text-center shadow-sm">
                <span className="block text-2xl font-bold text-indigo-900">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t.statPublications}</span>
              </div>

              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/50 text-center shadow-sm">
                <span className="block text-2xl font-bold text-indigo-900">CONICET</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t.statFellowship}</span>
              </div>

              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/50 text-center shadow-sm">
                <span className="block text-2xl font-bold text-indigo-900">IECET</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t.statInstitution}</span>
              </div>

              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/50 text-center shadow-sm">
                <span className="block text-2xl font-bold text-indigo-900">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t.statOpenAccess}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
