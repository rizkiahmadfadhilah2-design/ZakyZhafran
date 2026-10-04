export default function TrustStrip({ lang }) {
  const legalServices = [
    {
      title: "Corporate & Litigation",
      items: [
        "Litigation Field",
        "Corporate Sector",
        "Banking Sector",
        "Bankruptcy Field",
      ],
    },
    {
      title: "Advisory & Compliance",
      items: [
        "Investment Sector",
        "Labor Sector",
        "Property & Infrastructure",
        "Tax Legal Advisory",
      ],
    },
    {
      title: "Specialized Practice",
      items: [
        "Family & Private Law",
        "Islamic Finance",
        "Technology & Communications",
      ],
    },
  ];

  const taxServices = [
    {
      title: "Tax Compliance",
      items: [
        "Konsultasi Perpajakan",
        "Pelaporan SPT Tahunan",
        "SPT Masa",
        "Review Kepatuhan Pajak",
      ],
    },
    {
      title: "Tax Handling",
      items: [
        "Pemeriksaan Pajak",
        "Sengketa Pajak",
        "Tax Audit Support",
      ],
    },
    {
      title: "Tax Strategy",
      items: [
        "Tax Planning",
        "Tax Compliance System",
        "Administrasi Pajak",
      ],
    },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400">
            {lang === "en"
              ? "Two Core Advisory Pillars"
              : "Dua Pilar Layanan Utama"}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-gray-900 leading-snug">
            Legal & Tax Advisory Excellence
          </h2>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Structured services designed for corporate governance, compliance,
            and financial stability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">

          {/* LEGAL */}
          <div className="rounded-2xl border bg-gray-50 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold mb-5 text-gray-900">
              ⚖️ Legal Advisory Services
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {legalServices.map((group, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-4 sm:p-5"
                >
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">
                    {group.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, idx) => (
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
              💰 Tax Advisory Services
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {taxServices.map((group, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-4 sm:p-5"
                >
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">
                    {group.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, idx) => (
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

        {/* STATS */}
        <div className="mt-12 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">

          <div>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">50+</p>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              Clients Served
            </p>
          </div>

          <div>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">70%</p>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              Legal Advisory
            </p>
          </div>

          <div>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">30%</p>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              Tax Advisory
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}