export default function Footer() {
  const phone = "6282242887887";
  const email = "kingmada@zakyzhafran.com";

  return (
    <footer className="mt-20 bg-[#0B1220] text-white">

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">

          {/* ================= BRAND ================= */}
          <div>

            <h2 className="text-lg font-semibold tracking-wide">
              Zaky Zhafran & Partners
            </h2>

            <div className="mt-4 h-px w-8 bg-blue-400" />

            <p className="mt-5 max-w-md text-xs leading-6 text-white/45 md:text-sm md:leading-7">
              Legal & Tax Advisory Firm focused on corporate governance,
              compliance, and strategic business protection.
            </p>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-300">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-xs leading-6 text-white/50 md:text-sm">

              <p>
                Villa Bekasi Indah 1 Blok G1 No.2,
                <br />
                Bekasi, Indonesia
              </p>

              <a
                href={`mailto:${email}`}
                className="block transition hover:text-blue-300"
              >
                {email}
              </a>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-blue-300"
              >
                +62 822-4288-7887
              </a>

            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="mt-10 border-t border-white/10" />


        {/* ================= BOTTOM ================= */}
        <div className="mt-5 flex flex-col gap-2 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Zaky Zhafran & Partners
          </p>

          <p className="tracking-wide">
            Legal precision meets modern design
          </p>

        </div>

      </div>

    </footer>
  );
}