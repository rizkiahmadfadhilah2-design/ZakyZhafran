import Navbar from "../layout/Navbar";
import ScrollReveal from "../ui/ScrollReveal";

const services = [
  {
    category: {
      en: "CORPORATE LAW",
      id: "HUKUM KORPORASI",
    },
    intro: {
      en: "Legal foundations for companies, transactions, governance, and business continuity.",
      id: "Fondasi hukum untuk perusahaan, transaksi, tata kelola, dan keberlangsungan bisnis.",
    },
    items: [
      {
        icon: "🏢",
        title: {
          en: "CORPORATE LAW",
          id: "HUKUM KORPORASI",
        },
        desc: {
          en: "Legal structuring and governance for business entities.",
          id: "Struktur dan tata kelola hukum perusahaan.",
        },
      },
      {
        icon: "🏦",
        title: {
          en: "BANKING AND FINANCE",
          id: "PERBANKAN DAN KEUANGAN",
        },
        desc: {
          en: "Regulatory and financial legal advisory for the banking sector.",
          id: "Konsultasi hukum sektor perbankan dan keuangan.",
        },
      },
      {
        icon: "👷",
        title: {
          en: "LABOR LAW",
          id: "HUKUM KETENAGAKERJAAN",
        },
        desc: {
          en: "Employment regulation and workforce dispute handling.",
          id: "Pengaturan ketenagakerjaan dan penyelesaian sengketa kerja.",
        },
      },
      {
        icon: "📉",
        title: {
          en: "BANKRUPTCY AND RESTRUCTURING",
          id: "KEPAILITAN DAN RESTRUKTURISASI",
        },
        desc: {
          en: "Corporate restructuring and insolvency legal solutions.",
          id: "Restrukturisasi perusahaan dan kepailitan.",
        },
      },
    ],
  },

  {
    category: {
      en: "LITIGATION & PROPERTY",
      id: "LITIGASI & PROPERTI",
    },
    intro: {
      en: "Representation and legal support for disputes, property, infrastructure, and criminal matters.",
      id: "Pendampingan dan representasi hukum untuk sengketa, properti, infrastruktur, dan perkara pidana.",
    },
    items: [
      {
        icon: "⚖️",
        title: {
          en: "LITIGATION",
          id: "LITIGASI",
        },
        desc: {
          en: "Court representation and dispute resolution strategy.",
          id: "Representasi pengadilan dan penyelesaian sengketa.",
        },
      },
      {
        icon: "🏗️",
        title: {
          en: "PROPERTY AND INFRASTRUCTURE",
          id: "PROPERTI DAN INFRASTRUKTUR",
        },
        desc: {
          en: "Legal handling of real estate and infrastructure projects.",
          id: "Penanganan hukum properti dan proyek infrastruktur.",
        },
      },
      {
        icon: "⚔️",
        title: {
          en: "CRIMINAL LAW",
          id: "HUKUM PIDANA",
        },
        desc: {
          en: "Criminal case assistance and legal defense.",
          id: "Pendampingan dan pembelaan perkara pidana.",
        },
      },
    ],
  },

  {
    category: {
      en: "TAX ADVISORY",
      id: "KONSULTASI PAJAK",
    },
    intro: {
      en: "Practical tax strategies designed to strengthen compliance and improve business efficiency.",
      id: "Strategi perpajakan praktis untuk memperkuat kepatuhan dan meningkatkan efisiensi bisnis.",
    },
    items: [
      {
        icon: "📊",
        title: {
          en: "TAX PLANNING",
          id: "PERENCANAAN PAJAK",
        },
        desc: {
          en: "Optimizing tax strategy legally for business efficiency.",
          id: "Strategi pajak legal untuk efisiensi bisnis.",
        },
      },
      {
        icon: "💰",
        title: {
          en: "TAX COMPLIANCE",
          id: "KEPATUHAN PAJAK",
        },
        desc: {
          en: "Ensuring full compliance with tax regulations.",
          id: "Memastikan kepatuhan penuh terhadap regulasi pajak.",
        },
      },
      {
        icon: "🧾",
        title: {
          en: "ANNUAL TAX RETURN",
          id: "LAPORAN SPT TAHUNAN",
        },
        desc: {
          en: "Preparation and filing of annual tax reports.",
          id: "Penyusunan dan pelaporan SPT tahunan.",
        },
      },
    ],
  },

  {
    category: {
      en: "SPECIALIZED PRACTICE",
      id: "PRAKTIK KHUSUS",
    },
    intro: {
      en: "Focused advisory services for specific corporate, legal, and tax requirements.",
      id: "Layanan konsultasi khusus untuk kebutuhan korporasi, hukum, dan perpajakan tertentu.",
    },
    items: [
      {
        icon: "🏛️",
        title: {
          en: "CORPORATE ADVISORY",
          id: "KONSULTASI KORPORASI",
        },
        desc: {
          en: "Strategic corporate legal consultation.",
          id: "Konsultasi hukum korporasi strategis.",
        },
      },
      {
        icon: "🛡️",
        title: {
          en: "TAX ADVISORY",
          id: "KONSULTASI PAJAK",
        },
        desc: {
          en: "Ensuring business tax compliance structure.",
          id: "Struktur kepatuhan pajak perusahaan.",
        },
      },
    ],
  },
];

