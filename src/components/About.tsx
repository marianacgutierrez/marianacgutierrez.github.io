import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { educationData } from '../data/profileData';
import { UserCheck, Award, BookOpen, Sparkles, Building, BookmarkCheck } from 'lucide-react';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const phdInfo = educationData[0];

  const keyFields = [
    {
      title: currentLang === 'es' ? 'Gobernanza Multinivel & Smart Cities' : currentLang === 'pt' ? 'Governança Multinível e Smart Cities' : 'Multilevel Governance & Smart Cities',
      desc: currentLang === 'es' ? 'Análisis de ecosistemas GovTech, políticas de innovación pública local e internacionalización urbana.' : currentLang === 'pt' ? 'Análise de ecossistemas GovTech, políticas de inovação pública local e internacionalização urbana.' : 'Analysis of GovTech ecosystems, local public innovation policies, and urban internationalization.'
    },
    {
      title: currentLang === 'es' ? 'Políticas Culturales Comunitarias' : currentLang === 'pt' ? 'Políticas Culturais Comunitárias' : 'Community Cultural Policies',
      desc: currentLang === 'es' ? 'Puntos de Cultura, cogestión estatal-comunitaria, sostenibilidad institucional y legitimidad social.' : currentLang === 'pt' ? 'Pontos de Cultura, cogestão estatal-comunitária, sustentabilidade institucional e legitimidade social.' : 'Points of Culture, state-community co-management, institutional sustainability, and social legitimacy.'
    },
    {
      title: currentLang === 'es' ? 'Subjetividades Políticas & Derechos' : currentLang === 'pt' ? 'Subjetividades Políticas e Direitos' : 'Political Subjectivities & Rights',
      desc: currentLang === 'es' ? 'Transformaciones de la acción colectiva, uso político de derechos e interacción ciudadanía-Estado.' : currentLang === 'pt' ? 'Transformações da ação coletiva, uso político de direitos e interação cidadania-Estado.' : 'Transformations of collective action, political rights usage, and citizen-state interaction.'
    },
    {
      title: currentLang === 'es' ? 'Administración Pública y Gestión Abierta' : currentLang === 'pt' ? 'Administração Pública e Gestão Aberta' : 'Public Administration & Open Management',
      desc: currentLang === 'es' ? 'Estrategias de asociatividad municipal, presupuestos participativos y modelos de innovación abierta.' : currentLang === 'pt' ? 'Estratégias de associatividade municipal, orçamentos participativos e inovação aberta.' : 'Municipal association strategies, participatory budgeting, and open innovation frameworks.'
    }
  ];

  return (
    <section id="about" className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800">
      <div>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/40 border border-white/60 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-indigo-900" />
            <span>{t.navAbout}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-950 tracking-tight">
            {t.aboutTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
            {t.aboutSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/60 shadow-lg space-y-4">
              <p>{t.aboutBioP1}</p>
              <p>{t.aboutBioP2}</p>

              <div className="pt-4 border-t border-white/50 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5 text-indigo-900">
                  <Building className="w-4 h-4 text-indigo-900" />
                  <span>IECET (CONICET - UNC)</span>
                </div>
                <div className="flex items-center gap-1.5 text-indigo-900">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Dra. en Ciencia Política (UNC)</span>
                </div>
              </div>
            </div>

            {/* Doctoral Thesis Spotlight Box */}
            <div className="bg-indigo-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">
                <BookmarkCheck className="w-4 h-4 text-blue-300" />
                <span>{t.aboutDoctoralThesis}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                "{t.aboutDoctoralThesisTitle}"
              </h3>

              <div className="mt-3 text-xs text-slate-300 flex flex-wrap gap-4">
                <span><strong>Grado:</strong> {phdInfo.degree[currentLang]}</span>
                <span><strong>Institución:</strong> {phdInfo.institution} ({phdInfo.year})</span>
                {phdInfo.advisor && <span><strong>{t.advisorLabel}:</strong> {phdInfo.advisor}</span>}
              </div>
            </div>
          </div>

          {/* Key Fields Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-indigo-900"></span>
              <Sparkles className="w-4 h-4 text-indigo-900" />
              <span>{t.keyFieldsTitle}</span>
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {keyFields.map((field, idx) => (
                <div
                  key={idx}
                  className="bg-white/40 backdrop-blur-md hover:bg-white/70 transition-all rounded-2xl p-4 border border-white/60 shadow-sm"
                >
                  <h4 className="text-sm font-bold text-indigo-950 mb-1">
                    {field.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {field.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
