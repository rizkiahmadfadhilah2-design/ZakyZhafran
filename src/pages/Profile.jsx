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

  // =========================================================
  // LAWYERS DATA
  // =========================================================

  const lawyers = [
    {
      id: "zaky",

      name: {
        en: "Zaky Zhafran King Mada, S.H., M.H.",
        id: "Zaky Zhafran King Mada, S.H., M.H.",
      },

      shortName: {
        en: "Zaky Zhafran King Mada",
        id: "Zaky Zhafran King Mada",
      },

      role: {
        en: "Managing Partner",
        id: "Managing Partner",
      },

      image: fotozk,

      email: "kingmada@zakyzhafran.com",

      linkedin:
        "https://www.linkedin.com/in/zaky-zhafran-king-mada-s-h-m-h-925713135?utm_source=share_via&utm_content=profile&utm_medium=member_ios",

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Laws — Islamic University of Indonesia (UII)",
          "Master of Laws — University of Indonesia (UI)",
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

      name: {
        en: "Dimas Nugraha Riyadi, S.H., M.H.",
        id: "Dimas Nugraha Riyadi, S.H., M.H.",
      },

      shortName: {
        en: "Dimas Nugraha Riyadi",
        id: "Dimas Nugraha Riyadi",
      },

      role: {
        en: "Partner",
        id: "Partner",
      },

      image: fotodnr,

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Laws — Islamic University of Indonesia (UII)",
          "Master of Laws — University of Indonesia (UI)",
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

      name: {
        en: "Dini Inasyah Alfaridah, S.H., M.H.",
        id: "Dini Inasyah Alfaridah, S.H., M.H.",
      },

      shortName: {
        en: "Dini Inasyah Alfaridah",
        id: "Dini Inasyah Alfaridah",
      },

      role: {
        en: "Partner",
        id: "Partner",
      },

      image: fotodi,

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Laws — UIN Sunan Gunung Djati",
          "Master of Laws — UIN Sunan Gunung Djati",
        ],

        id: [
          "Sarjana Hukum — UIN Sunan Gunung Djati",
          "Magister Hukum — UIN Sunan Gunung Djati",
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

      name: {
        en: "Dina Aisyah Alfarijah, S.H., M.Kn.",
        id: "Dina Aisyah Alfarijah, S.H., M.Kn.",
      },

      shortName: {
        en: "Dina Aisyah Alfarijah",
        id: "Dina Aisyah Alfarijah",
      },

      role: {
        en: "Partner",
        id: "Partner",
      },

      image: fotoda,

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Laws — Padjadjaran University (UNPAD)",
          "Master of Notarial Law — YARSI University",
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

      name: {
        en: "Tsabbit Aqdamana, S.H., M.H.",
        id: "Tsabbit Aqdamana, S.H., M.H.",
      },

      shortName: {
        en: "Tsabbit Aqdamana",
        id: "Tsabbit Aqdamana",
      },

      role: {
        en: "Partner",
        id: "Partner",
      },

      image: fotota,

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Laws — Islamic University of Indonesia (UII)",
          "Master of Laws — Islamic University of Indonesia (UII)",
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
          "Constitutional Litigation",
        ],

        id: [
          "Legal Drafting",
          "Konsultasi Startup",
          "Hukum Administrasi",
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

          "He also handles matters involving administrative proceedings and constitutional litigation, requiring detailed legal argumentation and procedural analysis.",

          "His approach focuses on precise legal drafting, structured argumentation, and strategic preparation for contentious matters.",
        ],

        id: [
          "Praktiknya mencakup penyusunan dan peninjauan dokumen hukum, konsultasi bagi startup dan perusahaan, serta pendampingan klien dalam menghadapi persoalan administratif dan regulasi.",

          "Beliau juga menangani perkara yang berkaitan dengan proses administrasi dan litigasi konstitusional yang membutuhkan argumentasi hukum serta analisis prosedural secara mendalam.",

          "Pendekatannya berfokus pada ketepatan legal drafting, argumentasi yang terstruktur, serta persiapan strategis dalam menghadapi perkara yang bersifat contentious.",
        ],
      },
    },

    {
      id: "clarte",

      name: {
        en: "Clarte Gagah, S.H.",
        id: "Clarte Gagah, S.H.",
      },

      shortName: {
        en: "Clarte Gagah",
        id: "Clarte Gagah",
      },

      role: {
        en: "Partner",
        id: "Partner",
      },

      image: fotocg,

      whatsapp: "6282242887887",

      education: {
        en: [
          "Bachelor of Laws — Islamic University of Indonesia (UII)",
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

  // =========================================================
  // CONTENT
  // =========================================================

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
      id: "Kembali ke Pengacara",
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
      en: "For consultations and legal inquiries, contact our team through the available channel below.",
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

  const lawyer = useMemo(
    () => lawyers.find((item) => item.id === id),
    [id]
  );

  // =========================================================
  // WHATSAPP
  // =========================================================

  const whatsappMessage = lawyer
    ? lang === "en"
      ? `Hello Zaky Zhafran And Partners, I would like to consult with ${lawyer.shortName.en}.`
      : `Halo Zaky Zhafran And Partners, saya ingin berkonsultasi dengan ${lawyer.shortName.id}.`
    : "";

  const whatsappLink = lawyer
    ? `https://wa.me/${
        lawyer.whatsapp
      }?text=${encodeURIComponent(whatsappMessage)}`
    : "#";

  // =========================================================
  // PROFILE NOT FOUND
  // =========================================================

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-[#F8F6EF] text-[#16251F]">
        <Navbar />

        {/* LANGUAGE SWITCHER */}

        <div className="fixed right-5 top-20 z-[999]">
          <div className="flex items-center rounded-full border border-[#A92F46]/20 bg-[#F8F6EF]/95 p-1 shadow-lg backdrop-blur-md">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
                lang === "en"
                  ? "bg-[#0B4F32] text-white"
                  : "text-[#0B4F32]/50 hover:text-[#A92F46]"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLang("id")}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
                lang === "id"
                  ? "bg-[#0B4F32] text-white"
                  : "text-[#0B4F32]/50 hover:text-[#A92F46]"
              }`}
            >
              ID
            </button>
          </div>
        </div>

        <section className="flex min-h-[80vh] items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <div className="mb-7 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#A92F46]" />

              <p className="text-[11px] font-semibold tracking-[0.3em] text-[#A92F46]">
                {t("profileNotFound")}
              </p>

              <span className="h-px w-10 bg-[#A92F46]" />
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#0B4F32] md:text-6xl">
              {t("unavailable")}
            </h1>

            <p className="mt-6 leading-8 text-[#16251F]/55">
              {t("unavailableDescription")}
            </p>

            <button
              onClick={() => navigate("/lawyers")}
              className="mt-9 rounded-full bg-[#0B4F32] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#A92F46]"
            >
              {t("backToLawyers")}
            </button>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // =========================================================
  // MAIN PAGE
  // =========================================================

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F6EF] text-[#16251F]">
      <Navbar />

      {/* =====================================================
          LANGUAGE SWITCHER
      ====================================================== */}

      <div className="fixed right-5 top-[78px] z-[999]">
        <div className="flex items-center rounded-full border border-[#A92F46]/20 bg-[#F8F6EF]/95 p-1 shadow-lg backdrop-blur-md">
          <button
            onClick={() => setLang("en")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "en"
                ? "bg-[#0B4F32] text-white"
                : "text-[#0B4F32]/50 hover:text-[#A92F46]"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("id")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] transition ${
              lang === "id"
                ? "bg-[#0B4F32] text-white"
                : "text-[#0B4F32]/50 hover:text-[#A92F46]"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923] text-white">
        {/* Decorative background */}

        <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#A92F46]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-[#D37A8A]/8 blur-3xl" />

        {/* Botanical Line */}

        <div className="pointer-events-none absolute right-[5%] top-[16%] hidden h-[420px] w-[330px] lg:block">
          <div className="absolute left-1/2 top-0 h-[390px] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-[#D7A0AD]/30 to-transparent" />

          <div className="absolute left-[7%] top-[22%] h-24 w-14 rotate-[-32deg] rounded-[100%_0_100%_0] border border-[#D7A0AD]/25" />

          <div className="absolute right-[6%] top-[16%] h-28 w-16 rotate-[28deg] rounded-[100%_0_100%_0] border border-[#A92F46]/25" />

          <div className="absolute left-[29%] top-[46%] h-28 w-16 rotate-[25deg] rounded-[100%_0_100%_0] border border-[#A92F46]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10 md:pb-28 md:pt-44 lg:px-12">
          {/* Breadcrumb */}

          <div className="mb-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em]">
            <Link
              to="/lawyers"
              className="text-white/40 transition hover:text-white"
            >
              {t("lawyers")}
            </Link>

            <span className="text-white/20">/</span>

            <span className="text-[#E1A7B1]">
              {lawyer.shortName[lang]}
            </span>
          </div>

          <div className="grid items-end gap-14 lg:grid-cols-[1fr_400px]">
            {/* Hero Text */}

            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#D37A8A]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-[#E1A7B1]">
                  {lawyer.role[lang]}
                </p>
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[78px]">
                {lawyer.shortName[lang]}
              </h1>

              <p className="mt-7 text-lg font-medium text-white/40 md:text-xl">
                {lawyer.name[lang]}
              </p>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                {lawyer.description[lang]}
              </p>
            </div>

            {/* Hero Image */}

            <div className="relative">
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5">
                <div className="aspect-[4/5]">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name[lang]}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#073923]/80 to-transparent" />

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

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg backdrop-blur-md">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Meta */}

          <div className="mt-16 max-w-4xl border-t border-white/10 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
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

              <div className="pt-6 sm:pl-8 sm:pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                  {t("availability")}
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {t("byAppointment")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL PROFILE
      ====================================================== */}

      <section className="bg-[#F8F6EF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#A92F46]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-[#A92F46]">
                  {t("professionalProfile")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B4F32] md:text-5xl">
                {t("professionalTitle")}
              </h2>

              <p className="mt-6 text-base leading-8 text-[#16251F]/55">
                {t("professionalDescription")}
              </p>
            </div>

            <div className="space-y-7">
              {lawyer.detail[lang].map((paragraph, index) => (
                <div
                  key={index}
                  className="border-b border-[#16251F]/10 pb-7 last:border-b-0"
                >
                  <p className="text-base leading-8 text-[#16251F]/65 md:text-lg">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AREAS OF EXPERTISE
      ====================================================== */}

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#A92F46]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-[#A92F46]">
                  {t("areasOfExpertise")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B4F32] md:text-5xl">
                {t("expertiseTitle")}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {lawyer.focus[lang].map((item, index) => (
                <div
                  key={item}
                  className="group border border-[#16251F]/10 bg-[#F8F6EF] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A92F46]/25 hover:bg-white hover:shadow-[0_18px_45px_rgba(11,79,50,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#16251F]/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[#16251F]/20 transition group-hover:text-[#A92F46]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-lg font-semibold tracking-tight text-[#0B4F32]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section className="bg-[#F8F6EF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#0B4F32]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-[#0B4F32]">
                  {t("education")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B4F32] md:text-5xl">
                {t("educationTitle")}
              </h2>
            </div>

            <div>
              {lawyer.education[lang].map((education, index) => (
                <div
                  key={education}
                  className="flex gap-6 border-b border-[#16251F]/10 py-6 first:border-t"
                >
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#A92F46]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-base leading-7 text-[#16251F]/65 md:text-lg">
                    {education}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIRECT CONTACT
      ====================================================== */}

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Details */}

            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#A92F46]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-[#A92F46]">
                  {t("directContact")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B4F32] md:text-5xl">
                {t("contactTitle")}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#16251F]/55">
                {t("contactDescription")}
              </p>

              <div className="mt-10">
                {/* =================================================
                    EMAIL & LINKEDIN — ZAKY ONLY
                ================================================= */}

                {lawyer.id === "zaky" && (
                  <>
                    {/* EMAIL */}

                    <a
                      href={`mailto:${lawyer.email}`}
                      className="group flex items-center justify-between border-t border-[#16251F]/10 py-6"
                    >
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16251F]/35">
                          {t("email")}
                        </p>

                        <p className="mt-2 text-sm font-medium text-[#0B4F32]">
                          {lawyer.email}
                        </p>
                      </div>

                      <span className="text-xl text-[#16251F]/25 transition group-hover:translate-x-1 group-hover:text-[#A92F46]">
                        →
                      </span>
                    </a>

                    {/* LINKEDIN */}

                    <a
                      href={lawyer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-t border-[#16251F]/10 py-6"
                    >
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16251F]/35">
                          {t("linkedin")}
                        </p>

                        <p className="mt-2 text-sm font-medium text-[#0B4F32]">
                          {t("professionalProfileLink")}
                        </p>
                      </div>

                      <span className="text-xl text-[#16251F]/25 transition group-hover:translate-x-1 group-hover:text-[#A92F46]">
                        ↗
                      </span>
                    </a>
                  </>
                )}

                {/* =================================================
                    OTHER LAWYERS
                    Only WhatsApp consultation is available.
                ================================================= */}

                {lawyer.id !== "zaky" && (
                  <div className="border-t border-[#16251F]/10 py-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16251F]/35">
                      {t("whatsappConsultation")}
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#0B4F32]">
                      {t("startConversation")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* WhatsApp */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#155D40] via-[#0B4F32] to-[#073923] p-8 text-white md:p-12">
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#A92F46]/10 blur-3xl" />

              <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-72 w-72 rounded-full border border-white/[0.05]" />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E1A7B1]">
                  {t("whatsappConsultation")}
                </p>

                <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
                  {t("startConversation")}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                  {t("whatsappDescription")}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#F8F6EF] px-7 py-4 text-sm font-semibold text-[#0B4F32] transition duration-300 hover:-translate-y-1 hover:bg-[#A92F46] hover:text-white"
                >
                  {t("whatsappConsultation")}

                  <span className="text-lg">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#073923] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[#A92F46]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#D37A8A]/8 blur-3xl" />

        <div className="pointer-events-none absolute right-[8%] top-[20%] hidden h-[260px] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-[#D7A0AD]/25 to-transparent lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#D37A8A]" />

                <p className="text-[11px] font-semibold tracking-[0.3em] text-[#E1A7B1]">
                  {t("workWithFirm")}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">
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
              className="inline-flex w-fit items-center gap-4 rounded-full bg-[#F8F6EF] px-7 py-4 text-sm font-semibold text-[#0B4F32] transition duration-300 hover:-translate-y-1 hover:bg-[#A92F46] hover:text-white"
            >
              {t("startConsultation")}

              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <div className="bg-[#073923]">
        <Footer />
      </div>
    </div>
  );
}