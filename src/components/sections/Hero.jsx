import { useEffect, useState } from "react";
import heroImage from "../../assets/ZakyZhafran.jpeg";

export default function Hero({ lang }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B1220] text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Blue glow - top right */}
      <div
        className="
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Blue glow - bottom left */}
      <div
        className="
          absolute
          -bottom-40
          -left-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-400/[0.06]
          blur-[120px]
        "
      />

      {/* Center glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/[0.025]
          blur-[100px]
        "
      />

      {/* Decorative circles */}
      <div
        className="
          absolute
          right-[-180px]
          top-[18%]
          h-[600px]
          w-[600px]
          rounded-full
          border
          border-white/[0.035]
        "
      />

      <div
        className="
          absolute
          right-[-80px]
          top-[25%]
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-white/[0.035]
        "
      />

      {/* =========================================================
          DECORATIVE GRID
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="
            mx-auto
            h-full
            max-w-7xl
            border-x
            border-white
          "
        />
      </div>

      {/* =========================================================
          NAV SAFE SPACE
      ========================================================= */}

      <div className="h-24" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-96px)]
          max-w-7xl
          items-center
          px-6
          pb-20
          pt-12
          md:px-10
          lg:pb-24
          lg:pt-16
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="text-center lg:text-left">

            {/* EYEBROW */}
            <div
              className="
                mb-7
                flex
                items-center
                justify-center
                gap-3
                lg:justify-start
              "
            >
              <span className="h-px w-8 bg-blue-400/70" />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-blue-300/80
                "
              >
                {lang === "en"
                  ? "Trusted Legal & Tax Advisory"
                  : "Konsultan Hukum & Pajak Terpercaya"}
              </p>

              <span className="hidden h-px w-8 bg-blue-400/70 sm:block" />
            </div>

            {/* MAIN TITLE */}
            <h1
              className="
                mx-auto
                max-w-4xl
                text-4xl
                font-light
                leading-[1.04]
                tracking-[-0.045em]
                sm:text-5xl
                md:text-6xl
                lg:mx-0
                lg:text-[4.5rem]
                xl:text-[5.2rem]
              "
            >
              {lang === "en" ? (
                <>
                  Legal & Tax Solutions for{" "}
                  <span className="text-blue-300">
                    Stronger Business Growth
                  </span>
                </>
              ) : (
                <>
                  Solusi Hukum & Pajak untuk{" "}
                  <span className="text-blue-300">
                    Pertumbuhan Bisnis Kuat
                  </span>
                </>
              )}
            </h1>

            {/* SMALL LINE */}
            <div
              className="
                mx-auto
                mt-8
                h-px
                w-14
                bg-blue-400/70
                lg:mx-0
              "
            />

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-white/55
                md:text-base
                md:leading-8
                lg:mx-0
              "
            >
              {lang === "en"
                ? "We provide corporate legal advisory, litigation support, tax planning, and compliance solutions to help businesses operate securely and scale sustainably."
                : "Kami menyediakan layanan hukum korporasi, litigasi, perencanaan pajak, dan kepatuhan untuk membantu bisnis berkembang secara aman dan berkelanjutan."}
            </p>

            {/* CTA */}
            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                gap-3
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >

              

              {/* WHATSAPP */}
              <a
                href={
                  lang === "en"
                    ? "https://wa.me/6282242887887?text=Hello%20Zaky%20Zhafran%20%26%20Partners%2C%20I%20would%20like%20to%20consult%20with%20your%20team."
                    : "https://wa.me/6282242887887?text=Halo%20Zaky%20Zhafran%20%26%20Partners%2C%20saya%20ingin%20berkonsultasi%20dengan%20tim%20Anda."
                }
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-7
                  py-3.5
                  text-xs
                  font-medium
                  tracking-[0.08em]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300/40
                  hover:bg-white/[0.08]
                  sm:w-auto
                "
              >
                WhatsApp

                <span
                  className="
                    text-white/40
                    transition
                    group-hover:translate-x-1
                    group-hover:text-blue-300
                  "
                >
                  ↗
                </span>
              </a>

            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                mx-auto
                mt-12
                grid
                max-w-lg
                grid-cols-3
                border-t
                border-white/10
                pt-6
                lg:mx-0
                lg:max-w-xl
              "
            >

              {/* CLIENTS */}
              <div className="text-center lg:text-left">
                <p
                  className="
                    text-2xl
                    font-light
                    tracking-[-0.03em]
                    text-white
                    md:text-3xl
                  "
                >
                  50+
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  {lang === "en" ? "Clients" : "Klien"}
                </p>
              </div>

              {/* CASES */}
              <div
                className="
                  border-l
                  border-white/10
                  text-center
                  lg:text-left
                  lg:pl-6
                "
              >
                <p
                  className="
                    text-2xl
                    font-light
                    tracking-[-0.03em]
                    text-white
                    md:text-3xl
                  "
                >
                  120+
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  {lang === "en" ? "Cases" : "Perkara"}
                </p>
              </div>

              {/* YEARS */}
              <div
                className="
                  border-l
                  border-white/10
                  text-center
                  lg:text-left
                  lg:pl-6
                "
              >
                <p
                  className="
                    text-2xl
                    font-light
                    tracking-[-0.03em]
                    text-white
                    md:text-3xl
                  "
                >
                  5+
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  {lang === "en" ? "Years" : "Tahun"}
                </p>
              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <div className="relative flex justify-center lg:justify-end">

            {/* OUTER GLOW */}
            <div
              className="
                absolute
                -inset-10
                rounded-[2rem]
                bg-blue-500/[0.08]
                blur-[80px]
              "
            />

            {/* DECORATIVE FRAME */}
            <div
              className="
                absolute
                -right-4
                -top-4
                hidden
                h-full
                w-[80%]
                rounded-[2rem]
                border
                border-blue-300/10
                lg:block
              "
            />

            {/* IMAGE WRAPPER */}
            <div
              className="
                relative
                w-full
                max-w-[420px]
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.04]
                p-2
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                backdrop-blur-md
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[1.15rem]">

                <img
                  src={heroImage}
                  alt="Zaky Zhafran"
                  className="
                    h-[430px]
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.025]
                    sm:h-[500px]
                  "
                />

                {/* IMAGE GRADIENT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0B1220]/90
                    via-transparent
                    to-transparent
                  "
                />

                {/* IMAGE LABEL */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                  "
                >
                  <div className="flex items-end justify-between gap-4">

                    <div>
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.28em]
                          text-blue-300
                        "
                      >
                        Managing Partner
                      </p>

                      <p
                        className="
                          mt-2
                          text-lg
                          font-light
                          tracking-[-0.02em]
                          text-white
                        "
                      >
                        Zaky Zhafran
                      </p>

                      <p className="mt-1 text-xs text-white/45">
                        Legal & Tax Advisory
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-white/10
                        text-sm
                        text-white
                        backdrop-blur-md
                      "
                    >
                      ↗
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* SMALL FLOATING LABEL */}
            <div
              className="
                absolute
                -bottom-5
                -left-2
                hidden
                rounded-xl
                border
                border-white/10
                bg-[#111B30]/90
                px-5
                py-4
                shadow-xl
                backdrop-blur-xl
                sm:block
                lg:-left-8
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                "
              >
                Firm
              </p>

              <p className="mt-1 text-xs font-medium text-white/80">
                Zaky Zhafran & Partners
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM INDICATOR
      ========================================================= */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          md:flex
        "
      >
        <span className="h-px w-8 bg-white/20" />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          Scroll to explore
        </span>

        <span className="h-px w-8 bg-white/20" />
      </div>

      {/* =========================================================
          MODAL
      ========================================================= */}

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[1000]
            flex
            items-center
            justify-center
            bg-black/70
            px-4
            backdrop-blur-sm
          "
          onClick={() => setOpen(false)}
        >
          <div
            className="
              w-full
              max-w-md
              overflow-hidden
              rounded-2xl
              bg-white
              text-[#0B1220]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="bg-[#0B1220] px-6 py-6 text-white">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-blue-300">
                    {lang === "en"
                      ? "Consultation"
                      : "Konsultasi"}
                  </p>

                  <h2 className="mt-2 text-xl font-light">
                    {lang === "en"
                      ? "Book Consultation"
                      : "Form Konsultasi"}
                  </h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/50
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  ×
                </button>

              </div>

            </div>

            {/* MODAL FORM */}
            <div className="p-6">

              <div className="space-y-4">

                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-600">
                    {lang === "en" ? "Name" : "Nama"}
                  </label>

                  <input
                    type="text"
                    placeholder={
                      lang === "en"
                        ? "Your name"
                        : "Nama Anda"
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#0B1220]
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-600">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#0B1220]
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-600">
                    {lang === "en"
                      ? "Message"
                      : "Pesan"}
                  </label>

                  <textarea
                    rows="4"
                    placeholder={
                      lang === "en"
                        ? "Tell us briefly about your legal needs..."
                        : "Jelaskan secara singkat kebutuhan hukum Anda..."
                    }
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-gray-200
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#0B1220]
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />
                </div>

              </div>

              {/* MODAL BUTTONS */}
              <div className="mt-6 flex gap-3">

                <button
                  className="
                    flex-1
                    rounded-full
                    bg-[#0B1220]
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#111B30]
                  "
                >
                  {lang === "en"
                    ? "Submit"
                    : "Kirim"}
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    flex-1
                    rounded-full
                    border
                    border-gray-200
                    px-5
                    py-3
                    text-xs
                    font-medium
                    text-gray-600
                    transition
                    hover:bg-gray-50
                  "
                >
                  {lang === "en"
                    ? "Close"
                    : "Tutup"}
                </button>

              </div>

              <p className="mt-5 text-center text-[10px] leading-5 text-gray-400">
                {lang === "en"
                  ? "Your consultation request will be reviewed by our team."
                  : "Permintaan konsultasi Anda akan ditinjau oleh tim kami."}
              </p>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}