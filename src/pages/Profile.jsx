import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { useState } from "react";

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
    edu_en: [
      "Bachelor of Law: Islamic University of Indonesia",
      "Master of Law: University of Indonesia",
    ],
    edu_id:
      "Sarjana Hukum: Universitas Islam Indonesia • Magister Hukum: Universitas Indonesia",

    desc_en:
      "Provides strategic legal counsel to corporations and stakeholders across corporate law, corporate governance, regulatory compliance, and tax law. Advisory approach focuses on strengthening legal structures, risk mitigation, and resolving complex legal and tax matters to support clients' business objectives.",

    detail_en:
      "Experienced in corporate restructuring, mergers & acquisitions, investment transactions, corporate governance, regulatory advisory, and tax legal matters and disputes. Provides advisory services to national corporations, international businesses, and emerging companies with a combination of legal precision, commercial awareness, and structured legal strategy.",

    desc_id:
      "Memberikan strategic legal counsel kepada perusahaan dan pemegang kepentingan korporasi dalam berbagai aspek corporate law, corporate governance, regulatory compliance, dan tax law. Pendekatan advisory berfokus pada penguatan struktur hukum, mitigasi risiko, serta penyelesaian isu hukum dan perpajakan yang kompleks guna mendukung kepentingan dan tujuan bisnis klien.",

    detail_id:
      "Berpengalaman dalam menangani corporate restructuring, merger & acquisition, investment transactions, corporate governance, regulatory advisory, serta tax legal matters and disputes. Memberikan pendampingan kepada perusahaan nasional, internasional, dan emerging companies dengan pendekatan analisis hukum yang tajam dan strategis.",

    photo: fotozz,
  },

  {
    id: "dimas",
    name: "Dimas Nugraha Riyadi, S.H., M.H.",
    role: "Partner",
    edu_en: [
      "Bachelor of Law: Islamic University of Indonesia",
      "Master of Law: University of Indonesia",
    ],
    edu_id:
      "Sarjana Hukum: Universitas Islam Indonesia • Magister Hukum: Universitas Indonesia",
    desc:
      "Memberikan strategic legal counsel dalam bidang corporate law, contract law, dan business dispute resolution.",
    detail:
      "Berpengalaman dalam penyusunan dan penelaahan perjanjian komersial, penyelesaian sengketa bisnis, serta pendampingan hukum dalam transaksi dan hubungan kontraktual antar perusahaan.",
    photo: fotodnr,
  },

  {
    id: "dini",
    name: "Dini Inasyah Alfaridah, S.H., M.H.",
    role: "Partner",
    edu_en: ["Bachelor of Law: State Islamic University Sunan Gunung Djati"],
    edu_id: "Sarjana Hukum: UIN Sunan Gunung Djati",
    desc:
      "Berfokus pada hukum perdata, regulatory compliance, dan legal governance, dengan perhatian khusus pada penerapan prinsip hukum syariah dalam transaksi bisnis.",
    detail:
      "Berpengalaman dalam hukum perdata, kontrak syariah, sharia-based agreements, corporate compliance, serta legal governance dalam bisnis modern dan TUN.",
    photo: fotodi,
  },

  {
    id: "tsabbit",
    name: "Tsabbit Aqdamana, S.H., M.H.",
    role: "Partner",
    edu_en: ["Bachelor of Law: Islamic University of Indonesia"],
    edu_id: "Sarjana Hukum: Universitas Islam Indonesia",
    desc:
      "Berfokus pada legal drafting, startup advisory, PTUN, dan constitutional litigation dari pendirian usaha hingga perkara konstitusi.",
    detail:
      "Berpengalaman dalam pendirian badan usaha, perizinan, dokumen hukum, PTUN, serta Mahkamah Konstitusi dengan pendekatan strategis.",
    photo: fotota,
  },

  {
    id: "dina",
    name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
    role: "Partner",
    edu_en: [
      "Bachelor of Law: Padjadjaran University",
      "Master of Notarial Law: Yarsi University",
    ],
    edu_id:
      "Sarjana Hukum: Universitas Padjadjaran • Magister Kenotariatan: Universitas Yarsi",
    desc:
      "Berfokus pada land law, property law, dan contract law dalam transaksi aset dan properti.",
    detail:
      "Berpengalaman dalam property transactions, land matters, licensing & permits, serta commercial contracts dan legal due diligence.",
    photo: fotoda,
  },

  {
    id: "clarte",
    name: "Clarte Gagah, S.H.",
    role: "Partner",
    edu_en: ["Bachelor of Law: Islamic University of Indonesia"],
    edu_id: "Sarjana Hukum: Universitas Islam Indonesia",
    desc:
      "Berfokus pada corporate legal, regulatory compliance, dan criminal law dengan penguatan struktur hukum perusahaan.",
    detail:
      "Berpengalaman dalam corporate compliance, legal audit, risk management, serta penanganan aspek hukum pidana dalam korporasi.",
    photo: fotocg,
  },
];

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [localLang, setLocalLang] = useState("en"); // ⭐ EN FIRST

  const toggleLang = () =>
    setLocalLang((p) => (p === "en" ? "id" : "en"));

  const person = team.find((t) => t.id === id);

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">
          {localLang === "en" ? "Profile not found" : "Profil tidak ditemukan"}
        </p>
      </div>
    );
  }

  const desc = localLang === "en" ? person.desc_en || person.desc : person.desc_id || person.desc;
  const detail = localLang === "en" ? person.detail_en || person.detail : person.detail_id || person.detail;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-28">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:text-black"
          >
            ← {localLang === "en" ? "Back" : "Kembali"}
          </button>

          <button
            onClick={toggleLang}
            className="text-xs px-3 py-1 border rounded-full hover:bg-gray-100"
          >
            {localLang === "en" ? "ID 🇮🇩" : "EN 🇺🇸"}
          </button>
        </div>

        {/* CARD */}
        <div className="border rounded-3xl shadow-xl overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#0B1220] text-white p-6 sm:p-10 md:p-14 grid md:grid-cols-3 gap-10 items-center">

            <div className="flex justify-center md:justify-start">
              <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={person.photo}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:col-span-2 text-center md:text-left">

              <h1 className="text-2xl sm:text-3xl font-semibold">
                {person.name}
              </h1>

              <p className="text-gray-300 mt-3 text-sm sm:text-base">
                {localLang === "en" ? "Position" : "Jabatan"}: {person.role}
              </p>

              <div className="mt-5 inline-block px-4 py-2 text-xs bg-white/10 rounded-full">
                Legal & Corporate Advisory
              </div>

            </div>
          </div>

          {/* BODY */}
          <div className="p-6 sm:p-10 md:p-12 space-y-8">

            <div>
              <h2 className="text-sm font-semibold mb-2">
                {localLang === "en" ? "Professional Overview" : "Profil Profesional"}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {desc}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-2">
                {localLang === "en" ? "Expertise & Experience" : "Keahlian & Pengalaman"}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {detail}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">

              <a
                href={`https://wa.me/6282242887887?text=${encodeURIComponent(
                  "Halo, saya ingin konsultasi dengan " + person.name
                )}`}
                className="bg-black text-white px-6 py-3 rounded-xl text-sm text-center"
              >
                {localLang === "en" ? "Book Consultation" : "Konsultasi Sekarang"}
              </a>

              <button
                onClick={() => navigate("/about")}
                className="border px-6 py-3 rounded-xl text-sm"
              >
                {localLang === "en" ? "Back to About" : "Kembali ke About"}
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}