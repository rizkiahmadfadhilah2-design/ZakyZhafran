import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ServicesPage() {
  const [openLegal, setOpenLegal] = useState(null);
  const [openTax, setOpenTax] = useState(null);
  const [lang, setLang] = useState("en");

  const legalServices = [
    {
      title: {
        en: "Litigation Field",
        id: "Bidang Litigasi",
      },
      short: {
        en: "Representation in civil, commercial, and corporate disputes.",
        id: "Representasi sengketa perdata, komersial, dan korporasi.",
      },
      long: {
        en:
          "Litigation Field is one of our core legal practices, focusing on the prevention, management, and resolution of complex disputes involving individuals, companies, institutions, and business organizations. Our services cover civil, commercial, corporate, and contractual disputes, as well as litigation proceedings before the relevant courts and other dispute resolution forums. We assist clients from the early assessment of a potential dispute through negotiation, mediation, litigation preparation, court representation, and enforcement of judgments. Every matter is approached through careful legal research, evidence analysis, strategic case planning, and clear communication with the client. Our objective is not merely to pursue a favorable legal outcome, but also to protect the client's commercial interests, reputation, assets, and long-term business continuity. Where appropriate, we also develop preventive legal strategies to reduce the possibility of similar disputes arising in the future.",
        id:
          "Bidang Litigasi merupakan salah satu layanan utama kami yang berfokus pada pencegahan, pengelolaan, dan penyelesaian sengketa hukum yang melibatkan individu, perusahaan, institusi, maupun organisasi bisnis. Layanan ini mencakup sengketa perdata, komersial, korporasi, kontrak, serta proses penyelesaian perkara melalui pengadilan maupun forum penyelesaian sengketa lainnya. Kami mendampingi klien sejak tahap awal ketika potensi sengketa mulai muncul, termasuk melakukan analisis permasalahan, negosiasi, mediasi, penyusunan strategi perkara, persiapan dokumen dan bukti, hingga pendampingan dalam proses persidangan dan pelaksanaan putusan. Setiap perkara ditangani melalui penelitian hukum yang mendalam, analisis bukti, penyusunan strategi yang terukur, serta komunikasi yang jelas dengan klien. Tujuan kami bukan hanya memperoleh hasil hukum yang optimal, tetapi juga melindungi kepentingan bisnis, reputasi, aset, dan keberlangsungan usaha klien. Kami juga membantu menyusun langkah pencegahan agar risiko sengketa serupa dapat diminimalkan di kemudian hari.",
      },
    },

    {
      title: {
        en: "Corporate Sector",
        id: "Sektor Korporasi",
      },
      short: {
        en: "Corporate structuring and business legal advisory.",
        id: "Struktur korporasi dan konsultasi bisnis.",
      },
      long: {
        en:
          "Our Corporate Sector provides comprehensive legal support throughout the business lifecycle, from company establishment and initial structuring to expansion, restructuring, investment, and corporate transactions. We assist businesses in preparing corporate documents, shareholder arrangements, governance structures, commercial agreements, joint ventures, mergers and acquisitions, and other strategic transactions. Our advisory approach combines legal compliance with practical business considerations, allowing clients to make informed decisions without unnecessarily slowing down their commercial objectives. We also assist management and shareholders in identifying potential legal risks, reviewing corporate policies, managing contractual obligations, and maintaining appropriate governance standards. For growing businesses, we provide legal frameworks designed to support sustainable expansion while reducing exposure to regulatory, contractual, and corporate disputes.",
        id:
          "Layanan Sektor Korporasi memberikan dukungan hukum secara menyeluruh sepanjang siklus bisnis, mulai dari pendirian perusahaan dan penyusunan struktur awal hingga ekspansi, restrukturisasi, investasi, dan transaksi korporasi. Kami membantu perusahaan dalam penyusunan dokumen korporasi, pengaturan pemegang saham, tata kelola perusahaan, perjanjian komersial, joint venture, merger dan akuisisi, serta berbagai transaksi strategis lainnya. Pendekatan kami tidak hanya berfokus pada kepatuhan terhadap hukum, tetapi juga mempertimbangkan kebutuhan bisnis agar setiap keputusan dapat diambil secara efektif tanpa menghambat tujuan komersial perusahaan. Kami juga membantu manajemen dan pemegang saham dalam mengidentifikasi risiko hukum, meninjau kebijakan perusahaan, mengelola kewajiban kontraktual, serta membangun tata kelola yang baik. Bagi perusahaan yang sedang berkembang, kami membantu membangun kerangka hukum yang mendukung ekspansi secara berkelanjutan sekaligus mengurangi risiko regulasi, kontrak, dan sengketa korporasi.",
      },
    },

    {
      title: {
        en: "Banking Sector",
        id: "Sektor Perbankan",
      },
      short: {
        en: "Financial regulatory and banking advisory.",
        id: "Konsultasi perbankan dan keuangan.",
      },
      long: {
        en:
          "Our Banking Sector practice provides legal advisory and transactional support for banking institutions, financial companies, businesses, investors, and other parties involved in financial activities. We assist with financing arrangements, credit agreements, loan documentation, guarantees, financial restructuring, regulatory compliance, and related commercial transactions. We also provide legal guidance for emerging financial technology businesses and transactions that require careful consideration of applicable regulatory requirements. Our work involves reviewing contractual structures, identifying legal and regulatory risks, and developing practical solutions that protect the interests of the parties involved. Where disputes arise, we assist clients with negotiation, dispute management, and appropriate legal proceedings. Through a commercially focused approach, we help clients navigate financial transactions while maintaining appropriate legal protection and regulatory compliance.",
        id:
          "Layanan Sektor Perbankan memberikan konsultasi hukum dan dukungan transaksi bagi lembaga perbankan, perusahaan keuangan, pelaku usaha, investor, maupun pihak lain yang terlibat dalam aktivitas keuangan. Kami membantu dalam penyusunan dan peninjauan pembiayaan, perjanjian kredit, dokumen pinjaman, jaminan, restrukturisasi keuangan, kepatuhan regulasi, serta transaksi komersial yang berkaitan dengan sektor keuangan. Kami juga memberikan konsultasi hukum bagi perusahaan financial technology dan kegiatan usaha yang membutuhkan pemahaman terhadap ketentuan regulasi yang berlaku. Pekerjaan kami mencakup peninjauan struktur kontrak, identifikasi risiko hukum dan regulasi, serta penyusunan solusi yang dapat melindungi kepentingan klien. Apabila terjadi sengketa, kami juga membantu proses negosiasi, pengelolaan sengketa, maupun langkah hukum yang diperlukan. Dengan pendekatan yang memahami kebutuhan bisnis, kami membantu klien menjalankan transaksi keuangan dengan perlindungan hukum dan kepatuhan regulasi yang tepat.",
      },
    },

    {
      title: {
        en: "Bankruptcy Field",
        id: "Kepailitan",
      },
      short: {
        en: "Restructuring and insolvency solutions.",
        id: "Restrukturisasi dan kepailitan.",
      },
      long: {
        en:
          "Our Bankruptcy Field assists creditors, debtors, companies, and other stakeholders in matters involving financial distress, insolvency, bankruptcy proceedings, and debt restructuring. We provide legal assessment regarding the client's position, available legal remedies, potential risks, and appropriate restructuring strategies. Our assistance may include creditor negotiations, preparation of legal documents, representation in relevant proceedings, and development of recovery strategies designed to preserve business value. For companies experiencing financial difficulties, we help evaluate available restructuring options and establish a structured approach toward debt obligations. For creditors, we assist in protecting claims and pursuing appropriate legal remedies. Each matter is handled carefully because insolvency situations can significantly affect business operations, assets, employees, shareholders, and commercial relationships.",
        id:
          "Layanan Kepailitan membantu kreditur, debitur, perusahaan, maupun pihak berkepentingan lainnya dalam menghadapi kondisi kesulitan keuangan, insolvensi, proses kepailitan, dan restrukturisasi utang. Kami memberikan analisis hukum mengenai posisi klien, pilihan langkah hukum yang tersedia, risiko yang mungkin muncul, serta strategi restrukturisasi yang dapat diterapkan. Pendampingan dapat mencakup negosiasi dengan kreditur, penyusunan dokumen hukum, representasi dalam proses hukum terkait, hingga penyusunan strategi pemulihan usaha untuk menjaga nilai bisnis. Bagi perusahaan yang mengalami kesulitan keuangan, kami membantu mengevaluasi pilihan restrukturisasi dan menyusun pendekatan yang terstruktur terhadap kewajiban utang. Bagi kreditur, kami membantu melindungi hak tagih dan menentukan langkah hukum yang sesuai. Setiap perkara ditangani secara hati-hati karena kondisi kepailitan dapat berdampak besar terhadap operasional perusahaan, aset, karyawan, pemegang saham, serta hubungan bisnis.",
      },
    },

    {
      title: {
        en: "Investment Sector",
        id: "Sektor Investasi",
      },
      short: {
        en: "Foreign & domestic investment legal support.",
        id: "Dukungan investasi lokal & asing.",
      },
      long: {
        en:
          "Our Investment Sector provides legal assistance for domestic and foreign investors seeking to establish, expand, restructure, or protect their investments. We assist with investment structuring, corporate arrangements, licensing, regulatory requirements, agreements, due diligence, and other legal matters associated with investment activities. For foreign investors, we provide guidance in understanding the Indonesian legal and regulatory environment and identifying legal requirements relevant to their proposed business activities. We also assist existing businesses in reviewing investment structures and contractual relationships with partners, shareholders, and other stakeholders. Our approach focuses on creating investment structures that are legally sound, commercially practical, and capable of supporting long-term growth while reducing regulatory and contractual risks.",
        id:
          "Layanan Sektor Investasi memberikan bantuan hukum kepada investor domestik maupun asing yang ingin mendirikan, mengembangkan, melakukan restrukturisasi, atau melindungi investasinya. Kami membantu dalam penyusunan struktur investasi, pengaturan korporasi, perizinan, pemenuhan regulasi, penyusunan perjanjian, due diligence, serta berbagai aspek hukum yang berkaitan dengan kegiatan investasi. Bagi investor asing, kami memberikan pemahaman mengenai lingkungan hukum dan regulasi di Indonesia serta persyaratan hukum yang berkaitan dengan rencana kegiatan usaha. Kami juga membantu perusahaan yang telah berjalan dalam meninjau struktur investasi dan hubungan kontraktual dengan mitra, pemegang saham, maupun pihak berkepentingan lainnya. Pendekatan kami diarahkan untuk menciptakan struktur investasi yang memiliki dasar hukum yang kuat, dapat diterapkan secara komersial, serta mampu mendukung pertumbuhan jangka panjang dengan risiko regulasi dan kontraktual yang lebih terukur.",
      },
    },

    {
      title: {
        en: "Labor Sector",
        id: "Ketenagakerjaan",
      },
      short: {
        en: "Employment and industrial relations law.",
        id: "Hukum tenaga kerja dan hubungan industrial.",
      },
      long: {
        en:
          "Our Labor Sector provides legal support for employers, companies, management teams, and individuals in employment and industrial relations matters. We assist with employment agreements, company regulations, employee policies, termination procedures, workforce restructuring, employee rights, and labor dispute resolution. We help companies establish employment practices that are aligned with applicable labor regulations while remaining practical for day-to-day business operations. When disputes arise between employers and employees, we assist with negotiation, mediation, and appropriate legal proceedings. Our objective is to help clients manage employment-related risks responsibly, maintain industrial harmony, and create clear legal frameworks that protect both organizational interests and employee rights.",
        id:
          "Layanan Ketenagakerjaan memberikan dukungan hukum kepada perusahaan, pemberi kerja, manajemen, maupun individu dalam berbagai persoalan hubungan kerja dan hubungan industrial. Kami membantu dalam penyusunan perjanjian kerja, peraturan perusahaan, kebijakan ketenagakerjaan, proses pemutusan hubungan kerja, restrukturisasi tenaga kerja, perlindungan hak pekerja, serta penyelesaian sengketa ketenagakerjaan. Kami membantu perusahaan membangun praktik ketenagakerjaan yang sesuai dengan regulasi yang berlaku sekaligus tetap dapat diterapkan dalam kegiatan operasional sehari-hari. Apabila terjadi perselisihan antara perusahaan dan pekerja, kami memberikan pendampingan dalam proses negosiasi, mediasi, maupun proses hukum yang diperlukan. Tujuan kami adalah membantu klien mengelola risiko ketenagakerjaan secara bertanggung jawab, menjaga hubungan industrial yang sehat, serta membangun kerangka hukum yang melindungi kepentingan perusahaan dan hak pekerja.",
      },
    },

    {
      title: {
        en: "Property & Infrastructure",
        id: "Properti & Infrastruktur",
      },
      short: {
        en: "Real estate and infrastructure law.",
        id: "Hukum properti dan infrastruktur.",
      },
      long: {
        en:
          "Our Property & Infrastructure practice provides legal assistance for land, property, construction, and infrastructure-related transactions and projects. We assist with land acquisition, property transactions, due diligence, construction agreements, development arrangements, licensing, permits, zoning considerations, and property-related disputes. Before a transaction is completed, we help identify potential ownership, documentation, regulatory, contractual, and development risks. For infrastructure projects, we provide legal support throughout the project lifecycle, from initial structuring and contractual arrangements to implementation and dispute management. Our objective is to provide clients with greater legal certainty when acquiring, developing, financing, managing, or transferring property and infrastructure assets.",
        id:
          "Layanan Properti & Infrastruktur memberikan bantuan hukum dalam transaksi dan proyek yang berkaitan dengan tanah, properti, konstruksi, dan pembangunan infrastruktur. Kami membantu dalam proses akuisisi tanah, transaksi properti, due diligence, perjanjian konstruksi, pengembangan properti, perizinan, serta berbagai persoalan hukum yang berkaitan dengan penggunaan dan pengembangan aset. Sebelum transaksi dilakukan, kami membantu mengidentifikasi risiko kepemilikan, dokumen, regulasi, kontrak, maupun aspek pembangunan. Untuk proyek infrastruktur, kami memberikan pendampingan sepanjang siklus proyek, mulai dari penyusunan struktur awal dan perjanjian hingga pelaksanaan proyek dan pengelolaan sengketa. Tujuan kami adalah memberikan kepastian hukum yang lebih baik kepada klien ketika melakukan pembelian, pengembangan, pembiayaan, pengelolaan, maupun pengalihan aset properti dan infrastruktur.",
      },
    },

    {
      title: {
        en: "Tax",
        id: "Pajak",
      },
      short: {
        en: "Tax planning and compliance.",
        id: "Perencanaan dan kepatuhan pajak.",
      },
      long: {
        en:
          "Our Tax legal practice provides strategic assistance in matters involving tax compliance, tax planning, tax audits, tax disputes, and regulatory obligations. We help businesses understand their tax responsibilities and identify potential risks arising from business transactions, corporate structures, and operational activities. Our services can include compliance reviews, audit preparation, tax dispute assistance, and strategic planning designed to improve tax efficiency while remaining within applicable legal requirements. We also work with clients to establish better tax governance and documentation practices, helping reduce the possibility of administrative problems and disputes. Our approach combines legal analysis with practical business considerations so that clients can make informed decisions regarding their tax obligations.",
        id:
          "Layanan hukum Pajak memberikan pendampingan strategis dalam kepatuhan pajak, perencanaan pajak, pemeriksaan pajak, sengketa pajak, dan kewajiban perpajakan lainnya. Kami membantu perusahaan memahami kewajiban perpajakannya serta mengidentifikasi potensi risiko yang dapat muncul dari transaksi bisnis, struktur perusahaan, maupun kegiatan operasional. Layanan dapat mencakup review kepatuhan, persiapan pemeriksaan, pendampingan sengketa pajak, serta perencanaan strategis untuk meningkatkan efisiensi pajak dengan tetap memperhatikan ketentuan hukum yang berlaku. Kami juga membantu membangun tata kelola dan dokumentasi perpajakan yang lebih baik untuk mengurangi risiko administratif maupun potensi sengketa. Pendekatan kami menggabungkan analisis hukum dengan kebutuhan bisnis sehingga klien dapat mengambil keputusan perpajakan secara lebih terukur dan bertanggung jawab.",
      },
    },

    {
      title: {
        en: "Family & Private",
        id: "Keluarga & Privat",
      },
      short: {
        en: "Personal and family legal matters.",
        id: "Masalah hukum pribadi dan keluarga.",
      },
      long: {
        en:
          "Our Family & Private practice handles sensitive legal matters affecting individuals, families, and privately held assets. We assist with inheritance matters, family disputes, divorce-related legal issues, asset arrangements, agreements, and other personal legal concerns. Because these matters often involve sensitive personal and financial information, we place strong emphasis on confidentiality, careful communication, and a practical approach to dispute resolution. Our role is to help clients understand their legal position, available options, potential consequences, and appropriate steps forward. Where disputes cannot be resolved amicably, we provide legal representation and strategic support while maintaining professionalism and sensitivity throughout the process.",
        id:
          "Layanan Keluarga & Privat menangani berbagai persoalan hukum yang berkaitan dengan individu, keluarga, dan aset pribadi. Kami membantu dalam persoalan warisan, sengketa keluarga, perceraian, pengaturan aset, perjanjian, serta berbagai kebutuhan hukum pribadi lainnya. Karena perkara keluarga dan pribadi sering kali melibatkan informasi yang sangat sensitif, kami menempatkan kerahasiaan, komunikasi yang hati-hati, dan pendekatan penyelesaian yang tepat sebagai bagian penting dari layanan. Kami membantu klien memahami posisi hukumnya, pilihan yang tersedia, konsekuensi yang mungkin terjadi, serta langkah yang dapat ditempuh. Apabila sengketa tidak dapat diselesaikan secara damai, kami memberikan pendampingan dan representasi hukum dengan tetap menjaga profesionalitas serta sensitivitas terhadap kondisi setiap klien.",
      },
    },

    {
      title: {
        en: "Islamic Finance",
        id: "Keuangan Syariah",
      },
      short: {
        en: "Sharia financial legal services.",
        id: "Layanan hukum keuangan syariah.",
      },
      long: {
        en:
          "Our Islamic Finance practice provides legal assistance for transactions and business structures that require compliance with sharia principles and applicable Indonesian regulations. We assist with sharia-based agreements, Islamic financing structures, sukuk-related arrangements, Islamic banking matters, and other transactions involving sharia principles. Our approach seeks to ensure that contractual structures are clearly documented, commercially practical, and aligned with the applicable legal framework. We work with clients to identify potential legal and structural issues at an early stage and develop documentation that provides greater certainty for all parties. This practice is designed for businesses, financial institutions, investors, and individuals who require legal support in implementing sharia-compliant financial arrangements.",
        id:
          "Layanan Keuangan Syariah memberikan bantuan hukum terhadap transaksi dan struktur bisnis yang membutuhkan kepatuhan terhadap prinsip syariah serta regulasi yang berlaku di Indonesia. Kami membantu dalam penyusunan kontrak berbasis syariah, struktur pembiayaan syariah, transaksi yang berkaitan dengan sukuk, perbankan syariah, dan berbagai kegiatan keuangan lainnya yang menggunakan prinsip syariah. Pendekatan kami diarahkan agar struktur kontrak memiliki dokumentasi yang jelas, dapat diterapkan secara komersial, serta sesuai dengan kerangka hukum yang berlaku. Kami membantu klien mengidentifikasi potensi persoalan hukum maupun struktural sejak awal dan menyusun dokumentasi yang memberikan kepastian bagi para pihak. Layanan ini ditujukan bagi perusahaan, lembaga keuangan, investor, maupun individu yang membutuhkan dukungan hukum dalam pelaksanaan transaksi keuangan yang sesuai dengan prinsip syariah.",
      },
    },

    {
      title: {
        en: "Technology & Communications",
        id: "Teknologi & Komunikasi",
      },
      short: {
        en: "Digital and technology legal advisory.",
        id: "Konsultasi hukum teknologi dan digital.",
      },
      long: {
        en:
          "Our Technology & Communications practice supports businesses operating in digital, technology, telecommunications, and online environments. We provide legal assistance relating to data protection, digital platforms, software and SaaS agreements, technology transactions, e-commerce, intellectual property, cybersecurity, and digital business compliance. Technology businesses operate in an environment where regulations, contractual relationships, and business models can change rapidly, making early legal assessment increasingly important. We help clients review agreements, identify regulatory requirements, protect business interests, and establish appropriate legal frameworks for their digital operations. Our objective is to help technology-driven businesses innovate and grow while maintaining responsible legal and regulatory practices.",
        id:
          "Layanan Teknologi & Komunikasi memberikan dukungan hukum bagi perusahaan yang bergerak di bidang digital, teknologi, telekomunikasi, dan bisnis berbasis internet. Kami memberikan bantuan hukum terkait perlindungan data, platform digital, perjanjian perangkat lunak dan SaaS, transaksi teknologi, e-commerce, kekayaan intelektual, keamanan siber, serta kepatuhan bisnis digital. Perusahaan teknologi beroperasi dalam lingkungan yang berkembang sangat cepat sehingga perubahan model bisnis, kontrak, dan regulasi perlu diperhatikan sejak awal. Kami membantu klien meninjau perjanjian, mengidentifikasi kewajiban regulasi, melindungi kepentingan bisnis, serta membangun kerangka hukum yang sesuai dengan kegiatan digital. Tujuan kami adalah membantu bisnis berbasis teknologi berinovasi dan berkembang dengan tetap memperhatikan tanggung jawab hukum dan kepatuhan terhadap regulasi.",
      },
    },
  ];

  const taxServices = [
    {
      title: {
        en: "Tax Consultation",
        id: "Konsultasi Perpajakan",
      },
      short: {
        en: "Strategic tax consultation for businesses and individuals.",
        id: "Konsultasi perpajakan strategis untuk bisnis dan individu.",
      },
      long: {
        en:
          "Our Tax Consultation service provides clients with a structured understanding of their tax obligations, potential risks, and available planning options. We review relevant business activities, transactions, organizational structures, and tax positions to identify areas that may require attention. The consultation is designed to provide practical guidance that can support better financial and operational decisions while maintaining compliance with applicable tax regulations. We also assist clients in understanding changes in tax requirements and their potential impact on business operations. Through a proactive approach, clients can identify tax issues earlier and develop appropriate strategies before they become significant compliance problems.",
        id:
          "Layanan Konsultasi Perpajakan membantu klien memahami kewajiban pajak, potensi risiko, serta pilihan strategi perpajakan yang tersedia. Kami melakukan peninjauan terhadap kegiatan usaha, transaksi, struktur organisasi, dan posisi perpajakan untuk mengidentifikasi aspek yang perlu mendapatkan perhatian. Konsultasi dirancang untuk memberikan arahan yang praktis sehingga dapat mendukung pengambilan keputusan bisnis dan keuangan dengan tetap memperhatikan kepatuhan terhadap ketentuan perpajakan yang berlaku. Kami juga membantu klien memahami perubahan ketentuan pajak serta dampaknya terhadap kegiatan usaha. Dengan pendekatan yang proaktif, permasalahan perpajakan dapat diidentifikasi lebih awal sebelum berkembang menjadi persoalan kepatuhan yang lebih besar.",
      },
    },

    {
      title: {
        en: "Annual Tax Reporting",
        id: "Pelaporan SPT Tahunan",
      },
      short: {
        en: "Professional assistance for annual tax reporting.",
        id: "Pendampingan profesional untuk pelaporan SPT tahunan.",
      },
      long: {
        en:
          "Our Annual Tax Reporting service assists clients in preparing and submitting annual tax returns accurately and within the applicable reporting period. We help organize relevant financial and tax information, review supporting documentation, identify inconsistencies, and ensure that required information is properly prepared before submission. For businesses, the process may involve coordination between financial records, accounting information, and tax obligations. Our objective is to make annual reporting more structured and reduce the risk of administrative errors or incomplete documentation. We also help clients understand potential issues identified during the preparation process so that corrective action can be considered appropriately.",
        id:
          "Layanan Pelaporan SPT Tahunan membantu klien menyiapkan dan menyampaikan laporan pajak tahunan secara lebih terstruktur, akurat, dan sesuai dengan periode pelaporan yang berlaku. Kami membantu mengorganisasi data keuangan dan perpajakan, meninjau dokumen pendukung, mengidentifikasi ketidaksesuaian, serta memastikan informasi yang diperlukan telah dipersiapkan sebelum pelaporan. Untuk perusahaan, proses ini dapat melibatkan koordinasi antara data keuangan, pembukuan, dan kewajiban perpajakan. Tujuan kami adalah membuat proses pelaporan tahunan lebih teratur sekaligus mengurangi risiko kesalahan administratif maupun kekurangan dokumen. Apabila ditemukan potensi permasalahan selama proses persiapan, kami membantu klien memahami permasalahan tersebut agar dapat ditindaklanjuti dengan tepat.",
      },
    },

    {
      title: {
        en: "Monthly Tax Reporting",
        id: "Pelaporan SPT Masa",
      },
      short: {
        en: "Routine monthly tax reporting and compliance support.",
        id: "Dukungan pelaporan pajak bulanan dan kepatuhan rutin.",
      },
      long: {
        en:
          "Our Monthly Tax Reporting service provides ongoing support for businesses that need to manage recurring tax reporting obligations. We assist with the preparation, review, and organization of monthly tax information and supporting documentation. The service is designed to help businesses maintain consistency between their accounting records, operational transactions, and tax reporting requirements. Regular monitoring can also help identify potential discrepancies before they become larger compliance issues. By establishing a structured monthly reporting process, businesses can improve their tax administration, maintain better documentation, and reduce the administrative burden associated with recurring tax obligations.",
        id:
          "Layanan Pelaporan SPT Masa memberikan pendampingan rutin bagi perusahaan dalam memenuhi kewajiban pelaporan pajak bulanan. Kami membantu proses persiapan, peninjauan, dan pengorganisasian data perpajakan beserta dokumen pendukung yang diperlukan. Layanan ini dirancang untuk membantu perusahaan menjaga konsistensi antara pembukuan, transaksi operasional, dan kewajiban pelaporan pajak. Pemantauan secara rutin juga dapat membantu menemukan ketidaksesuaian lebih awal sebelum berkembang menjadi persoalan kepatuhan yang lebih besar. Dengan proses pelaporan bulanan yang terstruktur, perusahaan dapat meningkatkan administrasi perpajakan, menjaga dokumentasi, serta mengurangi beban administratif dalam memenuhi kewajiban pajak secara berkala.",
      },
    },

    {
      title: {
        en: "Tax Audit Assistance",
        id: "Pendampingan Pemeriksaan Pajak",
      },
      short: {
        en: "Professional assistance during tax examination processes.",
        id: "Pendampingan profesional selama proses pemeriksaan pajak.",
      },
      long: {
        en:
          "Our Tax Audit Assistance service supports clients throughout tax examination processes by helping organize documentation, review relevant transactions, prepare responses, and coordinate information required during the examination. We help clients understand the issues being reviewed and identify areas that may require clarification or additional supporting evidence. The objective is to ensure that the examination process is handled in an organized and legally appropriate manner. Where necessary, we also assist with communication and discussion concerning the findings of the examination. Our approach emphasizes preparation, documentation quality, consistency of information, and careful assessment of the client's legal and tax position.",
        id:
          "Layanan Pendampingan Pemeriksaan Pajak membantu klien menghadapi proses pemeriksaan pajak secara lebih terstruktur dan profesional. Kami membantu mengorganisasi dokumen, meninjau transaksi yang relevan, mempersiapkan tanggapan, serta mengoordinasikan informasi yang diperlukan selama proses pemeriksaan. Kami membantu klien memahami aspek yang sedang diperiksa dan mengidentifikasi bagian yang membutuhkan klarifikasi atau bukti pendukung tambahan. Tujuannya adalah memastikan proses pemeriksaan dapat dihadapi dengan persiapan yang baik dan sesuai dengan ketentuan yang berlaku. Apabila diperlukan, kami juga membantu dalam komunikasi dan pembahasan terkait hasil pemeriksaan dengan tetap memperhatikan posisi hukum dan perpajakan klien.",
      },
    },

    {
      title: {
        en: "Tax Dispute Resolution",
        id: "Penyelesaian Sengketa Pajak",
      },
      short: {
        en: "Strategic assistance for tax disputes, objections, and appeals.",
        id: "Pendampingan strategis untuk sengketa, keberatan, dan banding pajak.",
      },
      long: {
        en:
          "Our Tax Dispute Resolution service provides legal and strategic support when clients face disagreements or disputes concerning tax assessments and other tax-related matters. We assist in reviewing the legal and factual basis of a dispute, preparing supporting documentation, developing arguments, and determining the appropriate dispute resolution strategy. Depending on the circumstances, assistance may include objection processes, appeals, negotiations, and other available legal mechanisms. Our approach is focused on protecting the client's legitimate interests through careful analysis and well-documented arguments. We aim to ensure that every available legal avenue is considered before a final course of action is determined.",
        id:
          "Layanan Penyelesaian Sengketa Pajak memberikan dukungan hukum dan strategis ketika klien menghadapi perbedaan pendapat atau sengketa yang berkaitan dengan ketetapan dan kewajiban perpajakan. Kami membantu meninjau dasar hukum dan fakta dalam sengketa, menyiapkan dokumen pendukung, menyusun argumentasi, serta menentukan strategi penyelesaian yang sesuai. Bergantung pada kondisi perkara, pendampingan dapat mencakup proses keberatan, banding, negosiasi, maupun mekanisme hukum lainnya yang tersedia. Pendekatan kami berfokus pada perlindungan kepentingan klien melalui analisis yang cermat dan argumentasi yang didukung dokumentasi. Kami berupaya memastikan setiap pilihan hukum yang tersedia telah dipertimbangkan sebelum menentukan langkah penyelesaian.",
      },
    },

    {
      title: {
        en: "Tax Compliance Review",
        id: "Review Kepatuhan Pajak",
      },
      short: {
        en: "Comprehensive review of corporate tax compliance.",
        id: "Review menyeluruh terhadap kepatuhan pajak perusahaan.",
      },
      long: {
        en:
          "Our Tax Compliance Review evaluates the effectiveness and consistency of a client's existing tax compliance practices. We review relevant transactions, tax documentation, reporting processes, accounting records, and internal procedures to identify potential compliance gaps or areas of risk. The review can help management understand whether current practices are sufficiently aligned with applicable requirements and where improvements may be appropriate. We provide practical recommendations aimed at strengthening documentation, internal controls, reporting processes, and overall tax governance. A proactive compliance review can help businesses identify potential issues before they develop into audits, penalties, disputes, or other unnecessary administrative complications.",
        id:
          "Layanan Review Kepatuhan Pajak bertujuan mengevaluasi efektivitas dan konsistensi praktik kepatuhan pajak yang telah diterapkan perusahaan. Kami meninjau transaksi terkait, dokumen perpajakan, proses pelaporan, catatan pembukuan, serta prosedur internal untuk mengidentifikasi potensi kekurangan kepatuhan maupun area yang memiliki risiko. Review membantu manajemen memahami apakah praktik yang berjalan telah sesuai dengan ketentuan yang berlaku dan bagian mana yang masih perlu diperbaiki. Kami memberikan rekomendasi praktis untuk memperkuat dokumentasi, pengendalian internal, proses pelaporan, dan tata kelola perpajakan. Review kepatuhan secara proaktif dapat membantu perusahaan menemukan masalah lebih awal sebelum berkembang menjadi pemeriksaan, sanksi, sengketa, atau persoalan administratif lainnya.",
      },
    },

    {
      title: {
        en: "Tax Compliance",
        id: "Tax Compliance",
      },
      short: {
        en: "Ongoing management of tax compliance obligations.",
        id: "Pengelolaan kewajiban kepatuhan pajak secara berkelanjutan.",
      },
      long: {
        en:
          "Our Tax Compliance service is designed for businesses that require consistent support in managing their day-to-day tax obligations. We assist in monitoring reporting schedules, maintaining appropriate tax documentation, reviewing relevant transactions, and identifying potential compliance concerns. The service is intended to create a more structured tax administration process so that management can focus on core business activities while tax obligations are monitored systematically. We also help establish practical procedures for maintaining supporting records and coordinating tax-related information across finance, accounting, and operational teams. Consistent tax compliance can provide businesses with stronger administrative control and better visibility over potential tax risks.",
        id:
          "Layanan Tax Compliance ditujukan bagi perusahaan yang membutuhkan dukungan berkelanjutan dalam mengelola kewajiban perpajakan sehari-hari. Kami membantu memantau jadwal pelaporan, menjaga dokumentasi perpajakan, meninjau transaksi yang relevan, serta mengidentifikasi potensi masalah kepatuhan. Layanan ini bertujuan membangun administrasi pajak yang lebih terstruktur sehingga manajemen dapat tetap fokus pada kegiatan utama perusahaan sementara kewajiban pajak dipantau secara sistematis. Kami juga membantu membangun prosedur praktis untuk menjaga dokumen pendukung dan mengoordinasikan informasi perpajakan antara tim keuangan, akuntansi, dan operasional. Kepatuhan pajak yang konsisten dapat memberikan perusahaan kontrol administratif yang lebih baik serta visibilitas yang lebih jelas terhadap risiko perpajakan.",
      },
    },

    {
      title: {
        en: "Tax Audit Support",
        id: "Tax Audit Support",
      },
      short: {
        en: "Document and strategic support throughout tax audit processes.",
        id: "Dukungan dokumen dan strategi selama proses audit pajak.",
      },
      long: {
        en:
          "Our Tax Audit Support service focuses on helping clients prepare for and respond to tax audit requirements in an organized manner. We assist in reviewing requested documents, organizing supporting evidence, identifying potential inconsistencies, and preparing information required during the audit process. We also help management understand the potential implications of audit findings and consider appropriate responses. The service is particularly useful for businesses that want to ensure their internal tax records and supporting documentation are prepared before interacting with tax authorities. Through structured preparation and careful review, clients can approach tax audits with greater confidence and a clearer understanding of their position.",
        id:
          "Layanan Tax Audit Support berfokus pada membantu klien mempersiapkan dan menghadapi kebutuhan audit pajak secara terstruktur. Kami membantu meninjau dokumen yang diminta, mengorganisasi bukti pendukung, mengidentifikasi ketidaksesuaian, serta menyiapkan informasi yang dibutuhkan selama proses audit. Kami juga membantu manajemen memahami kemungkinan dampak dari temuan audit dan mempertimbangkan tanggapan yang tepat. Layanan ini sangat bermanfaat bagi perusahaan yang ingin memastikan catatan perpajakan internal dan dokumen pendukung telah dipersiapkan dengan baik sebelum berinteraksi dengan otoritas pajak. Dengan persiapan dan peninjauan yang sistematis, klien dapat menghadapi proses audit dengan pemahaman yang lebih baik mengenai posisi perpajakannya.",
      },
    },

    {
      title: {
        en: "Tax Planning",
        id: "Tax Planning",
      },
      short: {
        en: "Long-term tax planning for efficient and compliant business operations.",
        id: "Perencanaan pajak jangka panjang untuk bisnis yang efisien dan patuh.",
      },
      long: {
        en:
          "Our Tax Planning service focuses on developing legally appropriate strategies for managing tax exposure in connection with business activities, investments, transactions, and corporate structures. We assess the potential tax implications of planned activities and help clients understand available options before significant decisions are implemented. The objective is to achieve reasonable tax efficiency while maintaining compliance and avoiding unnecessary legal or administrative risks. Tax planning may involve reviewing transaction structures, business arrangements, contractual relationships, and long-term corporate strategies. We emphasize sustainable planning rather than short-term approaches, ensuring that tax considerations are integrated into broader business decision-making.",
        id:
          "Layanan Tax Planning berfokus pada penyusunan strategi yang sesuai hukum untuk mengelola kewajiban dan risiko pajak yang berkaitan dengan kegiatan usaha, investasi, transaksi, maupun struktur perusahaan. Kami menilai potensi dampak perpajakan dari rencana kegiatan dan membantu klien memahami pilihan yang tersedia sebelum keputusan penting diterapkan. Tujuannya adalah mencapai efisiensi pajak yang wajar dengan tetap menjaga kepatuhan serta menghindari risiko hukum maupun administratif yang tidak diperlukan. Perencanaan pajak dapat mencakup peninjauan struktur transaksi, pengaturan bisnis, hubungan kontraktual, serta strategi perusahaan dalam jangka panjang. Kami mengutamakan perencanaan yang berkelanjutan sehingga pertimbangan perpajakan dapat menjadi bagian dari proses pengambilan keputusan bisnis secara keseluruhan.",
      },
    },

    {
      title: {
        en: "Bookkeeping & Tax Administration",
        id: "Pembukuan & Administrasi Pajak",
      },
      short: {
        en: "Organized bookkeeping and tax administration support.",
        id: "Dukungan pembukuan dan administrasi perpajakan yang terstruktur.",
      },
      long: {
        en:
          "Our Bookkeeping & Tax Administration service supports businesses in maintaining organized financial records and tax-related documentation. Accurate records are important because they provide the foundation for tax reporting, compliance reviews, audits, and financial decision-making. We assist with organizing bookkeeping processes, maintaining transaction records, preparing supporting documentation, and coordinating financial information relevant to tax obligations. The service is designed to help businesses establish a more reliable administrative system and reduce the risk of missing or inconsistent information. By improving the quality and organization of financial records, businesses can gain better visibility into their financial position while making future tax reporting and compliance processes more efficient.",
        id:
          "Layanan Pembukuan & Administrasi Pajak membantu perusahaan menjaga catatan keuangan dan dokumen perpajakan secara lebih teratur. Pembukuan yang akurat merupakan dasar penting dalam pelaporan pajak, review kepatuhan, pemeriksaan, serta pengambilan keputusan keuangan. Kami membantu mengorganisasi proses pembukuan, menjaga catatan transaksi, menyiapkan dokumen pendukung, serta mengoordinasikan informasi keuangan yang berkaitan dengan kewajiban perpajakan. Layanan ini dirancang untuk membantu perusahaan membangun sistem administrasi yang lebih dapat diandalkan dan mengurangi risiko adanya informasi yang hilang atau tidak konsisten. Dengan meningkatkan kualitas dan keteraturan catatan keuangan, perusahaan dapat memperoleh gambaran kondisi keuangan yang lebih baik sekaligus membuat proses pelaporan dan kepatuhan pajak berikutnya menjadi lebih efisien.",
      },
    },
  ];

  const toggleLegal = (index) => {
    setOpenLegal(openLegal === index ? null : index);
  };

  const toggleTax = (index) => {
    setOpenTax(openTax === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050B16] text-white">

      {/* LANGUAGE BUTTON */}
      <div className="fixed top-20 right-5 z-[999]">
        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="
            group
            flex
            items-center
            gap-1
            rounded-full
            border
            border-white/10
            bg-[#0B1220]/90
            px-1.5
            py-1.5
            text-[10px]
            font-semibold
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-400/40
          "
          aria-label="Change language"
        >
          <span
            className={`
              rounded-full
              px-3
              py-1.5
              transition-all
              duration-300
              ${
                lang === "en"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400"
              }
            `}
          >
            EN
          </span>

          <span
            className={`
              rounded-full
              px-3
              py-1.5
              transition-all
              duration-300
              ${
                lang === "id"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400"
              }
            `}
          >
            ID
          </span>
        </button>
      </div>

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#050B16]">

        {/* LARGE BLUE GLOW */}
        <div className="absolute -top-64 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute -top-48 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* ARC DECORATION */}
        <div className="pointer-events-none absolute -top-[420px] left-1/2 h-[650px] w-[1000px] -translate-x-1/2 rounded-[50%] border border-blue-400/10" />

        <div className="pointer-events-none absolute -top-[385px] left-1/2 h-[580px] w-[900px] -translate-x-1/2 rounded-[50%] border border-blue-400/10" />

        <div className="pointer-events-none absolute top-[180px] -right-[350px] h-[600px] w-[850px] rotate-[-25deg] rounded-[50%] border border-blue-500/10" />

        {/* SMALL DECORATIVE DOTS */}
        <div className="absolute left-[8%] top-[28%] hidden md:block">
          <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.9)]" />
        </div>

        <div className="absolute right-[12%] top-[34%] hidden md:block">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-300/70 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
        </div>

        <div className="absolute bottom-20 left-[20%] hidden lg:block">
          <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-32 md:px-10 lg:min-h-[700px]">

          <div className="mx-auto w-full max-w-5xl text-center">

            {/* EYEBROW */}
            <div className="mb-7 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-blue-400/60" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-blue-300 md:text-xs">
                {lang === "en"
                  ? "Practice Areas"
                  : "Bidang Layanan"}
              </p>

              <span className="h-px w-10 bg-blue-400/60" />
            </div>

            {/* TITLE */}
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {lang === "en" ? (
                <>
                  Legal & Advisory{" "}
                  <span className="text-blue-400">
                    Services
                  </span>
                </>
              ) : (
                <>
                  Layanan Hukum &{" "}
                  <span className="text-blue-400">
                    Konsultasi
                  </span>
                </>
              )}
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              {lang === "en"
                ? "Comprehensive legal and tax solutions designed to protect businesses, support strategic decisions, and manage legal and regulatory risks."
                : "Solusi hukum dan perpajakan komprehensif yang dirancang untuk melindungi bisnis, mendukung keputusan strategis, serta mengelola risiko hukum dan regulasi."}
            </p>

            {/* DIVIDER */}
            <div className="mx-auto mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />

              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

              <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>

            {/* STATS */}
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3">

              <div className="px-3 md:px-8">
                <p className="text-2xl font-semibold text-white md:text-3xl">
                  11
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500 md:text-[10px]">
                  {lang === "en"
                    ? "Legal Areas"
                    : "Bidang Hukum"}
                </p>
              </div>

              <div className="border-x border-white/10 px-3 md:px-8">
                <p className="text-2xl font-semibold text-white md:text-3xl">
                  10
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500 md:text-[10px]">
                  {lang === "en"
                    ? "Tax Services"
                    : "Layanan Pajak"}
                </p>
              </div>

              <div className="px-3 md:px-8">
                <p className="text-2xl font-semibold text-white md:text-3xl">
                  01
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500 md:text-[10px]">
                  {lang === "en"
                    ? "Integrated Approach"
                    : "Pendekatan Terpadu"}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#07101E]">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

          {/* SECTION INTRO */}
          <div className="mb-16 max-w-3xl">

            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-blue-500" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400 md:text-xs">
                {lang === "en"
                  ? "Our Expertise"
                  : "Keahlian Kami"}
              </p>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              {lang === "en"
                ? "Legal solutions built around your needs."
                : "Solusi hukum yang disusun sesuai kebutuhan Anda."}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              {lang === "en"
                ? "Explore our legal and tax practices below. Each service is designed to provide practical guidance, stronger legal protection, and a clear strategic direction for every client."
                : "Jelajahi layanan hukum dan perpajakan kami di bawah ini. Setiap layanan dirancang untuk memberikan arahan praktis, perlindungan hukum yang lebih kuat, serta strategi yang jelas sesuai kebutuhan setiap klien."}
            </p>

          </div>

          {/* TWO COLUMNS */}
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">

            {/* =====================================================
                LEGAL
            ===================================================== */}
            <div>

              {/* HEADER */}
              <div className="mb-8">

                <div className="mb-4 flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                    01
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-blue-500/60 to-transparent" />
                </div>

                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  {lang === "en"
                    ? "Legal Services"
                    : "Layanan Hukum"}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {lang === "en"
                    ? "Strategic legal support across key business and private matters."
                    : "Pendampingan hukum strategis untuk berbagai kebutuhan bisnis dan pribadi."}
                </p>

              </div>

              {/* LIST */}
              <div>

                {legalServices.map((item, i) => {
                  const isOpen = openLegal === i;

                  return (
                    <div
                      key={i}
                      className="border-t border-white/[0.08] py-6 last:border-b"
                    >

                      {/* ROW */}
                      <div className="grid grid-cols-[34px_1fr] gap-4 md:grid-cols-[42px_1fr_auto] md:gap-5">

                        {/* NUMBER */}
                        <span className="pt-0.5 font-mono text-[10px] text-gray-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* CONTENT */}
                        <div className="min-w-0">

                          <h4 className="text-sm font-medium text-white md:text-base">
                            {item.title[lang]}
                          </h4>

                          <p className="mt-2 text-xs leading-6 text-gray-500 md:text-sm">
                            {item.short[lang]}
                          </p>

                          {/* EXPANDED DESCRIPTION */}
                          {isOpen && (
                            <div className="mt-5 max-w-2xl">
                              <p className="text-xs leading-7 text-gray-400 md:text-sm">
                                {item.long[lang]}
                              </p>
                            </div>
                          )}

                          {/* MOBILE BUTTON */}
                          <button
                            onClick={() => toggleLegal(i)}
                            className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-400 transition-all duration-300 hover:text-blue-300 md:hidden"
                          >
                            {isOpen
                              ? lang === "en"
                                ? "Show Less"
                                : "Tutup"
                              : lang === "en"
                              ? "Read More"
                              : "Baca Selengkapnya"}

                            <span
                              className={`transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              ↓
                            </span>
                          </button>

                        </div>

                        {/* DESKTOP BUTTON */}
                        <button
                          onClick={() => toggleLegal(i)}
                          className="hidden items-center gap-2 self-start pt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-400 transition-all duration-300 hover:text-white md:inline-flex"
                        >
                          {isOpen
                            ? lang === "en"
                              ? "Show Less"
                              : "Tutup"
                            : lang === "en"
                            ? "Read More"
                            : "Baca"}

                          <span
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ↓
                          </span>
                        </button>

                      </div>

                    </div>
                  );
                })}

              </div>
            </div>

            {/* =====================================================
                TAX
            ===================================================== */}
            <div>

              {/* HEADER */}
              <div className="mb-8">

                <div className="mb-4 flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                    02
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-blue-500/60 to-transparent" />
                </div>

                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  {lang === "en"
                    ? "Tax Services"
                    : "Layanan Pajak"}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {lang === "en"
                    ? "Practical tax compliance, planning, reporting, and advisory."
                    : "Kepatuhan, perencanaan, pelaporan, dan konsultasi pajak secara praktis."}
                </p>

              </div>

              {/* LIST */}
              <div>

                {taxServices.map((item, i) => {
                  const isOpen = openTax === i;

                  return (
                    <div
                      key={i}
                      className="border-t border-white/[0.08] py-6 last:border-b"
                    >

                      <div className="grid grid-cols-[34px_1fr] gap-4 md:grid-cols-[42px_1fr_auto] md:gap-5">

                        {/* NUMBER */}
                        <span className="pt-0.5 font-mono text-[10px] text-gray-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* CONTENT */}
                        <div className="min-w-0">

                          <h4 className="text-sm font-medium text-white md:text-base">
                            {item.title[lang]}
                          </h4>

                          <p className="mt-2 text-xs leading-6 text-gray-500 md:text-sm">
                            {item.short[lang]}
                          </p>

                          {/* EXPANDED DESCRIPTION */}
                          {isOpen && (
                            <div className="mt-5 max-w-2xl">
                              <p className="text-xs leading-7 text-gray-400 md:text-sm">
                                {item.long[lang]}
                              </p>
                            </div>
                          )}

                          {/* MOBILE */}
                          <button
                            onClick={() => toggleTax(i)}
                            className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-400 transition-all duration-300 hover:text-blue-300 md:hidden"
                          >
                            {isOpen
                              ? lang === "en"
                                ? "Show Less"
                                : "Tutup"
                              : lang === "en"
                              ? "Read More"
                              : "Baca Selengkapnya"}

                            <span
                              className={`transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              ↓
                            </span>
                          </button>

                        </div>

                        {/* DESKTOP */}
                        <button
                          onClick={() => toggleTax(i)}
                          className="hidden items-center gap-2 self-start pt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-400 transition-all duration-300 hover:text-white md:inline-flex"
                        >
                          {isOpen
                            ? lang === "en"
                              ? "Show Less"
                              : "Tutup"
                            : lang === "en"
                            ? "Read More"
                            : "Baca"}

                          <span
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ↓
                          </span>
                        </button>

                      </div>

                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA + FOOTER WRAPPER
          SAME BACKGROUND TO PREVENT WHITE GAP
      ========================================================= */}
      <div className="bg-[#050B16]">

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/5 bg-[#050B16]">

          {/* BLUE GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[120px]" />

          {/* ARC */}
          <div className="pointer-events-none absolute -bottom-[430px] -left-[180px] h-[600px] w-[850px] rounded-[50%] border border-blue-500/10" />

          <div className="pointer-events-none absolute -right-[180px] -top-[430px] h-[600px] w-[850px] rounded-[50%] border border-blue-500/10" />

          {/* CONTENT */}
          <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-32">

            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-blue-400/60" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-300 md:text-xs">
                {lang === "en"
                  ? "Start a Conversation"
                  : "Mulai Konsultasi"}
              </p>

              <span className="h-px w-10 bg-blue-400/60" />
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              {lang === "en" ? (
                <>
                  Let's Build Strong{" "}
                  <span className="text-blue-400">
                    Legal Protection
                  </span>
                </>
              ) : (
                <>
                  Bangun{" "}
                  <span className="text-blue-400">
                    Perlindungan Hukum
                  </span>{" "}
                  yang Kuat
                </>
              )}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              {lang === "en"
                ? "Strategic legal consultation for business growth, compliance, dispute prevention, and long-term protection. Speak with our team and discuss the legal challenges facing your business or personal interests."
                : "Konsultasi hukum strategis untuk pertumbuhan bisnis, kepatuhan, pencegahan sengketa, dan perlindungan jangka panjang. Hubungi tim kami untuk membahas kebutuhan hukum bisnis maupun kepentingan pribadi Anda."}
            </p>

            <a
              href="https://wa.me/6282242887887"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#07101E]
                shadow-xl
                shadow-black/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-500
                hover:text-white
              "
            >
              {lang === "en"
                ? "Schedule Consultation"
                : "Jadwalkan Konsultasi"}

              <span className="text-base">
                →
              </span>
            </a>

          </div>
        </section>

        {/* FOOTER */}
        <div className="border-t border-white/5 bg-[#07101E]">
          <Footer />
        </div>

      </div>
    </div>
  );
}