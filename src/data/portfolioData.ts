export type ExperienceCategory =
  | "all"
  | "government"
  | "social_research"
  | "corporate_education";

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  organization: string;
  period: string;
  duration?: string;
  location: string;
  tag: string;
  category: Exclude<ExperienceCategory, "all">;
  secondaryCategory?: Exclude<ExperienceCategory, "all">;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  skills: string[];
  accentColor: "emerald" | "indigo" | "rose";
}

export interface VolunteerItem {
  id: string;
  organization: string;
  role: string;
  division?: string;
  period: string;
  duration: string;
  domain: string;
  description: string;
  highlights: string[];
  accent: "emerald" | "indigo" | "rose";
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  highlights: string[];
}

export const PROFILE_DATA = {
  name: "Aulia Yasmin, S.Tr.Sos.",
  shortName: "Aulia Yasmin",
  title: "Licensed Certified Social Worker",
  credentialId: "PS.G.1107-00-LSP.7-24",
  credentialIssuer: "Kementerian Sosial Republik Indonesia (LSP)",
  credentialValidFrom: "Desember 2024",
  credentialValidUntil: "Desember 2029",
  location: "Jakarta, Indonesia",
  linkedinUrl: "https://www.linkedin.com/in/auliayasminn/",
  linkedinHandle: "linkedin.com/in/auliayasminn",
  linkedinStats: "330+ Followers · 300+ Connections",
  email: "auliayasmin.socialwork@gmail.com",
  positioningPills: [
    "Counselor",
    "Corporate Social Responsibility (CSR)",
    "Community Development",
    "Human-Centered HR & Management",
  ],
  morphingKeywords: [
    "Corporate Social Responsibility",
    "Community Development",
    "Human-Centered HR & ER",
    "Psychosocial Counseling",
    "Stakeholder Mediation",
  ],
  bioEnglish:
    "Licensed Social Worker (S.Tr.Sos.) blending human-centered empathy with strategic HR, CSR, and corporate administration, building supportive workplaces and sustainable community programs with real impact.",
  bioIndonesian:
    "Pekerja Sosial Tersertifikasi (S.Tr.Sos.) yang memadukan empati konseling dan pemberdayaan masyarakat dengan ketajaman HR, CSR, serta administrasi, menciptakan lingkungan kerja yang suportif dan program sosial yang berdampak nyata.",
  quickStats: [
    {
      id: "institutions",
      value: "10+ Institusi & Organisasi",
      label: "Lintas Sektor Strategis",
      subtext: "Pemerintahan, BUMN, Korporat, Edukasi & Sosial",
      accent: "emerald" as const,
    },
    {
      id: "degree",
      value: "S.Tr.Sos. · POLTEKESOS Bandung",
      label: "Pendidikan Tinggi Vokasi Sosial",
      subtext: "Applied Bachelor of Social Work",
      accent: "indigo" as const,
    },
    {
      id: "license",
      value: "Tersertifikasi Nasional",
      label: "Licensed Social Worker",
      subtext: "LSP Kementerian Sosial RI, 2024–2029",
      accent: "rose" as const,
    },
  ],
  trustedInstitutions: [
    "Kemnaker RI",
    "BNN RI",
    "Kemensos RI",
    "Pemkab Kuningan",
    "PT Dirgantara Indonesia",
    "Maybank Finance",
    "YPAC Jakarta",
    "POLTEKESOS Bandung",
  ],
  languages: [
    {
      language: "Bahasa Indonesia",
      proficiency: "Native or bilingual proficiency",
      level: "100%",
    },
    {
      language: "Bahasa Inggris (English)",
      proficiency: "Limited working proficiency",
      level: "68%",
    },
  ],
};

