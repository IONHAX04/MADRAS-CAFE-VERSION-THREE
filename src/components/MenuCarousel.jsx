import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuCategories } from "../mock";

const CATEGORIES = Object.keys(menuCategories);

const MenuCarousel = () => {
  const [active, setActive] = useState(CATEGORIES[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    containScroll: "trimSnaps",
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
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [active, emblaApi]);

  const items = menuCategories[active];

  return (
    <section id="menu" className="relative bg-brand-cream py-20 md:py-28 overflow-hidden">
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
              — The Full Menu —
            </div>
            <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">
              Browse By Category
            </h2>
          </div>
          <p className="font-body text-brand-ink/80 max-w-md md:text-right">
            From dawn-fresh idlis to late-night filter coffee, every craving has a counter at Madras Cafe.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative font-heading font-semibold text-sm md:text-base px-5 py-2.5 rounded-full transition-all duration-300 ${
                active === c
                  ? "bg-brand-green text-white shadow-soft"
                  : "bg-white text-brand-green hover:bg-brand-green hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="hidden md:flex items-center gap-2 ml-auto">
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
        </div>

        {/* Embla viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6">
            {items.map((it, i) => (
              <motion.div
                key={`${active}-${it.name}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="shrink-0 w-[78%] sm:w-[46%] md:w-[32%] lg:w-[24%]"
              >
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softlg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={it.image}
                      alt={it.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/85 via-brand-green/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-end justify-between gap-3">
                        <h3 className="font-heading font-bold text-white text-xl leading-tight">
                          {it.name}
                        </h3>
                        <span className="font-display italic text-brand-gold text-lg whitespace-nowrap">
                          {it.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
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

export default MenuCarousel;
