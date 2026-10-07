import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ServicesPage() {
  const [openLegal, setOpenLegal] = useState(null);
  const [openTax, setOpenTax] = useState(null);
  const [lang, setLang] = useState("en");

  // =========================================================
  // LEGAL SERVICES - 10 AREAS
  // =========================================================

  const legalServices = [
    {
      title: {
        en: "Litigation Field",
        id: "Bidang Litigasi",
      },
      short: {
        en: "Representation in civil, commercial, and corporate disputes.",
        id: "Representasi sengketa perdata, komersial, dan korporasi.",
      },
      long: {
        en: "Representation and strategic legal assistance in civil, commercial, corporate, and contractual disputes, including negotiation, mediation, litigation preparation, court proceedings, and enforcement of judgments.",
        id: "Pendampingan dan strategi hukum dalam sengketa perdata, komersial, korporasi, dan kontrak, termasuk negosiasi, mediasi, persiapan perkara, proses persidangan, hingga pelaksanaan putusan.",
      },
    },
    {
      title: {
        en: "Corporate Sector",
        id: "Sektor Korporasi",
      },
      short: {
        en: "Corporate structuring and business legal advisory.",
        id: "Struktur korporasi dan konsultasi bisnis.",
      },
      long: {
        en: "Legal support throughout the business lifecycle, including company establishment, corporate structuring, shareholder arrangements, governance, commercial agreements, joint ventures, mergers, acquisitions, restructuring, and strategic transactions.",
        id: "Dukungan hukum sepanjang siklus bisnis, termasuk pendirian perusahaan, struktur korporasi, pengaturan pemegang saham, tata kelola, perjanjian komersial, joint venture, merger, akuisisi, restrukturisasi, dan transaksi strategis.",
      },
    },
    {
      title: {
        en: "Banking Sector",
        id: "Sektor Perbankan",
      },
      short: {
        en: "Financial regulatory and banking advisory.",
        id: "Konsultasi perbankan dan keuangan.",
      },
      long: {
        en: "Legal advisory for banking institutions, financial companies, businesses, investors, and parties involved in financing, credit agreements, loan documentation, guarantees, financial restructuring, and financial regulatory matters.",
        id: "Konsultasi hukum untuk lembaga perbankan, perusahaan keuangan, pelaku usaha, investor, dan pihak yang terlibat dalam pembiayaan, perjanjian kredit, dokumen pinjaman, jaminan, restrukturisasi keuangan, dan regulasi keuangan.",
      },
    },
    {
      title: {
        en: "Bankruptcy Field",
        id: "Kepailitan",
      },
      short: {
        en: "Restructuring and insolvency solutions.",
        id: "Restrukturisasi dan kepailitan.",
      },
      long: {
        en: "Legal assistance for creditors, debtors, companies, and stakeholders facing financial distress, insolvency, bankruptcy proceedings, debt restructuring, creditor negotiations, and recovery strategies.",
        id: "Pendampingan hukum bagi kreditur, debitur, perusahaan, dan pihak berkepentingan yang menghadapi kesulitan keuangan, insolvensi, kepailitan, restrukturisasi utang, negosiasi kreditur, dan strategi pemulihan.",
      },
    },
    {
      title: {
        en: "Investment Sector",
        id: "Sektor Investasi",
      },
      short: {
        en: "Foreign & domestic investment legal support.",
        id: "Dukungan investasi lokal & asing.",
      },
      long: {
        en: "Legal assistance for domestic and foreign investors in investment structuring, company establishment, licensing, regulatory requirements, agreements, due diligence, restructuring, and investment protection.",
        id: "Pendampingan hukum bagi investor lokal maupun asing dalam struktur investasi, pendirian perusahaan, perizinan, regulasi, perjanjian, due diligence, restrukturisasi, dan perlindungan investasi.",
      },
    },
    {
      title: {
        en: "Labor Sector",
        id: "Ketenagakerjaan",
      },
      short: {
        en: "Employment and industrial relations law.",
        id: "Hukum tenaga kerja dan hubungan industrial.",
      },
      long: {
        en: "Legal support for employment agreements, company regulations, employee policies, termination procedures, workforce restructuring, employee rights, industrial relations, and employment disputes.",
        id: "Dukungan hukum untuk perjanjian kerja, peraturan perusahaan, kebijakan ketenagakerjaan, proses PHK, restrukturisasi tenaga kerja, hak pekerja, hubungan industrial, dan sengketa ketenagakerjaan.",
      },
    },
    {
      title: {
        en: "Property & Infrastructure",
        id: "Properti & Infrastruktur",
      },
      short: {
        en: "Real estate and infrastructure law.",
        id: "Hukum properti dan infrastruktur.",
      },
      long: {
        en: "Legal assistance for land, property, construction, infrastructure transactions, acquisition, due diligence, development, licensing, permits, contractual arrangements, and property-related disputes.",
        id: "Pendampingan hukum untuk tanah, properti, konstruksi, transaksi infrastruktur, akuisisi, due diligence, pengembangan, perizinan, kontrak, dan sengketa properti.",
      },
    },
    {
      title: {
        en: "Family & Private",
        id: "Keluarga & Privat",
      },
      short: {
        en: "Personal and family legal matters.",
        id: "Masalah hukum pribadi dan keluarga.",
      },
      long: {
        en: "Legal assistance for individuals and families involving inheritance, family disputes, divorce-related matters, private assets, agreements, and other personal legal concerns.",
        id: "Pendampingan hukum bagi individu dan keluarga dalam persoalan warisan, sengketa keluarga, perceraian, aset pribadi, perjanjian, dan kebutuhan hukum privat lainnya.",
      },
    },
    {
      title: {
        en: "Islamic Finance",
        id: "Keuangan Syariah",
      },
      short: {
        en: "Sharia financial legal services.",
        id: "Layanan hukum keuangan syariah.",
      },
      long: {
        en: "Legal support for sharia-compliant financial structures, Islamic financing, sharia agreements, sukuk-related arrangements, Islamic banking matters, and other sharia-based transactions.",
        id: "Dukungan hukum untuk struktur keuangan berbasis syariah, pembiayaan syariah, perjanjian syariah, transaksi terkait sukuk, perbankan syariah, dan transaksi berbasis prinsip syariah lainnya.",
      },
    },
    {
      title: {
        en: "Technology & Communications",
        id: "Teknologi & Komunikasi",
      },
      short: {
        en: "Digital and technology legal advisory.",
        id: "Konsultasi hukum digital dan teknologi.",
      },
      long: {
        en: "Legal advisory for digital businesses, technology transactions, data protection, electronic systems, software, SaaS, e-commerce, cybersecurity, intellectual property, and digital business compliance.",
        id: "Konsultasi hukum untuk bisnis digital, transaksi teknologi, perlindungan data, sistem elektronik, software, SaaS, e-commerce, keamanan siber, kekayaan intelektual, dan kepatuhan bisnis digital.",
      },
    },
  ];

  // =========================================================
  // TAX SERVICES - 10 SERVICES
  // =========================================================

  const taxServices = [
    {
      title: {
        en: "Tax Consultation",
        id: "Konsultasi Pajak",
      },
      short: {
        en: "Strategic tax consultation for businesses and individuals.",
        id: "Konsultasi pajak strategis untuk bisnis dan individu.",
      },
      long: {
        en: "Strategic tax consultation designed to help businesses and individuals understand their tax obligations, manage risks, and make informed tax decisions.",
        id: "Konsultasi pajak strategis untuk membantu bisnis dan individu memahami kewajiban perpajakan, mengelola risiko, dan mengambil keputusan pajak yang tepat.",
      },
    },
    {
      title: {
        en: "Annual Tax Reporting",
        id: "Pelaporan Pajak Tahunan",
      },
      short: {
        en: "Professional assistance for annual tax reporting.",
        id: "Pendampingan profesional untuk pelaporan pajak tahunan.",
      },
      long: {
        en: "Professional assistance in preparing, reviewing, and submitting annual tax reports accurately and in accordance with applicable tax requirements.",
        id: "Pendampingan profesional dalam menyiapkan, memeriksa, dan menyampaikan laporan pajak tahunan secara tepat sesuai ketentuan perpajakan yang berlaku.",
      },
    },
    {
      title: {
        en: "Monthly Tax Reporting",
        id: "Pelaporan Pajak Bulanan",
      },
      short: {
        en: "Routine monthly tax reporting and compliance support.",
        id: "Pelaporan pajak bulanan dan dukungan kepatuhan.",
      },
      long: {
        en: "Ongoing assistance with monthly tax reporting, documentation, calculations, and compliance requirements to help businesses maintain accurate tax administration.",
        id: "Pendampingan rutin untuk pelaporan pajak bulanan, dokumentasi, perhitungan, dan kepatuhan agar administrasi perpajakan perusahaan tetap tertata.",
      },
    },
    {
      title: {
        en: "Tax Audit Assistance",
        id: "Pendampingan Pemeriksaan Pajak",
      },
      short: {
        en: "Professional assistance during tax examination processes.",
        id: "Pendampingan profesional selama proses pemeriksaan pajak.",
      },
      long: {
        en: "Professional assistance throughout tax examinations, including document preparation, communication, analysis, and strategic support during the examination process.",
        id: "Pendampingan profesional selama pemeriksaan pajak, termasuk persiapan dokumen, komunikasi, analisis, dan dukungan strategi selama proses pemeriksaan.",
      },
    },
    {
      title: {
        en: "Tax Dispute Resolution",
        id: "Penyelesaian Sengketa Pajak",
      },
      short: {
        en: "Strategic assistance for tax disputes, objections, and appeals.",
        id: "Pendampingan strategis untuk sengketa, keberatan, dan banding pajak.",
      },
      long: {
        en: "Strategic legal and tax assistance for objections, appeals, tax disputes, negotiations, and other dispute resolution processes.",
        id: "Pendampingan hukum dan perpajakan strategis untuk keberatan, banding, sengketa pajak, negosiasi, dan proses penyelesaian sengketa lainnya.",
      },
    },
    {
      title: {
        en: "Tax Compliance Review",
        id: "Review Kepatuhan Pajak",
      },
      short: {
        en: "Comprehensive review of corporate tax compliance.",
        id: "Review menyeluruh atas kepatuhan pajak perusahaan.",
      },
      long: {
        en: "Comprehensive review of tax positions, documentation, reporting, and procedures to identify potential compliance gaps and tax risks.",
        id: "Review menyeluruh terhadap posisi pajak, dokumentasi, pelaporan, dan prosedur untuk mengidentifikasi potensi kekurangan kepatuhan dan risiko pajak.",
      },
    },
    {
      title: {
        en: "Tax Compliance",
        id: "Kepatuhan Pajak",
      },
      short: {
        en: "Ongoing management of tax compliance obligations.",
        id: "Pengelolaan kewajiban kepatuhan pajak secara berkelanjutan.",
      },
      long: {
        en: "Ongoing tax compliance support covering administrative obligations, reporting requirements, tax documentation, and monitoring of applicable tax responsibilities.",
        id: "Dukungan kepatuhan pajak secara berkelanjutan yang mencakup kewajiban administrasi, pelaporan, dokumentasi, dan pemantauan kewajiban perpajakan.",
      },
    },
    {
      title: {
        en: "Tax Audit Support",
        id: "Dukungan Pemeriksaan Pajak",
      },
      short: {
        en: "Document and strategic support throughout tax audit processes.",
        id: "Dukungan dokumen dan strategi selama proses pemeriksaan pajak.",
      },
      long: {
        en: "Document preparation and strategic support before and during tax audits to ensure that the client's position is properly organized and supported.",
        id: "Persiapan dokumen dan dukungan strategi sebelum dan selama pemeriksaan pajak agar posisi klien tersusun dan didukung dengan baik.",
      },
    },
    {
      title: {
        en: "Tax Planning",
        id: "Perencanaan Pajak",
      },
      short: {
        en: "Long-term tax planning for efficient and compliant business operations.",
        id: "Perencanaan pajak jangka panjang untuk operasi bisnis yang efisien dan patuh.",
      },
      long: {
        en: "Long-term tax planning designed to improve tax efficiency while maintaining compliance with applicable tax regulations and business requirements.",
        id: "Perencanaan pajak jangka panjang untuk meningkatkan efisiensi pajak dengan tetap menjaga kepatuhan terhadap regulasi dan kebutuhan bisnis.",
      },
    },
    {
      title: {
        en: "Bookkeeping & Tax Administration",
        id: "Pembukuan & Administrasi Pajak",
      },
      short: {
        en: "Organized bookkeeping and tax administration support.",
        id: "Dukungan pembukuan dan administrasi pajak yang tertata.",
      },
      long: {
        en: "Organized bookkeeping and tax administration support to help businesses maintain accurate financial records and properly manage their tax obligations.",
        id: "Dukungan pembukuan dan administrasi pajak agar perusahaan memiliki catatan keuangan yang tertata dan dapat mengelola kewajiban perpajakannya dengan baik.",
      },
    },
  ];

  // =========================================================
  // TOGGLE FUNCTIONS
  // =========================================================

  const toggleLegal = (index) => {
    setOpenLegal(openLegal === index ? null : index);
  };

  const toggleTax = (index) => {
    setOpenTax(openTax === index ? null : index);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F6EF] text-[#16251F]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          LANGUAGE SWITCHER
      ===================================================== */}

      <div className="fixed right-5 top-[78px] z-[998] sm:right-8 lg:right-12">
        <button
          type="button"
          onClick={() =>
            setLang(lang === "en" ? "id" : "en")
          }
          aria-label="Change language"
          className="rounded-full border border-[#0B4F32]/20 bg-[#F8F6EF]/95 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B4F32] shadow-[0_8px_25px_rgba(11,79,50,0.12)] backdrop-blur-md transition duration-300 hover:border-[#A92F46]/50 hover:bg-white hover:text-[#A92F46]"
        >
          {lang === "en" ? "ID" : "EN"}
        </button>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B4F32]">

        {/* Decorative background circles */}

        <div className="absolute -left-[180px] -top-[220px] h-[560px] w-[560px] rounded-full border border-white/10" />

        <div className="absolute -right-[250px] -top-[180px] h-[520px] w-[520px] rounded-full border border-white/10" />

        <div className="absolute bottom-[-250px] right-[25%] h-[520px] w-[520px] rounded-full border border-[#D69AA5]/20" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1440px] grid-cols-1 lg:grid-cols-2">

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="relative z-20 flex items-center px-6 py-24 sm:px-10 lg:px-16 xl:px-24">

            <div className="max-w-[620px]">

              <div className="mb-7 flex items-center gap-4">

                <span className="h-px w-12 bg-[#E6B5BD]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E6B5BD]">
                  {lang === "en"
                    ? "Our Services"
                    : "Layanan Kami"}
                </span>

              </div>

              <h1 className="font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#FDFCF7] sm:text-[58px] md:text-[68px] xl:text-[76px]">

                {lang === "en" ? (
                  <>
                    Legal & Tax
                    <br />
                    Solutions for a
                    <br />
                    Stronger Business{" "}
                    <span className="text-[#E39AA7]">
                      Tomorrow
                    </span>
                  </>
                ) : (
                  <>
                    Solusi Hukum &
                    <br />
                    Pajak untuk
                    <br />
                    Bisnis yang{" "}
                    <span className="text-[#E39AA7]">
                      Lebih Kuat
                    </span>
                  </>
                )}

              </h1>

              <p className="mt-7 max-w-[520px] text-sm leading-7 text-white/70 md:text-base">
                {lang === "en"
                  ? "Comprehensive legal and tax services designed to protect your interests, reduce risk, and support sustainable business growth."
                  : "Layanan hukum dan perpajakan yang dirancang untuk melindungi kepentingan Anda, mengurangi risiko, dan mendukung pertumbuhan bisnis yang berkelanjutan."}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">

                <a
                  href="#services"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#A92F46] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#BD4058]"
                >
                  {lang === "en"
                    ? "Explore Services"
                    : "Lihat Layanan"}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>

            </div>

          </div>

          {/* =================================================
              SIMPLE PREMIUM HERO VISUAL
          ================================================= */}

          <div className="relative min-h-[470px] overflow-hidden lg:min-h-0">

            {/* Soft gradient */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923]" />

            {/* Large subtle arch */}

            <div className="absolute bottom-[-3%] left-[14%] right-[8%] top-[10%] rounded-t-[260px] border border-[#E6D8B8]/30" />

            {/* Inner arch */}

            <div className="absolute bottom-[3%] left-[20%] right-[14%] top-[17%] rounded-t-[220px] border border-white/[0.06]" />

            {/* Soft golden glow */}

            <div className="absolute left-[43%] top-[24%] h-[250px] w-[250px] rounded-full bg-[#C9A96A]/10 blur-3xl" />

            {/* Soft burgundy glow */}

            <div className="absolute bottom-[22%] left-[34%] h-[150px] w-[150px] rounded-full bg-[#A92F46]/10 blur-3xl" />

            {/* =================================================
                MINIMAL MONOGRAM
            ================================================= */}

            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

              <div className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full border border-[#D7C49A]/35 sm:h-[220px] sm:w-[220px]">

                <div className="absolute inset-[18px] rounded-full border border-white/[0.08]" />

                <div className="absolute inset-[32px] rounded-full border border-[#A92F46]/25" />

                <span className="relative font-serif text-[100px] font-normal leading-none text-[#E1CF9E]/80 sm:text-[125px]">
                  Z
                </span>

              </div>

            </div>

            {/* =================================================
                THIN EDITORIAL LINE
            ================================================= */}

            <div className="absolute left-[10%] right-[10%] top-1/2 z-10 h-px bg-gradient-to-r from-transparent via-[#D8C298]/30 to-transparent" />

            {/* =================================================
                TOP LABEL
            ================================================= */}

            <div className="absolute left-[12%] top-[17%] z-30">

              <div className="flex items-center gap-3">

                <span className="h-px w-7 bg-[#D8C298]/60" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#D8C298]/70">
                  Zaky Zhafran
                </span>

              </div>

            </div>

            {/* =================================================
                BOTTOM LABEL
            ================================================= */}

            <div className="absolute bottom-[16%] right-[12%] z-30 text-right">

              <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Legal & Tax
              </p>

              <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-[#D8C298]/50">
                Advisory Firm
              </p>

            </div>

            {/* =================================================
                SMALL DECORATIVE POINTS
            ================================================= */}

            <div className="absolute right-[17%] top-[22%] h-2 w-2 rounded-full bg-[#DDA1AC]/70" />

            <div className="absolute left-[16%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-[#E2C98F]/70" />

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICE HIGHLIGHTS
      ===================================================== */}

      <section className="border-b border-[#E0E4DC] bg-[#FBFAF5]">

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              number: "01",
              icon: "⚖",
              title:
                lang === "en"
                  ? "Legal Advisory"
                  : "Konsultasi Hukum",
              desc:
                lang === "en"
                  ? "Corporate, commercial, and business legal support."
                  : "Dukungan hukum korporasi, komersial, dan bisnis.",
            },
            {
              number: "02",
              icon: "◉",
              title:
                lang === "en"
                  ? "Tax Consulting"
                  : "Konsultasi Pajak",
              desc:
                lang === "en"
                  ? "Strategic tax planning and compliance solutions."
                  : "Perencanaan pajak strategis dan solusi kepatuhan.",
            },
            {
              number: "03",
              icon: "▥",
              title:
                lang === "en"
                  ? "Corporate Services"
                  : "Layanan Korporasi",
              desc:
                lang === "en"
                  ? "Business setup, restructuring, and governance."
                  : "Pendirian bisnis, restrukturisasi, dan tata kelola.",
            },
            {
              number: "04",
              icon: "◇",
              title:
                lang === "en"
                  ? "Compliance & Regulatory"
                  : "Kepatuhan & Regulasi",
              desc:
                lang === "en"
                  ? "Stay compliant, minimize risk, focus on growth."
                  : "Tetap patuh, mengurangi risiko, dan fokus pada pertumbuhan.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={`group px-7 py-10 transition hover:bg-white lg:px-8 ${
                index !== 3
                  ? "border-b border-[#E0E4DC] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8CAE9B] text-lg text-[#0B4F32] transition group-hover:border-[#A92F46] group-hover:text-[#A92F46]">
                {item.icon}
              </div>

              <div className="mt-6">

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#A92F46]">
                  {item.number}
                </p>

                <h3 className="mt-2 font-serif text-xl uppercase tracking-wide text-[#0B4F32]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[250px] text-xs leading-6 text-[#727B75]">
                  {item.desc}
                </p>

                <a
                  href="#services"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A92F46]"
                >
                  {lang === "en"
                    ? "Learn More"
                    : "Selengkapnya"}

                  <span>→</span>
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section
        id="services"
        className="relative bg-[#F8F6EF] py-24 md:py-32"
      >

        {/* Decorative leaves */}

        <div className="pointer-events-none absolute right-[-50px] top-[80px] hidden opacity-50 lg:block">

          <svg
            width="230"
            height="190"
            viewBox="0 0 230 190"
            fill="none"
          >

            <path
              d="M15 150C80 100 135 50 220 10"
              stroke="#B8A47C"
              strokeWidth="1"
            />

            <path
              d="M68 111C58 80 72 56 100 43C101 72 91 95 68 111Z"
              stroke="#B8A47C"
              strokeWidth="1"
            />

            <path
              d="M116 78C115 47 136 27 164 23C159 52 143 70 116 78Z"
              stroke="#B8A47C"
              strokeWidth="1"
            />

            <path
              d="M161 52C166 28 184 16 207 18C198 39 184 50 161 52Z"
              stroke="#B8A47C"
              strokeWidth="1"
            />

          </svg>

        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">

          {/* Heading */}

          <div className="mb-14 max-w-[720px]">

            <div className="mb-5 flex items-center gap-4">

              <span className="h-px w-10 bg-[#A92F46]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#A92F46]">
                {lang === "en"
                  ? "Our Expertise"
                  : "Keahlian Kami"}
              </span>

            </div>

            <h2 className="font-serif text-[40px] uppercase leading-[1.02] tracking-[-0.035em] text-[#0B4F32] md:text-[58px]">
              {lang === "en"
                ? "Legal solutions built around your needs."
                : "Solusi hukum yang disesuaikan dengan kebutuhan Anda."}
            </h2>

            <p className="mt-6 max-w-[650px] text-sm leading-7 text-[#707A74] md:text-base">
              {lang === "en"
                ? "Explore our legal and tax practices. Select a service to see how we can support your matter."
                : "Jelajahi layanan hukum dan perpajakan kami. Pilih layanan untuk melihat bagaimana kami dapat membantu kebutuhan Anda."}
            </p>

          </div>

          {/* =================================================
              TWO SERVICE CARDS
          ================================================= */}

          <div className="grid gap-7 xl:grid-cols-2">

            {/* =================================================
                LEGAL CARD
            ================================================= */}

            <div className="relative overflow-hidden rounded-[22px] border border-[#D4DED8] bg-[#FCFCF8] shadow-[0_15px_45px_rgba(19,58,43,0.05)]">

              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">

                <div className="absolute -right-7 -top-7 h-20 w-20 rotate-45 bg-[#0B4F32]" />

              </div>

              <div className="border-b border-[#E0E6E1] px-6 pb-6 pt-7 md:px-8">

                <div className="flex items-end justify-between gap-5">

                  <div>

                    <span className="font-serif text-4xl text-[#0B4F32]">
                      01
                    </span>

                    <h3 className="mt-1 font-serif text-2xl uppercase tracking-wide text-[#0B4F32] md:text-3xl">
                      {lang === "en"
                        ? "Legal Services"
                        : "Layanan Hukum"}
                    </h3>

                  </div>

                  <span className="shrink-0 rounded-full bg-[#E6F0EA] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B4F32]">
                    {legalServices.length}{" "}
                    {lang === "en"
                      ? "Areas"
                      : "Bidang"}
                  </span>

                </div>

              </div>

              <div className="p-4 md:p-6">

                {legalServices.map((item, index) => {

                  const isOpen = openLegal === index;

                  return (
                    <div
                      key={index}
                      className={`border-b border-[#E4E9E5] last:border-b-0 ${
                        isOpen
                          ? "bg-[#F2F7F4]"
                          : ""
                      }`}
                    >

                      <button
                        type="button"
                        onClick={() => toggleLegal(index)}
                        className="flex w-full items-center gap-4 px-3 py-4 text-left md:px-4"
                      >

                        <span className="w-8 shrink-0 font-serif text-sm text-[#0B4F32]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="min-w-0 flex-1">

                          <span className="block font-serif text-[13px] font-semibold uppercase tracking-[0.06em] text-[#194B38] md:text-sm">
                            {item.title[lang]}
                          </span>

                          <span className="mt-1 block text-[10px] leading-5 text-[#8A928D] md:text-[11px]">
                            {item.short[lang]}
                          </span>

                        </span>

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm transition-all ${
                            isOpen
                              ? "rotate-45 border-[#A92F46] text-[#A92F46]"
                              : "border-[#CBD8D0] text-[#0B4F32]"
                          }`}
                        >
                          +
                        </span>

                      </button>

                      {isOpen && (
                        <div className="px-12 pb-5 pr-8 md:px-16">

                          <div className="mb-3 h-px bg-[#DCE5DF]" />

                          <p className="text-xs leading-6 text-[#69746E]">
                            {item.long[lang]}
                          </p>

                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                TAX CARD
            ================================================= */}

            <div className="relative overflow-hidden rounded-[22px] border border-[#E9D5D9] bg-[#FFFDFD] shadow-[0_15px_45px_rgba(113,36,52,0.05)]">

              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">

                <div className="absolute -right-7 -top-7 h-20 w-20 rotate-45 bg-[#A92F46]" />

              </div>

              <div className="border-b border-[#ECDDE0] px-6 pb-6 pt-7 md:px-8">

                <div className="flex items-end justify-between gap-5">

                  <div>

                    <span className="font-serif text-4xl text-[#A92F46]">
                      02
                    </span>

                    <h3 className="mt-1 font-serif text-2xl uppercase tracking-wide text-[#0B4F32] md:text-3xl">
                      {lang === "en"
                        ? "Tax Services"
                        : "Layanan Pajak"}
                    </h3>

                  </div>

                  <span className="shrink-0 rounded-full bg-[#F6E4E7] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#A92F46]">
                    {taxServices.length}{" "}
                    {lang === "en"
                      ? "Services"
                      : "Layanan"}
                  </span>

                </div>

              </div>

              <div className="p-4 md:p-6">

                {taxServices.map((item, index) => {

                  const isOpen = openTax === index;

                  return (
                    <div
                      key={index}
                      className={`border-b border-[#EDE3E5] last:border-b-0 ${
                        isOpen
                          ? "bg-[#FFF6F7]"
                          : ""
                      }`}
                    >

                      <button
                        type="button"
                        onClick={() => toggleTax(index)}
                        className="flex w-full items-center gap-4 px-3 py-4 text-left md:px-4"
                      >

                        <span className="w-8 shrink-0 font-serif text-sm text-[#A92F46]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="min-w-0 flex-1">

                          <span className="block font-serif text-[13px] font-semibold uppercase tracking-[0.06em] text-[#194B38] md:text-sm">
                            {item.title[lang]}
                          </span>

                          <span className="mt-1 block text-[10px] leading-5 text-[#8A8587] md:text-[11px]">
                            {item.short[lang]}
                          </span>

                        </span>

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm transition-all ${
                            isOpen
                              ? "rotate-45 border-[#A92F46] text-[#A92F46]"
                              : "border-[#E1C9CE] text-[#A92F46]"
                          }`}
                        >
                          +
                        </span>

                      </button>

                      {isOpen && (
                        <div className="px-12 pb-5 pr-8 md:px-16">

                          <div className="mb-3 h-px bg-[#ECDDE0]" />

                          <p className="text-xs leading-6 text-[#716A6C]">
                            {item.long[lang]}
                          </p>

                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="consultation"
        className="relative overflow-hidden bg-[#0B4F32]"
      >

        {/* Decorative leaves */}

        <div className="absolute bottom-0 left-0 opacity-50">

          <svg
            width="190"
            height="170"
            viewBox="0 0 190 170"
            fill="none"
          >

            <path
              d="M0 170C45 125 70 80 155 25"
              stroke="#C1AA7A"
              strokeWidth="1"
            />

            <path
              d="M45 124C27 98 31 72 52 52C67 78 65 104 45 124Z"
              stroke="#C1AA7A"
              strokeWidth="1"
            />

            <path
              d="M86 82C78 56 90 35 114 25C118 51 107 70 86 82Z"
              stroke="#C1AA7A"
              strokeWidth="1"
            />

          </svg>

        </div>

        {/* Right decoration */}

        <div className="absolute bottom-[-80px] right-[-50px] h-[260px] w-[260px] rounded-full border border-[#D59BA5]/30" />

        <div className="relative mx-auto grid max-w-[1100px] gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-24">

          <div>

            <div className="mb-5 flex items-center gap-4">

              <span className="h-px w-10 bg-[#E5B7BE]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#E5B7BE]">
                {lang === "en"
                  ? "Consultation"
                  : "Konsultasi"}
              </span>

            </div>

            <h2 className="font-serif text-4xl uppercase leading-[1.05] text-white md:text-5xl">
              {lang === "en"
                ? "Let's Discuss Your Legal And Tax Needs."
                : "Mari Diskusikan Kebutuhan Hukum Dan Pajak Anda."}
            </h2>

          </div>

          <div className="md:border-l md:border-white/20 md:pl-10">

            <p className="max-w-[420px] text-sm leading-7 text-white/65">
              {lang === "en"
                ? "Get in touch with our team for tailored advice and practical solutions for your business."
                : "Hubungi tim kami untuk mendapatkan nasihat yang sesuai dengan kebutuhan dan solusi praktis untuk bisnis Anda."}
            </p>

            <a
              href="https://wa.me/6282242887887"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-4 rounded-full bg-[#A92F46] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#BD4058]"
            >
              {lang === "en"
                ? "Contact Us"
                : "Hubungi Kami"}

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="-mt-20 bg-[#0B1220]">

        <Footer />

      </div>

    </div>
  );
}