export const BENTO_PILLARS = {
  pillar1: {
    badge: "Pilar Utama 01 · HR & Governance",
    title: "Human-Centered HR & Administration",
    subtitle: "Employee Relations, Conflict Mediation & Ethical Governance",
    description:
      "Fokus pada Employee Relations, mediasi konflik, komunikasi interpersonal lintas latar belakang, dan eksekusi administrasi yang suportif serta beretika. Mengintegrasikan pendekatan empati pekerjaan sosial ke dalam tata kelola SDM dan birokrasi modern.",
    institutions: [
      "Sekretariat Jenderal Kemnaker RI",
      "PT Dirgantara Indonesia (Persero)",
      "Pojok Sosial (Internal HRM)",
    ],
    metrics: [
      { label: "Fokus Utama", value: "Employee Relations & Mediasi" },
      { label: "Standar Kerja", value: "Etika Profesi & Tata Kelola" },
    ],
  },
  pillar2: {
    badge: "Pilar Utama 02 · Sustainability & Impact",
    title: "CSR & Community Development",
    subtitle: "Social Mapping, Grassroots Empowerment & Environmental Action",
    description:
      "Pemetaan sosial (social mapping), pemberdayaan masyarakat daerah secara partisipatif, dan kampanye keberlanjutan lingkungan bersama pemangku kepentingan daerah maupun komunitas.",
    institutions: [
      "Pemerintah Kabupaten Kuningan",
      "Earth Hour Bandung (Divisi SIMARGI)",
    ],
    highlights: [
      "Partisipasi Masyarakat & Pemetaan Potensi Lokal",
      "Kampanye Edukasi Lingkungan (TK–SMP & Ruang Publik)",
      "Kolaborasi Lintas Pemangku Kepentingan Daerah",
    ],
  },
  pillar3: {
    badge: "Pilar Utama 03 · Clinical & Social Work",
    title: "Counseling, Rehab & Social Research",
    subtitle: "Psychosocial Assessment & Evidence-Based Evaluation",
    description:
      "Asesmen psikososial komprehensif, pendampingan kelompok rentan, manajemen kasus (case management), dan evaluasi program rehabilitasi berbasis riset lapangan.",
    institutions: [
      "BNN RI",
      "Sentra Antasena Magelang",
      "Sentra Satria Baturraden",
      "YPAC Jakarta",
    ],
  },
  pillar4: {
    badge: "Pilar Utama 04 · Cross-Sector Agility",
    title: "Education, Public Relations & Client Management",
    subtitle: "Adaptive Communication Across Corporate, Education & Advocacy",
    description:
      "Kemampuan adaptasi tinggi mulai dari pengajaran dan pendampingan tumbuh kembang anak, pengelolaan portofolio klien korporat pembiayaan, hingga advokasi kesadaran kesehatan mental di ruang publik.",
    institutions: [
      "CV. Hayakids Indonesia",
      "PT. Maybank Indonesia Finance",
      "Lingkar Psikologi",
    ],
    marqueeSkills: [
      "Conflict Mediation",
      "Social Mapping",
      "Public Speaking",
      "Stakeholder Management",
      "Employee Relations",
      "Psychosocial Assessment",
      "Case Management",
      "Community Empowerment",
      "Corporate Administration",
      "CSR Program Design",
      "Interpersonal Counseling",
      "Policy & Program Research",
    ],
  },
};

