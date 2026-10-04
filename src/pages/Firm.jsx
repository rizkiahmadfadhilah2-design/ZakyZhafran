import { useState } from "react";
import Navbar from "../components/layout/Navbar";

export default function Firm() {
  const [lang, setLang] = useState("en");

  const legalServices = [
    "Litigation Field",
    "Corporate Sector",
    "Banking Sector",
    "Bankruptcy Field",
    "Investment Sector",
    "Labor Sector",
    "Property & Infrastructure",
    "Tax",
    "Family & Private",
    "Islamic Finance",
    "Technology & Communications",
  ];

  const taxServices = [
    "Konsultasi Perpajakan",
    "Pelaporan SPT Tahunan",
    "Pelaporan SPT Masa",
    "Pendampingan Pemeriksaan Pajak",
    "Penyelesaian Sengketa Pajak",
    "Review Kepatuhan Pajak",
    "Tax Compliance",
    "Tax Audit Support",
    "Tax Planning",
    "Pembukuan & Administrasi Pajak",
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* LANG SWITCH */}
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="px-4 py-2 rounded-full bg-black text-white text-xs shadow-lg hover:scale-105 transition"
        >
          {lang === "en" ? "ID 🇮🇩" : "EN 🇺🇸"}
        </button>
      </div>

      {/* HERO */}
      <section className="relative py-32 bg-[#0B1220] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            {lang === "en" ? "Law Firm Profile" : "Profil Firma Hukum"}
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Zaky Zhafran & Partners
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            {lang === "en"
              ? "A modern legal advisory firm delivering precision-driven legal strategy, corporate protection, and long-term risk mitigation."
              : "Firma hukum modern dengan strategi presisi, perlindungan korporasi, dan mitigasi risiko jangka panjang."}
          </p>
        </div>
      </section>

      {/* ABOUT ME + WHY CHOOSE US (FIXED) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* ABOUT ME */}
          <div>
            <h2 className="text-3xl font-semibold">
              {lang === "en" ? "About Us" : "Tentang Kami"}
            </h2>

            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
              {lang === "en"
                ? "We are a legal advisory firm focused on delivering strategic, practical, and business-oriented legal solutions for corporations and individuals."
                : "Kami adalah firma hukum yang berfokus pada solusi hukum strategis, praktis, dan berorientasi bisnis untuk korporasi maupun individu."}
            </p>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {lang === "en"
                ? "Our approach combines legal precision, commercial understanding, and risk-based thinking to support long-term business growth."
                : "Pendekatan kami menggabungkan ketepatan hukum, pemahaman bisnis, dan analisis risiko untuk mendukung pertumbuhan jangka panjang."}
            </p>
          </div>

          {/* WHY CHOOSE US (HOME STYLE) */}
          <div className="bg-[#0B1220] text-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-xl font-semibold">
              {lang === "en" ? "Why Choose Us" : "Mengapa Memilih Kami"}
            </h3>

            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              {lang === "en"
                ? "Expertise You Can Trust. Solutions That Move Your Business Forward. We combine legal expertise and strategic thinking to protect your interests and reduce risk."
                : "Keahlian yang dapat dipercaya. Solusi yang mendorong bisnis Anda maju. Kami menggabungkan keahlian hukum dan strategi untuk melindungi kepentingan Anda."}
            </p>
          </div>

        </div>
      </section>

      {/* LEGAL SERVICES */}
      <section className="py-24 bg-[#F6F7FB]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            {lang === "en" ? "Legal Services" : "Layanan Hukum"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {legalServices.map((item, i) => (
              <div key={i} className="bg-white border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TAX SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            {lang === "en" ? "Tax Advisory Services" : "Layanan Perpajakan"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {taxServices.map((item, i) => (
              <div key={i} className="bg-[#0B1220] text-white rounded-2xl p-6">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-[#F6F7FB]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          {[
            { num: "50+", label: lang === "en" ? "Corporate Clients" : "Klien Korporasi" },
            { num: "120+", label: lang === "en" ? "Legal Cases" : "Kasus Hukum" },
            { num: "5+", label: lang === "en" ? "Years Experience" : "Tahun Pengalaman" },
            { num: "100%", label: lang === "en" ? "Commitment" : "Komitmen" },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-2xl p-8">
              <h3 className="text-3xl font-semibold">{item.num}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0B1220] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {lang === "en"
            ? "Let’s Build Strong Legal Protection"
            : "Bangun Perlindungan Hukum yang Kuat"}
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm">
          {lang === "en"
            ? "Contact our legal team for strategic consultation."
            : "Hubungi tim hukum kami untuk konsultasi strategis."}
        </p>

        <a
          href="https://wa.me/6282242887887"
          className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full font-medium"
        >
          {lang === "en" ? "Consult Now" : "Konsultasi Sekarang"}
        </a>
      </section>
    </div>
  );
}