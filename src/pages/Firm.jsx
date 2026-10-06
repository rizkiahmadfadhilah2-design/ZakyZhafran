import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Firm() {
  const [lang, setLang] = useState("en");

  const t = {
    heroEyebrow: {
      en: "ZAKY ZHAFFRAN & PARTNERS",
      id: "ZAKY ZHAFFRAN & PARTNERS",
    },

    heroTitle: {
      en: "LEGAL & TAX ADVISORY",
      id: "KONSULTASI HUKUM & PAJAK",
    },

    heroDesc: {
      en: "Precision-driven legal solutions for corporations, investors, and institutions.",
      id: "Solusi hukum presisi untuk korporasi, investor, dan institusi.",
    },

    explore: {
      en: "Explore Our Practice",
      id: "Jelajahi Layanan Kami",
    },

    practiceLabel: {
      en: "01 / PRACTICE AREAS",
      id: "01 / AREA PRAKTIK",
    },

    practiceTitle: {
      en: "Legal expertise built around complex business challenges.",
      id: "Keahlian hukum yang dibangun untuk menghadapi tantangan bisnis yang kompleks.",
    },

    practiceDesc: {
      en: "Our practice combines legal precision, commercial understanding, and strategic thinking to protect our clients and support sustainable business decisions.",
      id: "Praktik kami menggabungkan presisi hukum, pemahaman komersial, dan pemikiran strategis untuk melindungi klien serta mendukung keputusan bisnis yang berkelanjutan.",
    },

    casesLabel: {
      en: "02 / CASE STUDIES",
      id: "02 / STUDI KASUS",
    },

    casesTitle: {
      en: "Selected matters. Strategic outcomes.",
      id: "Perkara terpilih. Hasil yang strategis.",
    },

    casesDesc: {
      en: "Representative examples of how we approach complex legal, corporate, and tax matters.",
      id: "Contoh bagaimana kami menangani persoalan hukum, korporasi, dan pajak yang kompleks.",
    },

    legalLabel: {
      en: "03 / LEGAL SERVICES",
      id: "03 / LAYANAN HUKUM",
    },

    legalTitle: {
      en: "Comprehensive legal capabilities.",
      id: "Kapabilitas hukum yang komprehensif.",
    },

    legalDesc: {
      en: "Our legal practice covers a broad range of sectors and legal matters, allowing clients to work with one trusted advisory partner.",
      id: "Praktik hukum kami mencakup berbagai sektor dan bidang hukum sehingga klien dapat bekerja dengan satu mitra penasihat terpercaya.",
    },

    taxLabel: {
      en: "04 / TAX SERVICES",
      id: "04 / LAYANAN PAJAK",
    },

    taxTitle: {
      en: "Tax advisory with business perspective.",
      id: "Konsultasi pajak dengan perspektif bisnis.",
    },

    taxDesc: {
      en: "We combine tax compliance, planning, reporting, and dispute support to help businesses manage their tax obligations with confidence.",
      id: "Kami menggabungkan kepatuhan, perencanaan, pelaporan, dan dukungan sengketa pajak untuk membantu bisnis mengelola kewajiban pajaknya dengan lebih percaya diri.",
    },

    ctaEyebrow: {
      en: "LET'S WORK TOGETHER",
      id: "MARI BEKERJA SAMA",
    },

    ctaTitle: {
      en: "Strategic Legal Consultation",
      id: "Konsultasi Hukum Strategis",
    },

    ctaDesc: {
      en: "Speak with our legal experts for corporate and tax advisory solutions tailored to your business.",
      id: "Bicarakan kebutuhan Anda dengan tim ahli kami untuk solusi hukum dan pajak yang disesuaikan dengan bisnis Anda.",
    },

    ctaBtn: {
      en: "Contact Us",
      id: "Hubungi Kami",
    },

    viewPractice: {
      en: "View Practice",
      id: "Lihat Praktik",
    },

    matter: {
      en: "Matter",
      id: "Perkara",
    },
  };

  const practiceAreas = [
    {
      number: "01",
      title: {
        en: "CORPORATE & FINANCE",
        id: "KORPORASI & KEUANGAN",
      },
      desc: {
        en: "We support complex corporate transactions, restructuring, and cross-border financial operations.",
        id: "Kami mendukung transaksi korporasi kompleks, restrukturisasi, dan operasi keuangan lintas negara.",
      },
      problems: {
        en: [
          "Structuring cross-border M&A deals",
          "Reducing regulatory and financial risk",
          "Corporate restructuring & compliance optimization",
        ],
        id: [
          "Struktur merger lintas negara",
          "Mengurangi risiko regulasi dan keuangan",
          "Restrukturisasi & optimasi kepatuhan",
        ],
      },
    },

    {
      number: "02",
      title: {
        en: "LITIGATION & DISPUTE RESOLUTION",
        id: "LITIGASI & PENYELESAIAN SENGKETA",
      },
      desc: {
        en: "We represent clients in complex commercial disputes and regulatory matters.",
        id: "Kami mewakili klien dalam sengketa komersial dan regulasi yang kompleks.",
      },
      problems: {
        en: [
          "Commercial dispute resolution",
          "Regulatory investigations defense",
          "Arbitration & settlement strategy",
        ],
        id: [
          "Penyelesaian sengketa komersial",
          "Pembelaan investigasi regulasi",
          "Strategi arbitrase & settlement",
        ],
      },
    },

    {
      number: "03",
      title: {
        en: "TAX & REGULATORY",
        id: "PAJAK & REGULASI",
      },
      desc: {
        en: "We help companies reduce tax exposure and maintain full compliance.",
        id: "Kami membantu perusahaan mengurangi risiko pajak dan menjaga kepatuhan penuh.",
      },
      problems: {
        en: [
          "Tax audit defense & dispute handling",
          "Corporate tax optimization strategy",
          "Regulatory compliance management",
        ],
        id: [
          "Pembelaan audit pajak & sengketa",
          "Strategi optimasi pajak perusahaan",
          "Manajemen kepatuhan regulasi",
        ],
      },
    },
  ];

  const legalServices = [
    { en: "LITIGATION FIELD", id: "LITIGASI" },
    { en: "CORPORATE SECTOR", id: "KORPORASI" },
    { en: "BANKING SECTOR", id: "PERBANKAN" },
    { en: "BANKRUPTCY FIELD", id: "KEPAILITAN" },
    { en: "INVESTMENT SECTOR", id: "INVESTASI" },
    { en: "LABOR SECTOR", id: "KETENAGAKERJAAN" },
    {
      en: "PROPERTY & INFRASTRUCTURE",
      id: "PROPERTI & INFRASTRUKTUR",
    },
    { en: "TAX", id: "PAJAK" },
    { en: "FAMILY & PRIVATE", id: "KELUARGA & PRIVAT" },
    { en: "ISLAMIC FINANCE", id: "KEUANGAN SYARIAH" },
    {
      en: "TECHNOLOGY & COMMUNICATIONS",
      id: "TEKNOLOGI & KOMUNIKASI",
    },
  ];

  const taxServices = [
    { en: "TAX CONSULTATION", id: "KONSULTASI PAJAK" },
    {
      en: "ANNUAL TAX REPORTING",
      id: "PELAPORAN PAJAK TAHUNAN",
    },
    {
      en: "MONTHLY TAX REPORTING",
      id: "PELAPORAN PAJAK BULANAN",
    },
    {
      en: "TAX AUDIT SUPPORT",
      id: "DUKUNGAN AUDIT PAJAK",
    },
    {
      en: "TAX DISPUTE RESOLUTION",
      id: "PENYELESAIAN SENGKETA PAJAK",
    },
    {
      en: "TAX COMPLIANCE REVIEW",
      id: "REVIEW KEPATUHAN PAJAK",
    },
    {
      en: "TAX PLANNING STRATEGY",
      id: "STRATEGI PERENCANAAN PAJAK",
    },
    {
      en: "ACCOUNTING & ADMINISTRATION",
      id: "AKUNTANSI & ADMINISTRASI",
    },
  ];

  const caseStudies = [
    {
      number: "01",
      category: {
        en: "CORPORATE / M&A",
        id: "KORPORASI / M&A",
      },
      title: {
        en: "Cross-Border Acquisition Structuring",
        id: "Struktur Akuisisi Lintas Negara",
      },
      desc: {
        en: "Handled multi-jurisdiction M&A with regulatory optimization strategy.",
        id: "Menangani M&A multi-negara dengan strategi optimasi regulasi.",
      },
    },

    {
      number: "02",
      category: {
        en: "TAX / DISPUTE",
        id: "PAJAK / SENGKETA",
      },
      title: {
        en: "Tax Dispute Resolution",
        id: "Penyelesaian Sengketa Pajak",
      },
      desc: {
        en: "Resolved corporate tax dispute with full compliance restoration.",
        id: "Menyelesaikan sengketa pajak dengan pemulihan kepatuhan penuh.",
      },
    },

    {
      number: "03",
      category: {
        en: "CORPORATE / ADVISORY",
        id: "KORPORASI / ADVISORY",
      },
      title: {
        en: "Corporate Restructuring Advisory",
        id: "Konsultasi Restrukturisasi Korporasi",
      },
      desc: {
        en: "Rebuilt corporate structure for financial efficiency & legal safety.",
        id: "Membangun ulang struktur perusahaan untuk efisiensi dan keamanan hukum.",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navbar />

      {/* =========================================================
          LANGUAGE SWITCHER
      ========================================================= */}
      <div className="fixed top-20 right-5 z-[999]">
        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="
            group flex items-center gap-2
            rounded-full
            border border-white/10
            bg-[#0B1220]/90
            px-4 py-2
            text-[10px]
            font-semibold
            tracking-[0.2em]
            text-white
            shadow-xl
            backdrop-blur-xl
            transition-all duration-300
            hover:border-white/30
            hover:bg-[#111B30]
          "
        >
          <span
            className="
              flex h-5 w-5 items-center justify-center
              rounded-full
              bg-white/10
              text-[9px]
              transition
              group-hover:bg-white/20
            "
          >
            {lang === "en" ? "EN" : "ID"}
          </span>

          <span className="text-white/60">
            {lang === "en" ? "ID" : "EN"}
          </span>
        </button>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B1220] text-white">

        {/* Decorative glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

        <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 md:px-10 md:pb-36 md:pt-40">

          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-blue-400/60" />

              <p className="text-[10px] font-semibold tracking-[0.35em] text-blue-300/80">
                {t.heroEyebrow[lang]}
              </p>

              <span className="h-px w-10 bg-blue-400/60" />
            </div>

            <h1
              className="
                text-4xl
                font-light
                leading-[1.05]
                tracking-[-0.04em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              {t.heroTitle[lang]}
            </h1>

            <div className="mx-auto mt-8 h-px w-16 bg-blue-400/70" />

            <h2
              className="
                mt-8
                text-2xl
                font-light
                tracking-[-0.02em]
                text-white/90
                sm:text-3xl
                md:text-4xl
              "
            >
              Zaky Zhafran & Partners
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-white/55
                md:text-base
              "
            >
              {t.heroDesc[lang]}
            </p>

            <a
              href="#practice"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.05]
                px-6
                py-3
                text-xs
                font-medium
                tracking-[0.12em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-300/50
                hover:bg-white/10
              "
            >
              {t.explore[lang]}

              <span className="text-blue-300">↓</span>
            </a>
          </div>

          {/* Hero bottom line */}
          <div className="mt-20 border-t border-white/10 pt-6">
            <div className="grid gap-5 text-center sm:grid-cols-3 sm:text-left">

              <div>
                <p className="text-[10px] tracking-[0.25em] text-white/30">
                  APPROACH
                </p>
                <p className="mt-2 text-xs text-white/70">
                  Precision & Strategy
                </p>
              </div>

              <div className="sm:border-l sm:border-white/10 sm:pl-6">
                <p className="text-[10px] tracking-[0.25em] text-white/30">
                  FOCUS
                </p>
                <p className="mt-2 text-xs text-white/70">
                  Legal & Tax Advisory
                </p>
              </div>

              <div className="sm:border-l sm:border-white/10 sm:pl-6">
                <p className="text-[10px] tracking-[0.25em] text-white/30">
                  CLIENTS
                </p>
                <p className="mt-2 text-xs text-white/70">
                  Corporations & Institutions
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRACTICE AREAS
      ========================================================= */}
      <section
        id="practice"
        className="bg-[#F6F7FB] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">

            {/* Heading */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-blue-600">
                {t.practiceLabel[lang]}
              </p>

              <h2
                className="
                  mt-5
                  max-w-md
                  text-3xl
                  font-light
                  leading-tight
                  tracking-[-0.035em]
                  text-[#0B1220]
                  md:text-4xl
                "
              >
                {t.practiceTitle[lang]}
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                {t.practiceDesc[lang]}
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-4">
              {practiceAreas.map((area) => (
                <div
                  key={area.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-[0_20px_60px_rgba(11,18,32,0.08)]
                    md:p-8
                  "
                >
                  <div className="flex gap-5">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0B1220]
                        text-[10px]
                        font-semibold
                        tracking-widest
                        text-white
                        transition
                        group-hover:bg-blue-600
                      "
                    >
                      {area.number}
                    </div>

                    <div className="flex-1">

                      <h3
                        className="
                          text-sm
                          font-semibold
                          tracking-[0.08em]
                          text-[#0B1220]
                          md:text-base
                        "
                      >
                        {area.title[lang]}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-500">
                        {area.desc[lang]}
                      </p>

                      <div className="mt-5 grid gap-2">
                        {area.problems[lang].map((problem, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 text-xs leading-5 text-gray-600"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                            <span>{problem}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>

                  <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-blue-500/[0.04] transition duration-500 group-hover:bg-blue-500/[0.08]" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CASE STUDIES
      ========================================================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="mb-14 max-w-2xl">
            <p className="text-[10px] font-semibold tracking-[0.3em] text-blue-600">
              {t.casesLabel[lang]}
            </p>

            <h2
              className="
                mt-5
                text-3xl
                font-light
                leading-tight
                tracking-[-0.035em]
                text-[#0B1220]
                md:text-4xl
              "
            >
              {t.casesTitle[lang]}
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              {t.casesDesc[lang]}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-3">

            {caseStudies.map((item) => (
              <article
                key={item.number}
                className="
                  group
                  relative
                  bg-[#F6F7FB]
                  p-7
                  transition-all
                  duration-500
                  hover:bg-[#0B1220]
                  md:p-9
                "
              >

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.2em]
                      text-blue-600
                      transition
                      group-hover:text-blue-300
                    "
                  >
                    {item.number}
                  </span>

                  <span
                    className="
                      text-[9px]
                      tracking-[0.18em]
                      text-gray-400
                      transition
                      group-hover:text-white/40
                    "
                  >
                    {item.category[lang]}
                  </span>
                </div>

                <h3
                  className="
                    mt-14
                    min-h-[72px]
                    text-lg
                    font-light
                    leading-6
                    tracking-[-0.02em]
                    text-[#0B1220]
                    transition
                    group-hover:text-white
                  "
                >
                  {item.title[lang]}
                </h3>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-gray-500
                    transition
                    group-hover:text-white/50
                  "
                >
                  {item.desc[lang]}
                </p>

                <div
                  className="
                    mt-8
                    h-px
                    w-10
                    bg-gray-300
                    transition-all
                    duration-500
                    group-hover:w-16
                    group-hover:bg-blue-400
                  "
                />

                <p
                  className="
                    mt-4
                    text-[9px]
                    tracking-[0.2em]
                    text-gray-400
                    transition
                    group-hover:text-white/30
                  "
                >
                  {t.matter[lang]}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL SERVICES
      ========================================================= */}
      <section className="bg-[#F6F7FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-blue-600">
                {t.legalLabel[lang]}
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-light
                  leading-tight
                  tracking-[-0.035em]
                  text-[#0B1220]
                  md:text-4xl
                "
              >
                {t.legalTitle[lang]}
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                {t.legalDesc[lang]}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {legalServices.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    min-h-[72px]
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-[#0B1220]
                    hover:bg-[#0B1220]
                  "
                >
                  <span
                    className="
                      max-w-[85%]
                      text-xs
                      font-medium
                      tracking-[0.06em]
                      text-gray-700
                      transition
                      group-hover:text-white
                    "
                  >
                    {item[lang]}
                  </span>

                  <span
                    className="
                      text-gray-300
                      transition
                      group-hover:translate-x-1
                      group-hover:text-blue-300
                    "
                  >
                    →
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TAX SERVICES
      ========================================================= */}
      <section className="bg-[#0B1220] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-blue-300">
                {t.taxLabel[lang]}
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-light
                  leading-tight
                  tracking-[-0.035em]
                  md:text-4xl
                "
              >
                {t.taxTitle[lang]}
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                {t.taxDesc[lang]}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {taxServices.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    min-h-[72px]
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-blue-300/30
                    hover:bg-white/[0.07]
                  "
                >
                  <span className="max-w-[85%] text-xs font-medium tracking-[0.06em] text-white/70 transition group-hover:text-white">
                    {item[lang]}
                  </span>

                  <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-blue-300">
                    →
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA + FOOTER
      ========================================================= */}
      <div className="bg-[#0B1220]">

        <section className="relative overflow-hidden border-t border-white/10 py-24 text-center md:py-32">

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="relative mx-auto max-w-3xl px-6">

            <p className="text-[10px] font-semibold tracking-[0.3em] text-blue-300">
              {t.ctaEyebrow[lang]}
            </p>

            <h2
              className="
                mt-5
                text-3xl
                font-light
                tracking-[-0.035em]
                text-white
                md:text-5xl
              "
            >
              {t.ctaTitle[lang]}
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">
              {t.ctaDesc[lang]}
            </p>

            <a
              href="https://wa.me/6282242887887?text=Hello%20Zaky%20Zhafran%20%26%20Partners%2C%20I%20would%20like%20to%20consult%20with%20your%20team."
              target="_blank"
              rel="noreferrer"
              className="
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-3.5
                text-xs
                font-semibold
                tracking-[0.08em]
                text-[#0B1220]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-50
                hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]
              "
            >
              {t.ctaBtn[lang]}

              <span>↗</span>
            </a>

          </div>
        </section>

        <Footer />

      </div>
    </div>
  );
}