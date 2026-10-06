import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import fotocg from "../assets/ClarteGagah.png";
import fotodnr from "../assets/Dimas_Nugraha_Riyadi.jpeg";
import fotoda from "../assets/Dina_Aisyah.png";
import fotodi from "../assets/Dini_Inasyah.png";
import fotota from "../assets/Tsabbit_Aqdamana.png";
import fotozk from "../assets/ZakyZhafran.jpeg";

export default function ProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lang, setLang] = useState("en");

  const lawyers = [
    {
      id: "zaky",
      name: "Zaky Zhafran King Mada, S.H., M.H.",
      shortName: "Zaky Zhafran King Mada",
      role: {
        en: "Managing Partner",
        id: "Managing Partner",
      },
      image: fotozk,

      email: "kingmada@zakyzhafran.com",

      linkedin:
        "https://id.linkedin.com/in/zaky-zhafran-king-mada-s-h-m-h-925713135/in",

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Law — Universitas Islam Indonesia (UII)",
          "Master of Law — Universitas Indonesia (UI)",
        ],
        id: [
          "Sarjana Hukum — Universitas Islam Indonesia (UII)",
          "Magister Hukum — Universitas Indonesia (UI)",
        ],
      },

      focus: {
        en: [
          "Corporate Law",
          "Litigation",
          "Legal Strategy",
          "Regulatory Compliance",
        ],
        id: [
          "Hukum Korporasi",
          "Litigasi",
          "Strategi Hukum",
          "Kepatuhan Regulasi",
        ],
      },

      description: {
        en: "Zaky Zhafran King Mada is the Managing Partner of Zaky Zhafran And Partners. His practice focuses on corporate legal strategy, dispute resolution, regulatory matters, and comprehensive legal advisory for businesses and institutions.",

        id: "Zaky Zhafran King Mada merupakan Managing Partner Zaky Zhafran And Partners. Praktiknya berfokus pada strategi hukum korporasi, penyelesaian sengketa, regulasi, serta konsultasi hukum komprehensif bagi perusahaan dan institusi.",
      },

      detail: {
        en: [
          "He advises clients on strategic legal matters involving corporate structures, commercial relationships, regulatory compliance, and dispute resolution.",

          "His approach combines legal analysis with a practical understanding of business objectives, allowing clients to make informed decisions while managing legal and commercial risks.",

          "As Managing Partner, he also oversees the firm's legal strategy and coordinates multidisciplinary work across corporate, litigation, regulatory, and advisory matters.",
        ],

        id: [
          "Beliau memberikan konsultasi kepada klien mengenai berbagai persoalan strategis yang berkaitan dengan struktur korporasi, hubungan komersial, kepatuhan regulasi, dan penyelesaian sengketa.",

          "Pendekatannya menggabungkan analisis hukum dengan pemahaman praktis terhadap tujuan bisnis sehingga klien dapat mengambil keputusan secara tepat sekaligus mengelola risiko hukum dan komersial.",

          "Sebagai Managing Partner, beliau juga mengawasi strategi hukum firma serta mengoordinasikan pekerjaan multidisipliner dalam bidang korporasi, litigasi, regulasi, dan konsultasi hukum.",
        ],
      },
    },

    {
      id: "dimas",
      name: "Dimas Nugraha Riyadi, S.H., M.H.",
      shortName: "Dimas Nugraha Riyadi",
      role: {
        en: "Partner",
        id: "Partner",
      },
      image: fotodnr,

      email: "kingmada@zakyzhafran.com",

      linkedin:
        "https://id.linkedin.com/in/zaky-zhafran-king-mada-s-h-m-h-925713135/in",

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Law — Universitas Islam Indonesia (UII)",
          "Master of Law — Universitas Indonesia (UI)",
        ],
        id: [
          "Sarjana Hukum — Universitas Islam Indonesia (UII)",
          "Magister Hukum — Universitas Indonesia (UI)",
        ],
      },

      focus: {
        en: [
          "Corporate Law",
          "Banking & Finance",
          "Commercial Law",
          "Regulatory Compliance",
        ],
        id: [
          "Hukum Korporasi",
          "Perbankan & Keuangan",
          "Hukum Komersial",
          "Kepatuhan Regulasi",
        ],
      },

      description: {
        en: "Dimas Nugraha Riyadi is a Partner with a practice focused on corporate transactions, banking and finance, commercial arrangements, and regulatory matters.",

        id: "Dimas Nugraha Riyadi merupakan Partner dengan fokus praktik pada transaksi korporasi, perbankan dan keuangan, perjanjian komersial, serta berbagai persoalan regulasi.",
      },

      detail: {
        en: [
          "He assists companies and financial institutions in structuring transactions, reviewing commercial arrangements, and addressing legal and regulatory requirements.",

          "His work emphasizes clear legal documentation, risk identification, and practical solutions that support the client's commercial objectives.",

          "He also works collaboratively with other members of the firm on complex corporate and financial matters requiring multidisciplinary legal analysis.",
        ],

        id: [
          "Beliau membantu perusahaan dan institusi keuangan dalam menyusun transaksi, meninjau perjanjian komersial, serta menangani berbagai persyaratan hukum dan regulasi.",

          "Pekerjaannya menekankan dokumentasi hukum yang jelas, identifikasi risiko, serta solusi praktis yang mendukung tujuan komersial klien.",

          "Beliau juga bekerja secara kolaboratif dengan anggota firma lainnya dalam menangani persoalan korporasi dan keuangan yang membutuhkan analisis hukum multidisipliner.",
        ],
      },
    },

    {
      id: "dini",
      name: "Dini Inasyah Alfaridah, S.H., M.H.",
      shortName: "Dini Inasyah Alfaridah",
      role: {
        en: "Partner",
        id: "Partner",
      },
      image: fotodi,

      email: "kingmada@zakyzhafran.com",

      linkedin:
        "https://id.linkedin.com/in/zaky-zhafran-king-mada-s-h-m-h-925713135/in",

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Law — UIN Sunan Gunung Djati",
          "Master of Law — UIN",
        ],
        id: [
          "Sarjana Hukum — UIN Sunan Gunung Djati",
          "Magister Hukum — UIN",
        ],
      },

      focus: {
        en: [
          "Civil Law",
          "Regulatory Compliance",
          "Legal Governance",
          "Sharia Contracts",
          "Administrative Law",
        ],
        id: [
          "Hukum Perdata",
          "Kepatuhan Regulasi",
          "Tata Kelola Hukum",
          "Kontrak Syariah",
          "Hukum Administrasi",
        ],
      },

      description: {
        en: "Dini Inasyah Alfaridah is a Partner focusing on civil law, regulatory compliance, legal governance, sharia contracts, corporate compliance, and administrative law.",

        id: "Dini Inasyah Alfaridah merupakan Partner yang berfokus pada hukum perdata, kepatuhan regulasi, tata kelola hukum, kontrak syariah, kepatuhan korporasi, serta hukum administrasi.",
      },

      detail: {
        en: [
          "Her practice includes advising clients on civil law matters, regulatory obligations, corporate governance, and contractual arrangements.",

          "She also handles legal matters involving sharia-based agreements and provides legal analysis for clients operating within regulated environments.",

          "Her approach emphasizes structured legal analysis, regulatory awareness, and practical recommendations that can be implemented by clients.",
        ],

        id: [
          "Praktiknya mencakup konsultasi kepada klien mengenai hukum perdata, kewajiban regulasi, tata kelola perusahaan, serta berbagai perjanjian kontraktual.",

          "Beliau juga menangani persoalan hukum yang berkaitan dengan perjanjian berbasis syariah serta memberikan analisis hukum bagi klien yang beroperasi dalam lingkungan yang teregulasi.",

          "Pendekatannya menekankan analisis hukum yang terstruktur, pemahaman regulasi, serta rekomendasi praktis yang dapat diterapkan oleh klien.",
        ],
      },
    },

    {
      id: "dina",
      name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
      shortName: "Dina Aisyah Alfarijah",
      role: {
        en: "Partner",
        id: "Partner",
      },
      image: fotoda,

      email: "kingmada@zakyzhafran.com",

      linkedin:
        "https://id.linkedin.com/in/zaky-zhafran-king-mada-s-h-m-h-925713135/in",

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Law — Universitas Padjadjaran (UNPAD)",
          "Master of Notarial Law — Universitas YARSI",
        ],
        id: [
          "Sarjana Hukum — Universitas Padjadjaran (UNPAD)",
          "Magister Kenotariatan — Universitas YARSI",
        ],
      },

      focus: {
        en: [
          "Property Law",
          "Land Law",
          "Contract Law",
          "Due Diligence",
          "Licensing",
        ],
        id: [
          "Hukum Properti",
          "Hukum Pertanahan",
          "Hukum Kontrak",
          "Due Diligence",
          "Perizinan",
        ],
      },

      description: {
        en: "Dina Aisyah Alfarijah is a Partner focusing on land and property law, contractual arrangements, property transactions, due diligence, and licensing matters.",

        id: "Dina Aisyah Alfarijah merupakan Partner yang berfokus pada hukum pertanahan dan properti, perjanjian, transaksi properti, due diligence, serta persoalan perizinan.",
      },

      detail: {
        en: [
          "She assists clients in navigating legal issues related to land ownership, property transactions, contractual relationships, and supporting legal documentation.",

          "Her work includes legal due diligence, licensing review, contract analysis, and risk identification in property and infrastructure-related transactions.",

          "She provides practical legal guidance designed to help clients understand potential risks before entering into significant transactions.",
        ],

        id: [
          "Beliau membantu klien menangani persoalan hukum yang berkaitan dengan kepemilikan tanah, transaksi properti, hubungan kontraktual, serta dokumentasi hukum pendukung.",

          "Pekerjaannya mencakup legal due diligence, peninjauan perizinan, analisis kontrak, serta identifikasi risiko dalam transaksi properti dan infrastruktur.",

          "Beliau memberikan panduan hukum praktis agar klien dapat memahami potensi risiko sebelum melakukan transaksi yang signifikan.",
        ],
      },
    },

    {
      id: "tsabbit",
      name: "Tsabbit Aqdamana, S.H., M.H.",
      shortName: "Tsabbit Aqdamana",
      role: {
        en: "Partner",
        id: "Partner",
      },
      image: fotota,

      email: "kingmada@zakyzhafran.com",

      linkedin:
        "https://id.linkedin.com/in/zaky-zhafran-king-mada-s-h-m-h-925713135/in",

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Law — Universitas Islam Indonesia (UII)",
          "Master of Law — Universitas Islam Indonesia (UII)",
        ],
        id: [
          "Sarjana Hukum — Universitas Islam Indonesia (UII)",
          "Magister Hukum — Universitas Islam Indonesia (UII)",
        ],
      },

      focus: {
        en: [
          "Legal Drafting",
          "Startup Advisory",
          "Administrative Law",
          "PTUN",
          "Constitutional Litigation",
        ],
        id: [
          "Legal Drafting",
          "Konsultasi Startup",
          "Hukum Administrasi",
          "PTUN",
          "Litigasi Konstitusional",
        ],
      },

      description: {
        en: "Tsabbit Aqdamana is a Partner with experience in legal drafting, startup advisory, administrative law, and litigation involving public institutions and regulatory matters.",

        id: "Tsabbit Aqdamana merupakan Partner dengan pengalaman dalam legal drafting, konsultasi startup, hukum administrasi, serta litigasi yang melibatkan institusi publik dan persoalan regulasi.",
      },

      detail: {
        en: [
          "His practice includes preparing and reviewing legal documents, advising startups and businesses, and assisting clients in navigating administrative and regulatory issues.",

          "He also handles matters involving the State Administrative Court (PTUN) and constitutional litigation, requiring detailed legal argumentation and procedural analysis.",

          "His approach focuses on precise legal drafting, structured argumentation, and strategic preparation for contentious matters.",
        ],

        id: [
          "Praktiknya mencakup penyusunan dan peninjauan dokumen hukum, konsultasi bagi startup dan perusahaan, serta pendampingan klien dalam menghadapi persoalan administratif dan regulasi.",

          "Beliau juga menangani perkara yang berkaitan dengan Pengadilan Tata Usaha Negara (PTUN) dan litigasi konstitusional yang membutuhkan argumentasi hukum serta analisis prosedural secara mendalam.",

          "Pendekatannya berfokus pada ketepatan legal drafting, argumentasi yang terstruktur, serta persiapan strategis dalam menghadapi perkara yang bersifat contentious.",
        ],
      },
    },

    {
      id: "clarte",
      name: "Clarte Gagah, S.H.",
      shortName: "Clarte Gagah",
      role: {
        en: "Partner",
        id: "Partner",
      },
      image: fotocg,

      email: "kingmada@zakyzhafran.com",

      linkedin:
        "https://id.linkedin.com/in/zaky-zhafran-king-mada-s-h-m-h-925713135/in",

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Law — Universitas Islam Indonesia (UII)",
        ],
        id: [
          "Sarjana Hukum — Universitas Islam Indonesia (UII)",
        ],
      },

      focus: {
        en: [
          "Litigation",
          "Dispute Resolution",
          "Legal Advisory",
          "Legal Representation",
        ],
        id: [
          "Litigasi",
          "Penyelesaian Sengketa",
          "Konsultasi Hukum",
          "Pendampingan Hukum",
        ],
      },

      description: {
        en: "Clarte Gagah is a Partner focusing on litigation, dispute resolution, legal representation, and strategic legal advisory.",

        id: "Clarte Gagah merupakan Partner yang berfokus pada litigasi, penyelesaian sengketa, pendampingan hukum, serta konsultasi hukum strategis.",
      },

      detail: {
        en: [
          "He assists clients in managing disputes through structured legal analysis, case preparation, and strategic representation.",

          "His practice emphasizes understanding the client's position, identifying legal risks, and developing practical strategies for resolving contentious matters.",

          "He works with the firm's multidisciplinary team when disputes involve corporate, commercial, regulatory, or contractual issues.",
        ],

        id: [
          "Beliau membantu klien menangani sengketa melalui analisis hukum yang terstruktur, persiapan perkara, serta pendampingan dan representasi hukum secara strategis.",

          "Praktiknya menekankan pemahaman terhadap posisi klien, identifikasi risiko hukum, serta pengembangan strategi praktis untuk menyelesaikan persoalan sengketa.",

          "Beliau bekerja bersama tim multidisipliner firma ketika suatu sengketa melibatkan persoalan korporasi, komersial, regulasi, maupun kontraktual.",
        ],
      },
    },
  ];

  const lawyer = useMemo(
    () => lawyers.find((item) => item.id === id),
    [id]
  );

  /* =========================================================
      TRANSLATION
  ========================================================== */

  const content = {
    profileNotFound: {
      en: "PROFILE NOT FOUND",
      id: "PROFIL TIDAK DITEMUKAN",
    },

    unavailable: {
      en: "Lawyer profile unavailable.",
      id: "Profil pengacara tidak tersedia.",
    },

    unavailableDescription: {
      en: "The requested profile could not be found. Please return to our lawyers directory.",
      id: "Profil yang diminta tidak dapat ditemukan. Silakan kembali ke daftar pengacara kami.",
    },

    backToLawyers: {
      en: "Back to Lawyers",
      id: "Kembali ke Lawyers",
    },

    lawyers: {
      en: "Lawyers",
      id: "Pengacara",
    },

    position: {
      en: "Position",
      id: "Posisi",
    },

    practice: {
      en: "Practice",
      id: "Praktik",
    },

    availability: {
      en: "Availability",
      id: "Ketersediaan",
    },

    byAppointment: {
      en: "By Appointment",
      id: "Berdasarkan Janji",
    },

    professionalProfile: {
      en: "PROFESSIONAL PROFILE",
      id: "PROFIL PROFESIONAL",
    },

    professionalTitle: {
      en: "Legal expertise with a practical perspective.",
      id: "Keahlian hukum dengan perspektif yang praktis.",
    },

    professionalDescription: {
      en: "Combining legal knowledge, strategic thinking, and a clear understanding of client objectives.",
      id: "Menggabungkan pengetahuan hukum, pemikiran strategis, dan pemahaman yang jelas terhadap kebutuhan klien.",
    },

    areasOfExpertise: {
      en: "AREAS OF EXPERTISE",
      id: "BIDANG KEAHLIAN",
    },

    expertiseTitle: {
      en: "Focused expertise for complex matters.",
      id: "Keahlian yang terarah untuk persoalan yang kompleks.",
    },

    education: {
      en: "EDUCATION",
      id: "PENDIDIKAN",
    },

    educationTitle: {
      en: "Academic foundation.",
      id: "Landasan akademik.",
    },

    directContact: {
      en: "DIRECT CONTACT",
      id: "KONTAK LANGSUNG",
    },

    contactTitle: {
      en: "Speak directly with our team.",
      id: "Berbicara langsung dengan tim kami.",
    },

    contactDescription: {
      en: "For consultations and legal inquiries, contact our team through the available channels below.",
      id: "Untuk konsultasi dan kebutuhan hukum, hubungi tim kami melalui saluran yang tersedia di bawah.",
    },

    email: {
      en: "Email",
      id: "Email",
    },

    linkedin: {
      en: "LinkedIn",
      id: "LinkedIn",
    },

    professionalProfileLink: {
      en: "Professional Profile",
      id: "Profil Profesional",
    },

    whatsappConsultation: {
      en: "WhatsApp Consultation",
      id: "Konsultasi WhatsApp",
    },

    startConversation: {
      en: "Start the conversation.",
      id: "Mulai percakapan.",
    },

    whatsappDescription: {
      en: "Connect directly with Zaky Zhafran And Partners to discuss your legal requirements and arrange a consultation.",
      id: "Hubungi Zaky Zhafran And Partners secara langsung untuk mendiskusikan kebutuhan hukum Anda dan mengatur jadwal konsultasi.",
    },

    workWithFirm: {
      en: "WORK WITH OUR FIRM",
      id: "BEKERJA BERSAMA FIRMA KAMI",
    },

    ctaTitle: {
      en: "Protect what matters.",
      id: "Lindungi apa yang penting.",
    },

    ctaDescription: {
      en: "Discuss your legal, corporate, or tax requirements with our multidisciplinary team.",
      id: "Diskusikan kebutuhan hukum, korporasi, atau perpajakan Anda bersama tim multidisipliner kami.",
    },

    startConsultation: {
      en: "Start a Consultation",
      id: "Mulai Konsultasi",
    },
  };

  const t = (key) => content[key][lang];

  /* =========================================================
      NOT FOUND
  ========================================================== */

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-[#0B1220] text-white">
        <Navbar />

        {/* Language switcher */}
        <div className="fixed right-5 top-20 z-[999]">
          <div className="flex items-center rounded-full border border-white/10 bg-[#0B1220]/90 p-1 shadow-xl backdrop-blur-md">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
                lang === "en"
                  ? "bg-white text-[#0B1220]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLang("id")}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
                lang === "id"
                  ? "bg-white text-[#0B1220]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              ID
            </button>
          </div>
        </div>

        <section className="flex min-h-[80vh] items-center justify-center px-6">
          <div className="text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] text-blue-300">
              {t("profileNotFound")}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              {t("unavailable")}
            </h1>

            <p className="mx-auto mt-6 max-w-lg leading-7 text-white/50">
              {t("unavailableDescription")}
            </p>

            <button
              onClick={() => navigate("/lawyers")}
              className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:bg-blue-50"
            >
              {t("backToLawyers")}
            </button>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  /* =========================================================
      WHATSAPP
  ========================================================== */

  const whatsappMessage =
    lang === "en"
      ? `Hello Zaky Zhafran And Partners, I would like to consult with ${lawyer.shortName}.`
      : `Halo Zaky Zhafran And Partners, saya ingin berkonsultasi dengan ${lawyer.shortName}.`;

  const whatsappLink = `https://wa.me/${
    lawyer.whatsapp
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* =========================================================
          LANGUAGE SWITCHER
      ========================================================== */}
      <div className="fixed right-5 top-20 z-[999]">
        <div className="flex items-center rounded-full border border-white/10 bg-[#0B1220]/90 p-1 shadow-xl backdrop-blur-md">
          <button
            onClick={() => setLang("en")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "en"
                ? "bg-white text-[#0B1220]"
                : "text-white/60 hover:text-white"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("id")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "id"
                ? "bg-white text-[#0B1220]"
                : "text-white/60 hover:text-white"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0B1220] text-white">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[12%] top-[24%] h-44 w-44 rounded-full border border-white/5" />

        <div className="pointer-events-none absolute right-[15%] top-[29%] h-28 w-28 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em]">
            <Link
              to="/lawyers"
              className="text-white/40 transition hover:text-white"
            >
              {t("lawyers")}
            </Link>

            <span className="text-white/20">/</span>

            <span className="text-blue-300">{lawyer.shortName}</span>
          </div>

          <div className="grid items-end gap-14 lg:grid-cols-[1fr_420px]">
            {/* Hero text */}
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-blue-400" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-300">
                  {lawyer.role[lang]}
                </p>
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[78px]">
                {lawyer.shortName}
              </h1>

              <p className="mt-7 text-lg font-medium text-white/40 md:text-xl">
                {lawyer.name}
              </p>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                {lawyer.description[lang]}
              </p>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                <div className="aspect-[4/5]">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        {t("position")}
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        {lawyer.role[lang]}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg backdrop-blur-md">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero meta */}
          <div className="mt-16 grid max-w-4xl grid-cols-1 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                {t("practice")}
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {lawyer.focus[lang][0]}
              </p>
            </div>

            <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                {t("position")}
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {lawyer.role[lang]}
              </p>
            </div>

            <div className="pt-6 sm:px-8 sm:pt-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                {t("availability")}
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {t("byAppointment")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFESSIONAL PROFILE
      ========================================================== */}
      <section className="bg-[#F6F7FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#0B1220]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-gray-500">
                  {t("professionalProfile")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1220] md:text-5xl">
                {t("professionalTitle")}
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-500">
                {t("professionalDescription")}
              </p>
            </div>

            <div className="space-y-7">
              {lawyer.detail[lang].map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-gray-600 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRACTICE AREAS
      ========================================================== */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-blue-600" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-600">
                  {t("areasOfExpertise")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1220] md:text-5xl">
                {t("expertiseTitle")}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {lawyer.focus[lang].map((item, index) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-gray-200 bg-[#F6F7FB] p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-gray-300 transition group-hover:text-blue-600">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-lg font-semibold tracking-tight text-[#0B1220]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION
      ========================================================== */}
      <section className="bg-[#F6F7FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#0B1220]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-gray-500">
                  {t("education")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1220] md:text-5xl">
                {t("educationTitle")}
              </h2>
            </div>

            <div className="space-y-4">
              {lawyer.education[lang].map((education, index) => (
                <div
                  key={education}
                  className="flex gap-6 border-b border-gray-200 py-6 first:border-t"
                >
                  <span className="text-xs font-semibold text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-base leading-7 text-gray-700">
                    {education}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact details */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-blue-600" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-600">
                  {t("directContact")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1220] md:text-5xl">
                {t("contactTitle")}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500">
                {t("contactDescription")}
              </p>

              <div className="mt-10 space-y-0">
                {/* EMAIL */}
                <a
                  href={`mailto:${lawyer.email}`}
                  className="group flex items-center justify-between border-t border-gray-200 py-6"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      {t("email")}
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#0B1220]">
                      {lawyer.email}
                    </p>
                  </div>

                  <span className="text-xl text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>
                </a>

                {/* LINKEDIN */}
                <a
                  href={lawyer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-t border-gray-200 py-6"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      {t("linkedin")}
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#0B1220]">
                      {t("professionalProfileLink")}
                    </p>
                  </div>

                  <span className="text-xl text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* WhatsApp card */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#0B1220] p-8 text-white md:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full border border-white/5" />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                  {t("whatsappConsultation")}
                </p>

                <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                  {t("startConversation")}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                  {t("whatsappDescription")}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
                >
                  {t("whatsappConsultation")}

                  <span className="text-lg">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA + FOOTER
      ========================================================== */}
      <div className="bg-[#0B1220]">
        <section className="relative overflow-hidden py-24 text-white md:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
              <div className="max-w-4xl">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-blue-400" />

                  <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-300">
                    {t("workWithFirm")}
                  </p>
                </div>

                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                  {t("ctaTitle")}
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                  {t("ctaDescription")}
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                {t("startConsultation")}

                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}