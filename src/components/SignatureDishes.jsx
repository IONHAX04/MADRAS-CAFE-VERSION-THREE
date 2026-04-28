import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { signatureDishes } from "../mock";

const SignatureDishes = () => {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="absolute inset-0 temple-pattern opacity-30" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="font-display italic text-brand-green/80 text-lg md:text-xl mb-3">
            — Greatest Hits —
          </div>
          <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">
            Signature Dishes
          </h2>
          <p className="font-body text-brand-ink/80 max-w-xl mx-auto mt-4 text-base md:text-lg">
            Time-honoured South Indian classics, perfected over four generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {signatureDishes.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-brand-green/10 rounded-3xl overflow-hidden shadow-soft hover:shadow-softlg hover:border-brand-gold/40 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-green text-brand-gold font-heading text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
                  {d.tag}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-heading font-bold text-brand-green text-lg md:text-xl leading-tight">
                    {d.name}
                  </h3>
                  <span className="font-display italic text-brand-green text-lg whitespace-nowrap">
                    {d.price}
                  </span>
                </div>
                <p className="font-body text-brand-ink/75 text-sm mt-2.5 leading-relaxed line-clamp-3">
                  {d.desc}
                </p>
                <div className="mt-4 h-px bg-brand-green/15" />
                <Link
                  to="/menu"
                  className="mt-4 inline-flex items-center gap-1.5 font-heading font-semibold text-brand-green text-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                >
                  Order Now <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
