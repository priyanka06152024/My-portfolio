import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isDark =
    location.pathname === "/projects" ||
    location.pathname.includes("/projects/");

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9000] ${
          isDark ? "text-[#F4F1EA]" : "text-[#111]"
        }`}
      >
        <div className="w-[92%] mx-auto h-[90px] flex items-center justify-between">
          <Link
            to="/"
            className="text-[13px] font-bold tracking-[-0.02em]"
          >
            PC<span className="text-[#D7FF3F]">.</span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 uppercase text-[10px] tracking-[0.16em]"
            data-cursor="MENU"
          >
            Menu
            <Menu size={17} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[9990] bg-[#111] text-[#F4F1EA] ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 0.8s cubic-bezier(.77,0,.18,1)",
        }}
      >
        <div className="w-[92%] mx-auto h-full flex flex-col justify-between py-8">
          <div className="flex justify-between items-center">
            <span className="text-[13px] font-bold">
              PC<span className="text-[#D7FF3F]">.</span>
            </span>

            <button
              onClick={() => setOpen(false)}
              data-cursor="CLOSE"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="group flex items-end gap-5 border-b border-white/10 py-4"
                data-cursor="GO"
              >
                <span className="text-[10px] text-white/30">
                  0{index + 1}
                </span>

                <span className="text-[clamp(45px,8vw,120px)] font-semibold tracking-[-0.07em] leading-[0.85] group-hover:text-[#D7FF3F] transition-colors duration-300">
                  {link.name}
                </span>

                <ArrowUpRight className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div className="flex justify-between text-[10px] uppercase tracking-[0.15em] text-white/40">
            <span>Frontend / Creative Developer</span>
            <span>India / 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;