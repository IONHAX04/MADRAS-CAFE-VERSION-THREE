import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../mock";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[index];

  return (
    <section id="top" className="relative w-full h-[100vh] min-h-[640px] overflow-hidden bg-[#1f5e36]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="noise-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1500px] mx-auto px-5 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
            }}
            className="max-w-3xl"
          >
            <motion.div
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="inline-block bg-[#f3b700] text-[#1f5e36] font-body font-bold uppercase tracking-[0.3em] text-[11px] px-3 py-1.5 mb-4"
            >
              {slide.eyebrow}
            </motion.div>
            <motion.h1
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
              }}
              className="font-display font-black text-white leading-[0.85] tracking-[-0.02em] text-[64px] sm:text-[88px] md:text-[120px] lg:text-[150px]"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="font-accent italic text-white/95 text-xl md:text-3xl mt-4 max-w-xl"
            >
              {slide.subtitle}
            </motion.p>
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="mt-8"
            >
              <a
                href="#order"
                className="inline-flex items-center gap-3 bg-[#f3b700] text-[#1f5e36] font-body font-bold uppercase tracking-[0.25em] text-sm px-7 py-4 rounded-full hover:bg-white transition-colors"
              >
                {slide.cta}
                <ChevronRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={() => go(-1)}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/85 hover:bg-[#f3b700] text-[#1f5e36] flex items-center justify-center transition-colors backdrop-blur"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/85 hover:bg-[#f3b700] text-[#1f5e36] flex items-center justify-center transition-colors backdrop-blur"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-[6px] rounded-full transition-all ${
              i === index ? "w-10 bg-[#f3b700]" : "w-3 bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Side label */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right z-10">
        <span className="font-body uppercase tracking-[0.4em] text-[10px] text-white/70">
          Scroll — Explore the Madras Way
        </span>
      </div>
    </section>
  );
};

export default HeroCarousel;
