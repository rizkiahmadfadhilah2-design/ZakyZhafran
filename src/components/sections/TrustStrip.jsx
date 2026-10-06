import { motion } from "framer-motion";

export default function TrustStrip({ lang }) {
  const legalServices = [
    {
      title: {
        en: "Corporate & Litigation",
        id: "Korporasi & Litigasi",
      },
      items: {
        en: [
          "Litigation Field",
          "Corporate Sector",
          "Banking Sector",
          "Bankruptcy Field",
        ],
        id: [
          "Bidang Litigasi",
          "Sektor Korporasi",
          "Sektor Perbankan",
          "Kepailitan",
        ],
      },
    },
    {
      title: {
        en: "Advisory & Compliance",
        id: "Konsultasi & Kepatuhan",
      },
      items: {
        en: [
          "Investment Sector",
          "Labor Sector",
          "Property & Infrastructure",
          "Tax Legal Advisory",
        ],
        id: [
          "Sektor Investasi",
          "Sektor Ketenagakerjaan",
          "Properti & Infrastruktur",
          "Konsultasi Pajak",
        ],
      },
    },
    {
      title: {
        en: "Specialized Practice",
        id: "Praktik Khusus",
      },
      items: {
        en: [
          "Family & Private Law",
          "Islamic Finance",
          "Technology & Communications",
        ],
        id: [
          "Hukum Keluarga & Privat",
          "Keuangan Syariah",
          "Teknologi & Komunikasi",
        ],
      },
    },
  ];

  const taxServices = [
    {
      title: {
        en: "Tax Compliance",
        id: "Kepatuhan Pajak",
      },
      items: {
        en: [
          "Tax Consultation",
          "Annual Tax Reporting",
          "Monthly Tax Reporting",
          "Tax Compliance Review",
        ],
        id: [
          "Konsultasi Perpajakan",
          "Pelaporan SPT Tahunan",
          "SPT Masa",
          "Review Kepatuhan Pajak",
        ],
      },
    },
    {
      title: {
        en: "Tax Handling",
        id: "Penanganan Pajak",
      },
      items: {
        en: [
          "Tax Audit",
          "Tax Dispute",
          "Tax Audit Support",
        ],
        id: [
          "Pemeriksaan Pajak",
          "Sengketa Pajak",
          "Pendampingan Pemeriksaan",
        ],
      },
    },
    {
      title: {
        en: "Tax Strategy",
        id: "Strategi Pajak",
      },
      items: {
        en: [
          "Tax Planning",
          "Tax Compliance System",
          "Tax Administration",
        ],
        id: [
          "Perencanaan Pajak",
          "Sistem Kepatuhan Pajak",
          "Administrasi Pajak",
        ],
      },
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 24,
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F7FB] py-24 md:py-32">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-slate-900/[0.035]
          blur-[130px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="max-w-3xl">

          {/* LABEL */}
          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-blue-600
              "
            >
              {lang === "en"
                ? "01 / TRUSTED CAPABILITIES"
                : "01 / KAPABILITAS TERPERCAYA"}
            </p>

          </div>

          {/* TITLE */}
          <h2
            className="
              mt-6
              max-w-2xl
              text-3xl
              font-light
              leading-[1.1]
              tracking-[-0.04em]
              text-[#0B1220]
              sm:text-4xl
              md:text-5xl
            "
          >
            {lang === "en"
              ? "Legal precision. Tax clarity. Strategic confidence."
              : "Presisi hukum. Kejelasan pajak. Keyakinan strategis."}
          </h2>

          {/* LINE */}
          <div className="mt-7 h-px w-16 bg-[#0B1220]/15" />

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-gray-500
              md:text-base
              md:leading-8
            "
          >
            {lang === "en"
              ? "Our advisory capabilities are structured around two core pillars, combining comprehensive legal services with practical tax solutions for modern businesses."
              : "Kapabilitas kami dibangun di atas dua pilar utama, menggabungkan layanan hukum yang komprehensif dengan solusi perpajakan praktis untuk kebutuhan bisnis modern."}
          </p>

        </div>

        {/* =======================================================
            TWO CORE PILLARS
        ======================================================= */}

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">

          {/* =====================================================
              LEGAL PANEL
          ===================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-7
              shadow-[0_20px_70px_rgba(11,18,32,0.04)]
              md:p-9
              lg:p-10
            "
          >

            {/* Decorative circle */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                border
                border-blue-500/[0.06]
              "
            />

            {/* Header */}
            <div className="relative">

              <div className="flex items-start justify-between gap-6">

                <div>

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
                      ? "CORE PILLAR 01"
                      : "PILAR UTAMA 01"}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-light
                      tracking-[-0.03em]
                      text-[#0B1220]
                      md:text-3xl
                    "
                  >
                    {lang === "en"
                      ? "LEGAL ADVISORY"
                      : "LAYANAN HUKUM"}
                  </h3>

                </div>

                <span
                  className="
                    text-4xl
                    font-light
                    tracking-[-0.05em]
                    text-gray-200
                  "
                >
                  01
                </span>

              </div>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                {lang === "en"
                  ? "Comprehensive legal support across corporate, litigation, regulatory, and specialized practice areas."
                  : "Dukungan hukum komprehensif dalam bidang korporasi, litigasi, regulasi, dan praktik hukum khusus."}
              </p>

            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-100" />

            {/* Legal groups */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="space-y-8"
            >

              {legalServices.map((group, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative"
                >

                  {/* Group header */}
                  <div className="flex items-center gap-3">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0B1220]
                        text-[9px]
                        font-semibold
                        text-white
                        transition
                        duration-300
                        group-hover:bg-blue-600
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4
                      className="
                        text-sm
                        font-semibold
                        tracking-[-0.01em]
                        text-[#0B1220]
                      "
                    >
                      {group.title[lang]}
                    </h4>

                  </div>

                  {/* Items */}
                  <ul className="mt-4 space-y-2 pl-10">

                    {group.items[lang].map((service, idx) => (
                      <li
                        key={idx}
                        className="
                          group/item
                          flex
                          items-center
                          gap-3
                          text-xs
                          leading-6
                          text-gray-500
                          transition
                          duration-300
                          hover:text-[#0B1220]
                        "
                      >

                        <span
                          className="
                            h-px
                            w-4
                            bg-gray-300
                            transition-all
                            duration-300
                            group-hover/item:w-6
                            group-hover/item:bg-blue-500
                          "
                        />

                        <span>{service}</span>

                      </li>
                    ))}

                  </ul>

                </motion.div>
              ))}

            </motion.div>

            {/* Bottom accent */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-1
                w-0
                bg-blue-500
                transition-all
                duration-500
                hover:w-full
              "
            />

          </div>

          {/* =====================================================
              TAX PANEL
          ===================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              p-7
              text-white
              shadow-[0_25px_80px_rgba(11,18,32,0.12)]
              md:p-9
              lg:p-10
            "
          >

            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-blue-500/10
                blur-[80px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-24
                h-72
                w-72
                rounded-full
                bg-blue-400/[0.05]
                blur-[80px]
              "
            />

            {/* Decorative circle */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                border
                border-white/[0.04]
              "
            />

            {/* Header */}
            <div className="relative">

              <div className="flex items-start justify-between gap-6">

                <div>

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-blue-300
                    "
                  >
                    {lang === "en"
                      ? "CORE PILLAR 02"
                      : "PILAR UTAMA 02"}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-light
                      tracking-[-0.03em]
                      text-white
                      md:text-3xl
                    "
                  >
                    {lang === "en"
                      ? "TAX ADVISORY"
                      : "LAYANAN PAJAK"}
                  </h3>

                </div>

                <span
                  className="
                    text-4xl
                    font-light
                    tracking-[-0.05em]
                    text-white/10
                  "
                >
                  02
                </span>

              </div>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-white/45
                "
              >
                {lang === "en"
                  ? "Practical tax advisory covering compliance, audit handling, dispute resolution, and strategic tax planning."
                  : "Konsultasi pajak praktis yang mencakup kepatuhan, pemeriksaan, penyelesaian sengketa, dan perencanaan pajak strategis."}
              </p>

            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-white/10" />

            {/* Tax groups */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="space-y-8"
            >

              {taxServices.map((group, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative"
                >

                  {/* Group header */}
                  <div className="flex items-center gap-3">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-[9px]
                        font-semibold
                        text-blue-300
                        transition
                        duration-300
                        group-hover:border-blue-300/30
                        group-hover:bg-blue-500/10
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4
                      className="
                        text-sm
                        font-semibold
                        tracking-[-0.01em]
                        text-white
                      "
                    >
                      {group.title[lang]}
                    </h4>

                  </div>

                  {/* Items */}
                  <ul className="mt-4 space-y-2 pl-10">

                    {group.items[lang].map((service, idx) => (
                      <li
                        key={idx}
                        className="
                          group/item
                          flex
                          items-center
                          gap-3
                          text-xs
                          leading-6
                          text-white/45
                          transition
                          duration-300
                          hover:text-white
                        "
                      >

                        <span
                          className="
                            h-px
                            w-4
                            bg-white/15
                            transition-all
                            duration-300
                            group-hover/item:w-6
                            group-hover/item:bg-blue-400
                          "
                        />

                        <span>{service}</span>

                      </li>
                    ))}

                  </ul>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-gray-200
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p
            className="
              max-w-2xl
              text-xs
              leading-6
              text-gray-400
            "
          >
            {lang === "en"
              ? "One advisory partner across legal complexity, regulatory requirements, and tax obligations."
              : "Satu mitra penasihat untuk menghadapi kompleksitas hukum, kebutuhan regulasi, dan kewajiban perpajakan."}
          </p>

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

      </div>
    </section>
  );
}