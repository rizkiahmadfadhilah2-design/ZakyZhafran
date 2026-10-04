import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

import fotocg from "../assets/ClarteGagah.png";
import fotodnr from "../assets/Dimas_Nugraha_Riyadi.jpeg";
import fotoda from "../assets/Dina_Aisyah.png";
import fotodi from "../assets/Dini_Inasyah.png";
import fotota from "../assets/Tsabbit_Aqdamana.png";
import fotozz from "../assets/ZakyZhafran.jpeg";

const team = [
  {
    id: "zaky",
    name: "Zaky Zhafran King Mada, S.H., M.H.",
    role: "Managing Partner",
    edu: "Universitas Indonesia",
    desc: "Strategic legal counsel dalam corporate law & governance.",
    photo: fotozz,
    featured: true,
  },
  {
    id: "dimas",
    name: "Dimas Nugraha Riyadi, S.H., M.H.",
    role: "Partner",
    edu: "UI",
    desc: "Contract law & litigation.",
    photo: fotodnr,
  },
  {
    id: "dini",
    name: "Dini Inasyah Alfaridah, S.H., M.H.",
    role: "Partner",
    edu: "UIN",
    desc: "Compliance & sharia law.",
    photo: fotodi,
  },
  {
    id: "tsabbit",
    name: "Tsabbit Aqdamana, S.H., M.H.",
    role: "Partner",
    edu: "UII",
    desc: "Startup & legal drafting.",
    photo: fotota,
  },
  {
    id: "dina",
    name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
    role: "Partner",
    edu: "UNPAD",
    desc: "Property law specialist.",
    photo: fotoda,
  },
  {
    id: "clarte",
    name: "Clarte Gagah, S.H.",
    role: "Partner",
    edu: "UII",
    desc: "Corporate compliance.",
    photo: fotocg,
  },
];

export default function LawyersPage() {
  // ✅ EN DEFAULT FIRST
  const [lang, setLang] = useState("en");

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      <Navbar />

      {/* LANG BUTTON */}
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="px-4 py-2 rounded-full bg-black text-white text-xs shadow-lg hover:scale-105 transition"
        >
          {lang === "en" ? "ID 🇮🇩" : "EN 🇺🇸"}
        </button>
      </div>

      {/* HERO */}
      <section className="relative py-28 bg-[#0B1220] text-white overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            {lang === "en" ? "Legal Advisory Firm" : "Firma Konsultan Hukum"}
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            {lang === "en" ? "Our Legal Minds" : "Tim Profesional Kami"}
          </h1>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            {lang === "en"
              ? "We deliver precision-driven legal strategy, corporate protection, and long-term risk mitigation for modern businesses."
              : "Kami memberikan strategi hukum yang presisi, perlindungan korporasi, dan mitigasi risiko jangka panjang untuk bisnis modern."}
          </p>

        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-24 bg-[#F6F7FB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            {team.map((p) => (
              <Link
                key={p.id}
                to={`/profile/${p.id}`}
                className={`group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col
                  ${p.featured ? "md:col-span-2 md:flex-row md:items-center md:p-10" : "p-6"}
                  min-h-[340px]
                `}
              >

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500" />

                {/* IMAGE AREA (FIXED ALIGNMENT) */}
                <div className="flex justify-center items-center py-6 md:py-0 md:px-4">

                  <div className="relative w-28 h-28 md:w-36 md:h-36">

                    {/* glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 blur-md opacity-20 group-hover:opacity-40 transition" />

                    {/* image */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 border">
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 px-4 md:px-6 pb-6 text-center md:text-left">

                  <h3 className="text-base font-semibold">
                    {p.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {p.role}
                  </p>

                  <div className="w-10 h-[2px] bg-gray-200 mx-auto md:mx-0 my-4" />

                  <p className="text-xs text-gray-600 line-clamp-2 md:max-w-md">
                    {p.desc}
                  </p>

                  <p className="text-[11px] text-gray-400 mt-3">
                    {p.edu}
                  </p>

                  <div className="mt-5 text-xs text-blue-600 font-medium">
                    {lang === "en" ? "View Profile →" : "Lihat Profil →"}
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}