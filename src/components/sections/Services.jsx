import Navbar from "../layout/Navbar";
import ScrollReveal from "../ui/ScrollReveal";

const services = [
  {
    category: {
      en: "Corporate Law",
      id: "Hukum Korporasi",
    },
    items: [
      {
        icon: "🏢",
        title: {
          en: "Corporate Law",
          id: "Hukum Korporasi",
        },
        desc: {
          en: "Legal structuring and governance for business entities.",
          id: "Struktur dan tata kelola hukum perusahaan.",
        },
      },
      {
        icon: "🏦",
        title: {
          en: "Banking and Finance",
          id: "Perbankan dan Keuangan",
        },
        desc: {
          en: "Regulatory and financial legal advisory for banking sector.",
          id: "Konsultasi hukum sektor perbankan dan keuangan.",
        },
      },
      {
        icon: "👷",
        title: {
          en: "Labor Law",
          id: "Hukum Ketenagakerjaan",
        },
        desc: {
          en: "Employment regulation and workforce dispute handling.",
          id: "Pengaturan ketenagakerjaan dan penyelesaian sengketa kerja.",
        },
      },
      {
        icon: "📉",
        title: {
          en: "Bankruptcy and Restructuring",
          id: "Kepailitan dan Restrukturisasi",
        },
        desc: {
          en: "Corporate restructuring and insolvency legal solutions.",
          id: "Restrukturisasi perusahaan dan kepailitan.",
        },
      },
    ],
  },

  {
    category: {
      en: "Litigation & Property",
      id: "Litigasi & Properti",
    },
    items: [
      {
        icon: "⚖️",
        title: {
          en: "Litigation",
          id: "Litigasi",
        },
        desc: {
          en: "Court representation and dispute resolution strategy.",
          id: "Representasi pengadilan dan penyelesaian sengketa.",
        },
      },
      {
        icon: "🏗️",
        title: {
          en: "Property and Infrastructure",
          id: "Properti dan Infrastruktur",
        },
        desc: {
          en: "Legal handling of real estate and infrastructure projects.",
          id: "Penanganan hukum properti dan proyek infrastruktur.",
        },
      },
      {
        icon: "⚔️",
        title: {
          en: "Criminal Law",
          id: "Hukum Pidana",
        },
        desc: {
          en: "Criminal case assistance and legal defense.",
          id: "Pendampingan dan pembelaan perkara pidana.",
        },
      },
    ],
  },

  {
    category: {
      en: "Tax Advisory",
      id: "Konsultasi Pajak",
    },
    items: [
      {
        icon: "📊",
        title: {
          en: "Tax Planning",
          id: "Perencanaan Pajak",
        },
        desc: {
          en: "Optimizing tax strategy legally for efficiency.",
          id: "Strategi pajak legal untuk efisiensi bisnis.",
        },
      },
      {
        icon: "💰",
        title: {
          en: "Tax Compliance",
          id: "Kepatuhan Pajak",
        },
        desc: {
          en: "Ensuring full compliance with tax regulations.",
          id: "Memastikan kepatuhan penuh terhadap regulasi pajak.",
        },
      },
      {
        icon: "🧾",
        title: {
          en: "Annual Tax Return",
          id: "Laporan SPT Tahunan",
        },
        desc: {
          en: "Preparation and filing of annual tax reports.",
          id: "Penyusunan dan pelaporan SPT tahunan.",
        },
      },
    ],
  },

  {
    category: {
      en: "Specialized Practice",
      id: "Praktik Khusus",
    },
    items: [
      {
        icon: "🏛️",
        title: {
          en: "Corporate Advisory",
          id: "Konsultasi Korporasi",
        },
        desc: {
          en: "Strategic corporate legal consultation.",
          id: "Konsultasi hukum korporasi strategis.",
        },
      },
      {
        icon: "🛡️",
        title: {
          en: "Tax Advisory",
          id: "Konsultasi Pajak",
        },
        desc: {
          en: "Ensuring business tax compliance structure.",
          id: "Struktur kepatuhan pajak perusahaan.",
        },
      },
    ],
  },
];

export default function ServicesPage({ lang }) {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* HEADER */}
      <section className="py-28 bg-[#0B1220] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl font-semibold">
              {lang === "en" ? "Our Services" : "Layanan Kami"}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-300 mt-4">
              {lang === "en"
                ? "Comprehensive legal and tax solutions tailored to support your business growth."
                : "Solusi hukum dan pajak yang komprehensif untuk mendukung pertumbuhan bisnis Anda."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((group, i) => (
            <div key={i}>
              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-8 uppercase tracking-wide">
                  {group.category[lang]}
                </h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-6">
                {group.items.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="p-6 border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition">

                      {/* ICON + TITLE SIDE BY SIDE */}
                      <div className="flex items-center gap-3 mb-3">

                        <span className="text-xl">
                          {item.icon}
                        </span>

                        <h3 className="font-bold text-base">
                          {item.title[lang]}
                        </h3>

                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc[lang]}
                      </p>

                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}