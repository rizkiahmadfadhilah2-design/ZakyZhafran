import { useEffect, useState } from "react";

// 🔥 IMPORT FOTO LOCAL
import heroImage from "../../assets/ZakyZhafran.jpeg";

export default function Hero({ lang }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0B1220] text-white overflow-hidden">

      {/* SAFE OFFSET NAVBAR */}
      <div className="pt-24 md:pt-28" />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-60 md:w-[500px] h-60 md:h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-80px] md:top-[-120px] right-[-80px] md:right-[-120px]" />
      <div className="absolute w-56 md:w-[400px] h-56 md:h-[400px] bg-yellow-500/10 blur-3xl rounded-full bottom-[-80px] md:bottom-[-120px] left-[-80px] md:left-[-120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <div className="mb-4 inline-flex items-center gap-2 text-[10px] sm:text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
            {lang === "en"
              ? "Trusted Legal & Tax Consultant"
              : "Konsultan Hukum & Pajak Terpercaya"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            {lang === "en"
              ? "Strategic Legal & Tax Solutions for Business Growth"
              : "Solusi Hukum & Pajak Strategis untuk Pertumbuhan Bisnis"}
          </h1>

          <p className="text-gray-300 mt-5 sm:mt-6 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            {lang === "en"
              ? "We are a law firm providing legal and tax advisory services to individuals and businesses. We help our clients navigate legal and tax matters, minimize risks, and build strong legal foundations for sustainable growth."
              : "Kami memberikan solusi hukum dan perpajakan yang strategis untuk membantu klien melindungi kepentingan, meminimalkan risiko, dan membangun bisnis yang berkelanjutan."}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center md:text-left text-sm text-gray-300">
            <div>
              <p className="text-white text-lg font-semibold">50+</p>
              <p>Clients</p>
            </div>
            <div>
              <p className="text-white text-lg font-semibold">100%</p>
              <p>Compliance</p>
            </div>
            <div>
              <p className="text-white text-lg font-semibold">5yr+</p>
              <p>Experience</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 active:scale-95 transition"
            >
              {lang === "en" ? "Book Consultation" : "Konsultasi"}
            </button>

            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-[11px] sm:text-xs text-gray-400 mt-5">
            Response within 24 hours • Confidential consultation
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">

          <div className="relative mt-6 md:mt-0">

            {/* glow */}
            <div className="absolute w-[220px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[360px] md:h-[420px] bg-blue-500/30 blur-3xl rounded-2xl -z-10" />

            {/* card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl">

              <img
                src={heroImage}
                alt="Zaky Zhafran"
                className="w-[220px] sm:w-[260px] md:w-[300px] h-[280px] sm:h-[340px] md:h-[360px] object-cover rounded-xl"
              />

              <p className="text-center text-[11px] sm:text-sm text-white/70 mt-4">
                Legal & Tax Advisory Firm
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-full max-w-sm sm:max-w-md rounded-2xl p-5 sm:p-6 text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              {lang === "en" ? "Book Consultation" : "Form Konsultasi"}
            </h2>

            <input className="w-full border p-3 rounded-lg mb-3" placeholder="Name" />
            <input className="w-full border p-3 rounded-lg mb-3" placeholder="Email" />
            <textarea className="w-full border p-3 rounded-lg mb-4" placeholder="Message" />

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-black text-white px-4 py-2 rounded-lg w-full">
                Submit
              </button>

              <button
                className="border px-4 py-2 rounded-lg w-full"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}