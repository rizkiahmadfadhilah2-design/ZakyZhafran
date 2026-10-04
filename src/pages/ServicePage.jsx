import Navbar from "../components/layout/Navbar";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function ServicesPage() {
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
    <div className="bg-white text-gray-900">

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 bg-[#0B1220] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Our Legal & Tax Services
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm">
              Comprehensive legal advisory and tax consulting services designed
              to support business growth, compliance, and risk mitigation.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-[#F6F7FB]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* LEFT - LEGAL */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl border shadow-sm p-8 h-full">

              <h2 className="text-2xl font-semibold mb-6">
                Legal Services
              </h2>

              <div className="space-y-3">
                {legalServices.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="text-blue-600 mt-[2px]">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT - TAX */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#0B1220] text-white rounded-3xl shadow-xl p-8 h-full">

              <h2 className="text-2xl font-semibold mb-6">
                Tax Services
              </h2>

              <div className="space-y-3">
                {taxServices.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <span className="text-white mt-[2px]">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0B1220] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Let’s Build Strong Legal Protection
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm">
          Consult with our legal team for strategic business and tax solutions.
        </p>

        <a
          href="https://wa.me/6282242887887"
          className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          Consult Now
        </a>
      </section>

    </div>
  );
}