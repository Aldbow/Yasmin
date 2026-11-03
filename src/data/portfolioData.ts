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
  title: "Pekerja Sosial Tersertifikasi (LSP Kemensos RI)",
  credentialId: "PS.G.1107-00-LSP.7-24",
  credentialIssuer: "Lembaga Sertifikasi Profesi (LSP) Kementerian Sosial RI",
  credentialValidFrom: "Desember 2024",
  credentialValidUntil: "Desember 2029",
  location: "Jakarta, Indonesia",
  linkedinUrl: "https://www.linkedin.com/in/auliayasminn/",
  linkedinHandle: "linkedin.com/in/auliayasminn",
  linkedinStats: "330+ Pengikut · 300+ Koneksi Profesional",
  email: "auliayasmin.socialwork@gmail.com",
  positioningPills: [
    "Konseling & Rehabilitasi Sosial",
    "Tanggung Jawab Sosial Perusahaan (CSR)",
    "Pemberdayaan Masyarakat",
    "Hubungan Industrial & Administrasi SDM",
  ],
  morphingKeywords: [
    "Tanggung Jawab Sosial Perusahaan (CSR)",
    "Pemberdayaan Masyarakat",
    "Hubungan Industrial & SDM",
    "Konseling Psikososial",
    "Manajemen Kasus Sosial",
  ],
  bioEnglish:
    "Licensed Social Worker (S.Tr.Sos.) with field experience in psychosocial rehabilitation, community development, corporate social responsibility (CSR), and institutional administration across Indonesian ministries, state-owned enterprises, and private organizations.",
  bioIndonesian:
    "Lulusan Sarjana Terapan Pekerjaan Sosial (S.Tr.Sos.) Politeknik Kesejahteraan Sosial Bandung yang memegang lisensi profesi nasional Kementerian Sosial RI. Berpengalaman menjalankan asesmen psikososial, pemberdayaan masyarakat, riset evaluasi rehabilitasi, serta tata kelola administrasi di instansi pemerintah pusat, pemerintah daerah, BUMN, dan swasta.",
  quickStats: [
    {
      id: "institutions",
      value: "10 Instansi & Organisasi",
      label: "Pengalaman Lintas Sektor",
      subtext: "Kementerian, BUMN, Pemerintah Daerah, Korporasi & Lembaga Sosial",
      accent: "emerald" as const,
    },
    {
      id: "degree",
      value: "S.Tr.Sos. · POLTEKESOS Bandung",
      label: "Pendidikan Tinggi Vokasi",
      subtext: "Sarjana Terapan Pekerjaan Sosial",
      accent: "indigo" as const,
    },
    {
      id: "license",
      value: "Pekerja Sosial Tersertifikasi",
      label: "Sertifikasi Profesi Nasional",
      subtext: "LSP Kementerian Sosial Republik Indonesia",
      accent: "rose" as const,
    },
  ],
  trustedInstitutions: [
    "Kemnaker RI",
    "BNN RI",
    "Kemensos RI",
    "Pemkab Kuningan",
    "PT Dirgantara Indonesia",
    "PT Maybank Indonesia Finance",
    "YPAC Jakarta",
    "POLTEKESOS Bandung",
  ],
  languages: [
    {
      language: "Bahasa Indonesia",
      proficiency: "Penutur Jati / Kemampuan Profesional Penuh",
      level: "100%",
    },
    {
      language: "Bahasa Inggris",
      proficiency: "Kemampuan Kerja Terbatas (Limited Working Proficiency)",
      level: "68%",
    },
  ],
};

