import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { educationData, positionsData } from '../data/profileData';
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

interface TimelineProps {
  currentLang: Language;
}

export const Timeline: React.FC<TimelineProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="trajectory" className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800">
      <div>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/40 border border-white/60 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-900" />
            <span>{t.navTrajectory}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-950 tracking-tight">
            {t.trajectoryTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Degrees */}
          <div>
            <h3 className="text-xl font-bold text-indigo-950 flex items-center gap-2 mb-6 pb-2 border-b border-white/50">
              <GraduationCap className="w-5 h-5 text-indigo-900" />
              <span>{t.educationTitle}</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-indigo-900/30 pl-6 ml-3">
              {educationData.map((item, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-900 border-2 border-white shadow-sm" />

                  <div className="bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                        {item.year}
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {item.degree[currentLang]}
                    </h4>

                    <p className="text-xs font-semibold text-slate-700">
                      {item.institution}
                    </p>

                    {item.thesisTitle && (
                      <div className="pt-2 text-xs text-slate-600 italic border-t border-white/40 mt-2 font-normal">
                        <p><strong>{t.thesisLabel}:</strong> "{item.thesisTitle}"</p>
                        {item.advisor && <p className="not-italic text-slate-500 mt-0.5"><strong>{t.advisorLabel}:</strong> {item.advisor}</p>}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Academic Positions & Fellowships */}
          <div>
            <h3 className="text-xl font-bold text-indigo-950 flex items-center gap-2 mb-6 pb-2 border-b border-white/50">
              <Briefcase className="w-5 h-5 text-emerald-700" />
              <span>{t.positionsTitle}</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-emerald-700/30 pl-6 ml-3">
              {positionsData.map((pos, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-700 border-2 border-white shadow-sm" />

                  <div className="bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {pos.period}
                      </span>
                      <span className="text-xs text-slate-600 font-bold capitalize px-2.5 py-0.5 bg-white/60 rounded-full border border-white/80">
                        {pos.type}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {pos.title[currentLang]}
                    </h4>

                    <p className="text-xs font-bold text-indigo-900">
                      {pos.institution}
                    </p>

                    <p className="text-xs text-slate-600 font-medium">
                      {pos.department}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
