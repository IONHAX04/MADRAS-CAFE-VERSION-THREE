import React from "react";
import { motion } from "framer-motion";
import { menuItems } from "../mock";
import { ArrowUpRight } from "lucide-react";

const MenuShowcase = () => {
  return (
    <section id="menu" className="relative bg-white">
      {/* Marquee */}
      <div className="bg-[#f3b700] py-4 overflow-hidden border-y-4 border-[#1f5e36]">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(2)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="flex items-center gap-8 pr-8">
                {[
                  "Pimped Out Dosas",
                  "Frothy Filter Coffee",
                  "Ghee Drowned",
                  "Smoke Kissed Biryani",
                  "Hot & Sticky Sweets",
                  "Banana Leaf Feasts",
                  "Madras Forever",
                ].map((t, i) => (
                  <React.Fragment key={i}>
                    <span className="font-display font-black uppercase text-[#1f5e36] text-3xl md:text-5xl tracking-[-0.02em]">
                      {t}
                    </span>
                    <span className="text-[#1f5e36] text-3xl md:text-5xl">✦</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="font-body uppercase tracking-[0.3em] text-[11px] text-[#1f5e36]/70 mb-3">
              Greatest Hits
            </div>
            <h2 className="font-display font-black text-[#1f5e36] text-[64px] md:text-[120px] leading-[0.85] tracking-[-0.03em]">
              SIGNATURES
            </h2>
          </div>
          <p className="font-accent italic text-[#1f5e36]/80 text-2xl md:text-3xl max-w-md">
            Every dish is a confession. Every sip a sermon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((m, i) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-[8px] bg-[#1f5e36] text-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f5e36] via-[#1f5e36]/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#f3b700] text-[#1f5e36] font-body font-bold uppercase tracking-[0.2em] text-[10px] px-2.5 py-1 rounded-full">
                  {m.tag}
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center border border-white/30 group-hover:bg-[#f3b700] group-hover:text-[#1f5e36] transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display font-black text-3xl leading-none uppercase tracking-[-0.02em]">
                    {m.name}
                  </h3>
                  <span className="font-accent italic text-[#f3b700] text-2xl whitespace-nowrap">
                    {m.price}
                  </span>
                </div>
                <p className="font-body text-white/75 text-sm mt-3 leading-relaxed">{m.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
