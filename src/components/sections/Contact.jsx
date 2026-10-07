import { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";

export default function Contact({ lang }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phone = "6282242887887";
  const email = "kingmada@zakyzhafran.com";

  const sendWA = () => {
    const text = `
Nama: ${form.name}
Email: ${form.email}
Pesan: ${form.message}
    `;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const sendEmail = () => {
    const subject =
      lang === "en"
        ? "Legal Consultation Request"
        : "Permintaan Konsultasi Hukum";

    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F6EF] py-24 md:py-32"
    >
      {/* =========================================================
          BACKGROUND
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
          bg-[#C45A70]/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#0B4F32]/[0.035]
          blur-[120px]
        "
      />

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-24
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[#0B4F32]/[0.04]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-5
          top-40
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-[#A92F46]/[0.04]
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
                  ? "06 / LEGAL CONSULTATION"
                  : "06 / KONSULTASI HUKUM"}
              </p>

            </div>

            {/* Main Heading */}

            <h2
              className="
                mt-6
                max-w-3xl
                text-3xl
                font-light
                uppercase
                leading-[1.08]
                tracking-[-0.04em]
                text-[#0B4F32]
                sm:text-4xl
                md:text-5xl
              "
            >
              {lang === "en"
                ? "SPEAK WITH OUR LEGAL EXPERTS."
                : "KONSULTASIKAN KEBUTUHAN HUKUM ANDA."}
            </h2>

            {/* Divider */}

            <div className="mt-7 h-px w-16 bg-[#A92F46]" />

            {/* Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-[#68736D]
                md:text-base
                md:leading-8
              "
            >
              {lang === "en"
                ? "We help businesses and individuals navigate legal, tax, and compliance matters with clarity, confidence, and practical strategic advice."
                : "Kami membantu bisnis dan individu menghadapi kebutuhan hukum, perpajakan, dan kepatuhan melalui solusi yang jelas, strategis, dan praktis."}
            </p>

          </div>
        </ScrollReveal>

        {/* =======================================================
            MAIN CONTACT GRID
        ======================================================= */}

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* =====================================================
              LEFT — CONTACT INFORMATION
          ===================================================== */}

          <ScrollReveal>

            <div
              className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-[#155D40]
                via-[#0B4F32]
                to-[#073923]
                p-7
                md:p-9
                lg:p-10
              "
            >

              {/* Pink Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-28
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-[#C45A70]/10
                  blur-[90px]
                "
              />

              {/* Decorative Circles */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  top-16
                  h-52
                  w-52
                  rounded-full
                  border
                  border-white/[0.05]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-5
                  top-28
                  h-32
                  w-32
                  rounded-full
                  border
                  border-[#E1A7B1]/[0.06]
                "
              />

              {/* Decorative Number */}

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
                06
              </span>

              <div className="relative">

                {/* Label */}

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
                    ? "DIRECT CONTACT"
                    : "KONTAK LANGSUNG"}
                </p>

                {/* Main Heading */}

                <h3
                  className="
                    mt-5
                    max-w-md
                    text-2xl
                    font-light
                    uppercase
                    leading-tight
                    tracking-[-0.035em]
                    text-white
                    md:text-3xl
                  "
                >
                  {lang === "en"
                    ? "LET'S DISCUSS WHAT MATTERS TO YOUR BUSINESS."
                    : "MARI MEMBAHAS KEBUTUHAN YANG PENTING BAGI BISNIS ANDA."}
                </h3>

                {/* Accent */}

                <div className="mt-7 h-px w-12 bg-[#D37A8A]" />

                {/* Description */}

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
                    ? "Start with a confidential conversation and let us understand your legal, tax, or compliance needs."
                    : "Mulailah dengan percakapan yang bersifat rahasia dan biarkan kami memahami kebutuhan hukum, pajak, atau kepatuhan Anda."}
                </p>

              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================= */}

              <div
                className="
                  relative
                  mt-10
                  border-t
                  border-white/10
                  pt-7
                "
              >

                <div className="space-y-5">

                  {/* TRUST 1 */}

                  <div className="flex items-start gap-4">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-white/10
                        text-[9px]
                        text-[#E1A7B1]
                      "
                    >
                      01
                    </span>

                    <div>

                      <p className="text-xs font-medium text-white/80">
                        {lang === "en"
                          ? "Confidential consultation"
                          : "Konsultasi rahasia"}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-white/35">
                        {lang === "en"
                          ? "Your initial discussion is handled with discretion."
                          : "Pembahasan awal Anda ditangani secara profesional dan rahasia."}
                      </p>

                    </div>

                  </div>

                  {/* TRUST 2 */}

                  <div className="flex items-start gap-4">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-white/10
                        text-[9px]
                        text-[#E1A7B1]
                      "
                    >
                      02
                    </span>

                    <div>

                      <p className="text-xs font-medium text-white/80">
                        {lang === "en"
                          ? "Corporate & personal support"
                          : "Pendampingan korporasi & personal"}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-white/35">
                        {lang === "en"
                          ? "Legal support tailored to your specific situation."
                          : "Pendampingan hukum disesuaikan dengan kebutuhan Anda."}
                      </p>

                    </div>

                  </div>

                  {/* TRUST 3 */}

                  <div className="flex items-start gap-4">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-white/10
                        text-[9px]
                        text-[#E1A7B1]
                      "
                    >
                      03
                    </span>

                    <div>

                      <p className="text-xs font-medium text-white/80">
                        {lang === "en"
                          ? "Responsive communication"
                          : "Komunikasi responsif"}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-white/35">
                        {lang === "en"
                          ? "Fast communication for time-sensitive matters."
                          : "Komunikasi cepat untuk kebutuhan yang membutuhkan respons segera."}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div
                className="
                  relative
                  mt-10
                  border-t
                  border-white/10
                  pt-7
                "
              >

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  {lang === "en"
                    ? "CONTACT DETAILS"
                    : "DETAIL KONTAK"}
                </p>

                <div className="mt-5 space-y-4">

                  {/* ADDRESS */}

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                      {lang === "en"
                        ? "Office"
                        : "Kantor"}
                    </p>

                    <p className="mt-1 text-xs leading-6 text-white/55">
                      Villa Bekasi Indah 1 Blok G1 No.2,
                      <br />
                      Bekasi, Indonesia
                    </p>

                  </div>

                  {/* PHONE */}

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                      {lang === "en"
                        ? "Phone"
                        : "Telepon"}
                    </p>

                    <a
                      href={`https://wa.me/${phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-1
                        inline-block
                        text-xs
                        text-white/60
                        transition
                        hover:text-[#E1A7B1]
                      "
                    >
                      +62 822-4288-7887
                    </a>

                  </div>

                  {/* EMAIL */}

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                      Email
                    </p>

                    <a
                      href={`mailto:${email}`}
                      className="
                        mt-1
                        inline-block
                        break-all
                        text-xs
                        text-white/60
                        transition
                        hover:text-[#E1A7B1]
                      "
                    >
                      {email}
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </ScrollReveal>

          {/* =====================================================
              RIGHT — CONSULTATION FORM
          ===================================================== */}

          <ScrollReveal delay={0.12}>

            <div className="relative">

              {/* Vertical Line */}

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
                  via-[#D9D7CF]
                  to-transparent
                  lg:block
                "
              />

              {/* =================================================
                  FORM CONTAINER
              ================================================= */}

              <div
                className="
                  border
                  border-[#D9D7CF]
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(11,79,50,0.06)]
                  sm:p-8
                  md:p-10
                "
              >

                {/* =================================================
                    FORM HEADER
                ================================================= */}

                <div>

                  <div className="flex items-center gap-3">

                    <span className="h-px w-8 bg-[#A92F46]" />

                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#A92F46]
                      "
                    >
                      {lang === "en"
                        ? "REQUEST CONSULTATION"
                        : "PERMINTAAN KONSULTASI"}
                    </p>

                  </div>

                  <h3
                    className="
                      mt-5
                      text-2xl
                      font-light
                      uppercase
                      tracking-[-0.03em]
                      text-[#0B4F32]
                      md:text-3xl
                    "
                  >
                    {lang === "en"
                      ? "TELL US HOW WE CAN HELP."
                      : "SAMPAIKAN KEBUTUHAN HUKUM ANDA."}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-7
                      text-[#68736D]
                    "
                  >
                    {lang === "en"
                      ? "Provide a few details below. You can continue the conversation directly through WhatsApp or email."
                      : "Berikan beberapa informasi berikut. Anda dapat melanjutkan komunikasi secara langsung melalui WhatsApp atau email."}
                  </p>

                </div>

                {/* FORM DIVIDER */}

                <div className="mt-8 border-t border-[#E8E5DC]" />

                {/* =================================================
                    SECTION 01 — YOUR DETAILS
                ================================================= */}

                <div className="mt-8">

                  <div className="mb-5 flex items-center gap-3">

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.22em]
                        text-[#B8B5AC]
                      "
                    >
                      01
                    </span>

                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#AAA79E]
                      "
                    >
                      {lang === "en"
                        ? "YOUR DETAILS"
                        : "DATA ANDA"}
                    </p>

                  </div>

                  <div className="space-y-5">

                    {/* NAME */}

                    <div>

                      <label
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#16251F]
                        "
                      >
                        {lang === "en"
                          ? "Full Name"
                          : "Nama Lengkap"}
                      </label>

                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value,
                          })
                        }
                        placeholder={
                          lang === "en"
                            ? "Enter your full name"
                            : "Masukkan nama lengkap Anda"
                        }
                        className="
                          w-full
                          border
                          border-[#D9D7CF]
                          bg-[#F8F6EF]
                          px-4
                          py-3.5
                          text-sm
                          text-[#16251F]
                          outline-none
                          placeholder:text-[#AAA79E]
                          transition
                          duration-300
                          hover:border-[#B8B5AC]
                          focus:border-[#A92F46]
                          focus:bg-white
                          focus:ring-2
                          focus:ring-[#A92F46]/10
                        "
                      />

                    </div>

                    {/* EMAIL */}

                    <div>

                      <label
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#16251F]
                        "
                      >
                        Email
                      </label>

                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        placeholder="your@email.com"
                        className="
                          w-full
                          border
                          border-[#D9D7CF]
                          bg-[#F8F6EF]
                          px-4
                          py-3.5
                          text-sm
                          text-[#16251F]
                          outline-none
                          placeholder:text-[#AAA79E]
                          transition
                          duration-300
                          hover:border-[#B8B5AC]
                          focus:border-[#A92F46]
                          focus:bg-white
                          focus:ring-2
                          focus:ring-[#A92F46]/10
                        "
                      />

                    </div>

                  </div>

                </div>

                {/* =================================================
                    SECTION 02 — YOUR MATTER
                ================================================= */}

                <div className="mt-9">

                  <div className="mb-5 flex items-center gap-3">

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.22em]
                        text-[#B8B5AC]
                      "
                    >
                      02
                    </span>

                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#AAA79E]
                      "
                    >
                      {lang === "en"
                        ? "YOUR MATTER"
                        : "KEBUTUHAN ANDA"}
                    </p>

                  </div>

                  {/* MESSAGE */}

                  <div>

                    <label
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-[#16251F]
                      "
                    >
                      {lang === "en"
                        ? "How can we help?"
                        : "Bagaimana kami dapat membantu?"}
                    </label>

                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      placeholder={
                        lang === "en"
                          ? "Briefly describe your legal, tax, or business matter..."
                          : "Jelaskan secara singkat kebutuhan hukum, pajak, atau bisnis Anda..."
                      }
                      className="
                        h-36
                        w-full
                        resize-none
                        border
                        border-[#D9D7CF]
                        bg-[#F8F6EF]
                        p-4
                        text-sm
                        leading-7
                        text-[#16251F]
                        outline-none
                        placeholder:text-[#AAA79E]
                        transition
                        duration-300
                        hover:border-[#B8B5AC]
                        focus:border-[#A92F46]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#A92F46]/10
                      "
                    />

                  </div>

                </div>

                {/* =================================================
                    ACTION AREA
                ================================================= */}

                <div className="mt-8 border-t border-[#E8E5DC] pt-7">

                  {/* PRIMARY BUTTON */}

                  <button
                    onClick={sendWA}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      border
                      border-[#0B4F32]
                      bg-[#0B4F32]
                      px-5
                      py-4
                      text-left
                      text-sm
                      font-medium
                      text-white
                      transition
                      duration-300
                      hover:border-[#A92F46]
                      hover:bg-[#A92F46]
                    "
                  >

                    <div>

                      <p className="font-medium">
                        {lang === "en"
                          ? "Continue via WhatsApp"
                          : "Lanjutkan via WhatsApp"}
                      </p>

                      <p className="mt-1 text-[10px] text-white/40">
                        {lang === "en"
                          ? "Fastest way to reach our team"
                          : "Cara tercepat untuk menghubungi tim kami"}
                      </p>

                    </div>

                    <span
                      className="
                        text-lg
                        transition
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>

                  </button>

                  {/* SECONDARY ACTIONS */}

                  <div
                    className="
                      mt-3
                      grid
                      grid-cols-2
                      border
                      border-[#D9D7CF]
                    "
                  >

                    <button
                      onClick={sendWA}
                      className="
                        border-r
                        border-[#D9D7CF]
                        py-3.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#68736D]
                        transition
                        hover:bg-[#0B4F32]
                        hover:text-white
                      "
                    >
                      WhatsApp
                    </button>

                    <button
                      onClick={sendEmail}
                      className="
                        py-3.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#68736D]
                        transition
                        hover:bg-[#0B4F32]
                        hover:text-white
                      "
                    >
                      Email
                    </button>

                  </div>

                  {/* Privacy note */}

                  <p
                    className="
                      mt-5
                      text-center
                      text-[10px]
                      leading-5
                      text-[#AAA79E]
                    "
                  >
                    {lang === "en"
                      ? "Your information will be handled with confidentiality and discretion."
                      : "Informasi Anda akan ditangani secara rahasia dan profesional."}
                  </p>

                </div>

              </div>

            </div>

          </ScrollReveal>

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
              border-[#D9D7CF]
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
                text-[#8A8F8A]
              "
            >
              {lang === "en"
                ? "Your legal matter deserves clarity, discretion, and a strategic approach."
                : "Kebutuhan hukum Anda membutuhkan kejelasan, kerahasiaan, dan pendekatan yang strategis."}
            </p>

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#A92F46]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
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
  );
}