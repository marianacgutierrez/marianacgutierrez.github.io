import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { institutionalLinks } from '../data/profileData';
import { Mail, MapPin, ExternalLink, ShieldCheck, Building2, Globe } from 'lucide-react';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="contact" className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800">
      <div>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/40 border border-white/60 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-indigo-900" />
            <span>{t.navContact}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-950 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
            {t.contactSubtitle}
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Location, Affiliation & Direct Email */}
          <div className="bg-white/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/60 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-950 flex items-center gap-2 border-b border-white/60 pb-3">
                <Building2 className="w-5 h-5 text-indigo-900 shrink-0" />
                <span>{t.locationLabel}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-900 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 text-base">{institutionalLinks.institutionName}</p>
                    <p className="text-slate-600 mt-1 font-medium leading-relaxed">{institutionalLinks.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Actions */}
            <div className="pt-4 border-t border-white/60 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>Correos Electrónicos Oficiales:</span>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`mailto:${institutionalLinks.emailOfficial}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/70 hover:bg-white border border-white/80 text-indigo-950 font-bold text-xs shadow-2xs transition-all group"
                >
                  <span className="truncate">{institutionalLinks.emailOfficial}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-900 shrink-0 ml-1" />
                </a>

                <a
                  href={`mailto:${institutionalLinks.emailUnc}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/70 hover:bg-white border border-white/80 text-indigo-950 font-bold text-xs shadow-2xs transition-all group"
                >
                  <span className="truncate">{institutionalLinks.emailUnc}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-900 shrink-0 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Box 2: Official Academic Profiles & External Repositories */}
          <div className="bg-white/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/60 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-950 flex items-center gap-2 border-b border-white/60 pb-3">
                <Globe className="w-5 h-5 text-indigo-900 shrink-0" />
                <span>{t.linksInstitutionalTitle}</span>
              </h3>

              <div className="space-y-2.5 text-xs">
                <a
                  href={institutionalLinks.conicetRi}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 hover:bg-white border border-white/80 text-slate-800 hover:text-indigo-950 transition-all shadow-2xs group"
                >
                  <span className="flex items-center gap-2.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-indigo-900 shrink-0" />
                    <span>Repositorio Digital RI CONICET (Author ID: 71390)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-900 shrink-0" />
                </a>

                <a
                  href={institutionalLinks.conicetFicha}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 hover:bg-white border border-white/80 text-slate-800 hover:text-indigo-950 transition-all shadow-2xs group"
                >
                  <span className="flex items-center gap-2.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Ficha de Investigadora CONICET (BICYT)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 shrink-0" />
                </a>

                <a
                  href={institutionalLinks.uncEcoProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 hover:bg-white border border-white/80 text-slate-800 hover:text-indigo-950 transition-all shadow-2xs group"
                >
                  <span className="flex items-center gap-2.5 font-bold">
                    <Building2 className="w-4 h-4 text-indigo-900 shrink-0" />
                    <span>Perfil Oficial UNC - Facultad de Ciencias Económicas</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-900 shrink-0" />
                </a>

                <a
                  href={institutionalLinks.orcidUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 hover:bg-white border border-white/80 text-slate-800 hover:text-indigo-950 transition-all shadow-2xs group"
                >
                  <span className="flex items-center gap-2.5 font-bold text-emerald-800">
                    <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>ORCID iD: {institutionalLinks.orcidId}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-800 shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
