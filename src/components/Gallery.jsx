import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import { galleryImages } from "../mock";

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="absolute inset-0 temple-pattern opacity-25" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="font-display italic text-brand-green/80 text-lg mb-2">
            — Experience —
          </div>
          <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">
            A Visual Feast
          </h2>
          <p className="font-body text-brand-ink/80 max-w-xl mx-auto mt-4">
            Banana leaves, brass tumblers, sizzling tawas — moments from our kitchen and counter.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
          {galleryImages.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(g.src)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className={`group relative w-full mb-4 md:mb-5 break-inside-avoid block overflow-hidden rounded-3xl shadow-soft hover:shadow-softlg transition-all duration-300 ${
                g.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={g.src}
                alt={`gallery-${i}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/95 text-brand-green flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[180] bg-brand-greendeep/90 backdrop-blur-md flex items-center justify-center p-5"
            onClick={() => setActive(null)}
          >
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={active}
              alt="preview"
              className="max-w-[90vw] max-h-[88vh] rounded-2xl shadow-softlg"
            />
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-brand-green flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
