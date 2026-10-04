import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

import fotocg from "../assets/ClarteGagah.png";
import fotodnr from "../assets/Dimas_Nugraha_Riyadi.jpeg";
import fotoda from "../assets/Dina_Aisyah.png";
import fotodi from "../assets/Dini_Inasyah.png";
import fotota from "../assets/Tsabbit_Aqdamana.png";
import fotozz from "../assets/ZakyZhafran.jpeg"

const team = [
  {
    id: "zaky",
    name: "Zaky Zhafran King Mada, S.H., M.H.",
    role: "Managing Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
    desc:
      "Memberikan strategic legal counsel kepada perusahaan dan pemegang kepentingan korporasi dalam berbagai aspek corporate law, corporate governance, regulatory compliance, dan tax law.",
    detail:
      "Berpengalaman dalam corporate restructuring, merger & acquisition, investment transactions, corporate governance, regulatory advisory, serta tax legal matters and disputes.",
    photo:fotozz,
  },

  {
    id: "dimas",
    name: "Dimas Nugraha Riyadi, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
    desc:
      "Spesialis dalam contract law, commercial disputes, dan business litigation, dengan fokus pada pemberian strategic legal counsel dalam menangani kompleksitas hubungan bisnis, perjanjian komersial, serta berbagai potensi dan sengketa hukum perusahaan.",
    detail:
      "Berpengalaman dalam commercial agreements, business disputes, contract advisory, serta pendampingan hukum pada sektor industri dan jasa keuangan. Memberikan representasi dan advisory hukum dengan pendekatan yang strategis, presisi, dan berorientasi pada perlindungan kepentingan serta posisi hukum klien.",
    photo: fotodnr,
  },

  {
    id: "dini",
    name: "Dini Inasyah Alfaridah, S.H., M.H.",
    role: "Partner",
    edu: "UIN Sunan Gunung Djati",
    desc:
      "Berfokus pada hukum perdata, regulatory compliance, dan legal governance, dengan perhatian khusus pada penerapan prinsip hukum syariah dalam hubungan dan transaksi bisnis serta penanganan aspek hukum dalam lingkungan korporasi dan pemerintahan.",
    detail:
      "Berpengalaman dalam hukum perdata, kontrak syariah, sharia-based agreements, corporate compliance, serta legal governance dalam bisnis modern. Memiliki pengalaman dalam penyusunan, penelaahan, dan pendampingan terkait perjanjian berbasis syariah, sekaligus menangani perkara Tata Usaha Negara (TUN) dan berbagai isu hukum yang berkaitan dengan keputusan maupun tindakan administrasi pemerintahan.",
    photo: fotodi,
  },

  {
    id: "tsabbit",
    name: "Tsabbit Aqdamana, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
    desc:
      "Berfokus pada legal drafting, startup advisory, hukum acara PTUN, dan constitutional litigation, dengan pengalaman memberikan pendampingan hukum pada tahap awal pendirian usaha hingga penanganan perkara di ranah administrasi negara dan Mahkamah Konstitusi.",
    detail:
      "Berpengalaman dalam mendampingi startup dan emerging businesses terkait pendirian badan usaha, perizinan, penyusunan dokumen hukum, serta pembentukan struktur hukum awal perusahaan. Turut menangani perkara Tata Usaha Negara (PTUN), termasuk penyusunan dan pendampingan gugatan, serta perkara di Mahkamah Konstitusi dengan pendekatan hukum yang strategis, sistematis, dan berbasis pada analisis hukum yang komprehensif.",
    photo: fotota,
  },

  {
    id: "dina",
    name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
    role: "Partner",
    edu: "Universitas Padjadjaran • Universitas Yarsi",
    desc:
      "Berfokus pada land law, property law, dan contract law, dengan pengalaman memberikan strategic legal counsel dalam berbagai transaksi dan aktivitas bisnis yang berkaitan dengan aset, properti, serta hubungan kontraktual.",
    detail:
      "Berpengalaman dalam property transactions, land matters, licensing & permits, serta commercial and business contracts. Memberikan pendampingan hukum mulai dari legal due diligence, penataan dan pengalihan hak atas properti, proses perizinan, hingga penyusunan dan negosiasi kontrak bisnis dengan pendekatan yang presisi dan berorientasi pada mitigasi risiko hukum.",
    photo: fotoda,
  },

  {
    id: "clarte",
    name: "Clarte Gagah, S.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
    desc:
      "Berfokus pada corporate legal, regulatory compliance, dan criminal law, dengan pendekatan strategis dalam memastikan kepatuhan, penguatan struktur hukum perusahaan, serta pengelolaan risiko hukum yang berpotensi memengaruhi kegiatan dan kepentingan korporasi.",
    detail:
      "Berpengalaman dalam internal legal audit, corporate compliance, legal risk management, serta penguatan corporate legal structure and governance. Turut memberikan pendampingan dalam criminal law matters, termasuk analisis dan penanganan aspek hukum pidana yang berkaitan dengan kegiatan usaha, manajemen, maupun kepentingan korporasi.",
    photo: fotocg,
  },
];

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const person = team.find((t) => t.id === id);

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Profile tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-28">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-sm text-gray-500 hover:text-black transition"
        >
          ← Back
        </button>

        <div className="border rounded-3xl shadow-lg overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#0B1220] text-white p-14 grid md:grid-cols-3 gap-12 items-center">

            {/* 🔥 FIX FOTO TOTAL */}
            <div className="flex justify-center md:justify-start">
              <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-3xl flex items-center justify-center p-4 shadow-xl">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-3xl font-semibold">{person.name}</h1>
              <p className="text-gray-300 mt-3 text-lg">{person.role}</p>
              <p className="text-gray-400 text-sm mt-4">{person.edu}</p>

              <div className="mt-6 inline-block px-5 py-2 text-xs bg-white/10 rounded-full">
                Legal & Corporate Advisory
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="p-12 space-y-10">

            <div>
              <h2 className="text-sm font-semibold mb-3">
                Professional Overview
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {person.desc}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-3">
                Expertise & Experience
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {person.detail}
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">

              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                  "Halo, saya ingin konsultasi dengan " + person.name
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm hover:scale-105 transition text-center"
              >
                Konsultasi Sekarang
              </a>

              <button
                onClick={() => navigate("/about")}
                className="border px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition"
              >
                Kembali ke About
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}