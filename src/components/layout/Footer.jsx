export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* ================= BRAND ================= */}
          <div className="space-y-5">

            <h2 className="text-lg md:text-xl font-semibold tracking-wide">
              Zaky Zhafran & Partners
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Legal & Tax Advisory Firm focused on corporate governance,
              compliance, and strategic business protection.
            </p>

            <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-[11px] text-gray-300">
              Trusted Legal Advisory
            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div className="space-y-5">

            <h3 className="text-sm font-medium text-white">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">

              <div className="flex gap-2">
                <span className="text-gray-500">📍</span>
                <p>Alamat Kantor Villa Bekasi Indah 1 Blok G1 No.2, Bekasi, Indonesia</p>
              </div>

              <div className="flex gap-2">
                <span className="text-gray-500">✉️</span>
                <p className="break-all">kingmada@zakyzhafran.com</p>
              </div>

              <div className="flex gap-2">
                <span className="text-gray-500">📞</span>
                <p>+62 822-4288-7887</p>
              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Zaky Zhafran & Partners
          </p>

          <p className="text-center md:text-right tracking-wide">
            Legal precision meets modern design
          </p>

        </div>

      </div>

    </footer>
  );
}