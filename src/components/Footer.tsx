import React from 'react';
import { Language } from '../types';
import { institutionalLinks } from '../data/profileData';
import { GraduationCap, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-700 text-xs mt-12 mb-8">
      <div className="space-y-6">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 items-center">
          
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-base">
              <GraduationCap className="w-5 h-5 text-indigo-900" />
              <span>Dra. Mariana Carla Gutiérrez</span>
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-lg">
              Perfil académico oficial e investigador de la Dra. Mariana Carla Gutiérrez. Investigadora Posdoctoral CONICET • Instituto de Estudios en Comunicación, Expresión y Tecnologías (IECET - CONICET/UNC).
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4 text-xs font-bold">
            <a
              href={institutionalLinks.conicetRi}
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-indigo-950 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-900" />
              <span>RI CONICET</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={institutionalLinks.uncEcoProfile}
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-indigo-950 transition-colors flex items-center gap-1"
            >
              <span>UNC Economía</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={institutionalLinks.orcidUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-emerald-700 transition-colors flex items-center gap-1"
            >
              <span>ORCID</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-4 border-t border-white/50 text-center text-slate-500 font-medium flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Dra. Mariana Carla Gutiérrez • Todos los derechos reservados.</p>
          <p className="text-slate-600 font-bold">Universidad Nacional de Córdoba & CONICET Argentina</p>
        </div>

      </div>
    </footer>
  );
};
