import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageBanner = ({ eyebrow, title, subtitle, breadcrumb, image }) => {
  return (
    <section className="relative w-full min-h-[56vh] md:min-h-[60vh] overflow-hidden bg-brand-green">
      {image && (
        <div
          className="absolute inset-0 bg-center bg-cover scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: image
            ? "linear-gradient(135deg, rgba(19,57,31,0.85) 0%, rgba(30,92,59,0.75) 50%, rgba(19,57,31,0.92) 100%)"
            : "linear-gradient(135deg, #13391f 0%, #1e5c3b 60%, #13391f 100%)",
        }}
      />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full border border-brand-gold/25" />
      <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full border border-brand-gold/15" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 pt-32 md:pt-40 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm font-body mb-5">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors">
              <Home size={13} /> Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[11px] md:text-xs">
              {breadcrumb}
            </span>
          </div>

          {eyebrow && (
            <div className="inline-block bg-brand-gold rounded-full px-4 py-1.5 mb-5">
              <span className="font-display italic text-brand-green text-sm font-semibold">
                {eyebrow}
              </span>
            </div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-black text-white leading-[1.0] tracking-tight text-5xl md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display italic text-white/85 text-lg md:text-2xl mt-5 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
