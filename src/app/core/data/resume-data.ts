import {
  ContactInfo,
  CredentialEntry,
  EducationEntry,
  ExperienceEntry,
  FocusArea,
  ProjectDetail,
  PublicationEntry,
  SkillGroup,
  UhiRecord,
} from '../models/resume.models';

export const CONTACT: ContactInfo = {
  name: 'Nagavarshini M',
  phone: '9597436684',
  email: '25mt0298@iitism.ac.in',
  linkedin: 'https://www.linkedin.com/in/nagavarshini-m',
  resumeUrl: 'Nagavarshini_CV.pdf',
  tagline: 'Environmental engineer working on carbon MRV, life-cycle assessment, and ESG fieldwork.',
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Life Cycle Assessment',
    description:
      'Cradle-to-grave modelling in OpenLCA, including an ongoing LCA of grid-connected solar PV systems in India.',
    icon: 'recycle',
  },
  {
    title: 'GHG Accounting',
    description:
      'Scope 1 & 2 emissions quantification and facility-level alignment with ESG reporting frameworks, built from field data.',
    icon: 'flame',
  },
  {
    title: 'ESG & Carbon Markets',
    description:
      'Voluntary carbon market research, credit-eligibility screening, and workflow design for state-scale waste management programmes.',
    icon: 'leaf',
  },
  {
    title: 'Geospatial Analysis',
    description:
      'QGIS multi-criteria siting models and Google Earth Engine remote-sensing pipelines for land, solar, and thermal analysis.',
    icon: 'map',
  },
];

export const PROJECTS: ProjectDetail[] = [
  {
    title: 'Life Cycle Assessment of Grid-Connected Solar PV Systems: A Case Study of India',
    status: 'Ongoing',
    problem:
      'India’s solar rollout lacks accessible, India-specific life-cycle emissions benchmarks for grid-connected PV.',
    method: 'Cradle-to-grave LCA modelling in OpenLCA against Indian grid and manufacturing data.',
    outcome: 'In progress — findings to be added as the study concludes.',
    tools: ['OpenLCA', 'LCA methodology'],
    featured: true,
  },
  {
    title: 'Sustainable Waste Water Treatment using Biochar Constructed Wetland',
    problem: 'Industrial and domestic effluent needs low-cost, low-energy treatment for heavy metals, turbidity and TDS.',
    method: 'Designed and fabricated a laboratory-scale biochar constructed wetland for pollutant removal.',
    outcome: 'Treated effluent met permissible discharge limits for irrigation, car washing, and other non-potable reuse.',
    tools: ['Biochar filtration', 'Wetland design', 'Water quality testing'],
    featured: true,
  },
  {
    title: 'Thooimai Mission Workflow Framework',
    problem: 'A state-wide waste management programme needed a structured pathway toward carbon credit eligibility.',
    method: 'Researched voluntary carbon market mechanisms and project-eligibility criteria under international standards, then translated them into a workflow framework.',
    outcome: 'Delivered a workflow framework supporting sustainable waste management and carbon credit development for the programme.',
    tools: ['Carbon markets', 'Programme design'],
    featured: true,
  },
  {
    title: 'Site Suitability Analysis for Utility-Scale Solar Farm Development, Dhanbad District',
    problem: 'Identifying viable land for utility-scale solar development requires weighing multiple competing spatial constraints.',
    method: 'Built a multi-criteria decision analysis model in QGIS integrating slope, solar irradiance, land use/land cover, and proximity to roads, transmission lines and settlements; reclassified and weighted each layer.',
    outcome: 'Produced a ranked suitability map identifying high-suitability land across the district.',
    tools: ['QGIS', 'MCDA', 'GIS weighting'],
  },
  {
    title: 'Comparative Urban Heat Island Analysis of Four Indian Cities',
    problem: 'Urban heat island intensity varies by climate zone and is rarely compared consistently across Indian cities.',
    method: 'Extracted multi-temporal Landsat land surface temperature data (2014–2026) via Google Earth Engine across Delhi, Chennai, Bangalore and Jaipur; built a MATLAB pipeline for ingestion, per-city linear regression, and trend visualisation.',
    outcome: 'Identified a persistent negative UHI intensity in Chennai — an Urban Cool Island effect driven by a hotter rural hinterland.',
    tools: ['Google Earth Engine', 'MATLAB', 'Landsat LST'],
  },
  {
    title: 'Supply Chain Management of Agro-Residues, West Bengal',
    problem: 'Biomass processing facilities need to be sited where agro-residue supply and transport economics actually support them.',
    method: 'Mapped district-level agro-residue availability in QGIS and modelled collection catchments and transport distances in Excel.',
    outcome: 'Evaluated feasible siting options for biomass processing facilities.',
    tools: ['QGIS', 'Excel', 'Logistics modelling'],
  },
];