export default function ServicesPage({ lang }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F6EF] text-[#16251F]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923] py-24 text-white md:py-32">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-16 top-20 h-[320px] w-[320px] rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute -right-4 top-36 h-[220px] w-[220px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-[320px] w-[320px] rounded-full bg-[#C45A70]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#E1A7B1]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E1A7B1]">
                  {lang === "en"
                    ? "03 / OUR SERVICES"
                    : "03 / LAYANAN KAMI"}
                </p>
              </div>

              {/* Heading */}
              <h1
                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-light
                  uppercase
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                {lang === "en"
                  ? "LEGAL EXPERTISE SHAPED AROUND YOUR BUSINESS."
                  : "KEAHLIAN HUKUM YANG DIRANCANG UNTUK KEBUTUHAN BISNIS ANDA."}
              </h1>

              {/* Divider */}
              <div className="mt-7 h-px w-14 bg-[#C45A70]" />

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-6
                  tracking-[0.02em]
                  text-white/60
                  md:text-base
                  md:leading-7
                "
              >
                {lang === "en"
                  ? "Comprehensive legal and tax solutions tailored to support your business growth, protect your interests, and help you navigate complex regulatory environments with confidence."
                  : "Solusi hukum dan pajak yang komprehensif untuk mendukung pertumbuhan bisnis, melindungi kepentingan Anda, dan membantu menghadapi lingkungan regulasi yang kompleks dengan penuh keyakinan."}
              </p>
            </div>
          </ScrollReveal>

          {/* Metadata */}
          <ScrollReveal delay={0.15}>
            <div
              className="
                mt-12
                flex
                flex-col
                gap-4
                border-t
                border-white/10
                pt-6
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                {lang === "en"
                  ? "LEGAL • TAX • BUSINESS"
                  : "HUKUM • PAJAK • BISNIS"}
              </p>

              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                ZAKY ZHAFRAN & PARTNERS
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          SERVICES CONTENT
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#F8F6EF] py-16 md:py-24">
        {/* Background accent */}
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-40
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#C45A70]/[0.03]
            blur-[110px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            space-y-16
            px-6
            md:space-y-20
            md:px-10
          "
        >
          {services.map((group, groupIndex) => {
            const isTax = group.category.en === "TAX ADVISORY";

            return (
              <div key={groupIndex}>
                {/* =================================================
                    CATEGORY HEADER
                ================================================= */}

                <ScrollReveal>
                  <div
                    className="
                      mb-6
                      flex
                      flex-col
                      gap-4
                      border-b
                      border-[#16251F]/10
                      pb-5
                      lg:flex-row
                      lg:items-end
                      lg:justify-between
                      lg:gap-10
                    "
                  >
                    {/* Category */}
                    <div className="flex items-start gap-4">
                      <span
                        className="
                          pt-1
                          text-[9px]
                          font-semibold
                          tracking-[0.25em]
                          text-[#B8B5AC]
                        "
                      >
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="h-px w-7 bg-[#A92F46]" />

                          <p
                            className="
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.28em]
                              text-[#A92F46]
                            "
                          >
                            {lang === "en"
                              ? "PRACTICE AREA"
                              : "BIDANG PRAKTIK"}
                          </p>
                        </div>

                        <h2
                          className="
                            mt-2
                            text-xl
                            font-light
                            uppercase
                            leading-tight
                            tracking-[-0.03em]
                            text-[#0B4F32]
                            md:text-2xl
                          "
                        >
                          {group.category[lang]}
                        </h2>
                      </div>
                    </div>

                    {/* Intro */}
                    <p
                      className="
                        max-w-2xl
                        text-xs
                        leading-6
                        tracking-[0.01em]
                        text-[#68736D]
                        lg:max-w-lg
                      "
                    >
                      {group.intro[lang]}
                    </p>
                  </div>
                </ScrollReveal>

                {/* =================================================
                    COMPACT SERVICE LIST
                ================================================= */}

                <div
                  className={`
                    grid
                    gap-3
                    ${
                      group.items.length === 4
                        ? "md:grid-cols-2"
                        : group.items.length === 3
                        ? "md:grid-cols-3"
                        : "md:grid-cols-2"
                    }
                  `}
                >
                  {group.items.map((item, itemIndex) => (
                    <ScrollReveal
                      key={itemIndex}
                      delay={itemIndex * 0.05}
                    >
                      <div
                        className={`
                          group
                          relative
                          h-full
                          overflow-hidden
                          border
                          px-4
                          py-4
                          transition-all
                          duration-300
                          md:px-5
                          md:py-5
                          ${
                            isTax
                              ? "border-[#0B4F32]/10 bg-[#0B4F32] text-white hover:border-[#541522]/50"
                              : "border-[#D9D7CF] bg-white hover:border-[#A92F46]/30 hover:bg-[#FFFDF8]"
                          }
                        `}
                      >
                        {/* Hover line */}
                        <div
                          className="
                            absolute
                            left-0
                            top-0
                            h-px
                            w-0
                            bg-[#A92F46]
                            transition-all
                            duration-500
                            group-hover:w-full
                          "
                        />

                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <span
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              border
                              text-sm
                              ${
                                isTax
                                  ? "border-white/10 bg-white/[0.04]"
                                  : "border-[#DDDAD0] bg-[#F8F6EF]"
                              }
                            `}
                          >
                            {item.icon}
                          </span>

                          {/* Content */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <h3
                                className={`
                                  text-sm
                                  font-medium
                                  uppercase
                                  leading-5
                                  tracking-[0.01em]
                                  ${
                                    isTax
                                      ? "text-white"
                                      : "text-[#0B4F32]"
                                  }
                                `}
                              >
                                {item.title[lang]}
                              </h3>

                              <span
                                className={`
                                  shrink-0
                                  pt-0.5
                                  text-[8px]
                                  font-semibold
                                  tracking-[0.18em]
                                  ${
                                    isTax
                                      ? "text-white/20"
                                      : "text-[#B8B5AC]"
                                  }
                                `}
                              >
                                {String(itemIndex + 1).padStart(2, "0")}
                              </span>
                            </div>

                            {/* Divider */}
                            <div
                              className={`
                                mt-2
                                h-px
                                w-6
                                transition-all
                                duration-300
                                group-hover:w-10
                                ${
                                  isTax
                                    ? "bg-[#541522]"
                                    : "bg-[#A92F46]"
                                }
                              `}
                            />

                            {/* Description */}
                            <p
                              className={`
                                mt-2
                                text-xs
                                leading-5
                                ${
                                  isTax
                                    ? "text-white/45"
                                    : "text-[#68736D]"
                                }
                              `}
                            >
                              {item.desc[lang]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          BOTTOM STATEMENT
      ========================================================= */}

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div
              className="
                grid
                gap-6
                border-t
                border-[#D9D7CF]
                pt-8
                lg:grid-cols-[1fr_auto]
                lg:items-center
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#A92F46]" />

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-[#A92F46]
                    "
                  >
                    {lang === "en"
                      ? "OUR APPROACH"
                      : "PENDEKATAN KAMI"}
                  </p>
                </div>

                <h2
                  className="
                    mt-4
                    max-w-3xl
                    text-xl
                    font-light
                    uppercase
                    leading-tight
                    tracking-[-0.035em]
                    text-[#0B4F32]
                    md:text-3xl
                  "
                >
                  {lang === "en"
                    ? "PRACTICAL ADVICE. STRATEGIC THINKING. LONG-TERM PROTECTION."
                    : "NASIHAT PRAKTIS. PEMIKIRAN STRATEGIS. PERLINDUNGAN JANGKA PANJANG."}
                </h2>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-xs
                    leading-6
                    tracking-[0.01em]
                    text-[#68736D]
                    md:text-sm
                    md:leading-7
                  "
                >
                  {lang === "en"
                    ? "Our services are designed to help clients make informed decisions, manage legal and tax risks, and move forward with greater confidence."
                    : "Layanan kami dirancang untuk membantu klien mengambil keputusan yang tepat, mengelola risiko hukum dan pajak, serta bergerak maju dengan keyakinan yang lebih besar."}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#A92F46]" />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#AAA79E]
                  "
                >
                  ZAKY ZHAFRAN & PARTNERS
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}