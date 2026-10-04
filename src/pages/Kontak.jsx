import { useState } from "react";
import Navbar from "../components/layout/Navbar";

export default function ContactPage() {
  const [lang, setLang] = useState("en");

  return (
    <div className="bg-white text-gray-900 min-h-screen">
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
      <section className="py-28 bg-[#0B1220] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            {lang === "en" ? "Get In Touch" : "Hubungi Kami"}
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            {lang === "en" ? "Contact Our Legal Team" : "Hubungi Tim Hukum Kami"}
          </h1>

          <p className="text-gray-300 mt-6 text-sm leading-relaxed">
            {lang === "en"
              ? "We are ready to assist you in legal consultation, corporate advisory, and tax matters."
              : "Kami siap membantu Anda dalam konsultasi hukum, korporasi, dan perpajakan."}
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                {lang === "en" ? "Office" : "Kantor"}
              </h3>
              <p className="text-sm text-gray-600">
                Villa Bekasi Indah 1 Blok G1 No.2 Bekasi, Indonesia<br />
                Zaky Zhafran & Partners Law Firm
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-sm text-gray-600">
                kingmada@zakyzhafranpartners.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">
                +62 822-4288-7887
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm">

            <h2 className="text-xl font-semibold mb-6">
              {lang === "en" ? "Send a Message" : "Kirim Pesan"}
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder={lang === "en" ? "Your Name" : "Nama Anda"}
                className="w-full border p-3 rounded-xl text-sm"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-xl text-sm"
              />

              <textarea
                rows="5"
                placeholder={lang === "en" ? "Your Message" : "Pesan Anda"}
                className="w-full border p-3 rounded-xl text-sm"
              />

              <a
                href="https://wa.me/6282242887887?text=Halo%20Zaky%20Zhafran%20%26%20Partners%2C%20saya%20ingin%20konsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black text-white py-3 rounded-xl hover:scale-105 transition"
              >
                {lang === "en" ? "Send via WhatsApp" : "Kirim via WhatsApp"}
              </a>

            </form>
          </div>

        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-20 bg-[#0B1220] text-white text-center">
        <h2 className="text-3xl font-semibold">
          {lang === "en"
            ? "We’re Ready to Help You"
            : "Kami Siap Membantu Anda"}
        </h2>

        <p className="text-gray-300 mt-4 text-sm">
          {lang === "en"
            ? "Fast response for legal and business consultation."
            : "Respon cepat untuk konsultasi hukum dan bisnis."}
        </p>

        <a
          href="https://wa.me/6282242887887"
          target="_blank"
          className="inline-block mt-6 bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          {lang === "en" ? "Chat Now" : "Chat Sekarang"}
        </a>
      </section>

    </div>
  );
}