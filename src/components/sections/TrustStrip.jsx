import { motion } from "framer-motion";

export default function TrustStrip({ lang }) {
  const legalServices = [
    {
      title: {
        en: "CORPORATE & LITIGATION",
        id: "KORPORASI & LITIGASI",
      },
      items: {
        en: [
          "LITIGATION FIELD",
          "CORPORATE SECTOR",
          "BANKING SECTOR",
          "BANKRUPTCY FIELD",
        ],
        id: [
          "BIDANG LITIGASI",
          "SEKTOR KORPORASI",
          "SEKTOR PERBANKAN",
          "KEPAILITAN",
        ],
      },
    },
    {
      title: {
        en: "ADVISORY & COMPLIANCE",
        id: "KONSULTASI & KEPATUHAN",
      },
      items: {
        en: [
          "INVESTMENT SECTOR",
          "LABOR SECTOR",
          "PROPERTY & INFRASTRUCTURE",
          "TAX LEGAL ADVISORY",
        ],
        id: [
          "SEKTOR INVESTASI",
          "SEKTOR KETENAGAKERJAAN",
          "PROPERTI & INFRASTRUKTUR",
          "KONSULTASI HUKUM PAJAK",
        ],
      },
    },
    {
      title: {
        en: "SPECIALIZED PRACTICE",
        id: "PRAKTIK KHUSUS",
      },
      items: {
        en: [
          "FAMILY & PRIVATE LAW",
          "ISLAMIC FINANCE",
          "TECHNOLOGY & COMMUNICATIONS",
        ],
        id: [
          "HUKUM KELUARGA & PRIVAT",
          "KEUANGAN SYARIAH",
          "TEKNOLOGI & KOMUNIKASI",
        ],
      },
    },
  ];

  const taxServices = [
    {
      title: {
        en: "TAX COMPLIANCE",
        id: "KEPATUHAN PAJAK",
      },
      items: {
        en: [
          "TAX CONSULTATION",
          "ANNUAL TAX REPORTING",
          "MONTHLY TAX REPORTING",
          "TAX COMPLIANCE REVIEW",
        ],
        id: [
          "KONSULTASI PERPAJAKAN",
          "PELAPORAN SPT TAHUNAN",
          "SPT MASA",
          "REVIEW KEPATUHAN PAJAK",
        ],
      },
    },
    {
      title: {
        en: "TAX HANDLING",
        id: "PENANGANAN PAJAK",
      },
      items: {
        en: [
          "TAX AUDIT",
          "TAX DISPUTE",
          "TAX AUDIT SUPPORT",
        ],
        id: [
          "PEMERIKSAAN PAJAK",
          "SENGKETA PAJAK",
          "PENDAMPINGAN PEMERIKSAAN PAJAK",
        ],
      },
    },
    {
      title: {
        en: "TAX STRATEGY",
        id: "STRATEGI PAJAK",
      },
      items: {
        en: [
          "TAX PLANNING",
          "TAX COMPLIANCE SYSTEM",
          "TAX ADMINISTRATION",
        ],
        id: [
          "PERENCANAAN PAJAK",
          "SISTEM KEPATUHAN PAJAK",
          "ADMINISTRASI PAJAK",
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
    <section className="relative overflow-hidden bg-[#F8F6EF] py-24 md:py-32">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-[#C45A70]/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0B4F32]/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-90px] top-[180px] h-[320px] w-[320px] rounded-full border border-[#A92F46]/[0.08]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="max-w-3xl">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#A92F46]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#A92F46]">
              {lang === "en"
                ? "01 / TRUSTED CAPABILITIES"
                : "01 / KAPABILITAS TERPERCAYA"}
            </p>

          </div>

          {/* ================================================= */}
          {/* MAIN TITLE */}
          {/* ================================================= */}

          <h2
            className="
              mt-6
              max-w-3xl
              text-xl
              font-light
              uppercase
              leading-[1.18]
              tracking-[-0.03em]
              text-[#16251F]
              sm:text-2xl
              sm:leading-[1.15]
              md:text-4xl
              md:leading-[1.12]
              lg:text-5xl
            "
          >
            {lang === "en" ? (
              <>
                <span className="block">LEGAL PRECISION.</span>
                <span className="block">TAX CLARITY.</span>
                <span className="block">STRATEGIC CONFIDENCE.</span>
              </>
            ) : (
              <>
                <span className="block">PRESISI HUKUM.</span>
                <span className="block">KEJELASAN PAJAK.</span>
                <span className="block">KEYAKINAN STRATEGIS.</span>
              </>
            )}
          </h2>

          <div className="mt-7 h-px w-16 bg-[#16251F]/15" />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#16251F]/60 md:text-base md:leading-8">
            {lang === "en"
              ? "Our advisory capabilities are structured around two core pillars, combining comprehensive legal services with practical tax solutions for modern businesses."
              : "Kapabilitas kami dibangun di atas dua pilar utama, menggabungkan layanan hukum yang komprehensif dengan solusi perpajakan praktis untuk kebutuhan bisnis modern."}
          </p>

        </div>

        {/* ===================================================== */}
        {/* SERVICE PANELS */}
        {/* ===================================================== */}

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">

          {/* ================================================= */}
          {/* LEGAL */}
          {/* ================================================= */}

          <div className="relative overflow-hidden rounded-2xl border border-[#16251F]/10 bg-white p-7 shadow-[0_20px_70px_rgba(22,37,31,0.05)] md:p-9 lg:p-10">

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#A92F46]/[0.08]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full border border-[#0B4F32]/[0.06]" />

            <div className="relative">

              <div className="flex items-start justify-between gap-6">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#A92F46]">
                    {lang === "en"
                      ? "CORE PILLAR 01"
                      : "PILAR UTAMA 01"}
                  </p>

                  <h3 className="mt-3 text-2xl font-light uppercase tracking-[-0.03em] text-[#16251F] md:text-3xl">
                    {lang === "en"
                      ? "LEGAL ADVISORY"
                      : "LAYANAN HUKUM"}
                  </h3>

                </div>

                <span className="text-4xl font-light tracking-[-0.05em] text-[#16251F]/10">
                  01
                </span>

              </div>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#16251F]/60">
                {lang === "en"
                  ? "Comprehensive legal support across corporate, litigation, regulatory, and specialized practice areas."
                  : "Dukungan hukum komprehensif dalam bidang korporasi, litigasi, regulasi, dan praktik hukum khusus."}
              </p>

            </div>

            <div className="my-8 h-px bg-[#16251F]/10" />

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

                  <div className="flex items-center gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B4F32] text-[9px] font-semibold text-white transition duration-300 group-hover:bg-[#A92F46]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4 className="text-sm font-semibold uppercase tracking-[-0.01em] text-[#16251F]">
                      {group.title[lang]}
                    </h4>

                  </div>

                  <ul className="mt-4 space-y-2 pl-10">

                    {group.items[lang].map((service, idx) => (
                      <li
                        key={idx}
                        className="group/item flex items-center gap-3 text-xs leading-6 text-[#16251F]/55 transition duration-300 hover:text-[#16251F]"
                      >

                        <span className="h-px w-4 bg-[#16251F]/20 transition-all duration-300 group-hover/item:w-6 group-hover/item:bg-[#A92F46]" />

                        <span className="uppercase">
                          {service}
                        </span>

                      </li>
                    ))}

                  </ul>

                </motion.div>
              ))}
            </motion.div>

            <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#A92F46] transition-transform duration-500 hover:scale-x-100" />

          </div>

          {/* ================================================= */}
          {/* TAX */}
          {/* ================================================= */}

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923] p-7 text-white shadow-[0_25px_80px_rgba(7,57,35,0.18)] md:p-9 lg:p-10">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C45A70]/10 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#E1A7B1]/[0.06] blur-[80px]" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.07]" />

            <div className="pointer-events-none absolute -bottom-20 right-10 h-32 w-32 rounded-full border border-[#E1A7B1]/[0.08]" />

            <div className="relative">

              <div className="flex items-start justify-between gap-6">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E1A7B1]">
                    {lang === "en"
                      ? "CORE PILLAR 02"
                      : "PILAR UTAMA 02"}
                  </p>

                  <h3 className="mt-3 text-2xl font-light uppercase tracking-[-0.03em] text-white md:text-3xl">
                    {lang === "en"
                      ? "TAX ADVISORY"
                      : "LAYANAN PAJAK"}
                  </h3>

                </div>

                <span className="text-4xl font-light tracking-[-0.05em] text-white/10">
                  02
                </span>

              </div>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                {lang === "en"
                  ? "Practical tax advisory covering compliance, audit handling, dispute resolution, and strategic tax planning."
                  : "Konsultasi pajak praktis yang mencakup kepatuhan, pemeriksaan, penyelesaian sengketa, dan perencanaan pajak strategis."}
              </p>

            </div>

            <div className="my-8 h-px bg-white/10" />

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

                  <div className="flex items-center gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[9px] font-semibold text-[#E1A7B1] transition duration-300 group-hover:border-[#E1A7B1]/30 group-hover:bg-[#A92F46]/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4 className="text-sm font-semibold uppercase tracking-[-0.01em] text-white">
                      {group.title[lang]}
                    </h4>

                  </div>

                  <ul className="mt-4 space-y-2 pl-10">

                    {group.items[lang].map((service, idx) => (
                      <li
                        key={idx}
                        className="group/item flex items-center gap-3 text-xs leading-6 text-white/50 transition duration-300 hover:text-white"
                      >

                        <span className="h-px w-4 bg-white/15 transition-all duration-300 group-hover/item:w-6 group-hover/item:bg-[#541522]" />

                        <span className="uppercase">
                          {service}
                        </span>

                      </li>
                    ))}

                  </ul>

                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ===================================================== */}
        {/* BOTTOM STATEMENT */}
        {/* ===================================================== */}

        <div className="mt-16 flex flex-col gap-5 border-t border-[#16251F]/10 pt-7 md:flex-row md:items-center md:justify-between">

          <p className="max-w-2xl text-xs uppercase leading-6 tracking-[0.02em] text-[#16251F]/45">
            {lang === "en"
              ? "ONE ADVISORY PARTNER ACROSS LEGAL COMPLEXITY, REGULATORY REQUIREMENTS, AND TAX OBLIGATIONS."
              : "SATU MITRA PENASIHAT UNTUK MENGHADAPI KOMPLEKSITAS HUKUM, KEBUTUHAN REGULASI, DAN KEWAJIBAN PERPAJAKAN."}
          </p>

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#A92F46]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#16251F]/45">
              ZAKY ZHAFRAN & PARTNERS
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}