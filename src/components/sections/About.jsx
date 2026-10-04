import ScrollReveal from "../ui/ScrollReveal";

export default function About({ lang }) {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="order-2 md:order-1">

          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
              {lang === "en" ? "About Our Firm" : "Tentang Firma Kami"}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-600 mt-5 leading-relaxed text-sm md:text-base">
              {lang === "en"
                ? "We’re a law firm helping businesses and individuals navigate legal and tax matters with clarity and confidence.From everyday legal needs to more complex matters, we focus on practical solutions that protect your interests, reduce risks, and help you move forward with confidence."
                 : "Kami adalah firma hukum yang membantu bisnis dan individu dalam menghadapi berbagai aspek hukum dan perpajakan dengan jelas dan penuh keyakinan. Mulai dari kebutuhan hukum sehari-hari hingga kasus yang lebih kompleks, kami berfokus pada solusi yang praktis, melindungi kepentingan klien, mengurangi risiko, dan membantu Anda melangkah maju dengan percaya diri."}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
              {lang === "en"
                ? "Our approach combines legal expertise, tax strategy, and business insight to deliver practical and sustainable solutions for long-term growth."
                : "Pendekatan kami mengintegrasikan keahlian hukum, strategi perpajakan, serta wawasan bisnis untuk menghadirkan solusi yang praktis, strategis, dan berkelanjutan guna mendukung pertumbuhan jangka panjang."}
            </p>
          </ScrollReveal>

          {/* MINI STATS */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 text-center md:text-left">

              <div>
                <p className="text-xl md:text-2xl font-semibold text-gray-900">50+</p>
                <p className="text-xs md:text-sm text-gray-500">
                  {lang === "en" ? "Clients" : "Klien"}
                </p>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-semibold text-gray-900">5+</p>
                <p className="text-xs md:text-sm text-gray-500">
                  {lang === "en" ? "Years Experience" : "Tahun Pengalaman"}
                </p>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-semibold text-gray-900">100%</p>
                <p className="text-xs md:text-sm text-gray-500">
                  {lang === "en" ? "Commitment" : "Komitmen"}
                </p>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* RIGHT VISUAL */}
        <ScrollReveal>
          <div className="relative order-1 md:order-2">

            {/* glow */}
            <div className="absolute -top-20 -left-20 w-64 md:w-[400px] h-64 md:h-[400px] bg-blue-500/10 blur-3xl rounded-full -z-10" />

            {/* CARD */}
            <div className="bg-gray-50 border rounded-2xl p-6 md:p-10 shadow-sm">

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                {lang === "en" ? "Why Choose Us" : "Mengapa Memilih Kami"}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {lang === "en"
                  ? "Expertise You Can Trust. Solutions That Move Your Business Forward. We combine legal expertise and tax advisory to deliver practical, strategic solutions that protect your interests, strengthen compliance, minimize risks, and support your business at every stage of growth."
                  : "Keahlian yang dapat Anda percayai, solusi yang mendorong bisnis Anda maju. Kami menggabungkan keahlian hukum dan konsultasi perpajakan untuk menghadirkan solusi yang praktis dan strategis, melindungi kepentingan Anda, memperkuat kepatuhan, meminimalkan risiko, serta mendukung perkembangan bisnis di setiap tahap pertumbuhan."}
              </p>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}