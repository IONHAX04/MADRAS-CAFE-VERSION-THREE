import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Coffee, UtensilsCrossed, Cookie, Soup } from "lucide-react";
import { heroData } from "../mock";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] overflow-hidden bg-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroData.bg})` }}
      />
      {/* Dark green gradient overlay (replaces yellow) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(19,57,31,0.78) 0%, rgba(30,92,59,0.65) 55%, rgba(19,57,31,0.85) 100%)",
        }}
      />

      {/* Subtle decorative gold rings */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full border-[1px] border-brand-gold/30" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full border-[1px] border-brand-gold/20" />

      {/* Floating decorative food icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-[6%] top-[28%] hidden md:block"
      >
        <div className="animate-floaty w-16 h-16 rounded-full bg-white/95 shadow-softlg flex items-center justify-center text-brand-green">
          <Coffee size={28} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-[8%] top-[20%] hidden md:block"
      >
        <div className="animate-floaty2 w-20 h-20 rounded-full bg-brand-gold text-brand-green shadow-softlg flex items-center justify-center">
          <UtensilsCrossed size={32} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute right-[12%] bottom-[18%] hidden md:block"
      >
        <div className="animate-floaty w-14 h-14 rounded-full bg-white/95 shadow-softlg flex items-center justify-center text-brand-green">
          <Cookie size={26} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute left-[10%] bottom-[22%] hidden md:block"
      >
        <div className="animate-floaty2 w-16 h-16 rounded-full bg-brand-gold text-brand-green shadow-softlg flex items-center justify-center">
          <Soup size={28} />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-[100vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 w-full pt-28 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-brand-gold rounded-full px-5 py-2 shadow-soft mb-6"
          >
            <span className="font-display italic text-brand-green text-sm tracking-wide font-semibold">
              {heroData.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-heading font-black text-white leading-[0.95] tracking-tight text-[44px] sm:text-[64px] md:text-[88px] lg:text-[112px] max-w-[1100px] mx-auto"
          >
            AUTHENTIC <span className="text-brand-gold">SOUTH INDIAN</span>
            <br />FLAVOURS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-display italic text-white/90 text-lg md:text-2xl mt-6 max-w-2xl mx-auto"
          >
            {heroData.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 bg-brand-gold text-brand-green font-heading font-semibold text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-white transition-all duration-300 shadow-soft hover:shadow-softlg hover:-translate-y-0.5"
            >
              Explore Menu
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 bg-transparent text-white font-heading font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border-2 border-white/80 hover:bg-white hover:text-brand-green transition-all duration-300"
            >
              <MapPin size={18} /> Visit Us
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex flex-col items-center gap-2"
          >
            <span className="font-heading uppercase tracking-[0.3em] text-[10px] text-white/80">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-px h-10 bg-white/60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