export const SKILLS: SkillGroup[] = [
  { domain: 'Programming', items: ['Python', 'R', 'C', 'MATLAB', 'Swift'] },
  { domain: 'Data & Analytics', items: ['Advanced Excel', 'Power BI', 'pandas', 'NumPy', 'Matplotlib', 'Statistical analysis'] },
  { domain: 'Geospatial & Simulation', items: ['QGIS', 'Google Earth Engine', 'OpenLCA', 'PVsyst'] },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Intern – Sustainability and Climate Change',
    org: 'Beyond Sustainability, Coimbatore',
    period: 'May 2026 – July 2026',
    bullets: [
      'Conducted research on voluntary compliance carbon markets, carbon credit mechanisms, and project eligibility under international standards.',
      'Developed a workflow framework for the Thooimai Mission, supporting sustainable waste management and carbon credit development.',
    ],
  },
  {
    role: 'Intern Trainee',
    org: 'TVS Rubber Ltd, Madurai',
    period: 'December 2025',
    bullets: [
      'Studied boiler operations, visited STP and ETP, and conducted performance assessment in the Maintenance Department.',
      'Performed Scope 1 & Scope 2 emissions quantification and aligned facility-level metrics with ESG reporting frameworks.',
    ],
  },
  {
    role: 'Research Intern',
    org: 'SusPaani Lab, Indian Institute of Science (IISc), Bangalore',
    period: 'June 2024 – August 2024',
    bullets: [
      'Worked on nitrification of wastewater in a Packed Bed Biofilm Reactor and a pilot-scale Fixed Bed Reactor.',
      'Conducted periodic monitoring of pH, conductivity, and dissolved oxygen using a HACH HQ 2200 meter; quantified ammonium-N, nitrite-N, and nitrate-N via UV-Vis spectrophotometry following ISO/APHA methods.',
    ],
  },
  {
    role: 'Intern',
    org: 'Rajapalayam Mills',
    period: '2023',
    bullets: [
      'Gained an overview of textile industry processes and operations — basic training in Environment, Health and Safety aspects.',
    ],
  },
  {
    role: 'Content Writing Intern (Part-time)',
    org: 'Dpurpose Foundation NGO',
    period: 'Jan 2023 – March 2025',
    bullets: [
      'Wrote engaging blogs on sustainable entrepreneurial innovations and success stories of young innovators from Hack4Purpose, the foundation’s annual flagship event.',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'M.Tech, Environmental Science and Engineering',
    institution: 'IIT (ISM) Dhanbad, Jharkhand',
    period: '2025 – 2027',
    detail: 'CGPA: 9.42 up to second semester',
  },
  {
    degree: 'B.Tech, Energy and Environmental Engineering',
    institution: 'Agricultural Engineering College and Research Institute, TNAU, Coimbatore',
    period: '2020 – 2024',
    detail: 'CGPA: 8.58 (Department II Rank) · GATE 2026 ES AIR 369 & 2025 AIR 634',
  },
];

export const ACHIEVEMENTS: string[] = [
  'Secured second position in Paper Presentation (Youth category) on "Heavy Metal Remediation through Biochar Constructed Wetland" at the 56th IWWA Annual Convention, Bharathiar University, Coimbatore.',
  'Designed ‘Energy Metrica’, a SwiftUI app for energy conservation (team of 5), and presented the work to the Apple India team.',
  'Shortlisted for the Final Presentation Round of the Tata Steel M.Tech Internship Program 2026.',
];

