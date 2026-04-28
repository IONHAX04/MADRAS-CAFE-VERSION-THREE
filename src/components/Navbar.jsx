import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Coffee } from "lucide-react";
import logoBgW from "../assets/logo/logo_bg_w.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About Us", to: "/about" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

const Logo = ({ scrolled }) => (
  <Link to="/" className="flex items-center gap-2.5" aria-label="Madras Cafe">
    <img src={logoBgW} alt="Madras Cafe" className="h-20 object-contain" />
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // User requested navbar to never be transparent
  const solid = true;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 ${
          solid ? "glass-nav-solid" : "glass-nav-clear"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4 py-3 md:py-4">
            <Logo scrolled={solid} />

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((l) => {
                const active = location.pathname === l.to;
                return (
                  <Link
                    key={l.label}
                    to={l.to}
                    className={`nav-link font-heading text-[17px] transition-colors ${
                      active ? "font-bold" : "font-medium"
                    } ${
                      solid
                        ? active
                          ? "text-brand-greendeep"
                          : "text-brand-green hover:text-brand-greendeep"
                        : active
                        ? "text-brand-gold"
                        : "text-white/95 hover:text-brand-gold"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">

              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  solid
                    ? "bg-brand-green text-brand-gold"
                    : "bg-brand-gold text-brand-green"
                }`}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="fixed inset-0 z-[150] bg-white flex flex-col p-6"
          >
            <div className="flex justify-between items-center">
              <Logo scrolled />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="w-10 h-10 rounded-full bg-brand-green text-brand-gold flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-5">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-heading font-extrabold text-brand-green text-4xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

          </motion.div>
        )}
      </AnimatePresence>
      {/* keep isHome ref to silence linter */}
      {!isHome && null}
    </>
  );
};

export default Navbar;
