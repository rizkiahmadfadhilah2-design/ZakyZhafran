import Navbar from "../layout/Navbar";
import ScrollReveal from "../ui/ScrollReveal";

const services = [
  {
    category: {
      en: "Corporate Law",
      id: "Hukum Korporasi",
    },
    intro: {
      en: "Legal foundations for companies, transactions, governance, and business continuity.",
      id: "Fondasi hukum untuk perusahaan, transaksi, tata kelola, dan keberlangsungan bisnis.",
    },
    items: [
      {
        icon: "🏢",
        title: {
          en: "Corporate Law",
          id: "Hukum Korporasi",
        },
        desc: {
          en: "Legal structuring and governance for business entities.",
          id: "Struktur dan tata kelola hukum perusahaan.",
        },
      },
      {
        icon: "🏦",
        title: {
          en: "Banking and Finance",
          id: "Perbankan dan Keuangan",
        },
        desc: {
          en: "Regulatory and financial legal advisory for banking sector.",
          id: "Konsultasi hukum sektor perbankan dan keuangan.",
        },
      },
      {
        icon: "👷",
        title: {
          en: "Labor Law",
          id: "Hukum Ketenagakerjaan",
        },
        desc: {
          en: "Employment regulation and workforce dispute handling.",
          id: "Pengaturan ketenagakerjaan dan penyelesaian sengketa kerja.",
        },
      },
      {
        icon: "📉",
        title: {
          en: "Bankruptcy and Restructuring",
          id: "Kepailitan dan Restrukturisasi",
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
      en: "Litigation & Property",
      id: "Litigasi & Properti",
    },
    intro: {
      en: "Representation and legal support for disputes, property, infrastructure, and criminal matters.",
      id: "Pendampingan dan representasi hukum untuk sengketa, properti, infrastruktur, dan perkara pidana.",
    },
    items: [
      {
        icon: "⚖️",
        title: {
          en: "Litigation",
          id: "Litigasi",
        },
        desc: {
          en: "Court representation and dispute resolution strategy.",
          id: "Representasi pengadilan dan penyelesaian sengketa.",
        },
      },
      {
        icon: "🏗️",
        title: {
          en: "Property and Infrastructure",
          id: "Properti dan Infrastruktur",
        },
        desc: {
          en: "Legal handling of real estate and infrastructure projects.",
          id: "Penanganan hukum properti dan proyek infrastruktur.",
        },
      },
      {
        icon: "⚔️",
        title: {
          en: "Criminal Law",
          id: "Hukum Pidana",
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
      en: "Tax Advisory",
      id: "Konsultasi Pajak",
    },
    intro: {
      en: "Practical tax strategies designed to strengthen compliance and improve business efficiency.",
      id: "Strategi perpajakan praktis untuk memperkuat kepatuhan dan meningkatkan efisiensi bisnis.",
    },
    items: [
      {
        icon: "📊",
        title: {
          en: "Tax Planning",
          id: "Perencanaan Pajak",
        },
        desc: {
          en: "Optimizing tax strategy legally for efficiency.",
          id: "Strategi pajak legal untuk efisiensi bisnis.",
        },
      },
      {
        icon: "💰",
        title: {
          en: "Tax Compliance",
          id: "Kepatuhan Pajak",
        },
        desc: {
          en: "Ensuring full compliance with tax regulations.",
          id: "Memastikan kepatuhan penuh terhadap regulasi pajak.",
        },
      },
      {
        icon: "🧾",
        title: {
          en: "Annual Tax Return",
          id: "Laporan SPT Tahunan",
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
      en: "Specialized Practice",
      id: "Praktik Khusus",
    },
    intro: {
      en: "Focused advisory services for specific corporate, legal, and tax requirements.",
      id: "Layanan konsultasi khusus untuk kebutuhan korporasi, hukum, dan perpajakan tertentu.",
    },
    items: [
      {
        icon: "🏛️",
        title: {
          en: "Corporate Advisory",
          id: "Konsultasi Korporasi",
        },
        desc: {
          en: "Strategic corporate legal consultation.",
          id: "Konsultasi hukum korporasi strategis.",
        },
      },
      {
        icon: "🛡️",
        title: {
          en: "Tax Advisory",
          id: "Konsultasi Pajak",
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
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* =========================================================
          HERO / PAGE INTRO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0B1220] py-28 text-white md:py-36">
        
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-400/[0.04]
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">

          <ScrollReveal>
            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-blue-400" />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.32em]
                    text-blue-300
                  "
                >
                  {lang === "en"
                    ? "03 / OUR SERVICES"
                    : "03 / LAYANAN KAMI"}
                </p>

              </div>

              {/* Heading */}
              <h1
                className="
                  mt-7
                  max-w-4xl
                  text-4xl
                  font-light
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                {lang === "en"
                  ? "Legal expertise shaped around your business."
                  : "Keahlian hukum yang dirancang untuk kebutuhan bisnis Anda."}
              </h1>

              {/* Divider */}
              <div className="mt-8 h-px w-16 bg-blue-400" />

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/55
                  md:text-base
                  md:leading-8
                "
              >
                {lang === "en"
                  ? "Comprehensive legal and tax solutions tailored to support your business growth, protect your interests, and help you navigate complex regulatory environments with confidence."
                  : "Solusi hukum dan pajak yang komprehensif untuk mendukung pertumbuhan bisnis, melindungi kepentingan Anda, dan membantu menghadapi lingkungan regulasi yang kompleks dengan penuh keyakinan."}
              </p>

            </div>
          </ScrollReveal>

          {/* Bottom metadata */}
          <ScrollReveal delay={0.2}>

            <div
              className="
                mt-16
                flex
                flex-col
                gap-5
                border-t
                border-white/10
                pt-7
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                "
              >
                {lang === "en"
                  ? "LEGAL • TAX • BUSINESS"
                  : "HUKUM • PAJAK • BISNIS"}
              </p>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                "
              >
                Zaky Zhafran & Partners
              </p>

            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* =========================================================
          SERVICES CONTENT
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-24 md:py-32">

        {/* Subtle background */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/[0.025]
            blur-[120px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            space-y-24
            px-6
            md:px-10
            md:space-y-32
          "
        >

          {services.map((group, groupIndex) => {

            const isTax = group.category.en === "Tax Advisory";

            return (
              <div key={groupIndex}>

                {/* =================================================
                    CATEGORY HEADER
                ================================================= */}

                <ScrollReveal>

                  <div
                    className="
                      mb-10
                      grid
                      gap-6
                      lg:grid-cols-[0.8fr_1.2fr]
                      lg:items-end
                      lg:gap-16
                    "
                  >

                    {/* LEFT */}
                    <div className="flex items-start gap-5">

                      <span
                        className="
                          pt-1
                          text-[10px]
                          font-semibold
                          tracking-[0.25em]
                          text-gray-300
                        "
                      >
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <div className="flex items-center gap-3">

                          <span className="h-px w-8 bg-blue-500" />

                          <p
                            className="
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.3em]
                              text-blue-600
                            "
                          >
                            {lang === "en"
                              ? "PRACTICE AREA"
                              : "BIDANG PRAKTIK"}
                          </p>

                        </div>

                        <h2
                          className="
                            mt-4
                            text-2xl
                            font-light
                            leading-tight
                            tracking-[-0.03em]
                            text-[#0B1220]
                            md:text-3xl
                          "
                        >
                          {group.category[lang]}
                        </h2>

                      </div>

                    </div>

                    {/* RIGHT INTRO */}
                    <p
                      className="
                        max-w-xl
                        text-sm
                        leading-7
                        text-gray-500
                        md:text-base
                        md:leading-8
                      "
                    >
                      {group.intro[lang]}
                    </p>

                  </div>

                </ScrollReveal>

                {/* =================================================
                    SERVICE CARDS
                ================================================= */}

                <div
                  className={`
                    grid
                    gap-4
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
                      delay={itemIndex * 0.08}
                    >

                      <div
                        className={`
                          group
                          relative
                          h-full
                          overflow-hidden
                          border
                          p-6
                          transition-all
                          duration-500
                          md:p-7
                          ${
                            isTax
                              ? "border-[#0B1220]/10 bg-[#0B1220] text-white hover:border-blue-400/40"
                              : "border-gray-200 bg-white hover:border-blue-200 hover:bg-[#FAFBFD]"
                          }
                        `}
                      >

                        {/* Top line */}
                        <div
                          className={`
                            absolute
                            left-0
                            top-0
                            h-px
                            w-0
                            bg-blue-500
                            transition-all
                            duration-500
                            group-hover:w-full
                          `}
                        />

                        {/* Card Header */}

                        <div className="flex items-start justify-between gap-5">

                          <span
                            className={`
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              border
                              text-base
                              transition
                              duration-300
                              ${
                                isTax
                                  ? "border-white/10 bg-white/[0.04]"
                                  : "border-gray-200 bg-gray-50"
                              }
                            `}
                          >
                            {item.icon}
                          </span>

                          <span
                            className={`
                              pt-1
                              text-[9px]
                              font-semibold
                              tracking-[0.2em]
                              ${
                                isTax
                                  ? "text-white/20"
                                  : "text-gray-300"
                              }
                            `}
                          >
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>

                        </div>

                        {/* Title */}

                        <h3
                          className={`
                            mt-7
                            text-base
                            font-medium
                            tracking-[-0.01em]
                            ${
                              isTax
                                ? "text-white"
                                : "text-[#0B1220]"
                            }
                          `}
                        >
                          {item.title[lang]}
                        </h3>

                        {/* Divider */}

                        <div
                          className={`
                            mt-4
                            h-px
                            w-8
                            transition-all
                            duration-300
                            group-hover:w-12
                            ${
                              isTax
                                ? "bg-blue-400"
                                : "bg-blue-500"
                            }
                          `}
                        />

                        {/* Description */}

                        <p
                          className={`
                            mt-5
                            text-sm
                            leading-7
                            ${
                              isTax
                                ? "text-white/45"
                                : "text-gray-500"
                            }
                          `}
                        >
                          {item.desc[lang]}
                        </p>

                        {/* Bottom label */}

                        <div
                          className={`
                            mt-8
                            border-t
                            pt-4
                            ${
                              isTax
                                ? "border-white/10"
                                : "border-gray-100"
                            }
                          `}
                        >

                          <span
                            className={`
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.2em]
                              ${
                                isTax
                                  ? "text-white/25"
                                  : "text-gray-300"
                              }
                            `}
                          >
                            {lang === "en"
                              ? "Advisory Service"
                              : "Layanan Konsultasi"}
                          </span>

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

      <section className="bg-[#F7F8FA] py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <ScrollReveal>

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_auto]
                lg:items-center
              "
            >

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-blue-500" />

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-blue-600
                    "
                  >
                    {lang === "en"
                      ? "OUR APPROACH"
                      : "PENDEKATAN KAMI"}
                  </p>

                </div>

                <h2
                  className="
                    mt-5
                    max-w-3xl
                    text-2xl
                    font-light
                    leading-tight
                    tracking-[-0.035em]
                    text-[#0B1220]
                    md:text-4xl
                  "
                >
                  {lang === "en"
                    ? "Practical advice. Strategic thinking. Long-term protection."
                    : "Nasihat praktis. Pemikiran strategis. Perlindungan jangka panjang."}
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-gray-500
                    md:text-base
                    md:leading-8
                  "
                >
                  {lang === "en"
                    ? "Our services are designed to help clients make informed decisions, manage legal and tax risks, and move forward with greater confidence."
                    : "Layanan kami dirancang untuk membantu klien mengambil keputusan yang tepat, mengelola risiko hukum dan pajak, serta bergerak maju dengan keyakinan yang lebih besar."}
                </p>

              </div>

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-blue-500" />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-gray-400
                  "
                >
                  Zaky Zhafran & Partners
                </span>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>
    </div>
  );
}