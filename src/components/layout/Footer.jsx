export default function Footer() {
  const phone = "6282242887887";
  const email = "kingmada@zakyzhafran.com";

  return (
    <footer className="mt-20 bg-[#073923] text-white">

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">

        {/* =====================================================
            TOP
        ===================================================== */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">

          {/* =================================================
              BRAND
          ================================================= */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/logozp.png"
                alt="Zaky Zhafran & Partners"
                className="
                  h-9
                  w-9
                  rounded-full
                  object-cover
                  ring-1
                  ring-white/15
                "
              />

              <div className="leading-none">

                <h2
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                  "
                >
                  Zaky Zhafran
                </h2>

                <p
                  className="
                    mt-1
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    text-white/35
                  "
                >
                  & Partners
                </p>

              </div>

            </div>


            {/* ACCENT */}

            <div className="mt-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#A92F46]" />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#A92F46]
                "
              >
                Legal & Tax Advisory
              </span>

            </div>


            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-md
                text-xs
                leading-6
                text-white/45
                md:text-sm
                md:leading-7
              "
            >
              Legal & Tax Advisory Firm focused on corporate governance,
              compliance, and strategic business protection.
            </p>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#A92F46]
              "
            >
              Contact
            </p>


            <div
              className="
                mt-5
                space-y-3
                text-xs
                leading-6
                text-white/50
                md:text-sm
              "
            >

              {/* ADDRESS */}

              <p>
                Villa Bekasi Indah 1 Blok G1 No.2,
                <br />
                Bekasi, Indonesia
              </p>


              {/* EMAIL */}

              <a
                href={`mailto:${email}`}
                className="
                  block
                  transition
                  duration-300
                  hover:text-[#A92F46]
                "
              >
                {email}
              </a>


              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  transition
                  duration-300
                  hover:text-[#A92F46]
                "
              >
                +62 822-4288-7887
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="mt-10 border-t border-white/10" />


        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div
          className="
            mt-5
            flex
            flex-col
            gap-2
            text-[10px]
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

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