import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import fotocg from "../assets/ClarteGagah.png";
import fotodnr from "../assets/Dimas_Nugraha_Riyadi.jpeg";
import fotoda from "../assets/Dina_Aisyah.png";
import fotodi from "../assets/Dini_Inasyah.png";
import fotota from "../assets/Tsabbit_Aqdamana.png";
import fotozk from "../assets/ZakyZhafran.jpeg";

export default function LawyersPage() {
  const [lang, setLang] = useState("en");

  const lawyers = [
    {
      id: "zaky",
      name: "Zaky Zhafran King Mada, S.H., M.H.",
      role: {
        en: "Managing Partner",
        id: "Managing Partner",
      },
      focus: {
        en: "Corporate Law • Litigation • Legal Strategy",
        id: "Hukum Korporasi • Litigasi • Strategi Hukum",
      },
      description: {
        en: "Leads the firm with a focus on corporate legal strategy, dispute resolution, regulatory matters, and comprehensive legal advisory for businesses.",
        id: "Memimpin firma dengan fokus pada strategi hukum korporasi, penyelesaian sengketa, regulasi, serta konsultasi hukum komprehensif bagi dunia usaha.",
      },
      education: {
        en: "UII — Bachelor of Law • UI — Master of Law",
        id: "UII — Sarjana Hukum • UI — Magister Hukum",
      },
      image: fotozk,
    },

    {
      id: "dimas",
      name: "Dimas Nugraha Riyadi, S.H., M.H.",
      role: {
        en: "Partner",
        id: "Partner",
      },
      focus: {
        en: "Corporate • Banking & Finance • Commercial Law",
        id: "Korporasi • Perbankan & Keuangan • Hukum Komersial",
      },
      description: {
        en: "Advises companies and financial institutions on corporate transactions, commercial arrangements, banking matters, and regulatory compliance.",
        id: "Memberikan konsultasi kepada perusahaan dan institusi keuangan terkait transaksi korporasi, perjanjian komersial, perbankan, serta kepatuhan regulasi.",
      },
      education: {
        en: "UII — Bachelor of Law • UI — Master of Law",
        id: "UII — Sarjana Hukum • UI — Magister Hukum",
      },
      image: fotodnr,
    },

    {
      id: "dini",
      name: "Dini Inasyah Alfaridah, S.H., M.H.",
      role: {
        en: "Partner",
        id: "Partner",
      },
      focus: {
        en: "Civil Law • Regulatory Compliance • Sharia Law",
        id: "Hukum Perdata • Kepatuhan Regulasi • Hukum Syariah",
      },
      description: {
        en: "Focuses on civil law, regulatory compliance, legal governance, sharia contracts, corporate compliance, and administrative law matters.",
        id: "Berfokus pada hukum perdata, kepatuhan regulasi, tata kelola hukum, kontrak syariah, kepatuhan korporasi, serta persoalan hukum administrasi negara.",
      },
      education: {
        en: "UIN Sunan Gunung Djati — Bachelor of Law • UIN — Master of Law",
        id: "UIN Sunan Gunung Djati — Sarjana Hukum • UIN — Magister Hukum",
      },
      image: fotodi,
    },

    {
      id: "dina",
      name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
      role: {
        en: "Partner",
        id: "Partner",
      },
      focus: {
        en: "Property • Land Law • Contracts",
        id: "Properti • Hukum Pertanahan • Kontrak",
      },
      description: {
        en: "Handles land and property matters, contractual arrangements, property transactions, due diligence, licensing, and related legal documentation.",
        id: "Menangani persoalan pertanahan dan properti, perjanjian, transaksi properti, due diligence, perizinan, serta dokumentasi hukum terkait.",
      },
      education: {
        en: "UNPAD — Bachelor of Law • YARSI — Master of Notarial Law",
        id: "UNPAD — Sarjana Hukum • YARSI — Magister Kenotariatan",
      },
      image: fotoda,
    },

    {
      id: "tsabbit",
      name: "Tsabbit Aqdamana, S.H., M.H.",
      role: {
        en: "Partner",
        id: "Partner",
      },
      focus: {
        en: "Legal Drafting • Administrative Law • Litigation",
        id: "Legal Drafting • Hukum Administrasi • Litigasi",
      },
      description: {
        en: "Provides legal drafting, startup advisory, administrative law assistance, and representation in administrative and constitutional disputes.",
        id: "Menangani legal drafting, konsultasi startup, hukum administrasi negara, serta pendampingan dalam sengketa administrasi dan konstitusional.",
      },
      education: {
        en: "UII — Bachelor of Law • UII — Master of Law",
        id: "UII — Sarjana Hukum • UII — Magister Hukum",
      },
      image: fotota,
    },

    {
      id: "clarte",
      name: "Clarte Gagah, S.H.",
      role: {
        en: "Partner",
        id: "Partner",
      },
      focus: {
        en: "Litigation • Dispute Resolution • Legal Advisory",
        id: "Litigasi • Penyelesaian Sengketa • Konsultasi Hukum",
      },
      description: {
        en: "Works across litigation and dispute resolution matters, providing strategic legal representation and practical advisory for clients.",
        id: "Berfokus pada litigasi dan penyelesaian sengketa dengan memberikan pendampingan hukum strategis serta konsultasi praktis bagi klien.",
      },
      education: {
        en: "UII — Bachelor of Law",
        id: "UII — Sarjana Hukum",
      },
      image: fotocg,
    },
  ];

  const content = {
    heroEyebrow: {
      en: "OUR LAWYERS",
      id: "TIM PENGACARA KAMI",
    },

    heroTitle1: {
      en: "People behind",
      id: "Profesional di balik",
    },

    heroTitle2: {
      en: "the strategy.",
      id: "setiap strategi.",
    },

    heroDescription: {
      en: "A multidisciplinary team combining legal knowledge, strategic thinking, and practical experience to protect our clients' interests.",
      id: "Tim multidisipliner yang menggabungkan pengetahuan hukum, pemikiran strategis, dan pengalaman praktis untuk melindungi kepentingan klien.",
    },

    response: {
      en: "Expertise",
      id: "Keahlian",
    },

    responseValue: {
      en: "Multi-disciplinary",
      id: "Multidisipliner",
    },

    consultation: {
      en: "Approach",
      id: "Pendekatan",
    },

    consultationValue: {
      en: "Strategic & Practical",
      id: "Strategis & Praktis",
    },

    coverage: {
      en: "Coverage",
      id: "Cakupan",
    },

    coverageValue: {
      en: "Legal & Tax",
      id: "Hukum & Pajak",
    },

    sectionEyebrow: {
      en: "OUR TEAM",
      id: "TIM KAMI",
    },

    sectionTitle: {
      en: "Legal minds. Business perspective.",
      id: "Keahlian hukum. Perspektif bisnis.",
    },

    sectionDescription: {
      en: "Our lawyers work collaboratively across practice areas to provide clear, commercially aware, and solution-oriented legal advice.",
      id: "Para pengacara kami bekerja secara kolaboratif lintas bidang untuk memberikan solusi hukum yang jelas, memahami kebutuhan bisnis, dan berorientasi pada penyelesaian masalah.",
    },

    profile: {
      en: "View Profile",
      id: "Lihat Profil",
    },

    education: {
      en: "Education",
      id: "Pendidikan",
    },

    ctaEyebrow: {
      en: "WORK WITH OUR TEAM",
      id: "BEKERJA BERSAMA TIM KAMI",
    },

    ctaTitle: {
      en: "The right legal advice starts with the right conversation.",
      id: "Nasihat hukum yang tepat dimulai dari percakapan yang tepat.",
    },

    ctaDescription: {
      en: "Discuss your legal, corporate, or tax requirements directly with our team through WhatsApp.",
      id: "Diskusikan kebutuhan hukum, korporasi, atau perpajakan Anda secara langsung bersama tim kami melalui WhatsApp.",
    },

    ctaButton: {
      en: "Start a Consultation",
      id: "Mulai Konsultasi",
    },
  };

  const t = (key) => content[key][lang];

  const whatsappMessage =
    lang === "en"
      ? "Hello Zaky Zhafran And Partners, I would like to consult with your legal team."
      : "Halo Zaky Zhafran And Partners, saya ingin berkonsultasi dengan tim hukum.";

  const whatsappLink = `https://wa.me/6282242887887?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* =========================================================
          LANGUAGE SWITCHER
      ========================================================== */}
      <div className="fixed top-20 right-5 z-[999]">
        <div className="flex items-center rounded-full border border-white/10 bg-[#0B1220]/90 p-1 shadow-xl backdrop-blur-md">
          <button
            onClick={() => setLang("en")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "en"
                ? "bg-white text-[#0B1220]"
                : "text-white/60 hover:text-white"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("id")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "id"
                ? "bg-white text-[#0B1220]"
                : "text-white/60 hover:text-white"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0B1220] text-white">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-24 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[12%] top-[25%] h-40 w-40 rounded-full border border-white/5" />

        <div className="pointer-events-none absolute right-[14%] top-[29%] h-24 w-24 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44 lg:px-12">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-blue-400" />

              <p className="text-[11px] font-semibold tracking-[0.32em] text-blue-300">
                {t("heroEyebrow")}
              </p>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">
              {t("heroTitle1")}
              <br />

              <span className="text-white/40">{t("heroTitle2")}</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              {t("heroDescription")}
            </p>
          </div>

          {/* Hero metadata */}
          <div className="mt-16 grid max-w-4xl grid-cols-1 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                {t("response")}
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {t("responseValue")}
              </p>
            </div>

            <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                {t("consultation")}
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {t("consultationValue")}
              </p>
            </div>

            <div className="pt-6 sm:px-8 sm:pt-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                {t("coverage")}
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {t("coverageValue")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LAWYERS SECTION
      ========================================================== */}
      <section className="bg-[#F6F7FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          {/* Section heading */}
          <div className="mb-16 max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#0B1220]" />

              <p className="text-[11px] font-semibold tracking-[0.3em] text-gray-500">
                {t("sectionEyebrow")}
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1220] md:text-5xl lg:text-6xl">
              {t("sectionTitle")}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
              {t("sectionDescription")}
            </p>
          </div>

          {/* =====================================================
              LAWYER GRID
          ====================================================== */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {lawyers.map((lawyer, index) => (
              <article
                key={lawyer.id}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gray-300 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/4.3] overflow-hidden bg-gray-100">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="h-full w-full object-cover object-top grayscale-[10%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent opacity-80" />

                  {/* Number */}
                  <div className="absolute left-6 top-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0B1220]/50 text-xs font-semibold text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Role */}
                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {lawyer.role[lang]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1220]">
                    {lawyer.name}
                  </h3>

                  <p className="mt-4 text-[11px] font-semibold uppercase leading-5 tracking-[0.14em] text-blue-600">
                    {lawyer.focus[lang]}
                  </p>

                  <p className="mt-5 min-h-[120px] text-sm leading-7 text-gray-500">
                    {lawyer.description[lang]}
                  </p>

                  {/* Education */}
                  <div className="mt-7 border-t border-gray-200 pt-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      {t("education")}
                    </p>

                    <p className="mt-2 text-xs leading-6 text-gray-600">
                      {lawyer.education[lang]}
                    </p>
                  </div>

                  {/* Profile link */}
                  <Link
                    to={`/profile/${lawyer.id}`}
                    className="mt-7 flex items-center justify-between border-t border-gray-200 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B1220] transition hover:text-blue-600"
                  >
                    <span>{t("profile")}</span>

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DARK CTA + FOOTER
      ========================================================== */}
      <div className="bg-[#0B1220]">
        <section className="relative overflow-hidden py-24 text-white md:py-32">
          {/* Glow */}
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
              <div className="max-w-4xl">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-blue-400" />

                  <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-300">
                    {t("ctaEyebrow")}
                  </p>
                </div>

                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                  {t("ctaTitle")}
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                  {t("ctaDescription")}
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                <span>{t("ctaButton")}</span>

                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}