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
    <div className="bg-white text-gray-900">

      {/* =========================================================
          LANGUAGE BUTTON
      ========================================================= */}
      <div className="fixed top-20 right-5 z-[999]">
        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="px-4 py-2 bg-black text-white rounded-full text-xs shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          aria-label="Change language"
        >
          {lang.toUpperCase()}
        </button>
      </div>

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[72vh] flex items-center bg-[#0B1220] text-white overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_42%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_45%)]" />

        {/* DECORATIVE CIRCLES */}
        <div className="absolute -top-32 -right-32 w-80 h-80 border border-white/5 rounded-full" />

        <div className="absolute -top-20 -right-20 w-56 h-56 border border-blue-400/10 rounded-full" />

        <div className="absolute bottom-[-120px] left-[-120px] w-72 h-72 border border-white/5 rounded-full" />

        {/* SMALL GLOW */}
        <div className="absolute top-32 left-[12%] w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-24 right-[15%] w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

        {/* HERO CONTENT */}
        <div className="relative max-w-7xl mx-auto w-full px-6 py-28">

          <div className="max-w-5xl">

            {/* EYEBROW */}
            <div className="flex items-center gap-4 mb-7">

              <div className="w-12 h-px bg-blue-400" />

              <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-blue-300">
                {lang === "en"
                  ? "Contact Our Firm"
                  : "Hubungi Kantor Kami"}
              </p>

            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">

              {lang === "en" ? (
                <>
                  Let’s discuss
                  <br />
                  <span className="text-blue-300">
                    what matters.
                  </span>
                </>
              ) : (
                <>
                  Mari bahas
                  <br />
                  <span className="text-blue-300">
                    kebutuhan Anda.
                  </span>
                </>
              )}

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-gray-300 text-sm md:text-base leading-7">

              {lang === "en"
                ? "Whether you are facing a legal dispute, planning a business transaction, managing tax obligations, or seeking strategic legal advice, our team is ready to understand your situation and discuss the appropriate next steps."
                : "Baik Anda sedang menghadapi sengketa hukum, merencanakan transaksi bisnis, mengelola kewajiban perpajakan, maupun membutuhkan konsultasi hukum strategis, tim kami siap memahami kebutuhan Anda dan membahas langkah yang tepat."}

            </p>

            {/* HERO CTA */}
            <div className="mt-10">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-7 py-3.5 rounded-full bg-white text-[#0B1220] text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
              >

                {lang === "en"
                  ? "Start a Consultation"
                  : "Mulai Konsultasi"}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

            </div>

            {/* HERO META */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                  {lang === "en" ? "Response" : "Respons"}
                </p>

                <p className="mt-2 text-sm text-gray-200">
                  {lang === "en"
                    ? "Professional & Confidential"
                    : "Profesional & Rahasia"}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                  {lang === "en" ? "Consultation" : "Konsultasi"}
                </p>

                <p className="mt-2 text-sm text-gray-200">
                  {lang === "en"
                    ? "By Appointment"
                    : "Berdasarkan Janji"}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                  {lang === "en" ? "Coverage" : "Layanan"}
                </p>

                <p className="mt-2 text-sm text-gray-200">
                  Legal & Tax Advisory
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="absolute bottom-0 left-0 right-0">

          <div className="max-w-7xl mx-auto px-6">

            <div className="border-t border-white/10" />

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="bg-[#F6F7FB] py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION INTRO */}
          <div className="max-w-3xl mb-16">

            <p className="text-xs tracking-[0.3em] uppercase text-blue-600 font-semibold">
              {lang === "en"
                ? "Connect With Us"
                : "Hubungi Kami"}
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-[#0B1220]">

              {lang === "en"
                ? "Let’s start the conversation."
                : "Mari mulai percakapan."}

            </h2>

            <p className="mt-5 text-sm md:text-base text-gray-600 leading-7 max-w-2xl">

              {lang === "en"
                ? "Choose the most convenient way to reach our team. For consultations, WhatsApp is the fastest way to arrange an appointment and discuss your initial needs."
                : "Pilih cara yang paling nyaman untuk menghubungi tim kami. Untuk konsultasi, WhatsApp merupakan cara tercepat untuk mengatur janji dan menyampaikan kebutuhan awal Anda."}

            </p>

          </div>


          {/* CONTACT GRID */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-start">


            {/* =====================================================
                LEFT — CONTACT DETAILS
            ===================================================== */}
            <div>

              <div className="border-t border-gray-300">


                {/* OFFICE */}
                <div className="py-8 border-b border-gray-300">

                  <div className="flex gap-5">

                    <div className="w-11 h-11 rounded-full bg-[#0B1220] text-white flex items-center justify-center text-sm shrink-0">
                      01
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        {lang === "en"
                          ? "Office"
                          : "Kantor"}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B1220]">
                        {lang === "en"
                          ? "Our Office"
                          : "Alamat Kantor"}
                      </h3>

                      <p className="mt-3 text-sm text-gray-600 leading-7">
                        Alamat Kantor Villa Bekasi Indah 1
                        <br />
                        Blok G1 No.2, Bekasi
                        <br />
                        Indonesia
                      </p>

                    </div>

                  </div>

                </div>


                {/* EMAIL */}
                <div className="py-8 border-b border-gray-300">

                  <div className="flex gap-5">

                    <div className="w-11 h-11 rounded-full bg-[#0B1220] text-white flex items-center justify-center text-sm shrink-0">
                      02
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Email
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B1220]">
                        {lang === "en"
                          ? "Email Us"
                          : "Email Kami"}
                      </h3>

                      <a
                        href="mailto:kingmada@zakyzhafran.com"
                        className="inline-block mt-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        kingmada@zakyzhafran.com
                      </a>

                    </div>

                  </div>

                </div>


                {/* WHATSAPP */}
                <div className="py-8 border-b border-gray-300">

                  <div className="flex gap-5">

                    <div className="w-11 h-11 rounded-full bg-[#0B1220] text-white flex items-center justify-center text-sm shrink-0">
                      03
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        {lang === "en"
                          ? "WhatsApp"
                          : "WhatsApp"}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B1220]">
                        {lang === "en"
                          ? "WhatsApp Consultation"
                          : "Konsultasi WhatsApp"}
                      </h3>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        +62 822-4288-7887
                      </a>

                    </div>

                  </div>

                </div>


                {/* AVAILABILITY */}
                <div className="py-8">

                  <div className="flex gap-5">

                    <div className="w-11 h-11 rounded-full bg-[#0B1220] text-white flex items-center justify-center text-sm shrink-0">
                      04
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        {lang === "en"
                          ? "Availability"
                          : "Ketersediaan"}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B1220]">
                        {lang === "en"
                          ? "Consultation by Appointment"
                          : "Konsultasi Berdasarkan Janji"}
                      </h3>

                      <p className="mt-3 text-sm text-gray-600 leading-7">
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
                  className="group inline-flex items-center gap-4 text-sm font-semibold text-[#0B1220] hover:text-blue-600 transition-colors"
                >

                  <span className="w-11 h-11 rounded-full bg-[#0B1220] text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    →
                  </span>

                  {lang === "en"
                    ? "Start a WhatsApp consultation"
                    : "Mulai konsultasi melalui WhatsApp"}

                </a>

              </div>

            </div>


            {/* =====================================================
                RIGHT — WHATSAPP CONSULTATION CARD
            ===================================================== */}
            <div>

              <div className="relative bg-[#0B1220] text-white rounded-[2rem] p-8 md:p-12 overflow-hidden min-h-[520px] flex items-center">

                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_45%)]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)]" />


                {/* DECORATIVE CIRCLES */}
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/5" />

                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-blue-400/10" />

                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-white/5" />


                {/* CARD CONTENT */}
                <div className="relative">

                  <div className="w-14 h-14 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center text-blue-300 text-xl">
                    ↗
                  </div>

                  <p className="mt-8 text-xs tracking-[0.3em] uppercase text-blue-300">
                    {lang === "en"
                      ? "Direct Consultation"
                      : "Konsultasi Langsung"}
                  </p>

                  <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">

                    {lang === "en"
                      ? "Discuss your matter directly with our team."
                      : "Diskusikan kebutuhan Anda langsung bersama tim kami."}

                  </h3>

                  <p className="mt-6 text-sm md:text-base text-gray-300 leading-7 max-w-lg">

                    {lang === "en"
                      ? "For a faster response, contact us through WhatsApp. You can briefly explain your legal or tax needs and arrange a consultation at a suitable time."
                      : "Untuk respons yang lebih cepat, hubungi kami melalui WhatsApp. Anda dapat menjelaskan secara singkat kebutuhan hukum atau perpajakan dan mengatur waktu konsultasi yang sesuai."}

                  </p>


                  {/* WHATSAPP BUTTON */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-4 mt-10 px-7 py-4 rounded-full bg-white text-[#0B1220] text-sm font-semibold hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
                  >

                    {lang === "en"
                      ? "Continue to WhatsApp"
                      : "Lanjut ke WhatsApp"}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </a>


                  {/* SMALL NOTE */}
                  <p className="mt-5 text-xs text-gray-500">
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

        <div className="max-w-7xl mx-auto px-6">

          <div className="border-t border-gray-200 pt-10">

            <div className="grid md:grid-cols-3 gap-10">

              {/* EMAIL */}
              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:kingmada@zakyzhafran.com"
                  className="block mt-3 text-lg font-semibold text-[#0B1220] hover:text-blue-600 transition-colors"
                >
                  kingmada@zakyzhafran.com
                </a>

              </div>


              {/* WHATSAPP */}
              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  WhatsApp
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-lg font-semibold text-[#0B1220] hover:text-blue-600 transition-colors"
                >
                  +62 822-4288-7887
                </a>

              </div>


              {/* LOCATION */}
              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  {lang === "en"
                    ? "Location"
                    : "Lokasi"}
                </p>

                <p className="mt-3 text-lg font-semibold text-[#0B1220]">
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
      <div className="bg-[#0B1220]">

        <section className="relative py-28 text-white text-center overflow-hidden">

          {/* GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]" />


          {/* DECORATIVE ELEMENTS */}
          <div className="absolute top-8 left-8 w-32 h-32 border border-white/5 rounded-full" />

          <div className="absolute top-20 left-20 w-20 h-20 border border-blue-400/10 rounded-full" />

          <div className="absolute bottom-8 right-8 w-40 h-40 border border-white/5 rounded-full" />

          <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/10 rounded-full" />


          {/* CONTENT */}
          <div className="relative max-w-4xl mx-auto px-6">

            <p className="text-xs tracking-[0.3em] uppercase text-blue-300">
              {lang === "en"
                ? "Ready When You Are"
                : "Kami Siap Membantu"}
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">

              {lang === "en"
                ? "Protect what you’ve built."
                : "Lindungi apa yang telah Anda bangun."}

            </h2>

            <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">

              {lang === "en"
                ? "Discuss your legal or tax needs with our team and explore a strategic approach tailored to your situation."
                : "Diskusikan kebutuhan hukum atau perpajakan Anda bersama tim kami dan temukan pendekatan strategis yang sesuai dengan kondisi Anda."}

            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 mt-10 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
            >

              {lang === "en"
                ? "Schedule Consultation"
                : "Jadwalkan Konsultasi"}

              <span>
                →
              </span>

            </a>

          </div>

        </section>


        {/* FOOTER */}
        <Footer />

      </div>

    </div>
  );
}