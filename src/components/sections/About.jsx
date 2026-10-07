import ScrollReveal from "../ui/ScrollReveal";

export default function About({ lang }) {
  return (
    <section className="relative overflow-hidden bg-[#F8F6EF] py-24 md:py-32">

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
          bg-[#C45A70]/[0.045]
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
          bg-[#0B4F32]/[0.045]
          blur-[120px]
        "
      />

      {/* Decorative circle */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[180px]
          h-[340px]
          w-[340px]
          rounded-full
          border
          border-[#A92F46]/[0.07]
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

            {/* LABEL */}

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#A92F46]" />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#A92F46]
                "
              >
                {lang === "en"
                  ? "02 / ABOUT THE FIRM"
                  : "02 / TENTANG FIRMA"}
              </p>

            </div>

            {/* TITLE */}

            <h2
              className="
                mt-6
                max-w-3xl
                text-3xl
                font-light
                uppercase
                leading-[1.08]
                tracking-[-0.04em]
                text-[#16251F]
                sm:text-4xl
                md:text-5xl
              "
            >
              {lang === "en"
                ? "Legal insight built around your business."
                : "Wawasan hukum yang dibangun untuk kebutuhan bisnis Anda."}
            </h2>

            <div className="mt-7 h-px w-16 bg-[#16251F]/15" />

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-[#16251F]/60
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
                    text-[#16251F]/20
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
                      uppercase
                      tracking-[-0.025em]
                      text-[#16251F]
                      md:text-3xl
                    "
                  >
                    {lang === "en"
                      ? "About Our Firm"
                      : "Tentang Firma Kami"}
                  </h3>

                  <div className="mt-5 h-px w-12 bg-[#A92F46]" />

                </div>

              </div>

            </ScrollReveal>

            {/* ===================================================
                PARAGRAPH 1
            =================================================== */}

            <ScrollReveal delay={0.1}>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[#16251F]/65
                  md:text-base
                  md:leading-8
                "
              >
                {lang === "en"
                  ? "We’re a law firm helping businesses and individuals navigate legal and tax matters with clarity and confidence. From everyday legal needs to more complex matters, we focus on practical solutions that protect your interests, reduce risks, and help you move forward with confidence."
                  : "Kami adalah firma hukum yang membantu bisnis dan individu dalam menghadapi berbagai aspek hukum dan perpajakan dengan jelas dan penuh keyakinan. Mulai dari kebutuhan hukum sehari-hari hingga kasus yang lebih kompleks, kami berfokus pada solusi yang praktis, melindungi kepentingan klien, mengurangi risiko, dan membantu Anda melangkah maju dengan percaya diri."}
              </p>

            </ScrollReveal>

            {/* ===================================================
                PARAGRAPH 2
            =================================================== */}

            <ScrollReveal delay={0.2}>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[#16251F]/65
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
                  border-[#16251F]/10
                  py-7
                "
              >

                {/* STAT 1 */}

                <div className="border-r border-[#16251F]/10 pr-4">

                  <p
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.04em]
                      text-[#0B4F32]
                      md:text-3xl
                    "
                  >
                    50+
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#16251F]/40
                      md:text-xs
                    "
                  >
                    {lang === "en"
                      ? "Clients"
                      : "Klien"}
                  </p>

                </div>

                {/* STAT 2 */}

                <div className="border-r border-[#16251F]/10 px-4">

                  <p
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.04em]
                      text-[#0B4F32]
                      md:text-3xl
                    "
                  >
                    5+
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#16251F]/40
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
                      text-[#A92F46]
                      md:text-3xl
                    "
                  >
                    100%
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#16251F]/40
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
                  from-[#A92F46]
                  via-[#16251F]/10
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
                  bg-gradient-to-br
                  from-[#155D40]
                  via-[#0B4F32]
                  to-[#073923]
                  p-7
                  text-white
                  shadow-[0_25px_80px_rgba(7,57,35,0.18)]
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
                    bg-[#C45A70]/10
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
                    bg-[#E1A7B1]/[0.06]
                    blur-[80px]
                  "
                />

                {/* Decorative circles */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    border
                    border-white/[0.07]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-70px]
                    right-[-20px]
                    h-40
                    w-40
                    rounded-full
                    border
                    border-[#E1A7B1]/[0.08]
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
                      text-[#E1A7B1]
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
                      uppercase
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

                  <div className="mt-6 h-px w-12 bg-[#D37A8A]" />

                  <p
                    className="
                      mt-6
                      text-sm
                      leading-7
                      text-white/55
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
                            text-[#E1A7B1]
                            transition
                            group-hover:border-[#E1A7B1]/40
                            group-hover:bg-[#A92F46]/20
                          "
                        >
                          01
                        </span>

                        <p
                          className="
                            text-xs
                            font-medium
                            uppercase
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
                            text-[#E1A7B1]
                            transition
                            group-hover:border-[#E1A7B1]/40
                            group-hover:bg-[#A92F46]/20
                          "
                        >
                          02
                        </span>

                        <p
                          className="
                            text-xs
                            font-medium
                            uppercase
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
                            text-[#E1A7B1]
                            transition
                            group-hover:border-[#E1A7B1]/40
                            group-hover:bg-[#A92F46]/20
                          "
                        >
                          03
                        </span>

                        <p
                          className="
                            text-xs
                            font-medium
                            uppercase
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
              border-[#16251F]/10
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
                text-[#16251F]/45
              "
            >
              {lang === "en"
                ? "Our role goes beyond legal advice — we help clients make informed decisions with confidence."
                : "Peran kami lebih dari sekadar memberikan nasihat hukum — kami membantu klien mengambil keputusan yang tepat dengan penuh keyakinan."}
            </p>

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#A92F46]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#16251F]/45
                "
              >
                ZAKY ZHAFRAN & PARTNERS
              </span>

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}