export const EXPERIENCE_CATEGORIES: {
  id: ExperienceCategory;
  label: string;
  count: number;
}[] = [
  { id: "all", label: "Semua", count: 10 },
  { id: "government", label: "Pemerintahan & BUMN", count: 6 },
  { id: "social_research", label: "Sosial, Riset & Komunitas", count: 5 },
  { id: "corporate_education", label: "Korporat, Edukasi & Lainnya", count: 4 },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hayakids-teacher",
    number: "01",
    role: "Teacher",
    organization: "CV. Hayakids Indonesia",
    period: "Okt 2026 – Sekarang",
    duration: "Aktif",
    location: "Jakarta, Indonesia",
    tag: "Education & Child Development",
    category: "corporate_education",
    isCurrent: true,
    summary:
      "Memfasilitasi pembelajaran interaktif dan pendampingan perkembangan sosial-emosional anak dengan pendekatan empatik, terstruktur, dan berpusat pada kebutuhan individu anak.",
    highlights: [
      "Menerapkan metode komunikasi suportif dan observasi perilaku untuk mendukung tumbuh kembang karakter serta kepercayaan diri siswa.",
      "Membangun komunikasi kolaboratif dengan orang tua/wali terkait perkembangan belajar dan adaptasi sosial anak.",
      "Merancang aktivitas edukatif yang inklusif, aman, dan menstimulasi keterampilan interpersonal sejak dini.",
    ],
    skills: [
      "Child Development",
      "Empathetic Communication",
      "Parent Engagement",
      "Classroom Facilitation",
    ],
    accentColor: "rose",
  },
  {
    id: "maybank-account-officer",
    number: "02",
    role: "Account Officer",
    organization: "PT. Maybank Indonesia Finance",
    period: "Jul 2026 – Sep 2026",
    duration: "3 Bulan",
    location: "Jakarta Pusat, DKI Jakarta",
    tag: "Corporate Finance & Client Relations",
    category: "corporate_education",
    summary:
      "Mengelola relasi portofolio klien korporat/ritel, melakukan analisis kebutuhan pembiayaan, serta menjaga kualitas layanan dan kepatuhan administrasi di industri jasa keuangan.",
    highlights: [
      "Membangun komunikasi persuasif dan tepercaya dengan calon nasabah serta mitra bisnis untuk mencapai target akuisisi secara sehat.",
      "Melakukan verifikasi kelayakan dokumen, asesmen profil nasabah, serta koordinasi lintas tim operasional secara presisi.",
      "Menjaga tingkat kepuasan klien melalui respons cepat, transparansi informasi kontrak, dan penyelesaian kendala secara solutif.",
    ],
    skills: [
      "Client Relationship Management",
      "Stakeholder Negotiation",
      "Corporate Administration",
      "Account Portfolio Analysis",
    ],
    accentColor: "indigo",
  },
  {
    id: "kemnaker-setjen",
    number: "03",
    role: "Sekretariat Jenderal",
    organization: "Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI)",
    period: "Nov 2025 – Jul 2026",
    duration: "9 Bulan",
    location: "Jakarta Selatan, DKI Jakarta",
    tag: "Government Administration & Institutional Support",
    category: "government",
    summary:
      "Mendukung tata kelola administrasi strategis, koordinasi lintas unit kerja, serta fasilitasi hubungan kelembagaan dan kepegawaian di lingkungan Sekretariat Jenderal Kemnaker RI.",
    highlights: [
      "Mengelola alur tata naskah dinas, dokumentasi kebijakan, dan administrasi kepegawaian/kelembagaan sesuai standar birokrasi pemerintah pusat.",
      "Memfasilitasi koordinasi antar pemangku kepentingan internal dengan pendekatan komunikasi interpersonal yang efektif, ramah, dan beretika.",
      "Memastikan ketepatan waktu dan akurasi laporan operasional guna mendukung kelancaran fungsi dukungan manajemen kementerian.",
    ],
    skills: [
      "Government Administration",
      "Employee & Institutional Relations",
      "Document Control",
      "Cross-Unit Coordination",
    ],
    accentColor: "indigo",
  },
  {
    id: "bnn-researcher",
    number: "04",
    role: "Researcher",
    organization: "Badan Narkotika Nasional Republik Indonesia (BNN)",
    period: "Mei 2025 – Jun 2025",
    duration: "2 Bulan",
    location: "Bogor, Jawa Barat",
    tag: "Social Research & Rehabilitation Program Evaluation",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Melakukan penelitian mengenai implementasi program rehabilitasi sosial bagi penyalahguna narkotika di BNN (sebagai bagian dari penyusunan tugas akhir/skripsi) serta mengidentifikasi faktor pendukung dan penghambat efektivitas program.",
    highlights: [
      "Melaksanakan pengumpulan data lapangan melalui wawancara mendalam (in-depth interview), observasi partisipatif, dan studi dokumentasi program rehabilitasi sosial.",
      "Menganalisis tahapan intervensi psikososial dan pemulihan klien penyalahguna narkotika menggunakan kerangka kerja Pekerjaan Sosial profesional.",
      "Merumuskan rekomendasi strategis terkait faktor pendukung dan penghambat guna meningkatkan kualitas layanan rehabilitasi berkelanjutan.",
    ],
    skills: [
      "Qualitative Social Research",
      "Rehabilitation Evaluation",
      "Psychosocial Analysis",
      "Policy Recommendation",
    ],
    accentColor: "emerald",
  },
  {
    id: "kuningan-comdev",
    number: "05",
    role: "Community Development Worker",
    organization: "Pemerintah Kabupaten Kuningan",
    period: "Okt 2024 – Des 2024",
    duration: "3 Bulan",
    location: "Kabupaten Kuningan, Jawa Barat",
    tag: "Community Empowerment & Regional Social Program",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Merancang dan memfasilitasi program pemberdayaan masyarakat daerah melalui pemetaan sosial (social mapping), penguatan kapasitas warga, dan kolaborasi aparatur desa/kabupaten.",
    highlights: [
      "Melakukan asesmen kebutuhan komunitas dan pemetaan aset lokal untuk menyusun program intervensi sosial yang tepat sasaran.",
      "Memfasilitasi musyawarah warga dan diskusi kelompok terarah (FGD) dengan pendekatan partisipatif dan inklusif.",
      "Menjembatani komunikasi antara kelompok masyarakat dengan perangkat pemerintah daerah guna mendorong keberlanjutan program.",
    ],
    skills: [
      "Community Development",
      "Social Mapping",
      "Participatory Facilitation (FGD)",
      "Regional Stakeholder Engagement",
    ],
    accentColor: "emerald",
  },
  {
    id: "kemensos-antasena",
    number: "06",
    role: "Social Work",
    organization: "Kementerian Sosial RI (Sentra Antasena Magelang)",
    period: "Agu 2024 – Sep 2024",
    duration: "2 Bulan",
    location: "Kabupaten Magelang, Jawa Tengah",
    tag: "Social Rehabilitation & Case Management",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Menjalankan praktik pekerjaan sosial dalam layanan rehabilitasi sosial terpadu, manajemen kasus (case management), dan pendampingan pemerlu pelayanan kesejahteraan sosial (PPKS).",
    highlights: [
      "Melaksanakan tahapan manajemen kasus mulai dari pendekatan awal, asesmen biopsikososial, penyusunan rencana intervensi, hingga evaluasi.",
      "Memberikan dukungan konseling individual maupun kelompok untuk memulihkan keberfungsian sosial penerima manfaat.",
      "Berkoordinasi dengan tim multidisiplin (pekerja sosial, psikolog, medis, dan instruktur vokasional) di lingkungan Sentra Kemensos RI.",
    ],
    skills: [
      "Case Management",
      "Biopsychosocial Assessment",
      "Social Rehabilitation",
      "Multidisciplinary Collaboration",
    ],
    accentColor: "emerald",
  },
  {
    id: "kemensos-satria",
    number: "07",
    role: "Social Work",
    organization: "Kementerian Sosial RI (Sentra Satria Baturraden)",
    period: "Jan 2024 – Apr 2024",
    duration: "4 Bulan",
    location: "Purwokerto Utara, Jawa Tengah",
    tag: "Social Service Delivery & Assessment",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Melaksanakan pelayanan rehabilitasi sosial, asesmen penerima manfaat, serta pendampingan terapi sosial dan vokasional di unit pelaksana teknis Kementerian Sosial RI.",
    highlights: [
      "Mengidentifikasi permasalahan dan potensi penerima manfaat melalui instrumen asesmen pekerjaan sosial yang terstandarisasi.",
      "Mendampingi kegiatan bimbingan fisik, mental, sosial, dan keterampilan guna mendorong kemandirian klien pasca-rehabilitasi.",
      "Menyusun laporan perkembangan kasus (case record) secara sistematis dan menjaga kerahasiaan data sesuai kode etik profesi.",
    ],
    skills: [
      "Social Service Delivery",
      "Client Assessment",
      "Psychosocial Support",
      "Case Documentation",
    ],
    accentColor: "indigo",
  },
  {
    id: "meetpot-chef",
    number: "08",
    role: "Chef",
    organization: "Prep Tu at Meet Pot",
    period: "Jul 2023 – Jan 2024",
    duration: "7 Bulan",
    location: "Bandung Raya, Jawa Barat",
    tag: "Operations, Discipline & Team Collaboration",
    category: "corporate_education",
    summary:
      "Mengelola operasional dapur secara disiplin, menjaga standar kualitas produksi, serta membangun kerja sama tim yang tangguh di bawah tekanan ritme kerja cepat.",
    highlights: [
      "Menjalankan standar prosedur operasional (SOP), kebersihan, dan pengendalian mutu secara konsisten setiap hari.",
      "Berkoordinasi secara efektif dengan anggota tim operasional untuk memastikan ketepatan waktu penyajian di jam sibuk.",
      "Mengasah ketahanan kerja (resilience), manajemen waktu, dan kepemimpinan praktis di lingkungan operasional langsung.",
    ],
    skills: [
      "Operational Discipline",
      "Team Collaboration",
      "Quality Control",
      "Time Management Under Pressure",
    ],
    accentColor: "rose",
  },
  {
    id: "ypac-social-care",
    number: "09",
    role: "Social Care Worker",
    organization: "Yayasan Pembinaan Anak Cacat (YPAC) Jakarta",
    period: "Jul 2022 – Agu 2022",
    duration: "2 Bulan",
    location: "Bandung Raya / Jakarta",
    tag: "Disability Care & Empathetic Assistance",
    category: "social_research",
    summary:
      "Memberikan pendampingan sosial yang empatik bagi anak-anak penyandang disabilitas serta mendukung aktivitas rehabilitasi dan inklusi sosial di lingkungan YPAC.",
    highlights: [
      "Mendampingi anak berkebutuhan khusus dalam aktivitas harian dan sesi bimbingan sosial dengan pendekatan sabar serta menghargai martabat klien.",
      "Berinteraksi dengan keluarga dan pendamping untuk memperkuat sistem dukungan (support system) bagi perkembangan anak.",
      "Mempraktikkan prinsip inklusivitas, kepekaan empati, dan komunikasi non-diskriminatif.",
    ],
    skills: [
      "Disability Inclusion",
      "Empathetic Care",
      "Family Support System",
      "Child Welfare",
    ],
    accentColor: "rose",
  },
  {
    id: "ptdi-admin",
    number: "10",
    role: "Administrative Officer",
    organization: "PT Dirgantara Indonesia (Indonesian Aerospace)",
    period: "Nov 2019 – Jan 2020",
    duration: "3 Bulan",
    location: "Bandung Raya, Jawa Barat",
    tag: "Corporate Administration & Document Control",
    category: "government",
    secondaryCategory: "corporate_education",
    summary:
      "Melaksanakan fungsi administrasi korporat, pengelolaan arsip dokumen teknis/manajerial, dan dukungan operasional perkantoran di BUMN industri strategis kedirgantaraan.",
    highlights: [
      "Mengelola pengarsipan dokumen korporat, pencatatan surat masuk/keluar, dan penataan basis data administrasi secara rapi dan terstruktur.",
      "Mendukung kelancaran alur informasi dan kebutuhan administrasi harian antar staf di lingkungan divisi kerja.",
      "Membangun fondasi awal kedisiplinan kerja korporat dan pemahaman prosedur administrasi BUMN berskala besar.",
    ],
    skills: [
      "Corporate Administration",
      "Document Control",
      "BUMN Office Operations",
      "Data Archiving",
    ],
    accentColor: "indigo",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "poltekesos",
    institution: "Politeknik Kesejahteraan Sosial (POLTEKESOS) Bandung",
    degree: "Applied Bachelor's Degree (Sarjana Terapan, S.Tr.Sos.)",
    field: "Social Work (Pekerjaan Sosial)",
    period: "2024 – 2025",
    location: "Bandung, Jawa Barat",
    badge: "Gelar Utama · S.Tr.Sos.",
    description:
      "Pendidikan tinggi vokasi kedinasan di bawah naungan Kementerian Sosial RI dengan fokus mendalam pada intervensi sosial makro-mikro, manajemen kasus, pengembangan masyarakat (Community Development), kebijakan kesejahteraan, dan riset rehabilitasi sosial.",
    highlights: [
      "Lulus dengan kualifikasi Sarjana Terapan Pekerjaan Sosial (S.Tr.Sos.) dan tersertifikasi kompetensi nasional LSP Kemensos RI.",
      "Riset Tugas Akhir di BNN RI mengenai evaluasi implementasi program rehabilitasi sosial penyalahguna narkotika.",
      "Praktik lapangan intensif di Sentra Kemensos RI (Magelang & Baturraden) serta pemberdayaan masyarakat di Kabupaten Kuningan.",
    ],
  },
  {
    id: "maranatha",
    institution: "Universitas Kristen Maranatha Bandung",
    degree: "Undergraduate Studies",
    field: "Computer Engineering (Teknik Komputer)",
    period: "Agu 2021 – Agu 2022",
    location: "Bandung, Jawa Barat",
    badge: "Nilai Tambah · Tech & Systems Literacy",
    description:
      "Memberikan fondasi literasi teknologi, pemikiran analitis-logis, serta pemahaman sistem informasi modern yang memperkaya cara kerja terstruktur dalam administrasi HR dan pengolahan data riset sosial.",
    highlights: [
      "Memadukan pola pikir sistematis (systems thinking) dengan pendekatan humanis dari ilmu Pekerjaan Sosial.",
      "Adaptif terhadap penggunaan perangkat digital, sistem administrasi modern, dan pemetaan berbasis data.",
    ],
  },
];

