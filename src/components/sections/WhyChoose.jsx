import ScrollReveal from "../ui/ScrollReveal";

const items = [
  {
    title: {
      en: "Corporate Governance & Compliance Expertise",
      id: "Keahlian Tata Kelola & Kepatuhan Korporasi",
    },
    desc: {
      en: "Providing structured legal advisory aligned with corporate governance standards, regulatory compliance, and risk management frameworks.",
      id: "Memberikan konsultasi hukum terstruktur yang selaras dengan standar tata kelola perusahaan, kepatuhan regulasi, dan kerangka manajemen risiko.",
    },
  },
  {
    title: {
      en: "Responsive Strategic Advisory",
      id: "Konsultasi Strategis yang Responsif",
    },
    desc: {
      en: "Delivering timely legal insights to support critical business decisions in dynamic commercial environments.",
      id: "Memberikan wawasan hukum secara tepat waktu untuk mendukung keputusan bisnis penting dalam lingkungan komersial yang dinamis.",
    },
  },
  {
    title: {
      en: "Internationally Aligned Legal Standards",
      id: "Standar Hukum Berorientasi Internasional",
    },
    desc: {
      en: "Practicing legal methodologies consistent with global standards and cross-border regulatory expectations.",
      id: "Menerapkan metodologi hukum yang selaras dengan standar global dan ekspektasi regulasi lintas batas.",
    },
  },
  {
    title: {
      en: "Long-Term Advisory Partnership",
      id: "Kemitraan Konsultasi Jangka Panjang",
    },
    desc: {
      en: "Acting as a strategic legal partner for sustainable growth of startups, SMEs, and enterprise organizations.",
      id: "Bertindak sebagai mitra hukum strategis untuk mendukung pertumbuhan berkelanjutan startup, UKM, dan organisasi berskala enterprise.",
    },
  },
];

export default function WhyChoose({ lang }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-slate-900/[0.02]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <ScrollReveal>

          <div className="mb-16 max-w-4xl md:mb-20">

            {/* Eyebrow */}

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
                  ? "05 / INSTITUTIONAL STRENGTH"
                  : "05 / KEKUATAN INSTITUSIONAL"}
              </p>

            </div>

            {/* Heading */}

            <h2
              className="
                mt-6
                max-w-3xl
                text-3xl
                font-light
                leading-[1.08]
                tracking-[-0.04em]
                text-[#0B1220]
                sm:text-4xl
                md:text-5xl
              "
            >
              {lang === "en"
                ? "Why clients trust our firm."
                : "Mengapa klien mempercayai firma kami."}
            </h2>

            {/* Divider */}

            <div className="mt-7 h-px w-16 bg-[#0B1220]/15" />

            {/* Description */}

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
                ? "We provide structured legal advisory with a focus on compliance, governance, and sustainable business growth."
                : "Kami memberikan konsultasi hukum terstruktur dengan fokus pada kepatuhan, tata kelola, dan pertumbuhan bisnis yang berkelanjutan."}
            </p>

          </div>

        </ScrollReveal>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* =====================================================
              LEFT — INSTITUTIONAL STATEMENT
          ===================================================== */}

          <ScrollReveal>

            <div
              className="
                relative
                overflow-hidden
                bg-[#0B1220]
                p-7
                md:p-9
                lg:p-10
              "
            >

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-28
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-blue-500/10
                  blur-[90px]
                "
              />

              {/* Decorative number */}

              <span
                className="
                  absolute
                  right-7
                  top-5
                  text-7xl
                  font-light
                  tracking-[-0.08em]
                  text-white/[0.035]
                  md:right-9
                  md:top-7
                "
              >
                05
              </span>

              <div className="relative">

                {/* Label */}

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
                    ? "OUR COMMITMENT"
                    : "KOMITMEN KAMI"}
                </p>

                {/* Main statement */}

                <h3
                  className="
                    mt-5
                    max-w-md
                    text-2xl
                    font-light
                    leading-tight
                    tracking-[-0.035em]
                    text-white
                    md:text-3xl
                  "
                >
                  {lang === "en"
                    ? "Legal clarity for decisions that matter."
                    : "Kejelasan hukum untuk keputusan yang penting."}
                </h3>

                {/* Accent */}

                <div className="mt-7 h-px w-12 bg-blue-400" />

                {/* Description */}

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-white/45
                    md:leading-8
                  "
                >
                  {lang === "en"
                    ? "Our role extends beyond providing legal answers. We help clients understand risks, evaluate opportunities, and make confident decisions."
                    : "Peran kami lebih dari sekadar memberikan jawaban hukum. Kami membantu klien memahami risiko, mengevaluasi peluang, dan mengambil keputusan dengan penuh keyakinan."}
                </p>

              </div>

              {/* Bottom */}

              <div
                className="
                  relative
                  mt-10
                  border-t
                  border-white/10
                  pt-6
                "
              >

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/25
                  "
                >
                  {lang === "en"
                    ? "LEGAL • TAX • BUSINESS"
                    : "HUKUM • PAJAK • BISNIS"}
                </p>

              </div>

            </div>

          </ScrollReveal>

          {/* =====================================================
              RIGHT — PRINCIPLES
          ===================================================== */}

          <div>

            {items.map((item, i) => (

              <ScrollReveal
                key={i}
                delay={i * 0.08}
              >

                <div
                  className="
                    group
                    relative
                    border-t
                    border-gray-200
                    py-7
                    md:py-8
                  "
                >

                  {/* Hover accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-0
                      bg-blue-500
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div
                    className="
                      grid
                      gap-5
                      md:grid-cols-[70px_1fr]
                      md:gap-8
                    "
                  >

                    {/* Number */}

                    <div>

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          tracking-[0.22em]
                          text-gray-300
                          transition-colors
                          duration-300
                          group-hover:text-blue-500
                        "
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                    </div>

                    {/* Content */}

                    <div>

                      <h3
                        className="
                          max-w-xl
                          text-lg
                          font-medium
                          leading-snug
                          tracking-[-0.015em]
                          text-[#0B1220]
                          transition-colors
                          duration-300
                          group-hover:text-blue-700
                          md:text-xl
                        "
                      >
                        {item.title[lang]}
                      </h3>

                      <div className="mt-4 h-px w-8 bg-blue-500 transition-all duration-300 group-hover:w-12" />

                      <p
                        className="
                          mt-5
                          max-w-2xl
                          text-sm
                          leading-7
                          text-gray-500
                          md:leading-8
                        "
                      >
                        {item.desc[lang]}
                      </p>

                    </div>

                  </div>

                </div>

              </ScrollReveal>

            ))}

            {/* Final border */}

            <div className="border-t border-gray-200" />

          </div>

        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <ScrollReveal delay={0.2}>

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
                ? "Built around trust, responsiveness, and a long-term understanding of our clients' businesses."
                : "Dibangun berdasarkan kepercayaan, responsivitas, dan pemahaman jangka panjang terhadap bisnis klien kami."}
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

        </ScrollReveal>

      </div>
    </section>
  );
}