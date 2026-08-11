import { Language } from '../types';

export const translations: Record<Language, {
  siteTitle: string;
  navAbout: string;
  navResearch: string;
  navPublications: string;
  navTrajectory: string;
  navTeaching: string;
  navContact: string;
  heroBadge: string;
  heroTitle: string;
  heroRole: string;
  heroAffiliation: string;
  heroBioShort: string;
  viewPublications: string;
  viewConicetRI: string;
  downloadCV: string;
  orcidLabel: string;
  conicetLabel: string;
  uncLabel: string;
  
  // Quick Stats
  statPublications: string;
  statFellowship: string;
  statInstitution: string;
  statOpenAccess: string;

  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutBioP1: string;
  aboutBioP2: string;
  aboutDoctoralThesis: string;
  aboutDoctoralThesisTitle: string;
  keyFieldsTitle: string;

  // Research Section
  researchTitle: string;
  researchSubtitle: string;
  researchStatusActive: string;
  researchStatusCompleted: string;
  fundingBodyLabel: string;

  // Publications Section
  pubTitle: string;
  pubSubtitle: string;
  pubConicetBadge: string;
  pubSearchPlaceholder: string;
  pubFilterTypeAll: string;
  pubFilterJournal: string;
  pubFilterBookChapter: string;
  pubFilterConference: string;
  pubFilterReport: string;
  pubFilterWorkingPaper: string;
  pubFilterYearAll: string;
  pubFilterKeywordAll: string;
  pubShowingResults: string;
  pubNoResults: string;
  pubAbstractToggleShow: string;
  pubAbstractToggleHide: string;
  pubCiteButton: string;
  pubHandleLink: string;
  pubDoiLink: string;
  pubPdfDownload: string;
  pubExportAllBibtex: string;

  // Citation Modal
  citationModalTitle: string;
  citationCopy: string;
  citationCopied: string;
  citationDownloadBib: string;
  citationFormatAPA: string;
  citationFormatBibTeX: string;
  citationFormatRIS: string;

  // Trajectory & Education
  trajectoryTitle: string;
  educationTitle: string;
  positionsTitle: string;
  thesisLabel: string;
  advisorLabel: string;

  // Teaching
  teachingTitle: string;
  teachingSubtitle: string;
  levelUndergrad: string;
  levelPostgrad: string;

  // Contact & Institutional
  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactSubjectLabel: string;
  contactMessageLabel: string;
  contactSendBtn: string;
  contactSuccessMsg: string;
  locationLabel: string;
  officeHoursLabel: string;
  linksInstitutionalTitle: string;

  // GitHub Pages Banner
  ghPagesNoticeTitle: string;
  ghPagesNoticeDesc: string;
  ghPagesCommandCopy: string;
}> = {
  es: {
    siteTitle: "Dra. Mariana Carla Gutiérrez | Perfil Académico",
    navAbout: "Sobre Mí",
    navResearch: "Líneas de Investigación",
    navPublications: "Publicaciones RI CONICET",
    navTrajectory: "Formación y Trayectoria",
    navTeaching: "Docencia",
    navContact: "Contacto",
    heroBadge: "CONICET • UNC - IECET",
    heroTitle: "Dra. Mariana Carla Gutiérrez",
    heroRole: "Investigadora Posdoctoral CONICET • Doctora en Ciencia Política",
    heroAffiliation: "Instituto de Estudios en Comunicación, Expresión y Tecnologías (IECET - CONICET/UNC) • Facultad de Ciencias Económicas, UNC",
    heroBioShort: "Especialista en políticas públicas, gobernanza multinivel, innovación pública local (Smart Cities & GovTech) y políticas culturales comunitarias.",
    viewPublications: "Ver Publicaciones RI-CONICET",
    viewConicetRI: "Ficha Repositorio CONICET",
    downloadCV: "Descargar CV Completo",
    orcidLabel: "ORCID ID",
    conicetLabel: "Ficha CONICET",
    uncLabel: "UNC Economía",

    statPublications: "Publicaciones Indexadas",
    statFellowship: "Becaria Posdoctoral CONICET",
    statInstitution: "IECET - UNC",
    statOpenAccess: "Acceso Abierto RI",

    aboutTitle: "Biografía y Perfil Académico",
    aboutSubtitle: "Trayectoria de investigación en Ciencia Política, Sociología y Administración",
    aboutBioP1: "Mariana Carla Gutiérrez es Doctora en Ciencia Política, Magíster en Sociología y Licenciada en Administración por la Universidad Nacional de Córdoba (UNC). Actualmente se desempeña como investigadora posdoctoral con beca cofinanciada CONICET-UNC en el Instituto de Estudios en Comunicación, Expresión y Tecnologías (IECET - CONICET/UNC).",
    aboutBioP2: "Su campo de trabajo investiga la interacción entre el Estado, la ciudadanía y los actores privados en el diseño y ejecución de políticas públicas. Sus áreas prioritarias comprenden la gobernanza multinivel, las estrategias de innovación pública local (Smart City y GovTech en Córdoba), y el análisis de políticas culturales comunitarias y acciones colectivas.",
    aboutDoctoralThesis: "Tesis Doctoral",
    aboutDoctoralThesisTitle: "Política cultural, gobernanza y subjetivación política: las políticas culturales comunitarias en Argentina y en la ciudad de Córdoba.",
    keyFieldsTitle: "Áreas de Conocimiento Clave",

    researchTitle: "Líneas de Investigación Activas",
    researchSubtitle: "Proyectos en desarrollo financiados por CONICET, SECyT-UNC y redes de cooperación",
    researchStatusActive: "En Curso",
    researchStatusCompleted: "Concluido",
    fundingBodyLabel: "Organismo Financiador",

    pubTitle: "Publicaciones Destacadas e Integración RI-CONICET",
    pubSubtitle: "Artículos en revistas indizadas, capítulos de libros y documentos de trabajo sincronizados con el Repositorio Digital del CONICET (Author ID: 71390)",
    pubConicetBadge: "Sincronizado con Repositorio Digital CONICET",
    pubSearchPlaceholder: "Buscar por título, revista, palabras clave, año o autor...",
    pubFilterTypeAll: "Todos los Tipos",
    pubFilterJournal: "Artículos de Revista",
    pubFilterBookChapter: "Capítulos de Libros",
    pubFilterConference: "Ponencias y Congresos",
    pubFilterReport: "Informes Técnicos",
    pubFilterWorkingPaper: "Documentos de Trabajo",
    pubFilterYearAll: "Todos los Años",
    pubFilterKeywordAll: "Todas las Temáticas",
    pubShowingResults: "Mostrando",
    pubNoResults: "No se encontraron publicaciones que coincidan con los criterios seleccionados.",
    pubAbstractToggleShow: "Ver Resumen / Abstract",
    pubAbstractToggleHide: "Ocultar Resumen",
    pubCiteButton: "Citar / Exportar",
    pubHandleLink: "Ver en RI CONICET (Handle)",
    pubDoiLink: "Ver DOI / Editorial",
    pubPdfDownload: "Descargar PDF Abierto",
    pubExportAllBibtex: "Exportar Todo a BibTeX",

    citationModalTitle: "Generador de Citas Bibliográficas",
    citationCopy: "Copiar Cita",
    citationCopied: "¡Cita Copiada!",
    citationDownloadBib: "Descargar archivo .bib",
    citationFormatAPA: "Estilo APA (7ª ed.)",
    citationFormatBibTeX: "Formato BibTeX",
    citationFormatRIS: "Formato RIS (EndNote/Zotero)",

    trajectoryTitle: "Formación Académica y Trayectoria Institutional",
    educationTitle: "Títulos Académicos",
    positionsTitle: "Cargos y Becas de Investigación",
    thesisLabel: "Tesis",
    advisorLabel: "Dirección",

    teachingTitle: "Docencia Universitaria y Transferencia",
    teachingSubtitle: "Asignaturas de grado, posgrado y vinculación tecnológica en la Universidad Nacional de Córdoba",
    levelUndergrad: "Grado",
    levelPostgrad: "Posgrado",

    contactTitle: "Contacto Institucional y Vinculación",
    contactSubtitle: "Para consultas académicas, colaboración en proyectos de investigación o prensa",
    contactNameLabel: "Nombre Completo",
    contactEmailLabel: "Correo Electrónico",
    contactSubjectLabel: "Asunto / Motivo",
    contactMessageLabel: "Mensaje",
    contactSendBtn: "Enviar Mensaje Académico",
    contactSuccessMsg: "¡Gracias por su mensaje! Ha sido enviado correctamente a la casilla institucional de la investigadora.",
    locationLabel: "Ubicación e Instituto",
    officeHoursLabel: "Horarios de Atención",
    linksInstitutionalTitle: "Perfiles Institucionales Oficiales",

    ghPagesNoticeTitle: "Configurado para GitHub Pages",
    ghPagesNoticeDesc: "Este proyecto es 100% estático, ligero y responsivo. Puede desplegarlo en GitHub Pages ejecutando 'npm run build' y publicando el directorio 'dist/'.",
    ghPagesCommandCopy: "Copiar Comando de Build",
  },
  pt: {
    siteTitle: "Dra. Mariana Carla Gutiérrez | Perfil Acadêmico",
    navAbout: "Sobre Mim",
    navResearch: "Linhas de Pesquisa",
    navPublications: "Publicações RI CONICET",
    navTrajectory: "Formação e Trajetória",
    navTeaching: "Docência",
    navContact: "Contato",
    heroBadge: "CONICET • UNC - IECET",
    heroTitle: "Dra. Mariana Carla Gutiérrez",
    heroRole: "Pesquisadora Pós-Doutoral CONICET • Doutora em Ciência Política",
    heroAffiliation: "Instituto de Estudos em Comunicação, Expressão e Tecnologias (IECET - CONICET/UNC) • Faculdade de Ciências Econômicas, UNC",
    heroBioShort: "Especialista em políticas públicas, governança multinível, inovação pública local (Smart Cities & GovTech) e políticas culturais comunitárias.",
    viewPublications: "Ver Publicações RI-CONICET",
    viewConicetRI: "Ficha Repositório CONICET",
    downloadCV: "Baixar CV Completo",
    orcidLabel: "ORCID ID",
    conicetLabel: "Ficha CONICET",
    uncLabel: "UNC Economia",

    statPublications: "Publicações Indexadas",
    statFellowship: "Bolsista Pós-Doutoral",
    statInstitution: "IECET - UNC",
    statOpenAccess: "Acesso Aberto RI",

    aboutTitle: "Biografia e Perfil Acadêmico",
    aboutSubtitle: "Trajetória de pesquisa em Ciência Política, Sociologia e Administração",
    aboutBioP1: "Mariana Carla Gutiérrez é Doutora em Ciência Política, Mestre em Sociologia e Bacharel em Administração pela Universidad Nacional de Córdoba (UNC). Atualmente é pesquisadora pós-doutoral com bolsa cofinanciada CONICET-UNC no Instituto de Estudios en Comunicación, Expresión y Tecnologías (IECET - CONICET/UNC).",
    aboutBioP2: "Seu campo de trabalho investiga a interação entre o Estado, a cidadania e os atores privados no desenho e execução de políticas públicas. Suas áreas prioritárias compreendem a governança multinível, as estratégias de inovação pública local (Smart City e GovTech em Córdoba), e a análise de políticas culturais comunitárias e ações coletivas.",
    aboutDoctoralThesis: "Tese de Doutorado",
    aboutDoctoralThesisTitle: "Política cultural, governança e subjetivação política: políticas culturais comunitárias na Argentina e na cidade de Córdoba.",
    keyFieldsTitle: "Áreas de Conhecimento Chave",

    researchTitle: "Linhas de Pesquisa Ativas",
    researchSubtitle: "Projetos em desenvolvimento financiados por CONICET, SECyT-UNC e redes de cooperação",
    researchStatusActive: "Em Andamento",
    researchStatusCompleted: "Concluído",
    fundingBodyLabel: "Órgão Financiador",

    pubTitle: "Publicações em Destaque e Integração RI-CONICET",
    pubSubtitle: "Artigos em periódicos indexados, capítulos de livros e documentos de trabalho sincronizados com o Repositório Digital do CONICET (Author ID: 71390)",
    pubConicetBadge: "Sincronizado com Repositório Digital CONICET",
    pubSearchPlaceholder: "Buscar por título, revista, palavras-chave, ano ou autor...",
    pubFilterTypeAll: "Todos os Tipos",
    pubFilterJournal: "Artigos de Periódicos",
    pubFilterBookChapter: "Capítulos de Livros",
    pubFilterConference: "Trabalhos em Eventos",
    pubFilterReport: "Relatórios Técnicos",
    pubFilterWorkingPaper: "Textos para Discussão",
    pubFilterYearAll: "Todos os Anos",
    pubFilterKeywordAll: "Todas as Temáticas",
    pubShowingResults: "Exibindo",
    pubNoResults: "Nenhuma publicação encontrada para os critérios selecionados.",
    pubAbstractToggleShow: "Ver Resumo / Abstract",
    pubAbstractToggleHide: "Ocultar Resumo",
    pubCiteButton: "Citar / Exportar",
    pubHandleLink: "Ver no RI CONICET (Handle)",
    pubDoiLink: "Ver DOI / Editorial",
    pubPdfDownload: "Baixar PDF Aberto",
    pubExportAllBibtex: "Exportar Tudo para BibTeX",

    citationModalTitle: "Gerador de Citações Bibliográficas",
    citationCopy: "Copiar Citação",
    citationCopied: "Citação Copiada!",
    citationDownloadBib: "Baixar arquivo .bib",
    citationFormatAPA: "Estilo APA (7ª ed.)",
    citationFormatBibTeX: "Formato BibTeX",
    citationFormatRIS: "Formato RIS (EndNote/Zotero)",

    trajectoryTitle: "Formação Acadêmica e Trajetória Institucional",
    educationTitle: "Títulos Acadêmicos",
    positionsTitle: "Cargos e Bolsas de Pesquisa",
    thesisLabel: "Tese",
    advisorLabel: "Orientação",

    teachingTitle: "Docência Universitária e Transferência",
    teachingSubtitle: "Disciplinas de graduação, pós-graduação e transferência tecnológica na Universidad Nacional de Córdoba",
    levelUndergrad: "Graduação",
    levelPostgrad: "Pós-Graduação",

    contactTitle: "Contato Institucional e Parcerias",
    contactSubtitle: "Para consultas acadêmicas, colaboração em projetos de pesquisa ou imprensa",
    contactNameLabel: "Nome Completo",
    contactEmailLabel: "E-mail",
    contactSubjectLabel: "Assunto",
    contactMessageLabel: "Mensagem",
    contactSendBtn: "Enviar Mensagem Acadêmica",
    contactSuccessMsg: "Obrigado pela mensagem! Foi enviada com sucesso para a caixa institucional da pesquisadora.",
    locationLabel: "Localização e Instituto",
    officeHoursLabel: "Horário de Atendimento",
    linksInstitutionalTitle: "Perfis Institucionais Oficiais",

    ghPagesNoticeTitle: "Configurado para GitHub Pages",
    ghPagesNoticeDesc: "Este projeto é 100% estático, leve e responsivo. Você pode implantá-lo no GitHub Pages executando 'npm run build' e publicando a pasta 'dist/'.",
    ghPagesCommandCopy: "Copiar Comando de Build",
  },
  en: {
    siteTitle: "Dr. Mariana Carla Gutiérrez | Academic Profile",
    navAbout: "About",
    navResearch: "Research Lines",
    navPublications: "RI CONICET Publications",
    navTrajectory: "Education & Career",
    navTeaching: "Teaching",
    navContact: "Contact",
    heroBadge: "CONICET • UNC - IECET",
    heroTitle: "Dr. Mariana Carla Gutiérrez",
    heroRole: "CONICET Postdoctoral Researcher • Ph.D. in Political Science",
    heroAffiliation: "Institute of Communication, Expression and Technology Studies (IECET - CONICET/UNC) • School of Economic Sciences, UNC",
    heroBioShort: "Specialist in public policy, multilevel governance, local public innovation (Smart Cities & GovTech), and community cultural policies.",
    viewPublications: "Explore RI-CONICET Publications",
    viewConicetRI: "CONICET Profile",
    downloadCV: "Download Full CV",
    orcidLabel: "ORCID ID",
    conicetLabel: "CONICET File",
    uncLabel: "UNC Economics",

    statPublications: "Indexed Publications",
    statFellowship: "CONICET Postdoc Fellow",
    statInstitution: "IECET - UNC",
    statOpenAccess: "Open Access RI",

    aboutTitle: "Biography & Academic Profile",
    aboutSubtitle: "Research career spanning Political Science, Sociology, and Public Administration",
    aboutBioP1: "Mariana Carla Gutiérrez holds a Ph.D. in Political Science, a Master's degree in Sociology, and a Bachelor's degree in Business Administration from the National University of Córdoba (UNC), Argentina. She is currently a postdoctoral fellow co-funded by CONICET and UNC at the Institute of Communication, Expression and Technology Studies (IECET - CONICET/UNC).",
    aboutBioP2: "Her work investigates state-citizen-private interactions in public policy design and implementation. Her key areas of expertise include multi-level governance, local public innovation strategies (Smart Cities and GovTech in Córdoba), and the political analysis of community cultural policies and collective action.",
    aboutDoctoralThesis: "Doctoral Dissertation",
    aboutDoctoralThesisTitle: "Cultural policy, governance and political subjectivation: community cultural policies in Argentina and in the city of Córdoba.",
    keyFieldsTitle: "Key Fields of Expertise",

    researchTitle: "Active Research Lines",
    researchSubtitle: "Ongoing projects funded by CONICET, SECyT-UNC, and academic research networks",
    researchStatusActive: "In Progress",
    researchStatusCompleted: "Completed",
    fundingBodyLabel: "Funding Agency",

    pubTitle: "Featured Publications & RI-CONICET Integration",
    pubSubtitle: "Peer-reviewed journal articles, book chapters, and working papers synchronized with CONICET's Digital Institutional Repository (Author ID: 71390)",
    pubConicetBadge: "Synchronized with CONICET Digital Repository",
    pubSearchPlaceholder: "Search by title, journal, keywords, year or author...",
    pubFilterTypeAll: "All Types",
    pubFilterJournal: "Journal Articles",
    pubFilterBookChapter: "Book Chapters",
    pubFilterConference: "Conference Papers",
    pubFilterReport: "Technical Reports",
    pubFilterWorkingPaper: "Working Papers",
    pubFilterYearAll: "All Years",
    pubFilterKeywordAll: "All Topics",
    pubShowingResults: "Displaying",
    pubNoResults: "No publications found matching the selected search criteria.",
    pubAbstractToggleShow: "View Abstract",
    pubAbstractToggleHide: "Hide Abstract",
    pubCiteButton: "Cite / Export",
    pubHandleLink: "View on RI CONICET (Handle)",
    pubDoiLink: "View DOI / Publisher",
    pubPdfDownload: "Download Open Access PDF",
    pubExportAllBibtex: "Export All to BibTeX",

    citationModalTitle: "Bibliographic Citation Generator",
    citationCopy: "Copy Citation",
    citationCopied: "Citation Copied!",
    citationDownloadBib: "Download .bib file",
    citationFormatAPA: "APA Style (7th ed.)",
    citationFormatBibTeX: "BibTeX Format",
    citationFormatRIS: "RIS Format (EndNote/Zotero)",

    trajectoryTitle: "Academic Education & Career Trajectory",
    educationTitle: "Academic Degrees",
    positionsTitle: "Research Positions & Fellowships",
    thesisLabel: "Thesis",
    advisorLabel: "Advisors",

    teachingTitle: "University Teaching & Knowledge Transfer",
    teachingSubtitle: "Undergraduate and postgraduate courses, public sector consulting, and technology transfer at UNC",
    levelUndergrad: "Undergraduate",
    levelPostgrad: "Postgraduate",

    contactTitle: "Institutional Contact & Engagement",
    contactSubtitle: "For academic inquiries, research collaboration, guest lectures, or media inquiries",
    contactNameLabel: "Full Name",
    contactEmailLabel: "Email Address",
    contactSubjectLabel: "Subject",
    contactMessageLabel: "Message",
    contactSendBtn: "Send Academic Message",
    contactSuccessMsg: "Thank you for reaching out! Your message has been successfully delivered to the researcher's inbox.",
    locationLabel: "Location & Institute",
    officeHoursLabel: "Office Hours",
    linksInstitutionalTitle: "Official Institutional Profiles",

    ghPagesNoticeTitle: "Configured for GitHub Pages",
    ghPagesNoticeDesc: "This project is 100% static, fast, and responsive. You can deploy it to GitHub Pages by running 'npm run build' and serving the 'dist/' folder.",
    ghPagesCommandCopy: "Copy Build Command",
  }
};
