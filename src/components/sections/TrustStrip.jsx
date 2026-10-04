export default function TrustStrip({ lang }) {

  const legalServices = [
    {
      title: {
        en: "Corporate & Litigation",
        id: "Korporasi & Litigasi",
      },
      items: {
        en: [
          "Litigation Field",
          "Corporate Sector",
          "Banking Sector",
          "Bankruptcy Field",
        ],
        id: [
          "Bidang Litigasi",
          "Sektor Korporasi",
          "Sektor Perbankan",
          "Kepailitan",
        ],
      },
    },
    {
      title: {
        en: "Advisory & Compliance",
        id: "Konsultasi & Kepatuhan",
      },
      items: {
        en: [
          "Investment Sector",
          "Labor Sector",
          "Property & Infrastructure",
          "Tax Legal Advisory",
        ],
        id: [
          "Sektor Investasi",
          "Sektor Ketenagakerjaan",
          "Properti & Infrastruktur",
          "Konsultasi Pajak",
        ],
      },
    },
    {
      title: {
        en: "Specialized Practice",
        id: "Praktik Khusus",
      },
      items: {
        en: [
          "Family & Private Law",
          "Islamic Finance",
          "Technology & Communications",
        ],
        id: [
          "Hukum Keluarga & Privat",
          "Keuangan Syariah",
          "Teknologi & Komunikasi",
        ],
      },
    },
  ];

  const taxServices = [
    {
      title: {
        en: "Tax Compliance",
        id: "Kepatuhan Pajak",
      },
      items: {
        en: [
          "Tax Consultation",
          "Annual Tax Reporting",
          "Monthly Tax Reporting",
          "Tax Compliance Review",
        ],
        id: [
          "Konsultasi Perpajakan",
          "Pelaporan SPT Tahunan",
          "SPT Masa",
          "Review Kepatuhan Pajak",
        ],
      },
    },
    {
      title: {
        en: "Tax Handling",
        id: "Penanganan Pajak",
      },
      items: {
        en: ["Tax Audit", "Tax Dispute", "Tax Audit Support"],
        id: ["Pemeriksaan Pajak", "Sengketa Pajak", "Pendampingan Pemeriksaan"],
      },
    },
    {
      title: {
        en: "Tax Strategy",
        id: "Strategi Pajak",
      },
      items: {
        en: ["Tax Planning", "Tax Compliance System", "Tax Administration"],
        id: ["Perencanaan Pajak", "Sistem Kepatuhan Pajak", "Administrasi Pajak"],
      },
    },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-14 sm:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400">
            {lang === "en"
              ? "TWO CORE ADVISORY PILLARS"
              : "DUA PILAR LAYANAN UTAMA"}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-gray-900 leading-snug">
            {lang === "en"
              ? "TRUSTED LEGAL & TAX ADVISORY"
              : "KONSULTAN HUKUM & PAJAK TERPERCAYA"}
          </h2>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            {lang === "en"
              ? "Comprehensive legal and tax solutions to protect your interests, ensure compliance, and support sustainable business growth."
              : "Solusi hukum dan pajak komprehensif untuk melindungi kepentingan Anda, memastikan kepatuhan, dan mendukung pertumbuhan bisnis."}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">

          {/* LEGAL */}
          <div className="rounded-2xl border bg-gray-50 p-4 sm:p-6">

            <h3 className="text-base sm:text-lg font-semibold mb-5 text-gray-900">
              {lang === "en"
                ? "LEGAL ADVISORY SERVICES"
                : "LAYANAN HUKUM"}
            </h3>

            <div className="space-y-4 sm:space-y-6">

              {legalServices.map((group, i) => (
                <div key={i} className="bg-white border rounded-xl p-4 sm:p-5">

                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3 uppercase">
                    {group.title[lang]}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.items[lang].map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* TAX */}
          <div className="rounded-2xl border bg-gray-50 p-4 sm:p-6">

            <h3 className="text-base sm:text-lg font-semibold mb-5 text-gray-900">
              {lang === "en"
                ? "TAX ADVISORY SERVICES"
                : "LAYANAN PAJAK"}
            </h3>

            <div className="space-y-4 sm:space-y-6">

              {taxServices.map((group, i) => (
                <div key={i} className="bg-white border rounded-xl p-4 sm:p-5">

                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3 uppercase">
                    {group.title[lang]}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.items[lang].map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}