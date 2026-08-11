import { AcademicPosition, EducationItem, ResearchLine, TeachingCourse } from '../types';

export const researchLinesData: ResearchLine[] = [
  {
    id: "rl-01",
    title: {
      es: "Gobernanza Multinivel y Ecosistemas GovTech/Smart City",
      pt: "Governança Multinível e Ecossistemas GovTech/Smart City",
      en: "Multi-level Governance and GovTech/Smart City Ecosystems"
    },
    description: {
      es: "Estudio de las transformaciones institucionales y alianzas público-privadas para la innovación pública local en municipios de Córdoba. Análisis de plataformas digitales, internacionalización urbana y legitimidad democrática.",
      pt: "Estudo das transformações institucionais e parcerias público-privadas para inovação pública local nos municípios de Córdoba. Análise de plataformas digitais, internacionalização urbana e legitimidade democrática.",
      en: "Study of institutional transformations and public-private partnerships for local public innovation in Córdoba municipalities. Analysis of digital platforms, urban internationalization, and democratic legitimacy."
    },
    period: "2022 - Presente",
    fundingBody: "CONICET / SECyT-UNC",
    status: "active",
    tags: ["GovTech", "Smart Cities", "Innovación Pública", "Gobernanza Multinivel"]
  },
  {
    id: "rl-02",
    title: {
      es: "Políticas Culturales Comunitarias y Acción Colectiva",
      pt: "Políticas Culturais Comunitárias e Ação Coletiva",
      en: "Community Cultural Policies and Collective Action"
    },
    description: {
      es: "Investigación sobre la articulación entre organizaciones de base comunitaria y programas estatales de cultura (Puntos de Cultura). Impacto en la co-gestión de políticas públicas, uso político de derechos y subjetividades políticas.",
      pt: "Pesquisa sobre a articulação entre organizações comunitárias e programas estatais de cultura (Pontos de Cultura). Impacto na co-gestão de políticas públicas e subjetividades políticas.",
      en: "Research into the articulation between community-based organizations and state cultural programs (Points of Culture). Impact on policy co-management, political rights usage, and political subjectivities."
    },
    period: "2018 - 2024",
    fundingBody: "CONICET - IECET UNC",
    status: "active",
    tags: ["Políticas Culturales", "Puntos de Cultura", "Participación Ciudadana", "Sociología"]
  },
  {
    id: "rl-03",
    title: {
      es: "Participación Ciudadana y Democracia Digital",
      pt: "Participação Cidadã e Democracia Digital",
      en: "Citizen Participation and Digital Democracy"
    },
    description: {
      es: "Examen de los canales de interacción ciudadana offline/online, presupuestos participativos digitales y el diseño de políticas públicas inclusivas en la gestión municipal.",
      pt: "Exame dos canais de interação cidadã offline/online, orçamentos participativos digitais e desenho de políticas públicas inclusivas.",
      en: "Examination of online/offline citizen engagement channels, digital participatory budgeting, and inclusive public policy design in local municipal governance."
    },
    period: "2020 - Concluido",
    fundingBody: "SECyT - Universidad Nacional de Córdoba",
    status: "completed",
    tags: ["Democracia Digital", "Presupuesto Participativo", "Ciencia Política"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: {
      es: "Doctorado en Ciencia Política",
      pt: "Doutorado em Ciência Política",
      en: "Ph.D. in Political Science"
    },
    institution: "Universidad Nacional de Córdoba (UNC)",
    location: "Córdoba, Argentina",
    year: "2020",
    thesisTitle: "Transformaciones en la gestión pública y gobernanza de políticas culturales comunitarias en Argentina",
    advisor: "Dra. Patricia Mariel Sorribas"
  },
  {
    degree: {
      es: "Maestría en Sociología",
      pt: "Mestrado em Sociologia",
      en: "Master of Science in Sociology"
    },
    institution: "Universidad Nacional de Córdoba (UNC)",
    location: "Córdoba, Argentina",
    year: "2015",
    thesisTitle: "Políticas públicas y acción colectiva en espacios culturales independientes"
  },
  {
    degree: {
      es: "Licenciatura en Administración",
      pt: "Bacharelado em Administração",
      en: "Bachelor's in Business Administration"
    },
    institution: "Facultad de Ciencias Económicas - UNC",
    location: "Córdoba, Argentina",
    year: "2011"
  }
];

export const positionsData: AcademicPosition[] = [
  {
    title: {
      es: "Becaria Posdoctoral CONICET",
      pt: "Bolsista Pós-Doutoral CONICET",
      en: "CONICET Postdoctoral Fellow"
    },
    institution: "Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET)",
    department: "Instituto de Estudios en Comunicación, Expresión y Tecnologías (IECET)",
    period: "2021 - Presente",
    type: "fellowship"
  },
  {
    title: {
      es: "Investigadora Integrante de Proyectos SECyT",
      pt: "Pesquisadora Integrante de Projetos SECyT",
      en: "Senior Research Project Member (SECyT)",
    },
    institution: "Universidad Nacional de Córdoba (UNC)",
    department: "Secretaría de Ciencia y Tecnología (SECyT-UNC)",
    period: "2018 - Presente",
    type: "research"
  },
  {
    title: {
      es: "Docente Adscripta y Profesora Asistente",
      pt: "Docente Adscrita e Professora Assistente",
      en: "Assistant Professor & Lecturer"
    },
    institution: "Facultad de Ciencias Económicas - UNC",
    department: "Cátedra de Políticas Culturales y Gestión Pública",
    period: "2016 - Presente",
    type: "teaching"
  }
];

export const teachingData: TeachingCourse[] = [
  {
    courseName: {
      es: "Políticas Culturales y Comunicación",
      pt: "Políticas Culturais e Comunicação",
      en: "Cultural Policies and Communication"
    },
    level: {
      es: "Grado",
      pt: "Graduação",
      en: "Undergraduate"
    },
    institution: "Universidad Nacional de Córdoba (UNC)",
    role: {
      es: "Docente Asistente",
      pt: "Professora Assistente",
      en: "Assistant Lecturer"
    },
    period: "2018 - Presente"
  },
  {
    courseName: {
      es: "Gestión Pública Local e Innovación Abierta",
      pt: "Gestão Pública Local e Inovação Aberta",
      en: "Local Public Management and Open Innovation"
    },
    level: {
      es: "Posgrado / Diplomatura",
      pt: "Pós-Graduação / Especialização",
      en: "Postgraduate / Diploma"
    },
    institution: "Facultad de Ciencias Económicas - UNC",
    role: {
      es: "Profesora Titular de Módulo",
      pt: "Professora Titular de Módulo",
      en: "Module Lead Professor"
    },
    period: "2022 - Presente"
  },
  {
    courseName: {
      es: "Seminario de Gobernanza Multinivel y Smart Cities",
      pt: "Seminário de Governança Multinível e Smart Cities",
      en: "Multilevel Governance & Smart Cities Seminar"
    },
    level: {
      es: "Posgrado",
      pt: "Pós-Graduação",
      en: "Graduate Seminar"
    },
    institution: "IECET - CONICET / UNC",
    role: {
      es: "Coordinadora Científica",
      pt: "Coordenadora Científica",
      en: "Scientific Coordinator"
    },
    period: "2023 - Presente"
  }
];

export const institutionalLinks = {
  conicetFicha: "https://bicyt.conicet.gov.ar/fichas/p/mariana-gutierrez",
  conicetRi: "https://ri.conicet.gov.ar/author/71390",
  uncEcoProfile: "https://www.eco.unc.edu.ar/index.php/?option=com_content&view=article&id=17036:mariana-gutierrez&catid=153",
  orcidUrl: "https://orcid.org/0000-0002-4035-5100",
  orcidId: "0000-0002-4035-5100",
  emailOfficial: "marucgutierrez@gmail.com",
  emailUnc: "marianagutierrez@unc.edu.ar",
  location: "IECET - CONICET/UNC, Av. Valparaíso s/n, Ciudad Universitaria, X5000 Córdoba, Argentina",
  institutionName: "Instituto de Estudios en Comunicación, Expresión y Tecnologías (IECET)"
};