export const BENTO_PILLARS = {
  pillar1: {
    badge: "Bidang 01 · SDM & Tata Kelola Kelembagaan",
    title: "Hubungan Kepegawaian & Administrasi Kelembagaan",
    subtitle: "Mediasi Internal, Koordinasi Lintas Unit, dan Pengelolaan Dokumen",
    description:
      "Menangani administrasi kepegawaian, alur tata naskah dinas, serta komunikasi internal antar-unit kerja. Pendekatan pekerjaan sosial diterapkan untuk memfasilitasi mediasi hubungan kerja dan menjaga kelancaran koordinasi di lingkungan birokrasi maupun korporasi.",
    institutions: [
      "Sekretariat Jenderal Kemnaker RI",
      "PT Dirgantara Indonesia (Persero)",
      "Pojok Sosial (Manajemen SDM Internal)",
    ],
    metrics: [
      { label: "Fokus Kerja", value: "Hubungan Kepegawaian & Administrasi" },
      { label: "Lingkup Instansi", value: "Kementerian, BUMN & Organisasi Sosial" },
    ],
  },
  pillar2: {
    badge: "Bidang 02 · Pemberdayaan & Lingkungan",
    title: "Program CSR & Pemberdayaan Masyarakat",
    subtitle: "Pemetaan Sosial, Fasilitasi Warga, dan Kampanye Lingkungan",
    description:
      "Melaksanakan pemetaan sosial (social mapping), musyawarah warga melalui diskusi kelompok terarah (FGD), serta kampanye edukasi penghematan energi bersama pemerintah daerah dan komunitas.",
    institutions: [
      "Pemerintah Kabupaten Kuningan",
      "Earth Hour Bandung (Divisi SIMARGI)",
    ],
    highlights: [
      "Asesmen kebutuhan warga dan pemetaan potensi desa",
      "Kampanye edukasi lingkungan di sekolah (TK s.d. SMP) dan ruang publik",
      "Koordinasi program bersama perangkat desa dan pemerintah kabupaten",
    ],
  },
  pillar3: {
    badge: "Bidang 03 · Praktik Pekerjaan Sosial",
    title: "Konseling Psikososial, Rehabilitasi & Riset",
    subtitle: "Asesmen Biopsikososial, Manajemen Kasus, dan Evaluasi Program",
    description:
      "Menjalankan tahapan manajemen kasus bagi pemerlu pelayanan kesejahteraan sosial (PPKS), pendampingan penyandang disabilitas, serta penelitian evaluasi program rehabilitasi penyalahguna narkotika.",
    institutions: [
      "BNN RI",
      "Sentra Antasena Magelang",
      "Sentra Satria Baturraden",
      "YPAC Jakarta",
    ],
  },
  pillar4: {
    badge: "Bidang 04 · Pendidikan & Layanan Klien",
    title: "Edukasi Anak, Hubungan Masyarakat & Relasi Klien",
    subtitle: "Pengajaran, Pengelolaan Portofolio Nasabah, dan Komunikasi Publik",
    description:
      "Berpengalaman mengajar dan mendampingi perkembangan sosial-emosional anak, mengelola portofolio nasabah pembiayaan di sektor jasa keuangan, serta menyusun komunikasi publik organisasi.",
    institutions: [
      "CV Hayakids Indonesia",
      "PT Maybank Indonesia Finance",
      "Lingkar Psikologi",
    ],
    marqueeSkills: [
      "Manajemen Kasus (Case Management)",
      "Asesmen Biopsikososial",
      "Pemetaan Sosial (Social Mapping)",
      "Fasilitasi Diskusi Kelompok (FGD)",
      "Hubungan Kepegawaian",
      "Mediasi Konflik",
      "Administrasi Pemerintahan & BUMN",
      "Evaluasi Program Rehabilitasi",
      "Perancangan Program CSR",
      "Komunikasi Publik & Kehumasan",
      "Pengelolaan Relasi Klien",
      "Pendampingan Kelompok Rentan",
    ],
  },
};

