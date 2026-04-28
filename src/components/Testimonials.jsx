import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../mock";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    const id = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(id);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-brand-cream py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 temple-pattern opacity-30" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <div className="font-display italic text-brand-green/80 text-lg mb-2">
              — Kind Words —
            </div>
            <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">
              Loved By Foodies
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="w-11 h-11 rounded-full bg-white text-brand-green hover:bg-brand-green hover:text-brand-gold transition-all duration-300 flex items-center justify-center shadow-soft"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next"
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="w-11 h-11 rounded-full bg-white text-brand-green hover:bg-brand-green hover:text-brand-gold transition-all duration-300 flex items-center justify-center shadow-soft"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 w-[88%] sm:w-[60%] md:w-[42%] lg:w-[32%]"
              >
                <div className="relative h-full bg-white rounded-3xl p-7 md:p-8 shadow-soft hover:shadow-softlg transition-all duration-300">
                  <Quote
                    className="absolute top-5 right-5 text-brand-gold/60"
                    size={42}
                  />
                  <div className="flex items-center gap-1 mb-5">
                    {Array(t.rating)
                      .fill(0)
                      .map((_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className="fill-brand-gold text-brand-gold"
                        />
                      ))}
                  </div>
                  <p className="font-display italic text-brand-ink text-lg md:text-xl leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-green text-brand-gold font-heading font-bold flex items-center justify-center">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-brand-green">
                        {t.name}
                      </div>
                      <div className="font-body text-brand-ink/70 text-xs">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-10 bg-brand-green" : "w-3 bg-brand-green/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
