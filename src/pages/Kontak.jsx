import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  const [lang, setLang] = useState("en");

  const whatsappMessage =
    lang === "en"
      ? "Hello Zaky Zhafran & Partners, I would like to discuss a legal or tax matter and schedule a consultation."
      : "Halo Zaky Zhafran & Partners, saya ingin berkonsultasi mengenai kebutuhan hukum atau perpajakan dan mengatur jadwal konsultasi.";

  const whatsappUrl = `https://wa.me/6282242887887?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F6EF] text-[#16251F]">
      <Navbar />

      {/* =========================================================
          LANGUAGE BUTTON
      ========================================================= */}
      <div className="fixed right-5 top-[78px] z-[998] sm:right-8 lg:right-12">
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          aria-label="Change language"
          className="rounded-full border border-[#0B4F32]/20 bg-[#F8F6EF]/95 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B4F32] shadow-[0_8px_25px_rgba(11,79,50,0.12)] backdrop-blur-md transition duration-300 hover:border-[#A92F46]/50 hover:bg-white hover:text-[#A92F46]"
        >
          {lang === "en" ? "ID" : "EN"}
        </button>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B4F32] text-white">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923]" />

        {/* SOFT LIGHT */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#A92F46]/10 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#D9A0AA]/[0.06] blur-3xl" />

        {/* =====================================================
            BOTANICAL LINE ART — RIGHT
        ===================================================== */}

        {/* LARGE CURVED STEM */}
        <svg
          className="pointer-events-none absolute right-[-30px] top-[-40px] hidden h-[650px] w-[500px] opacity-60 lg:block"
          viewBox="0 0 500 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M430 20C390 130 330 180 300 270C265 375 300 470 185 620"
            stroke="#D9A0AA"
            strokeWidth="1"
            strokeOpacity="0.35"
          />

          <path
            d="M455 0C430 120 370 180 350 275C330 370 360 455 250 610"
            stroke="#A92F46"
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          <path
            d="M315 225C270 190 225 190 195 215C235 230 270 235 315 225Z"
            stroke="#D9A0AA"
            strokeWidth="1"
            strokeOpacity="0.45"
          />

          <path
            d="M350 275C395 235 425 235 460 255C425 275 390 282 350 275Z"
            stroke="#D9A0AA"
            strokeWidth="1"
            strokeOpacity="0.35"
          />

          <path
            d="M285 355C240 325 205 330 175 355C215 365 250 368 285 355Z"
            stroke="#A92F46"
            strokeWidth="1"
            strokeOpacity="0.45"
          />

          <path
            d="M320 425C365 385 405 390 435 415C395 435 355 438 320 425Z"
            stroke="#D9A0AA"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          <path
            d="M245 505C205 475 170 480 140 505C175 518 210 518 245 505Z"
            stroke="#D9A0AA"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
        </svg>

        {/* SECOND FINE LINE */}
        <svg
          className="pointer-events-none absolute bottom-[-80px] right-[12%] hidden h-[430px] w-[280px] opacity-40 lg:block"
          viewBox="0 0 280 430"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M245 0C190 80 170 140 175 205C180 285 120 350 40 430"
            stroke="#F8F6EF"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          <path
            d="M180 150C135 120 100 125 70 150C110 160 145 160 180 150Z"
            stroke="#A92F46"
            strokeWidth="1"
            strokeOpacity="0.45"
          />

          <path
            d="M175 220C220 190 250 195 275 215C240 230 205 230 175 220Z"
            stroke="#D9A0AA"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          <path
            d="M125 300C85 275 50 280 25 305C60 315 95 315 125 300Z"
            stroke="#D9A0AA"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>

        {/* SUBTLE ARCH */}
        <div className="absolute bottom-0 right-[-5%] top-[8%] hidden w-[42%] rounded-t-[260px] border border-[#D9A0AA]/15 bg-[#123F2D]/20 lg:block" />

        <div className="absolute bottom-0 right-[3%] top-[14%] hidden w-[34%] rounded-t-[230px] border border-white/[0.05] lg:block" />

        {/* HERO CONTENT */}
        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 sm:py-32 lg:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            {/* =====================================================
                LEFT
            ===================================================== */}
            <div className="max-w-4xl">
              {/* EYEBROW */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[#A92F46]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D9A0AA] sm:text-xs">
                  {lang === "en"
                    ? "Contact Our Firm"
                    : "Hubungi Kantor Kami"}
                </p>
              </div>

              {/* TITLE */}
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
                {lang === "en" ? (
                  <>
                    Let’s discuss
                    <br />
                    <span className="text-[#D9A0AA]">
                      what matters.
                    </span>
                  </>
                ) : (
                  <>
                    Mari bahas
                    <br />
                    <span className="text-[#D9A0AA]">
                      kebutuhan Anda.
                    </span>
                  </>
                )}
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                {lang === "en"
                  ? "Whether you are facing a legal dispute, planning a business transaction, managing tax obligations, or seeking strategic legal advice, our team is ready to understand your situation and discuss the appropriate next steps."
                  : "Baik Anda sedang menghadapi sengketa hukum, merencanakan transaksi bisnis, mengelola kewajiban perpajakan, maupun membutuhkan konsultasi hukum strategis, tim kami siap memahami kebutuhan Anda dan membahas langkah yang tepat."}
              </p>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#F8F6EF] px-7 py-3.5 text-sm font-semibold text-[#0B4F32] shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition duration-300 hover:bg-[#A92F46] hover:text-white"
                >
                  {lang === "en"
                    ? "Start a Consultation"
                    : "Mulai Konsultasi"}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* META */}
              <div className="mt-14 grid max-w-3xl grid-cols-1 border-t border-white/10 pt-7 sm:grid-cols-3">
                <div className="pb-5 sm:pb-0">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                    {lang === "en" ? "Response" : "Respons"}
                  </p>

                  <p className="mt-2 text-sm text-white/75">
                    {lang === "en"
                      ? "Professional & Confidential"
                      : "Profesional & Rahasia"}
                  </p>
                </div>

                <div className="border-white/10 pb-5 sm:border-l sm:pl-6 sm:pb-0">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                    {lang === "en" ? "Consultation" : "Konsultasi"}
                  </p>

                  <p className="mt-2 text-sm text-white/75">
                    {lang === "en"
                      ? "By Appointment"
                      : "Berdasarkan Janji"}
                  </p>
                </div>

                <div className="border-white/10 sm:border-l sm:pl-6">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                    {lang === "en" ? "Coverage" : "Layanan"}
                  </p>

                  <p className="mt-2 text-sm text-white/75">
                    Legal & Tax Advisory
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT — MINIMAL BOTANICAL COMPOSITION
            ===================================================== */}
            <div className="relative hidden min-h-[500px] lg:block">
              {/* LARGE ARCH */}
              <div className="absolute bottom-0 left-[10%] right-[4%] top-[8%] rounded-t-[270px] border border-[#D9A0AA]/20 bg-[#123F2D]/15" />

              {/* INNER ARCH */}
              <div className="absolute bottom-[5%] left-[18%] right-[12%] top-[15%] rounded-t-[235px] border border-white/[0.06]" />

              {/* ABSTRACT CURVES */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M365 25C315 100 285 155 295 225C305 310 265 385 160 475"
                  stroke="#A92F46"
                  strokeWidth="1"
                  strokeOpacity="0.65"
                />

                <path
                  d="M395 45C350 115 330 165 340 225C350 300 320 355 220 455"
                  stroke="#D9A0AA"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />

                <path
                  d="M292 190C245 160 205 165 175 195C215 205 255 204 292 190Z"
                  stroke="#D9A0AA"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                />

                <path
                  d="M340 260C385 225 420 230 455 255C415 270 375 272 340 260Z"
                  stroke="#A92F46"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                />

                <path
                  d="M270 335C225 305 190 310 155 340C195 348 235 348 270 335Z"
                  stroke="#D9A0AA"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />

                <path
                  d="M295 395C340 365 375 370 405 395C370 408 330 408 295 395Z"
                  stroke="#D9A0AA"
                  strokeWidth="1"
                  strokeOpacity="0.35"
                />
              </svg>

              {/* SMALL BURGUNDY DETAIL */}
              <div className="absolute bottom-[16%] left-[13%] h-px w-20 bg-[#A92F46]/60" />

              <div className="absolute bottom-[16%] right-[12%] h-px w-12 bg-[#D9A0AA]/30" />

              <div className="absolute left-[15%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#A92F46]/60" />
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="bg-[#F8F6EF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* SECTION INTRO */}
          <div className="mb-16 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A92F46]">
              {lang === "en" ? "Connect With Us" : "Hubungi Kami"}
            </p>

            <h2 className="mt-4 font-serif text-4xl tracking-tight text-[#0B4F32] md:text-5xl">
              {lang === "en"
                ? "Let’s start the conversation."
                : "Mari mulai percakapan."}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#16251F]/60 md:text-base">
              {lang === "en"
                ? "Choose the most convenient way to reach our team. For consultations, WhatsApp is the fastest way to arrange an appointment and discuss your initial needs."
                : "Pilih cara yang paling nyaman untuk menghubungi tim kami. Untuk konsultasi, WhatsApp merupakan cara tercepat untuk mengatur janji dan menyampaikan kebutuhan awal Anda."}
            </p>
          </div>

          {/* CONTACT GRID */}
          <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* LEFT */}
            <div>
              <div className="border-t border-[#0B4F32]/15">
                {/* OFFICE */}
                <div className="border-b border-[#0B4F32]/15 py-8">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B4F32] text-xs text-[#D9A0AA]">
                      01
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#16251F]/35">
                        {lang === "en" ? "Office" : "Kantor"}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B4F32]">
                        {lang === "en" ? "Our Office" : "Alamat Kantor"}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#16251F]/60">
                        Villa Bekasi Indah 1
                        <br />
                        Blok G1 No.2, Bekasi
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="border-b border-[#0B4F32]/15 py-8">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B4F32] text-xs text-[#D9A0AA]">
                      02
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#16251F]/35">
                        Email
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B4F32]">
                        {lang === "en" ? "Email Us" : "Email Kami"}
                      </h3>

                      <a
                        href="mailto:kingmada@zakyzhafran.com"
                        className="mt-3 inline-block text-sm text-[#16251F]/60 transition-colors hover:text-[#A92F46]"
                      >
                        kingmada@zakyzhafran.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WHATSAPP */}
                <div className="border-b border-[#0B4F32]/15 py-8">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B4F32] text-xs text-[#D9A0AA]">
                      03
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#16251F]/35">
                        WhatsApp
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B4F32]">
                        {lang === "en"
                          ? "WhatsApp Consultation"
                          : "Konsultasi WhatsApp"}
                      </h3>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm text-[#16251F]/60 transition-colors hover:text-[#A92F46]"
                      >
                        +62 822-4288-7887
                      </a>
                    </div>
                  </div>
                </div>

                {/* AVAILABILITY */}
                <div className="py-8">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B4F32] text-xs text-[#D9A0AA]">
                      04
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#16251F]/35">
                        {lang === "en"
                          ? "Availability"
                          : "Ketersediaan"}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B4F32]">
                        {lang === "en"
                          ? "Consultation by Appointment"
                          : "Konsultasi Berdasarkan Janji"}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#16251F]/60">
                        {lang === "en"
                          ? "Please contact our team through WhatsApp or email to arrange a suitable consultation schedule."
                          : "Silakan hubungi tim kami melalui WhatsApp atau email untuk mengatur jadwal konsultasi yang sesuai."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHATSAPP LINK */}
              <div className="mt-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-sm font-semibold text-[#0B4F32] transition-colors hover:text-[#A92F46]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B4F32] text-white transition duration-300 group-hover:bg-[#A92F46]">
                    →
                  </span>

                  {lang === "en"
                    ? "Start a WhatsApp consultation"
                    : "Mulai konsultasi melalui WhatsApp"}
                </a>
              </div>
            </div>

            {/* =====================================================
                RIGHT — CONSULTATION CARD
            ===================================================== */}
            <div>
              <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#0B4F32] p-8 text-white md:p-12">
                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923]" />

                {/* ORGANIC LINE ART */}
                <svg
                  className="pointer-events-none absolute bottom-[-30px] right-[-20px] h-[440px] w-[380px] opacity-60"
                  viewBox="0 0 380 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M350 10C290 80 255 150 270 215C285 290 240 365 110 440"
                    stroke="#D9A0AA"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                  />

                  <path
                    d="M320 50C275 110 250 160 255 220C260 280 220 345 130 405"
                    stroke="#A92F46"
                    strokeWidth="1"
                    strokeOpacity="0.55"
                  />

                  <path
                    d="M265 175C220 145 185 150 155 175C195 185 230 185 265 175Z"
                    stroke="#D9A0AA"
                    strokeWidth="1"
                    strokeOpacity="0.35"
                  />

                  <path
                    d="M260 235C305 205 340 210 370 235C330 250 295 250 260 235Z"
                    stroke="#A92F46"
                    strokeWidth="1"
                    strokeOpacity="0.45"
                  />

                  <path
                    d="M220 310C180 280 145 285 115 310C150 322 190 322 220 310Z"
                    stroke="#D9A0AA"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                </svg>

                {/* ARCH */}
                <div className="absolute bottom-[-15%] right-[-8%] h-[80%] w-[72%] rounded-t-[220px] border border-[#D9A0AA]/15" />

                {/* CONTENT */}
                <div className="relative max-w-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#A92F46]/40 bg-[#A92F46]/10 text-xl text-[#D9A0AA]">
                    ↗
                  </div>

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9A0AA]">
                    {lang === "en"
                      ? "Direct Consultation"
                      : "Konsultasi Langsung"}
                  </p>

                  <h3 className="mt-4 max-w-lg font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                    {lang === "en"
                      ? "Discuss your matter directly with our team."
                      : "Diskusikan kebutuhan Anda langsung bersama tim kami."}
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 md:text-base">
                    {lang === "en"
                      ? "For a faster response, contact us through WhatsApp. You can briefly explain your legal or tax needs and arrange a consultation at a suitable time."
                      : "Untuk respons yang lebih cepat, hubungi kami melalui WhatsApp. Anda dapat menjelaskan secara singkat kebutuhan hukum atau perpajakan dan mengatur waktu konsultasi yang sesuai."}
                  </p>

                  {/* BUTTON */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-10 inline-flex items-center justify-center gap-4 rounded-full bg-[#F8F6EF] px-7 py-4 text-sm font-semibold text-[#0B4F32] shadow-xl transition duration-300 hover:bg-[#A92F46] hover:text-white"
                  >
                    {lang === "en"
                      ? "Continue to WhatsApp"
                      : "Lanjut ke WhatsApp"}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <p className="mt-5 text-xs text-white/35">
                    {lang === "en"
                      ? "Professional and confidential communication."
                      : "Komunikasi profesional dan rahasia."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT HIGHLIGHT
      ========================================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-[#0B4F32]/15 pt-10">
            <div className="grid gap-10 md:grid-cols-3">
              {/* EMAIL */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#16251F]/35">
                  Email
                </p>

                <a
                  href="mailto:kingmada@zakyzhafran.com"
                  className="mt-3 block text-lg font-semibold text-[#0B4F32] transition-colors hover:text-[#A92F46]"
                >
                  kingmada@zakyzhafran.com
                </a>
              </div>

              {/* WHATSAPP */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#16251F]/35">
                  WhatsApp
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-lg font-semibold text-[#0B4F32] transition-colors hover:text-[#A92F46]"
                >
                  +62 822-4288-7887
                </a>
              </div>

              {/* LOCATION */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#16251F]/35">
                  {lang === "en" ? "Location" : "Lokasi"}
                </p>

                <p className="mt-3 text-lg font-semibold text-[#0B4F32]">
                  Bekasi, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DARK CTA + FOOTER
      ========================================================= */}
      <div className="bg-[#073923]">
        <section className="relative overflow-hidden py-28 text-center text-white">
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B4F32] via-[#073923] to-[#05291A]" />

          {/* BOTANICAL LINES */}
          <svg
            className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[520px] w-[650px] -translate-x-1/2 opacity-50"
            viewBox="0 0 650 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70 520C190 430 245 350 285 260C320 180 390 100 575 20"
              stroke="#A92F46"
              strokeWidth="1"
              strokeOpacity="0.3"
            />

            <path
              d="M120 520C220 430 280 360 315 275C350 190 420 120 610 45"
              stroke="#D9A0AA"
              strokeWidth="1"
              strokeOpacity="0.2"
            />

            <path
              d="M290 260C250 230 210 235 175 265C215 275 255 275 290 260Z"
              stroke="#D9A0AA"
              strokeWidth="1"
              strokeOpacity="0.3"
            />

            <path
              d="M350 190C395 160 435 165 470 190C430 205 390 205 350 190Z"
              stroke="#A92F46"
              strokeWidth="1"
              strokeOpacity="0.35"
            />

            <path
              d="M230 355C190 325 150 330 120 355C160 365 200 365 230 355Z"
              stroke="#D9A0AA"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
          </svg>

          {/* CONTENT */}
          <div className="relative mx-auto max-w-4xl px-6">
            <div className="mx-auto h-px w-12 bg-[#A92F46]" />

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9A0AA]">
              {lang === "en"
                ? "Ready When You Are"
                : "Kami Siap Membantu"}
            </p>

            <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl">
              {lang === "en"
                ? "Protect what you’ve built."
                : "Lindungi apa yang telah Anda bangun."}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              {lang === "en"
                ? "Discuss your legal or tax needs with our team and explore a strategic approach tailored to your situation."
                : "Diskusikan kebutuhan hukum atau perpajakan Anda bersama tim kami dan temukan pendekatan strategis yang sesuai dengan kondisi Anda."}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#F8F6EF] px-8 py-4 font-medium text-[#0B4F32] shadow-xl transition duration-300 hover:bg-[#A92F46] hover:text-white"
            >
              {lang === "en"
                ? "Schedule Consultation"
                : "Jadwalkan Konsultasi"}

              <span>→</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}