export const VOLUNTEER_DATA: VolunteerItem[] = [
  {
    id: "earth-hour",
    organization: "Earth Hour Bandung",
    role: "Public Relation",
    division: "Divisi SIMARGI (Energy Saving Education)",
    period: "Nov 2020 – Agu 2021",
    duration: "10 Bulan",
    domain: "Lingkungan & Keberlanjutan (ESG/CSR)",
    description:
      "Mengampanyekan edukasi penghematan energi dan kepedulian perubahan iklim melalui media sosial serta kegiatan langsung di taman kota dan sekolah (TK hingga SMP) di Bandung.",
    highlights: [
      "Menyusun pesan komunikasi publik yang edukatif dan mudah dipahami oleh berbagai kelompok usia (anak sekolah hingga masyarakat umum).",
      "Memfasilitasi aksi edukasi tatap muka di ruang publik/taman kota dan sekolah-sekolah se-Bandung Raya.",
      "Membangun jejaring kolaborasi komunitas lingkungan dan relawan muda.",
    ],
    accent: "emerald",
  },
  {
    id: "pojok-sosial",
    organization: "Pojok Sosial",
    role: "Internal Human Resources Management",
    division: "People & Organization Development",
    period: "Jul 2023 – Jan 2024",
    duration: "7 Bulan",
    domain: "Human Resources & Kepemimpinan Sosial",
    description:
      "Mengelola manajemen sumber daya manusia internal, menjaga kohesi dan kesejahteraan anggota tim, serta memfasilitasi pengembangan kapasitas relawan.",
    highlights: [
      "Menerapkan prinsip Employee/Member Relations yang suportif untuk menjaga motivasi dan keterikatan (engagement) pengurus.",
      "Memfasilitasi mediasi komunikasi internal dan evaluasi kinerja berkala secara konstruktif.",
      "Merancang alur orientasi dan pengembangan potensi relawan sosial.",
    ],
    accent: "indigo",
  },
  {
    id: "garnida",
    organization: "GARNIDA (Sanggar Seni Sunda)",
    role: "Penata Laksana",
    division: "Tata Kelola Organisasi & Budaya",
    period: "Sep 2023 – Apr 2024",
    duration: "8 Bulan",
    domain: "Kepemimpinan Budaya & Tata Kelola",
    description:
      "Kepemimpinan tata kelola organisasi seni dan pelestarian budaya Sunda melalui perencanaan kegiatan, koordinasi anggota, serta manajemen operasional sanggar.",
    highlights: [
      "Mengatur tata laksana administrasi, jadwal latihan, dan penyelenggaraan pertunjukan/kegiatan pelestarian budaya Sunda.",
      "Menjaga nilai kearifan lokal dan mempererat solidaritas lintas angkatan di dalam organisasi.",
      "Mengoordinasikan kebutuhan logistik serta kemitraan acara budaya.",
    ],
    accent: "rose",
  },
  {
    id: "lingkar-psikologi",
    organization: "Lingkar Psikologi",
    role: "Promoter",
    division: "Mental Health Awareness Campaign",
    period: "Okt 2020",
    duration: "1 Bulan",
    domain: "Pendidikan & Kesehatan Mental",
    description:
      "Mengampanyekan kesadaran kesehatan mental untuk mengurangi stigma serta membangun komunitas yang terbuka, aman, dan suportif bagi generasi muda.",
    highlights: [
      "Mempromosikan literasi kesehatan mental dan pentingnya dukungan psikososial sebaya (peer support).",
      "Mendorong ruang diskusi publik yang empatik dan bebas stigma terhadap isu kesejahteraan psikologis.",
    ],
    accent: "rose",
  },
];
