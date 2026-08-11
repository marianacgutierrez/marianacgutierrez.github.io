import { Publication } from '../types';

export function generateAPA(pub: Publication): string {
  const authorsStr = pub.authors.join(', ');
  const yearStr = `(${pub.year}).`;
  const titleStr = `${pub.title}.`;
  
  let sourceStr = '';
  if (pub.journalOrBook) {
    sourceStr = ` *${pub.journalOrBook}*`;
    if (pub.volume) sourceStr += `, ${pub.volume}`;
    if (pub.issue) sourceStr += `(${pub.issue})`;
    if (pub.pages) sourceStr += `, ${pub.pages}`;
    sourceStr += '.';
  }
  
  let linkStr = '';
  if (pub.doi) {
    linkStr = ` https://doi.org/${pub.doi}`;
  } else if (pub.handleConicet) {
    linkStr = ` http://hdl.handle.net/${pub.handleConicet}`;
  }
  
  return `${authorsStr} ${yearStr} ${titleStr}${sourceStr}${linkStr}`;
}

export function generateBibTeX(pub: Publication): string {
  const citeKey = `${pub.authors[0].split(',')[0].toLowerCase()}${pub.year}${pub.id.replace(/[^a-zA-Z0-9]/g, '')}`;
  const authorsStr = pub.authors.join(' and ');
  
  if (pub.type === 'journal') {
    return `@article{${citeKey},
  author    = {${authorsStr}},
  title     = {${pub.title}},
  journal   = {${pub.journalOrBook || ''}},
  year      = {${pub.year}},
  volume    = {${pub.volume || ''}},
  number    = {${pub.issue || ''}},
  pages     = {${pub.pages || ''}},
  doi       = {${pub.doi || ''}},
  url       = {http://hdl.handle.net/${pub.handleConicet || ''}}
}`;
  } else if (pub.type === 'book_chapter') {
    return `@incollection{${citeKey},
  author    = {${authorsStr}},
  title     = {${pub.title}},
  booktitle = {${pub.journalOrBook || ''}},
  year      = {${pub.year}},
  pages     = {${pub.pages || ''}},
  doi       = {${pub.doi || ''}},
  url       = {http://hdl.handle.net/${pub.handleConicet || ''}}
}`;
  } else {
    return `@misc{${citeKey},
  author    = {${authorsStr}},
  title     = {${pub.title}},
  howpublished = {${pub.journalOrBook || 'CONICET Digital Repository'}},
  year      = {${pub.year}},
  url       = {http://hdl.handle.net/${pub.handleConicet || ''}}
}`;
  }
}

export function generateRIS(pub: Publication): string {
  const typeMap: Record<string, string> = {
    journal: 'JOUR',
    book_chapter: 'CHAP',
    conference: 'CONF',
    report: 'RPRT',
    working_paper: 'WORKING'
  };

  const risType = typeMap[pub.type] || 'GEN';
  const lines = [
    `TY  - ${risType}`,
    ...pub.authors.map(a => `AU  - ${a}`),
    `TI  - ${pub.title}`,
    pub.journalOrBook ? `JO  - ${pub.journalOrBook}` : '',
    `PY  - ${pub.year}`,
    pub.volume ? `VL  - ${pub.volume}` : '',
    pub.issue ? `IS  - ${pub.issue}` : '',
    pub.pages ? `SP  - ${pub.pages}` : '',
    pub.doi ? `DO  - ${pub.doi}` : '',
    pub.handleConicet ? `UR  - http://hdl.handle.net/${pub.handleConicet}` : '',
    'ER  - '
  ];

  return lines.filter(Boolean).join('\n');
}
