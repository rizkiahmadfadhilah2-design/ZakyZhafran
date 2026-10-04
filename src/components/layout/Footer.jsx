export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* ================= BRAND ================= */}
        <div>
          <h2 className="text-lg font-semibold tracking-wide">
            Zaky Zhafran & Partners
          </h2>

          <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-md">
            Legal & Tax Advisory Firm focused on corporate governance,
            compliance, and strategic business protection.
          </p>

          <div className="mt-6 inline-flex px-3 py-1 rounded-full bg-white/10 text-[11px] text-gray-300">
            Trusted Legal Advisory
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <p className="text-white font-medium mb-4 text-sm">
            Contact
          </p>

          <div className="space-y-3 text-sm text-gray-400 leading-relaxed">

            <p>
              Villa Bekasi Indah, Bekasi, Indonesia
            </p>

            <p>
              kingmada@zakyzhafran.com
            </p>

            <p>
              +62 822-4288-7887
            </p>

          </div>
        </div>

      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-white/10" />

      {/* ================= BOTTOM ================= */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-500">

        <p>
          © {new Date().getFullYear()} Zaky Zhafran & Partners — All rights reserved.
        </p>

      </div>

    </footer>
  );
}