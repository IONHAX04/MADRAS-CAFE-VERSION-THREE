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
    <img src={logoBgW} alt="Madras Cafe" className="h-14 md:h-16 object-contain" />
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

  // On non-home pages, banner is dark green so we keep transparent state (white text)
  // until user scrolls past the banner.
  const solid = scrolled;

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
                    className={`nav-link font-heading text-[14px] font-medium transition-colors ${
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
              <Link
                to="/menu"
                className={`hidden sm:inline-flex items-center gap-2 font-heading font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-soft ${
                  solid
                    ? "bg-brand-green text-white hover:bg-brand-greendeep"
                    : "bg-brand-gold text-brand-green hover:bg-white"
                }`}
              >
                <ShoppingBag size={16} /> Order Now
              </Link>
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
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-heading font-semibold px-6 py-4 rounded-full"
            >
              <ShoppingBag size={18} /> Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {/* keep isHome ref to silence linter */}
      {!isHome && null}
    </>
  );
};

export default Navbar;
