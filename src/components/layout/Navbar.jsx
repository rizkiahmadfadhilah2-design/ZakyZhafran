import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/firm" },
    { name: "Lawyers", path: "/lawyers" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  const consultationUrl =
    "https://wa.me/6282242887887?text=Halo%20Zaky%20Zhafran%20%26%20Partners%2C%20saya%20ingin%20konsultasi%20hukum%20dan%20pajak.";

  return (
    <nav className="fixed left-0 top-0 z-[999] w-full">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div
        className="
          border-b
          border-white/10
          bg-[#073923]/90
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            flex
            h-[78px]
            max-w-7xl
            items-center
            justify-between
            px-6
            md:px-10
          "
        >

          {/* =================================================
              LOGO & BRAND
          ================================================= */}

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3.5"
          >

            {/* LOGO */}

            <div
              className="
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                ring-1
                ring-white/15
                transition
                duration-500
                group-hover:ring-[#A92F46]/70
              "
            >
              <img
                src="/logozp.png"
                alt="Zaky Zhafran & Partners"
                className="
                  h-full
                  w-full
                  rounded-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-[1.03]
                "
              />
            </div>


            {/* =================================================
                FIRM NAME
            ================================================= */}

            <div className="flex flex-col justify-center">

              {/* MAIN NAME */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  leading-none
                "
              >

                <span
                  className="
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-white
                    transition
                    duration-300
                    group-hover:text-[#F8F6EF]
                    sm:text-[16px]
                    md:text-[18px]
                  "
                >
                  ZAKY ZHAFRAN
                </span>

              </div>


              {/* PARTNERS LINE */}

              <div
                className="
                  mt-[6px]
                  flex
                  items-center
                  gap-2
                "
              >

                {/* DECORATIVE LINE */}

                <span
                  className="
                    h-px
                    w-5
                    bg-[#A92F46]
                    transition
                    duration-300
                    group-hover:w-7
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.30em]
                    text-white/55
                    sm:text-[10px]
                    md:text-[10px]
                  "
                >
                  & PARTNERS
                </span>

              </div>

            </div>

          </Link>


          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <div className="hidden items-center gap-8 md:flex">

            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group
                  relative
                  py-2
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  transition
                  duration-300
                  ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }
                `}
              >

                {item.name}

                {/* ACTIVE LINE */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-px
                    bg-[#A92F46]
                    transition-all
                    duration-300
                    ${
                      isActive(item.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />

              </Link>
            ))}

          </div>


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              items-center
              gap-3
              border
              border-white/15
              px-4
              py-2.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-white
              transition
              duration-300
              hover:border-[#A92F46]
              hover:bg-[#A92F46]
              hover:text-[#F8F6EF]
              md:inline-flex
            "
          >

            <span>Consultation</span>

            <span
              className="
                text-sm
                leading-none
                transition
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

          </a>


          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border
              border-white/10
              text-white
              transition
              duration-300
              hover:border-[#A92F46]
              hover:bg-[#A92F46]/10
              md:hidden
            "
          >

            <span className="flex flex-col gap-[4px]">

              <span className="h-px w-4 bg-white" />

              <span className="h-px w-3 bg-white/60" />

            </span>

          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[1000]
          transition-all
          duration-300
          ${
            open
              ? "visible bg-[#05291A]/70 opacity-100"
              : "invisible bg-black/0 opacity-0"
          }
        `}
      >

        {/* BACKDROP */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className="
            absolute
            inset-0
            h-full
            w-full
            cursor-default
          "
        />


        {/* =================================================
            MOBILE PANEL
        ================================================= */}

        <div
          className={`
            absolute
            right-0
            top-0
            flex
            h-full
            w-[88%]
            max-w-sm
            flex-col
            bg-[#073923]
            shadow-[-20px_0_60px_rgba(0,0,0,0.25)]
            transition-transform
            duration-300
            ${
              open
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* =================================================
              PANEL HEADER
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              px-6
              py-5
            "
          >

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
                Navigation
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-white/35
                "
              >
                Zaky Zhafran & Partners
              </p>

            </div>


            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                border
                border-white/10
                text-white/60
                transition
                hover:border-[#A92F46]
                hover:bg-[#A92F46]/10
                hover:text-white
              "
            >

              <span className="relative h-4 w-4">

                <span
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-px
                    w-4
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-45
                    bg-current
                  "
                />

                <span
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-px
                    w-4
                    -translate-x-1/2
                    -translate-y-1/2
                    -rotate-45
                    bg-current
                  "
                />

              </span>

            </button>

          </div>


          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <div
            className="
              flex
              flex-1
              flex-col
              px-6
              py-8
            "
          >

            <p
              className="
                mb-6
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white/20
              "
            >
              Main Navigation
            </p>

            <div className="border-t border-white/10">

              {menu.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-5
                    transition
                    duration-300
                    ${
                      isActive(item.path)
                        ? "text-white"
                        : "text-white/45 hover:text-white"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    {/* NUMBER */}

                    <span
                      className={`
                        text-[9px]
                        tracking-[0.15em]
                        ${
                          isActive(item.path)
                            ? "text-[#A92F46]"
                            : "text-white/20"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* NAME */}

                    <span
                      className="
                        text-base
                        font-light
                        uppercase
                        tracking-[0.04em]
                      "
                    >
                      {item.name}
                    </span>

                  </div>


                  {/* ARROW */}

                  <span
                    className={`
                      text-sm
                      transition
                      duration-300
                      ${
                        isActive(item.path)
                          ? "translate-x-0 text-[#A92F46]"
                          : "-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-[#A92F46]"
                      }
                    `}
                  >
                    →
                  </span>

                </Link>
              ))}

            </div>

          </div>


          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <div
            className="
              border-t
              border-white/10
              px-6
              py-6
            "
          >

            <p
              className="
                mb-4
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white/25
              "
            >
              Need legal assistance?
            </p>

            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="
                group
                flex
                items-center
                justify-between
                border
                border-white/15
                px-4
                py-4
                text-xs
                font-medium
                uppercase
                tracking-[0.05em]
                text-white
                transition
                duration-300
                hover:border-[#A92F46]
                hover:bg-[#A92F46]
                hover:text-[#F8F6EF]
              "
            >

              <span>Start Consultation</span>

              <span
                className="
                  text-base
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </a>

          </div>

        </div>

      </div>

    </nav>
  );
}