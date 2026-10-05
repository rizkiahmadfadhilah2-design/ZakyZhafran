import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const menu = [
    { name: "Home", path: "/" },

    // About → Firm Page
    { name: "About", path: "/firm" },

    // Lawyers Page (team page lama)
    { name: "Lawyers", path: "/lawyers" },

    // NEW CONTACT PAGE
    { name: "Contact", path: "/contact" },

    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[999]">

      {/* NAVBAR */}
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
              <h1 className="text-white text-sm font-semibold tracking-widest">
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
                className={`relative transition hover:text-white ${
                  isActive(item.path) ? "text-white" : ""
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-white transition-all ${
                    isActive(item.path) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <a
            href="https://wa.me/6282242887887?text=Halo%20Zaky%20Zhafran%20%26%20Partners%2C%20saya%20ingin%20konsultasi%20hukum%20dan%20pajak."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
          >
            Consultation
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[1000] transition ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}>

        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setOpen(false)}
        />

        {/* PANEL */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0B1220] transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* HEADER */}
          <div className="flex justify-between px-6 py-5 border-b border-white/10">
            <p className="text-white text-sm tracking-widest">MENU</p>
            <button onClick={() => setOpen(false)} className="text-white text-xl">
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
          <div className="absolute bottom-8 w-full px-6">
            <a
              href="https://wa.me/6282242887887?text=Halo%20Zaky%20Zhafran%20%26%20Partners%2C%20saya%20ingin%20konsultasi%20hukum%20dan%20pajak."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-black py-3 rounded-xl font-medium hover:scale-105 transition"
            >
              Consultation
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}