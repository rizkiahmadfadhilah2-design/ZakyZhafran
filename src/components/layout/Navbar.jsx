import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // lock scroll (lebih aman)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[999]">

      {/* ================= GLASS NAV ================= */}
      <div className="bg-[#0B1220]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logozp.png"
              alt="ZP Logo"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20"
            />

            <div className="leading-tight">
              <h1 className="text-white text-sm sm:text-base font-semibold tracking-widest">
                ZAKY ZHAFRAN
              </h1>
              <p className="text-[10px] text-white/60 tracking-[0.2em]">
                & PARTNERS
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm text-white/70">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition duration-300 hover:text-white ${
                  isActive(item.path) ? "text-white" : ""
                }`}
              >
                {item.name}

                {/* underline premium */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-white transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <a
            href="https://wa.me/6281234567890"
            className="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition"
          >
            Consultation
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[1000] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* PANEL */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0B1220] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER MOBILE */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <p className="text-white text-sm tracking-widest">
              MENU
            </p>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-6 px-6 py-8">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-lg transition ${
                  isActive(item.path)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA MOBILE */}
          <div className="px-6 mt-auto absolute bottom-8 w-full">
            <a
              href="https://wa.me/6281234567890"
              className="block text-center bg-white text-black py-3 rounded-xl font-medium hover:scale-[1.02] transition"
            >
              Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}