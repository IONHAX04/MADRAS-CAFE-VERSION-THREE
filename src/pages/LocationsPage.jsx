import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Navigation, Mail } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { locations } from "../mock";
import food15 from "../assets/images/food15.jpg";

const FULL_LOCATIONS = locations.map((l, i) => ({
  ...l,
  phone: ["+91 44 2811 0001", "+91 80 2520 0002", "+91 22 2640 0003", "+91 40 2354 0004"][i] || "+91 00 0000 0000",
  email: ["chennai@madrascafe.in", "bengaluru@madrascafe.in", "mumbai@madrascafe.in", "hyderabad@madrascafe.in"][i] || "hello@madrascafe.in",
  image: [
    food15,
    food15,
    food15,
    food15,
  ][i],
}));

const LocationsPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white"
    >
      <PageBanner
        breadcrumb="Locations"
        eyebrow="✦ Eight Cafes, One Soul ✦"
        title="FIND US"
        subtitle="From Mylapore to Bandra — every Madras Cafe is a doorway home."
        image={food15}
      />

      {/* Map placeholder + intro */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-display italic text-brand-green/80 text-lg mb-2">— Always Open Nearby —</div>
            <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-5xl tracking-tight">
              Drop in for a dabarah of filter coffee.
            </h2>
            <p className="font-body text-brand-ink/80 mt-4 leading-relaxed">
              Eight outlets across four cities, each kitchen run by a chef trained in our Mylapore HQ. The menu is the same. The brass tumbler is the same. Only the city outside changes.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-7">
              {[
                { v: "08", l: "Outlets" },
                { v: "04", l: "Cities" },
                { v: "24/7", l: "Filter Coffee" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-brand-cream border border-brand-green/10 p-4 text-center">
                  <div className="font-heading font-extrabold text-brand-green text-2xl">{s.v}</div>
                  <div className="font-body text-brand-ink/70 text-xs uppercase tracking-[0.18em] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-cream border border-brand-green/10 shadow-soft">
            <div className="absolute inset-0 temple-pattern opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green text-brand-gold flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <div className="font-heading font-bold text-brand-green text-xl">Interactive Map</div>
              <div className="font-body text-brand-ink/70 text-sm max-w-xs">
                Live map of all Madras Cafe locations — tap a marker to call, get directions, or order online.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                {FULL_LOCATIONS.map((l) => (
                  <span key={l.city} className="text-[11px] uppercase tracking-[0.18em] font-heading font-semibold bg-white text-brand-green px-2.5 py-1 rounded-full border border-brand-green/15">
                    {l.city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed location list */}
      <section className="relative bg-brand-cream py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="font-display italic text-brand-green/80 text-lg mb-1">— The Madras Cafe Map —</div>
              <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-5xl tracking-tight">All Locations</h2>
            </div>
          </div>
          <div className="space-y-5">
            {FULL_LOCATIONS.map((l, i) => (
              <motion.article
                key={l.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-0 bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softlg transition-all duration-300"
              >
                <div className="md:col-span-4 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={l.image} alt={l.city} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-green font-heading text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
                    {String(i + 1).padStart(2, "0")} / {String(FULL_LOCATIONS.length).padStart(2, "0")}
                  </div>
                </div>
                <div className="md:col-span-8 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="flex-1">
                    <h3 className="font-heading font-extrabold text-brand-green text-2xl md:text-3xl">{l.city}</h3>
                    <div className="font-display italic text-brand-green/70 text-base mt-0.5">{l.area}</div>
                    <div className="mt-4 space-y-2.5 font-body text-brand-ink/80 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin size={15} className="mt-0.5 text-brand-green flex-shrink-0" />
                        <span>{l.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-brand-green" />
                        <span>{l.hours}</span>
                      </div>
                      <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-brand-green">
                        <Phone size={15} className="text-brand-green" />
                        <span>{l.phone}</span>
                      </a>
                      <a href={`mailto:${l.email}`} className="flex items-center gap-2 hover:text-brand-green">
                        <Mail size={15} className="text-brand-green" />
                        <span>{l.email}</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:w-44 md:justify-center">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-heading font-semibold text-sm px-4 py-2.5 rounded-full hover:bg-brand-greendeep transition-colors"
                    >
                      <Navigation size={14} /> Directions
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center">
          <h3 className="font-heading font-extrabold text-brand-green text-3xl md:text-5xl">
            Want a Madras Cafe in your city?
          </h3>
          <p className="font-display italic text-brand-green/80 text-lg md:text-xl mt-3">
            Drop us a note — we’re slowly, lovingly, opening more.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 bg-brand-green text-white font-heading font-semibold px-7 py-3.5 rounded-full hover:bg-brand-greendeep transition-all">
            <Mail size={18} /> Contact Us
          </Link>
        </div>
      </section>
    </motion.main>
  );
};

export default LocationsPage;
