import React, { useState } from 'react';
import { Publication, Language } from '../types';
import { translations } from '../data/translations';
import { generateAPA, generateBibTeX, generateRIS } from '../utils/citation';
import { X, Copy, Check, Download, BookOpen, Code2 } from 'lucide-react';

interface CitationModalProps {
  publication: Publication | null;
  currentLang: Language;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({
  publication,
  currentLang,
  onClose,
}) => {
  const [format, setFormat] = useState<'apa' | 'bibtex' | 'ris'>('apa');
  const [copied, setCopied] = useState(false);

  if (!publication) return null;

  const t = translations[currentLang];

  const citationText =
    format === 'apa'
      ? generateAPA(publication)
      : format === 'bibtex'
      ? generateBibTeX(publication)
      : generateRIS(publication);

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadBib = () => {
    const bibContent = generateBibTeX(publication);
    const blob = new Blob([bibContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${publication.id}.bib`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in">
      <div className="bg-white/85 backdrop-blur-2xl border border-white/70 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-800 space-y-5">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/50 pb-4">
          <div className="pr-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 block mb-1">
              {t.citationModalTitle}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2">
              {publication.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-white/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex items-center gap-2 bg-white/50 p-1.5 rounded-2xl border border-white/70 shadow-inner">
          <button
            onClick={() => setFormat('apa')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
              format === 'apa'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-700 hover:text-indigo-950'
            }`}
          >
            {t.citationFormatAPA}
          </button>
          <button
            onClick={() => setFormat('bibtex')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
              format === 'bibtex'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-700 hover:text-indigo-950'
            }`}
          >
            {t.citationFormatBibTeX}
          </button>
          <button
            onClick={() => setFormat('ris')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
              format === 'ris'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-700 hover:text-indigo-950'
            }`}
          >
            {t.citationFormatRIS}
          </button>
        </div>

        {/* Citation Text Area */}
        <div className="relative bg-white/70 p-4 rounded-2xl border border-white/80 font-mono text-xs sm:text-sm text-slate-900 leading-relaxed overflow-x-auto max-h-60 shadow-inner select-all">
          <pre className="whitespace-pre-wrap break-words">{citationText}</pre>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleDownloadBib}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 hover:bg-white text-slate-800 text-xs font-bold border border-white/80 shadow-2xs transition-colors"
          >
            <Download className="w-4 h-4 text-emerald-700" />
            <span>{t.citationDownloadBib}</span>
          </button>

          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
              copied
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-indigo-900 hover:bg-indigo-950 text-white shadow-md'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t.citationCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t.citationCopy}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
