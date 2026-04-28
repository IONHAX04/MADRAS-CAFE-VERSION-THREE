import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Navigation } from "lucide-react";
import { locations } from "../mock";

const Locations = () => {
  return (
    <section id="locations" className="relative bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="font-display italic text-brand-green/80 text-lg mb-2">
            — Find Your Madras —
          </div>
          <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">
            Our Locations
          </h2>
          <p className="font-body text-brand-ink/80 max-w-xl mx-auto mt-4">
            Eight cafés, one soul. Drop in for a dabarah of filter coffee, anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {locations.map((l, i) => (
            <motion.article
              key={l.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-brand-gold/15 border border-brand-green/10 rounded-3xl p-6 hover:bg-white hover:shadow-softlg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-green text-brand-gold flex items-center justify-center mb-5">
                <MapPin size={20} />
              </div>
              <h3 className="font-heading font-bold text-brand-green text-2xl leading-tight">
                {l.city}
              </h3>
              <div className="font-display italic text-brand-green/70 text-base mt-1">
                {l.area}
              </div>
              <p className="font-body text-brand-ink/75 text-sm mt-4 leading-relaxed">
                {l.address}
              </p>
              <div className="mt-4 flex items-center gap-2 text-brand-green/80 font-body text-sm">
                <Clock size={14} />
                {l.hours}
              </div>
              <Link
                to="/locations"
                className="mt-5 inline-flex items-center gap-1.5 font-heading font-semibold text-brand-green text-sm border-b-2 border-brand-green/0 hover:border-brand-green pb-1 transition-all"
              >
                Get Directions <Navigation size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
