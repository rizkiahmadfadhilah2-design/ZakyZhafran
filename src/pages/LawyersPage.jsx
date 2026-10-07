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

  // =========================================================
  // LAWYERS DATA
  // =========================================================

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

  // =========================================================
  // CONTENT
  // =========================================================

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

  // =========================================================
  // WHATSAPP
  // =========================================================

  const whatsappMessage =
    lang === "en"
      ? "Hello Zaky Zhafran And Partners, I would like to consult with your legal team."
      : "Halo Zaky Zhafran And Partners, saya ingin berkonsultasi dengan tim hukum.";

  const whatsappLink = `https://wa.me/6282242887887?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F6EF] text-[#16251F]">
      <Navbar />

      {/* =========================================================
          LANGUAGE SWITCHER
      ========================================================== */}

      <div className="fixed right-5 top-[78px] z-[999]">
        <div className="flex items-center rounded-full border border-[#A92F46]/20 bg-[#F8F6EF]/95 p-1 shadow-lg backdrop-blur-md">
          <button
            onClick={() => setLang("en")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "en"
                ? "bg-[#0B4F32] text-white"
                : "text-[#0B4F32]/55 hover:text-[#A92F46]"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("id")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "id"
                ? "bg-[#0B4F32] text-white"
                : "text-[#0B4F32]/55 hover:text-[#A92F46]"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923] text-white">
        {/* Very subtle background glow */}

        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#A92F46]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D37A8A]/10 blur-3xl" />

        {/* =====================================================
            SIMPLE BOTANICAL LINE ART
        ====================================================== */}

        <div className="pointer-events-none absolute right-[4%] top-[18%] hidden h-[430px] w-[360px] lg:block">
          {/* Main stem */}

          <div className="absolute left-1/2 top-0 h-[390px] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-[#D7A0AD]/30 to-transparent" />

          {/* Leaf 1 */}

          <div className="absolute left-[8%] top-[22%] h-24 w-14 rotate-[-32deg] rounded-[100%_0_100%_0] border border-[#D7A0AD]/30" />

          {/* Leaf 2 */}

          <div className="absolute right-[8%] top-[15%] h-28 w-16 rotate-[28deg] rounded-[100%_0_100%_0] border border-[#A92F46]/30" />

          {/* Leaf 3 */}

          <div className="absolute left-[28%] top-[45%] h-28 w-16 rotate-[25deg] rounded-[100%_0_100%_0] border border-[#A92F46]/25" />

          {/* Leaf 4 */}

          <div className="absolute right-[12%] top-[55%] h-24 w-14 rotate-[-30deg] rounded-[100%_0_100%_0] border border-[#D7A0AD]/25" />

          {/* Fine horizontal detail */}

          <div className="absolute bottom-[9%] left-[2%] h-px w-20 bg-[#D7A0AD]/20" />

          <div className="absolute bottom-[9%] right-[2%] h-px w-20 bg-[#A92F46]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10 md:pb-28 md:pt-44 lg:px-12">
          {/* Hero content */}

          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#D37A8A]" />

              <p className="text-[11px] font-semibold tracking-[0.32em] text-[#E1A7B1]">
                {t("heroEyebrow")}
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[86px]">
              {t("heroTitle1")}
              <br />

              <span className="text-[#E1A7B1]">
                {t("heroTitle2")}
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              {t("heroDescription")}
            </p>
          </div>

          {/* =====================================================
              HERO INFORMATION
          ====================================================== */}

          <div className="mt-16 max-w-5xl border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {/* Item 1 */}

              <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                  {t("response")}
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {t("responseValue")}
                </p>
              </div>

              {/* Item 2 */}

              <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:px-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                  {t("consultation")}
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {t("consultationValue")}
                </p>
              </div>

              {/* Item 3 */}

              <div className="py-7 sm:pl-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                  {t("coverage")}
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {t("coverageValue")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LAWYERS SECTION
      ========================================================== */}

      <section className="relative bg-[#F8F6EF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          {/* =====================================================
              SECTION INTRO
          ====================================================== */}

          <div className="mb-16 max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#A92F46]" />

              <p className="text-[11px] font-semibold tracking-[0.3em] text-[#A92F46]">
                {t("sectionEyebrow")}
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B4F32] md:text-5xl lg:text-6xl">
              {t("sectionTitle")}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#16251F]/55 md:text-lg">
              {t("sectionDescription")}
            </p>
          </div>

          {/* =====================================================
              LAWYER GRID
          ====================================================== */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {lawyers.map((lawyer, index) => (
              <article
                key={lawyer.id}
                className="group overflow-hidden border border-[#16251F]/10 bg-white transition duration-500 hover:-translate-y-1 hover:border-[#A92F46]/25 hover:shadow-[0_20px_55px_rgba(11,79,50,0.10)]"
              >
                {/* =================================================
                    PHOTO
                ================================================== */}

                <div className="relative aspect-[4/4.45] overflow-hidden bg-[#E7E5DC]">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="h-full w-full object-cover object-top grayscale-[8%] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"
                  />

                  {/* Image gradient */}

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#073923]/65 to-transparent" />

                  {/* Number */}

                  <div className="absolute left-5 top-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#073923]/50 text-[10px] font-semibold tracking-[0.08em] text-white backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Role */}

                  <div className="absolute bottom-5 left-5">
                    <span className="inline-flex rounded-full border border-white/25 bg-[#073923]/60 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {lawyer.role[lang]}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div className="flex min-h-[430px] flex-col p-7 md:p-8">
                  {/* Name */}

                  <h3 className="text-[23px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#0B4F32]">
                    {lawyer.name}
                  </h3>

                  {/* Focus */}

                  <p className="mt-4 min-h-[42px] text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-[#A92F46]">
                    {lawyer.focus[lang]}
                  </p>

                  {/* Description */}

                  <p className="mt-5 min-h-[126px] text-sm leading-7 text-[#16251F]/55">
                    {lawyer.description[lang]}
                  </p>

                  {/* Education */}

                  <div className="mt-auto border-t border-[#16251F]/10 pt-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#16251F]/35">
                      {t("education")}
                    </p>

                    <p className="mt-2 min-h-[48px] text-xs leading-6 text-[#16251F]/60">
                      {lawyer.education[lang]}
                    </p>
                  </div>

                  {/* Profile */}

                  <Link
                    to={`/profile/${lawyer.id}`}
                    className="mt-6 flex items-center justify-between border-t border-[#16251F]/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B4F32] transition duration-300 hover:text-[#A92F46]"
                  >
                    <span>{t("profile")}</span>

                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
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
          CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#073923] py-24 text-white md:py-32">
        {/* Very subtle accent */}

        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#A92F46]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D37A8A]/8 blur-3xl" />

        {/* Minimal line */}

        <div className="pointer-events-none absolute right-[8%] top-[20%] hidden h-[250px] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-[#D7A0AD]/25 to-transparent lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            {/* Text */}

            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#D37A8A]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-[#E1A7B1]">
                  {t("ctaEyebrow")}
                </p>
              </div>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                {t("ctaTitle")}
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                {t("ctaDescription")}
              </p>
            </div>

            {/* Button */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-4 rounded-full bg-[#F8F6EF] px-7 py-4 text-sm font-semibold text-[#0B4F32] transition duration-300 hover:-translate-y-1 hover:bg-[#A92F46] hover:text-white"
            >
              <span>{t("ctaButton")}</span>

              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <div className="bg-[#073923]">
        <Footer />
      </div>
    </div>
  );
}