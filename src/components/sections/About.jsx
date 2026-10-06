import ScrollReveal from "../ui/ScrollReveal";

export default function About({ lang }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">

      {/* =========================================================
          SUBTLE BACKGROUND
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
          h-[450px]
          w-[450px]
          rounded-full
          bg-slate-900/[0.025]
          blur-[120px]
        "
      />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* =======================================================
            SECTION INTRO
        ======================================================= */}

        <ScrollReveal>

          <div className="mb-16 max-w-3xl md:mb-20">

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
                  ? "02 / ABOUT THE FIRM"
                  : "02 / TENTANG FIRMA"}
              </p>

            </div>

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
                ? "Legal insight built around your business."
                : "Wawasan hukum yang dibangun untuk kebutuhan bisnis Anda."}
            </h2>

            <div className="mt-7 h-px w-16 bg-[#0B1220]/15" />

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
                ? "A trusted legal and tax advisory partner focused on clarity, protection, and sustainable business growth."
                : "Mitra konsultasi hukum dan pajak terpercaya yang berfokus pada kejelasan, perlindungan, dan pertumbuhan bisnis yang berkelanjutan."}
            </p>

          </div>

        </ScrollReveal>

        {/* =======================================================
            MAIN ABOUT GRID
        ======================================================= */}

        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          {/* =====================================================
              LEFT — MAIN CONTENT
          ===================================================== */}

          <div>

            <ScrollReveal>

              <div className="flex items-start gap-5">

                <span
                  className="
                    hidden
                    pt-2
                    text-[10px]
                    font-semibold
                    tracking-[0.25em]
                    text-gray-300
                    sm:block
                  "
                >
                  01
                </span>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.025em]
                      text-[#0B1220]
                      md:text-3xl
                    "
                  >
                    {lang === "en"
                      ? "About Our Firm"
                      : "Tentang Firma Kami"}
                  </h3>

                  <div className="mt-5 h-px w-12 bg-blue-500" />

                </div>

              </div>

            </ScrollReveal>

            {/* PARAGRAPH 1 */}

            <ScrollReveal delay={0.1}>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-600
                  md:text-base
                  md:leading-8
                "
              >
                {lang === "en"
                  ? "We’re a law firm helping businesses and individuals navigate legal and tax matters with clarity and confidence. From everyday legal needs to more complex matters, we focus on practical solutions that protect your interests, reduce risks, and help you move forward with confidence."
                  : "Kami adalah firma hukum yang membantu bisnis dan individu dalam menghadapi berbagai aspek hukum dan perpajakan dengan jelas dan penuh keyakinan. Mulai dari kebutuhan hukum sehari-hari hingga kasus yang lebih kompleks, kami berfokus pada solusi yang praktis, melindungi kepentingan klien, mengurangi risiko, dan membantu Anda melangkah maju dengan percaya diri."}
              </p>

            </ScrollReveal>

            {/* PARAGRAPH 2 */}

            <ScrollReveal delay={0.2}>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-600
                  md:text-base
                  md:leading-8
                "
              >
                {lang === "en"
                  ? "Our approach combines legal expertise, tax strategy, and business insight to deliver practical and sustainable solutions for long-term growth."
                  : "Pendekatan kami mengintegrasikan keahlian hukum, strategi perpajakan, serta wawasan bisnis untuk menghadirkan solusi yang praktis, strategis, dan berkelanjutan guna mendukung pertumbuhan jangka panjang."}
              </p>

            </ScrollReveal>

            {/* ===================================================
                STATS
            =================================================== */}

            <ScrollReveal delay={0.3}>

              <div
                className="
                  mt-12
                  grid
                  grid-cols-3
                  border-y
                  border-gray-200
                  py-7
                "
              >

                {/* STAT 1 */}

                <div className="border-r border-gray-200 pr-4">

                  <p
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.04em]
                      text-[#0B1220]
                      md:text-3xl
                    "
                  >
                    50+
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.16em]
                      text-gray-400
                      md:text-xs
                    "
                  >
                    {lang === "en"
                      ? "Clients"
                      : "Klien"}
                  </p>

                </div>

                {/* STAT 2 */}

                <div className="border-r border-gray-200 px-4">

                  <p
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.04em]
                      text-[#0B1220]
                      md:text-3xl
                    "
                  >
                    5+
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.16em]
                      text-gray-400
                      md:text-xs
                    "
                  >
                    {lang === "en"
                      ? "Years Experience"
                      : "Tahun Pengalaman"}
                  </p>

                </div>

                {/* STAT 3 */}

                <div className="pl-4">

                  <p
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.04em]
                      text-[#0B1220]
                      md:text-3xl
                    "
                  >
                    100%
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.16em]
                      text-gray-400
                      md:text-xs
                    "
                  >
                    {lang === "en"
                      ? "Commitment"
                      : "Komitmen"}
                  </p>

                </div>

              </div>

            </ScrollReveal>

          </div>

          {/* =====================================================
              RIGHT — WHY CHOOSE US
          ===================================================== */}

          <ScrollReveal delay={0.15}>

            <div className="relative">

              {/* Decorative vertical line */}

              <div
                className="
                  absolute
                  -left-5
                  top-0
                  hidden
                  h-full
                  w-px
                  bg-gradient-to-b
                  from-blue-500
                  via-gray-200
                  to-transparent
                  lg:block
                "
              />

              {/* =================================================
                  DARK FEATURE PANEL
              ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
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
                    h-64
                    w-64
                    rounded-full
                    bg-blue-400/[0.05]
                    blur-[80px]
                  "
                />

                {/* Decorative number */}

                <span
                  className="
                    absolute
                    right-7
                    top-5
                    text-6xl
                    font-light
                    tracking-[-0.06em]
                    text-white/[0.04]
                    md:right-9
                    md:top-7
                  "
                >
                  02
                </span>

                {/* Content */}

                <div className="relative">

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
                      ? "WHY CHOOSE US"
                      : "MENGAPA MEMILIH KAMI"}
                  </p>

                  <h3
                    className="
                      mt-4
                      max-w-md
                      text-2xl
                      font-light
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                      md:text-3xl
                    "
                  >
                    {lang === "en"
                      ? "Expertise You Can Trust. Solutions That Move Your Business Forward."
                      : "Keahlian yang Dapat Anda Percayai. Solusi yang Mendorong Bisnis Anda Maju."}
                  </h3>

                  <div className="mt-6 h-px w-12 bg-blue-400" />

                  <p
                    className="
                      mt-6
                      text-sm
                      leading-7
                      text-white/50
                      md:leading-8
                    "
                  >
                    {lang === "en"
                      ? "We combine legal expertise and tax advisory to deliver practical, strategic solutions that protect your interests, strengthen compliance, minimize risks, and support your business at every stage of growth."
                      : "Kami menggabungkan keahlian hukum dan konsultasi perpajakan untuk menghadirkan solusi yang praktis dan strategis, melindungi kepentingan Anda, memperkuat kepatuhan, meminimalkan risiko, serta mendukung perkembangan bisnis di setiap tahap pertumbuhan."}
                  </p>

                </div>

                {/* =================================================
                    FEATURE LIST
                ================================================= */}

                <div className="relative mt-10 border-t border-white/10 pt-7">

                  <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">

                    {/* FEATURE 1 */}

                    <div className="group">

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
                            text-[9px]
                            text-blue-300
                            transition
                            group-hover:border-blue-300/30
                            group-hover:bg-blue-500/10
                          "
                        >
                          01
                        </span>

                        <p
                          className="
                            text-xs
                            font-medium
                            text-white/80
                          "
                        >
                          {lang === "en"
                            ? "Legal Expertise"
                            : "Keahlian Hukum"}
                        </p>

                      </div>

                    </div>

                    {/* FEATURE 2 */}

                    <div className="group">

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
                            text-[9px]
                            text-blue-300
                            transition
                            group-hover:border-blue-300/30
                            group-hover:bg-blue-500/10
                          "
                        >
                          02
                        </span>

                        <p
                          className="
                            text-xs
                            font-medium
                            text-white/80
                          "
                        >
                          {lang === "en"
                            ? "Tax Strategy"
                            : "Strategi Pajak"}
                        </p>

                      </div>

                    </div>

                    {/* FEATURE 3 */}

                    <div className="group">

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
                            text-[9px]
                            text-blue-300
                            transition
                            group-hover:border-blue-300/30
                            group-hover:bg-blue-500/10
                          "
                        >
                          03
                        </span>

                        <p
                          className="
                            text-xs
                            font-medium
                            text-white/80
                          "
                        >
                          {lang === "en"
                            ? "Business Insight"
                            : "Wawasan Bisnis"}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </ScrollReveal>

        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <ScrollReveal delay={0.25}>

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
                ? "Our role goes beyond legal advice — we help clients make informed decisions with confidence."
                : "Peran kami lebih dari sekadar memberikan nasihat hukum — kami membantu klien mengambil keputusan yang tepat dengan penuh keyakinan."}
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