export const EXPERIENCE_CATEGORIES: {
  id: ExperienceCategory;
  label: string;
  count: number;
}[] = [
  { id: "all", label: "Semua Pengalaman", count: 10 },
  { id: "government", label: "Pemerintahan & BUMN", count: 6 },
  { id: "social_research", label: "Rehabilitasi, Riset & Komunitas", count: 5 },
  { id: "corporate_education", label: "Korporasi, Pendidikan & Operasional", count: 4 },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hayakids-teacher",
    number: "01",
    role: "Pengajar (Teacher)",
    organization: "CV Hayakids Indonesia",
    period: "Okt 2026 - Sekarang",
    duration: "Aktif",
    location: "Jakarta, Indonesia",
    tag: "Pendidikan & Perkembangan Anak",
    category: "corporate_education",
    isCurrent: true,
    summary:
      "Memfasilitasi kegiatan belajar dan mendampingi perkembangan sosial-emosional anak sesuai tahap tumbuh kembang masing-masing siswa.",
    highlights: [
      "Melakukan observasi perilaku harian untuk membantu siswa membangun kepercayaan diri dan kemampuan berinteraksi dengan teman sebaya.",
      "Menyampaikan laporan perkembangan belajar serta adaptasi sosial anak secara berkala kepada orang tua atau wali.",
      "Menyusun materi kegiatan kelas yang mendorong partisipasi aktif dan kerja sama antar-siswa.",
    ],
    skills: [
      "Pendampingan Tumbuh Kembang Anak",
      "Observasi Perilaku",
      "Komunikasi Orang Tua",
      "Fasilitasi Kelas",
    ],
    accentColor: "rose",
  },
  {
    id: "maybank-account-officer",
    number: "02",
    role: "Account Officer",
    organization: "PT Maybank Indonesia Finance",
    period: "Jul 2026 - Sep 2026",
    duration: "3 Bulan",
    location: "Jakarta Pusat, DKI Jakarta",
    tag: "Jasa Keuangan & Relasi Nasabah",
    category: "corporate_education",
    summary:
      "Mengelola portofolio nasabah pembiayaan, menganalisis permohonan kredit, dan memastikan kelengkapan dokumen kontrak sesuai prosedur perusahaan pembiayaan.",
    highlights: [
      "Menjalin komunikasi dengan calon nasabah dan mitra diler untuk menjelaskan skema pembiayaan serta memproses pengajuan aplikasi baru.",
      "Memeriksa keabsahan dokumen persyaratan kredit dan melakukan survei kelayakan profil calon debitur bersama tim operasional.",
      "Menindaklanjuti pertanyaan maupun kendala administrasi kontrak nasabah hingga tuntas.",
    ],
    skills: [
      "Pengelolaan Portofolio Nasabah",
      "Analisis Kelayakan Pembiayaan",
      "Verifikasi Dokumen Kontrak",
      "Negosiasi Mitra",
    ],
    accentColor: "indigo",
  },
  {
    id: "kemnaker-setjen",
    number: "03",
    role: "Staf Sekretariat Jenderal",
    organization: "Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI)",
    period: "Nov 2025 - Jul 2026",
    duration: "9 Bulan",
    location: "Jakarta Selatan, DKI Jakarta",
    tag: "Administrasi Pemerintahan & Kelembagaan",
    category: "government",
    summary:
      "Melaksanakan pengelolaan administrasi perkantoran, tata naskah dinas, dan koordinasi lintas unit kerja di lingkungan Sekretariat Jenderal Kemnaker RI.",
    highlights: [
      "Mengelola pendistribusian surat dinas, pengarsipan dokumen kebijakan, dan kelengkapan berkas administrasi kepegawaian sesuai pedoman tata naskah kementerian.",
      "Menyiapkan bahan rapat, notula, serta koordinasi jadwal kegiatan antar-biro dan pemangku kepentingan terkait.",
      "Menyusun rekapitulasi laporan kegiatan operasional unit kerja secara berkala.",
    ],
    skills: [
      "Tata Naskah Dinas",
      "Administrasi Kepegawaian",
      "Koordinasi Lintas Unit",
      "Pengelolaan Arsip Pemerintah",
    ],
    accentColor: "indigo",
  },
  {
    id: "bnn-researcher",
    number: "04",
    role: "Peneliti Sosial (Researcher)",
    organization: "Badan Narkotika Nasional Republik Indonesia (BNN RI)",
    period: "Mei 2025 - Jun 2025",
    duration: "2 Bulan",
    location: "Bogor, Jawa Barat",
    tag: "Riset Sosial & Evaluasi Rehabilitasi",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Melaksanakan penelitian tugas akhir mengenai pelaksanaan program rehabilitasi sosial bagi penyalahguna narkotika di fasilitas rehabilitasi BNN RI.",
    highlights: [
      "Mengumpulkan data primer dan sekunder melalui wawancara mendalam bersama konselor dan klien, observasi lapangan, serta telaah dokumen program.",
      "Mengkaji alur layanan pemulihan psikososial klien menggunakan perspektif praktik pekerjaan sosial.",
      "Menyusun laporan analisis mengenai faktor pendukung dan kendala pelaksanaan rehabilitasi beserta rekomendasi perbaikan layanan.",
    ],
    skills: [
      "Penelitian Kualitatif",
      "Evaluasi Program Rehabilitasi",
      "Wawancara Mendalam",
      "Analisis Kebijakan Sosial",
    ],
    accentColor: "emerald",
  },
  {
    id: "kuningan-comdev",
    number: "05",
    role: "Pekerja Pemberdayaan Masyarakat (Community Development Worker)",
    organization: "Pemerintah Kabupaten Kuningan",
    period: "Okt 2024 - Des 2024",
    duration: "3 Bulan",
    location: "Kabupaten Kuningan, Jawa Barat",
    tag: "Pemberdayaan Masyarakat Daerah",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Mendampingi masyarakat desa di Kabupaten Kuningan dalam pemetaan potensi lokal, perumusan program warga, dan koordinasi dengan perangkat daerah.",
    highlights: [
      "Melaksanakan pemetaan sosial (social mapping) untuk mengidentifikasi masalah kesejahteraan sosial dan sumber daya yang tersedia di desa.",
      "Memfasilitasi musyawarah warga dan diskusi kelompok terarah (FGD) dalam menyusun rencana kegiatan pemberdayaan masyarakat.",
      "Bekerja sama dengan perangkat desa dan dinas terkait guna menyelaraskan inisiatif warga dengan program pemerintah daerah.",
    ],
    skills: [
      "Pemetaan Sosial (Social Mapping)",
      "Fasilitasi FGD Warga",
      "Perencanaan Partisipatif",
      "Koordinasi Perangkat Desa",
    ],
    accentColor: "emerald",
  },
  {
    id: "kemensos-antasena",
    number: "06",
    role: "Praktikan Pekerja Sosial",
    organization: "Kementerian Sosial RI (Sentra Antasena Magelang)",
    period: "Agu 2024 - Sep 2024",
    duration: "2 Bulan",
    location: "Kabupaten Magelang, Jawa Tengah",
    tag: "Rehabilitasi Sosial & Manajemen Kasus",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Menjalankan praktik manajemen kasus dan layanan rehabilitasi sosial terpadu bagi pemerlu pelayanan kesejahteraan sosial (PPKS) di Sentra Antasena Magelang.",
    highlights: [
      "Melaksanakan tahapan manajemen kasus mulai dari penerimaan awal, asesmen biopsikososial, penyusunan rencana intervensi, pelaksanaan pendampingan, hingga terminasi.",
      "Mendampingi sesi bimbingan sosial individu maupun kelompok untuk mendukung pemulihan keberfungsian sosial penerima manfaat.",
      "Berkoordinasi dalam pembahasan kasus (case conference) bersama pekerja sosial, psikolog, tenaga medis, dan instruktur terapi.",
    ],
    skills: [
      "Manajemen Kasus (Case Management)",
      "Asesmen Biopsikososial",
      "Konferensi Kasus (Case Conference)",
      "Konseling Rehabilitasi",
    ],
    accentColor: "emerald",
  },
  {
    id: "kemensos-satria",
    number: "07",
    role: "Praktikan Pekerja Sosial",
    organization: "Kementerian Sosial RI (Sentra Satria Baturraden)",
    period: "Jan 2024 - Apr 2024",
    duration: "4 Bulan",
    location: "Purwokerto Utara, Jawa Tengah",
    tag: "Pelayanan Sosial & Asesmen Klien",
    category: "government",
    secondaryCategory: "social_research",
    summary:
      "Melaksanakan asesmen penerima manfaat, pendampingan terapi sosial-vokasional, serta pencatatan perkembangan kasus di Sentra Satria Baturraden.",
    highlights: [
      "Melakukan penggalian data dan asesmen kebutuhan penerima manfaat menggunakan instrumen pekerjaan sosial.",
      "Mendampingi kegiatan bimbingan mental, sosial, dan pelatihan keterampilan vokasional bagi klien selama masa rehabilitasi.",
      "Menyusun laporan perkembangan kasus (case record) secara berkala sesuai standar kerahasiaan profesi pekerjaan sosial.",
    ],
    skills: [
      "Asesmen Penerima Manfaat",
      "Pendampingan Vokasional",
      "Pencatatan Kasus (Case Recording)",
      "Pelayanan Kesejahteraan Sosial",
    ],
    accentColor: "indigo",
  },
  {
    id: "meetpot-chef",
    number: "08",
    role: "Juru Masak (Chef)",
    organization: "Prep Tu at Meet Pot",
    period: "Jul 2023 - Jan 2024",
    duration: "7 Bulan",
    location: "Bandung Raya, Jawa Barat",
    tag: "Operasional & Kerja Sama Tim",
    category: "corporate_education",
    summary:
      "Menjalankan persiapan bahan, pengolahan menu sesuai standar resep, serta pengendalian kebersihan dapur pada jam operasional padat.",
    highlights: [
      "Mematuhi prosedur standar operasional (SOP) pengolahan makanan, sanitasi dapur, dan pemeriksaan mutu bahan baku setiap hari.",
      "Bekerja sama dengan tim dapur dan staf layanan untuk menjaga ketepatan waktu penyajian pesanan pelanggan.",
      "Mengatur ketersediaan stok harian dan kerapian area kerja.",
    ],
    skills: [
      "Disiplin Operasional (SOP)",
      "Pengendalian Mutu",
      "Koordinasi Tim Operasional",
      "Manajemen Waktu",
    ],
    accentColor: "rose",
  },
  {
    id: "ypac-social-care",
    number: "09",
    role: "Pendamping Sosial (Social Care Worker)",
    organization: "Yayasan Pembinaan Anak Cacat (YPAC) Jakarta",
    period: "Jul 2022 - Agu 2022",
    duration: "2 Bulan",
    location: "Jakarta, Indonesia",
    tag: "Pendampingan Anak Penyandang Disabilitas",
    category: "social_research",
    summary:
      "Mendampingi anak penyandang disabilitas dalam kegiatan belajar, terapi harian, dan interaksi sosial di lingkungan YPAC Jakarta.",
    highlights: [
      "Memberikan pendampingan harian kepada anak berkebutuhan khusus selama sesi pembinaan sosial dan latihan kemandirian.",
      "Berkomunikasi dengan orang tua dan pengasuh untuk menyelaraskan pola pendampingan anak di lembaga dan di rumah.",
      "Membantu pencatatan aktivitas harian serta perkembangan respons sosial anak.",
    ],
    skills: [
      "Pendampingan Disabilitas",
      "Kesejahteraan Anak",
      "Komunikasi Keluarga Klien",
      "Bimbingan Kemandirian",
    ],
    accentColor: "rose",
  },
  {
    id: "ptdi-admin",
    number: "10",
    role: "Staf Administrasi (Administrative Officer)",
    organization: "PT Dirgantara Indonesia (Persero)",
    period: "Nov 2019 - Jan 2020",
    duration: "3 Bulan",
    location: "Bandung, Jawa Barat",
    tag: "Administrasi Korporat BUMN",
    category: "government",
    secondaryCategory: "corporate_education",
    summary:
      "Membantu pengelolaan surat-menyurat, penataan arsip dokumen, dan layanan administrasi harian di lingkungan divisi kerja PT Dirgantara Indonesia.",
    highlights: [
      "Mencatat surat masuk dan keluar, menyusun berkas dokumen kerja, serta memperbarui data inventaris administrasi divisi.",
      "Membantu pendistribusian dokumen internal antar-bagian sesuai prosedur administrasi perusahaan.",
      "Menjaga kerapian dan kemudahan temu kembali arsip fisik maupun digital.",
    ],
    skills: [
      "Administrasi Perkantoran BUMN",
      "Pengelolaan Surat & Arsip",
      "Penataan Basis Data",
      "Layanan Administrasi Internal",
    ],
    accentColor: "indigo",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "poltekesos",
    institution: "Politeknik Kesejahteraan Sosial (POLTEKESOS) Bandung",
    degree: "Sarjana Terapan Pekerjaan Sosial (S.Tr.Sos.)",
    field: "Program Studi Pekerjaan Sosial",
    period: "2024 - 2025",
    location: "Bandung, Jawa Barat",
    badge: "Pendidikan Tinggi Vokasi Kedinasan",
    description:
      "Perguruan tinggi kedinasan di bawah Kementerian Sosial Republik Indonesia yang menyelenggarakan pendidikan vokasi bidang intervensi sosial mikro dan makro, manajemen kasus, pengembangan masyarakat, kebijakan sosial, serta riset rehabilitasi.",
    highlights: [
      "Meraih gelar Sarjana Terapan Pekerjaan Sosial (S.Tr.Sos.) dan lulus uji kompetensi Pekerja Sosial Tersertifikasi LSP Kemensos RI.",
      "Menyelesaikan penelitian tugas akhir di BNN RI mengenai pelaksanaan program rehabilitasi sosial bagi penyalahguna narkotika.",
      "Menjalani praktik pekerjaan sosial di Sentra Antasena Magelang, Sentra Satria Baturraden, dan Kabupaten Kuningan.",
    ],
  },
  {
    id: "maranatha",
    institution: "Universitas Kristen Maranatha Bandung",
    degree: "Studi Sarjana (Tahun Pertama)",
    field: "Program Studi Teknik Komputer",
    period: "Agu 2021 - Agu 2022",
    location: "Bandung, Jawa Barat",
    badge: "Dasar Sistem Informasi & Komputasi",
    description:
      "Mempelajari dasar pemrograman, logika komputasi, dan pengolahan data digital yang mendukung ketelitian dalam pengelolaan basis data administrasi maupun tabulasi data riset sosial.",
    highlights: [
      "Menguasai dasar pengolahan data, struktur sistem informasi, dan pemanfaatan perangkat lunak perkantoran.",
      "Mendukung kerapian dokumentasi digital dalam tugas administrasi kelembagaan dan pelaporan program.",
    ],
  },
];