export const CERTIFICATIONS: CredentialEntry[] = [
  { title: 'Environmental Policy and Action Youth Fellowship (EPAYF Cohort 2.0)', issuer: 'IMPRI, New Delhi', period: '2025' },
  { title: 'ESG Sustainability Reporting Course', issuer: 'World Environment Council', period: 'Jan 2026' },
  { title: 'Environmental Impact Assessment and Environmental Management Plan for Development Projects', issuer: 'CSEE', period: 'Nov 2025' },
  { title: 'Demystifying Environmental and Sustainability Data for Effective Communication in the 21st Century', issuer: 'CSE School of Environmental Communications', period: 'Jun–Jul 2024' },
  { title: 'Hydrogen Energy: Production, Storage, Transportation and Safety', issuer: 'NPTEL', period: undefined },
];

export const TRAININGS: CredentialEntry[] = [
  { title: 'Biodegradable Waste Management in Global South: Challenges and Opportunities', issuer: 'Centre for Science and Environment, New Delhi', period: '30 Jul – 2 Aug 2024' },
  { title: 'Advanced Excel: Rainfall & weather data analysis with VLOOKUP, PivotTable, Power Query', period: undefined },
  { title: 'Energy Audit — methods, instruments, pay-back period estimation', issuer: 'South India Textile Research Association (SITRA), Coimbatore', period: undefined },
  { title: 'Solar Energy Technology', issuer: 'Visiting Professor, Edinburgh Napier University, UK', period: undefined },
];

export const PUBLICATIONS: PublicationEntry[] = [
  {
    title: 'India’s Energy Sector Decarbonisation: Progress, Challenges and Future Pathways',
    detail: 'ISBN: 978-81-967390-0-3, IMPRI Impact and Policy Research Institute, New Delhi',
  },
  {
    title: 'Microbial Remediation of Heavy Metals',
    detail: 'Abstract No. 85, National Conference on Sustainable Management of Water and Waste Water: Latest Developments, 56th IWWA Annual Convention',
  },
  {
    title: 'IoT Technologies for Environmental Pollution Prevention and Improvement',
    detail: 'Poster No. ES-IT-POS-4, International Conference on Emerging Green Energy Technologies and Environmental Sustainability, Ecofest 2021',
  },
];

export const AFFILIATIONS: string[] = [
  'Indian Water Works Association (IWWA)',
  'Indian Society of Agricultural Engineers (ISAE)',
  'Active NSS Volunteer (2020–2023)',
  'SSL Student Teaching Volunteer (2022)',
  'Volunteer, Biodiversity and Environmental Sustainability (BEST) NGO (2024–2025)',
];

export const LANGUAGES: string[] = ['English', 'Tamil', 'Hindi', 'Telugu', 'French (beginner)'];

/**
 * Placeholder dataset shaped like the MATLAB pipeline export (year, city, LST anomaly in °C
 * relative to each city's rural reference). Swap with the real exported CSV when available —
 * see UhiChartComponent.
 */
export const UHI_DATA: UhiRecord[] = (() => {
  const cities: { city: UhiRecord['city']; start: number; slope: number; noise: number[] }[] = [
    { city: 'Delhi', start: 2.1, slope: 0.12, noise: [0.1, -0.2, 0.3, -0.1, 0.2, -0.3, 0.1, 0.2, -0.1, 0.3, -0.2, 0.1, 0.0] },
    { city: 'Bangalore', start: 1.4, slope: 0.07, noise: [-0.1, 0.2, -0.2, 0.1, -0.1, 0.2, -0.2, 0.1, 0.1, -0.1, 0.2, -0.1, 0.1] },
    { city: 'Jaipur', start: 1.8, slope: 0.09, noise: [0.2, -0.1, 0.1, -0.2, 0.3, -0.1, 0.1, -0.2, 0.2, 0.1, -0.1, 0.2, -0.1] },
    { city: 'Chennai', start: -0.6, slope: -0.02, noise: [0.1, -0.1, 0.15, -0.15, 0.1, -0.05, 0.05, -0.1, 0.1, -0.05, 0.05, -0.1, 0.05] },
  ];
  const years = Array.from({ length: 13 }, (_, i) => 2014 + i);
  const records: UhiRecord[] = [];
  for (const c of cities) {
    years.forEach((year, i) => {
      records.push({
        year,
        city: c.city,
        lstAnomaly: Number((c.start + c.slope * i + c.noise[i]).toFixed(2)),
      });
    });
  }
  return records;
})();
