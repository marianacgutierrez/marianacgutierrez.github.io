import React, { useState, useMemo } from 'react';
import { Publication, Language } from '../types';
import { translations } from '../data/translations';
import { publicationsData } from '../data/publications';
import { CitationModal } from './CitationModal';
import { generateBibTeX } from '../utils/citation';
import {
  BookOpen,
  Search,
  Filter,
  ExternalLink,
  Download,
  Quote,
  ShieldCheck,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Tag,
  Share2,
  RefreshCw
} from 'lucide-react';

interface PublicationsSectionProps {
  currentLang: Language;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedKeyword, setSelectedKeyword] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [activeCitePub, setActiveCitePub] = useState<Publication | null>(null);

  // Extract all unique keywords & years
  const allKeywords = useMemo(() => {
    const set = new Set<string>();
    publicationsData.forEach((p) => p.keywords.forEach((k) => set.add(k)));
    return Array.from(set).sort();
  }, []);

  const allYears = useMemo(() => {
    const set = new Set<number>();
    publicationsData.forEach((p) => set.add(p.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  // Filter logic
  const filteredPublications = useMemo(() => {
    return publicationsData.filter((pub) => {
      // Type match
      if (selectedType !== 'all' && pub.type !== selectedType) return false;

      // Year match
      if (selectedYear !== 'all' && pub.year.toString() !== selectedYear) return false;

      // Keyword match
      if (selectedKeyword !== 'all' && !pub.keywords.includes(selectedKeyword)) return false;

      // Search query match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const titleMatch = pub.title.toLowerCase().includes(q);
        const authorsMatch = pub.authors.some((a) => a.toLowerCase().includes(q));
        const journalMatch = pub.journalOrBook?.toLowerCase().includes(q) || false;
        const kwMatch = pub.keywords.some((k) => k.toLowerCase().includes(q));
        const abstractMatch = pub.abstract[currentLang].toLowerCase().includes(q);

        if (!titleMatch && !authorsMatch && !journalMatch && !kwMatch && !abstractMatch) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedKeyword, selectedYear, currentLang]);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleExportAllBibTeX = () => {
    const allBib = filteredPublications.map(generateBibTeX).join('\n\n');
    const blob = new Blob([allBib], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Publicaciones_Mariana_Gutierrez_CONICET.bib`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'journal':
        return t.pubFilterJournal;
      case 'book_chapter':
        return t.pubFilterBookChapter;
      case 'conference':
        return t.pubFilterConference;
      case 'report':
        return t.pubFilterReport;
      case 'working_paper':
        return t.pubFilterWorkingPaper;
      default:
        return type;
    }
  };

  return (
    <section id="publications" className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800">
      <div>
        
        {/* Section Header & CONICET Institutional Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/40 border border-white/60 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-indigo-900" />
            <span>{t.navPublications}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-950 tracking-tight">
            {t.pubTitle}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            {t.pubSubtitle}
          </p>

          {/* Sync status pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>{t.pubConicetBadge}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse ml-1" />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/60 shadow-lg space-y-4 mb-8">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.pubSearchPlaceholder}
              className="w-full bg-white/70 border border-white/80 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-900/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600 hover:text-indigo-950 bg-white/80 px-2 py-1 rounded-lg border border-white/80"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/40">
            
            {/* Type Selector Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedType === 'all'
                    ? 'bg-indigo-900 text-white shadow-md'
                    : 'bg-white/50 text-slate-700 hover:text-indigo-950 hover:bg-white/80 border border-white/70'
                }`}
              >
                {t.pubFilterTypeAll}
              </button>
              <button
                onClick={() => setSelectedType('journal')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedType === 'journal'
                    ? 'bg-indigo-900 text-white shadow-md'
                    : 'bg-white/50 text-slate-700 hover:text-indigo-950 hover:bg-white/80 border border-white/70'
                }`}
              >
                {t.pubFilterJournal}
              </button>
              <button
                onClick={() => setSelectedType('book_chapter')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedType === 'book_chapter'
                    ? 'bg-indigo-900 text-white shadow-md'
                    : 'bg-white/50 text-slate-700 hover:text-indigo-950 hover:bg-white/80 border border-white/70'
                }`}
              >
                {t.pubFilterBookChapter}
              </button>
              <button
                onClick={() => setSelectedType('report')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedType === 'report'
                    ? 'bg-indigo-900 text-white shadow-md'
                    : 'bg-white/50 text-slate-700 hover:text-indigo-950 hover:bg-white/80 border border-white/70'
                }`}
              >
                {t.pubFilterReport}
              </button>
            </div>

            {/* Dropdowns for Year & Keyword */}
            <div className="flex items-center gap-2">
              {/* Year Dropdown */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white/70 border border-white/80 rounded-xl px-3 py-1.5 text-xs text-slate-800 font-bold focus:outline-none"
              >
                <option value="all">{t.pubFilterYearAll}</option>
                {allYears.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>

              {/* Keyword Dropdown */}
              <select
                value={selectedKeyword}
                onChange={(e) => setSelectedKeyword(e.target.value)}
                className="bg-white/70 border border-white/80 rounded-xl px-3 py-1.5 text-xs text-slate-800 font-bold focus:outline-none max-w-[160px] truncate"
              >
                <option value="all">{t.pubFilterKeywordAll}</option>
                {allKeywords.map((kw) => (
                  <option key={kw} value={kw}>
                    {kw}
                  </option>
                ))}
              </select>

              {/* Export All BibTeX */}
              <button
                onClick={handleExportAllBibTeX}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-900 text-white text-xs font-bold hover:bg-indigo-950 transition-colors shadow-sm"
                title={t.pubExportAllBibtex}
              >
                <Download className="w-3.5 h-3.5 text-emerald-300" />
                <span className="hidden sm:inline">BibTeX</span>
              </button>
            </div>

          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6 px-1">
          <span>
            {t.pubShowingResults} <strong className="text-indigo-950">{filteredPublications.length}</strong> de{' '}
            <strong className="text-indigo-950">{publicationsData.length}</strong> publicaciones
          </span>
          {filteredPublications.length < publicationsData.length && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setSelectedYear('all');
                setSelectedKeyword('all');
              }}
              aria-label="Restablecer filtros"
              className="text-indigo-900 hover:underline flex items-center gap-1 font-bold"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Restablecer filtros</span>
            </button>
          )}
        </div>

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="text-center py-12 bg-white/40 rounded-2xl border border-white/60 p-8 shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 text-sm font-semibold">{t.pubNoResults}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPublications.map((pub) => {
              const isExpanded = !!expandedAbstracts[pub.id];

              return (
                <div
                  key={pub.id}
                  className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 hover:bg-white/70 transition-all duration-200 shadow-md space-y-4 text-slate-800"
                >
                  {/* Item Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-bold">
                        <FileText className="w-3 h-3 text-indigo-800" />
                        <span>{getTypeLabel(pub.type)}</span>
                      </span>

                      {pub.peerReviewed && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                          <CheckCircle className="w-3 h-3 text-emerald-700" />
                          <span>Peer-Reviewed</span>
                        </span>
                      )}

                      {pub.openAccess && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                          <span>Open Access (RI)</span>
                        </span>
                      )}
                    </div>

                    <span className="text-sm font-bold text-slate-500">
                      {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug hover:text-indigo-950 transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors & Journal / Context */}
                  <div className="text-xs sm:text-sm text-slate-700 space-y-1 font-medium">
                    <p className="text-slate-800">
                      <strong>Autores:</strong> {pub.authors.join(', ')}
                    </p>
                    {pub.journalOrBook && (
                      <p className="italic text-indigo-950 font-semibold">
                        {pub.journalOrBook}
                        {pub.volume && `, Vol. ${pub.volume}`}
                        {pub.issue && `, Nº ${pub.issue}`}
                        {pub.pages && `, pp. ${pub.pages}`}
                      </p>
                    )}
                  </div>

                  {/* Abstract Expandable Area */}
                  {pub.abstract && pub.abstract[currentLang] && (
                    <div className="pt-2">
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-900 hover:text-indigo-950 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" />
                            <span>{t.pubAbstractToggleHide}</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" />
                            <span>{t.pubAbstractToggleShow}</span>
                          </>
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-4 bg-white/70 rounded-xl border border-white/80 text-xs text-slate-700 leading-relaxed font-normal shadow-inner">
                          <p>{pub.abstract[currentLang]}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Keywords Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.keywords.map((kw, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedKeyword(kw)}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-white/60 hover:bg-white text-slate-700 hover:text-indigo-950 border border-white/80 transition-colors shadow-2xs"
                      >
                        <Tag className="w-2.5 h-2.5 text-slate-500" />
                        <span>{kw}</span>
                      </button>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="pt-3 border-t border-white/50 flex flex-wrap items-center justify-between gap-3 text-xs">
                    
                    <div className="flex flex-wrap items-center gap-2">
                      {pub.handleConicet && (
                        <a
                          href={`http://hdl.handle.net/${pub.handleConicet}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 hover:bg-white text-indigo-900 font-bold border border-white/80 transition-colors shadow-2xs"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-indigo-900" />
                          <span>{t.pubHandleLink}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 hover:bg-white text-slate-700 hover:text-slate-900 font-semibold border border-white/80 transition-colors shadow-2xs"
                        >
                          <span>DOI: {pub.doi}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {pub.pdfUrl && (
                        <a
                          href={pub.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 font-bold border border-emerald-200 transition-colors shadow-2xs"
                        >
                          <Download className="w-3.5 h-3.5 text-emerald-800" />
                          <span>PDF</span>
                        </a>
                      )}
                    </div>

                    {/* Cite Button */}
                    <button
                      onClick={() => setActiveCitePub(pub)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-900 hover:bg-indigo-950 text-white font-bold shadow-md transition-all"
                    >
                      <Quote className="w-3.5 h-3.5" />
                      <span>{t.pubCiteButton}</span>
                    </button>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Citation Modal */}
      <CitationModal
        publication={activeCitePub}
        currentLang={currentLang}
        onClose={() => setActiveCitePub(null)}
      />
    </section>
  );
};