export const VOLUNTEER_DATA: VolunteerItem[] = [
  {
    id: "earth-hour",
    organization: "Earth Hour Bandung",
    role: "Hubungan Masyarakat (Public Relations)",
    division: "Divisi SIMARGI (Edukasi Penghematan Energi)",
    period: "Nov 2020 - Agu 2021",
    duration: "10 Bulan",
    domain: "Kampanye Lingkungan & Keberlanjutan",
    description:
      "Menyampaikan edukasi penghematan energi dan kepedulian perubahan iklim melalui kanal digital serta kegiatan tatap muka di taman kota dan sekolah (jenjang TK hingga SMP) di wilayah Bandung.",
    highlights: [
      "Menyusun materi komunikasi publik mengenai penghematan energi yang disesuaikan bagi siswa sekolah dan masyarakat umum.",
      "Memfasilitasi kegiatan sosialisasi lingkungan secara langsung di ruang publik dan sekolah-sekolah di Bandung.",
      "Bekerja sama dengan relawan lintas divisi dalam penyelenggaraan kampanye tahunan Earth Hour.",
    ],
    accent: "emerald",
  },
  {
    id: "pojok-sosial",
    organization: "Pojok Sosial",
    role: "Manajemen Sumber Daya Manusia Internal",
    division: "Pengembangan Anggota & Organisasi",
    period: "Jul 2023 - Jan 2024",
    duration: "7 Bulan",
    domain: "Manajemen Relawan & Organisasi Sosial",
    description:
      "Mengelola keanggotaan internal, memfasilitasi komunikasi antar-pengurus, serta mendampingi pelaksanaan program pengembangan kapasitas relawan.",
    highlights: [
      "Memantau keaktifan pengurus dan memfasilitasi penyelesaian kendala komunikasi antar-divisi.",
      "Menyelenggarakan kegiatan orientasi anggota baru dan evaluasi berkala pengurus organisasi.",
      "Menyusun pendataan anggota serta pembagian peran dalam program sosial komunitas.",
    ],
    accent: "indigo",
  },
  {
    id: "garnida",
    organization: "GARNIDA (Sanggar Seni Sunda)",
    role: "Penata Laksana",
    division: "Tata Kelola Organisasi & Kegiatan Budaya",
    period: "Sep 2023 - Apr 2024",
    duration: "8 Bulan",
    domain: "Tata Kelola Organisasi Seni & Budaya",
    description:
      "Mengatur administrasi sanggar, jadwal latihan rutin, serta koordinasi anggota dalam kegiatan pelestarian kesenian tradisional Sunda.",
    highlights: [
      "Menyusun jadwal latihan, daftar hadir anggota, dan kelengkapan administrasi kegiatan sanggar.",
      "Mengoordinasikan persiapan teknis dan pembagian tugas anggota saat pementasan budaya.",
      "Menjaga komunikasi antar-angkatan pengurus di lingkungan sanggar.",
    ],
    accent: "rose",
  },
  {
    id: "lingkar-psikologi",
    organization: "Lingkar Psikologi",
    role: "Promotor Kampanye (Promoter)",
    division: "Kampanye Kesadaran Kesehatan Mental",
    period: "Okt 2020",
    duration: "1 Bulan",
    domain: "Edukasi Kesehatan Mental",
    description:
      "Menyebarluaskan materi edukasi kesehatan mental melalui media daring guna meningkatkan literasi psikologis dan mengurangi stigma di kalangan generasi muda.",
    highlights: [
      "Mendistribusikan konten informasi mengenai pengenalan kesehatan mental dan dukungan sebaya (peer support).",
      "Mengajak partisipasi peserta dalam kegiatan diskusi daring yang diselenggarakan oleh Lingkar Psikologi.",
    ],
    accent: "rose",
  },
];
