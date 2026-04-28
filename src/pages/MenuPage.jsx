import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { menuCategories, signatureDishes } from "../mock";

const CATEGORIES = ["All", ...Object.keys(menuCategories)];

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const allItems = useMemo(() => {
    return Object.entries(menuCategories).flatMap(([cat, items]) =>
      items.map((it) => ({ ...it, category: cat }))
    );
  }, []);

  const items = useMemo(() => {
    let list = active === "All" ? allItems : allItems.filter((i) => i.category === active);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((i) => i.name.toLowerCase().includes(q));
    }
    return list;
  }, [active, allItems, query]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white"
    >
      <PageBanner
        breadcrumb="Menu"
        eyebrow="✦ Crafted with Tradition ✦"
        title="OUR MENU"
        subtitle="From dawn-fresh dosas to late-night filter coffee — every craving has a counter at Madras Cafe."
        image="https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg"
      />

      {/* Filter bar */}
      <section className="sticky top-[68px] md:top-[76px] z-[100] bg-white/95 backdrop-blur-md border-b border-brand-green/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 py-4 md:py-5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`font-heading font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  active === c
                    ? "bg-brand-green text-white shadow-soft"
                    : "bg-brand-cream text-brand-green hover:bg-brand-green hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="md:ml-auto relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-green/50"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu..."
              className="pl-9 pr-4 py-2.5 bg-brand-cream border border-brand-green/15 rounded-full font-body text-sm text-brand-ink placeholder-brand-green/50 outline-none focus:border-brand-green focus:bg-white transition w-full md:w-72"
            />
          </div>
        </div>
      </section>

      {/* Signatures highlight */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="font-display italic text-brand-green/80 text-base md:text-lg mb-1">
                — Greatest Hits —
              </div>
              <h2 className="font-heading font-extrabold text-brand-green text-3xl md:text-5xl">
                Signature Dishes
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {signatureDishes.map((d) => (
              <article
                key={d.id}
                className="group bg-white border border-brand-green/10 rounded-3xl overflow-hidden shadow-soft hover:shadow-softlg hover:border-brand-gold/40 transition-all duration-300"
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
                <div className="p-4 md:p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-heading font-bold text-brand-green text-base md:text-lg leading-tight">
                      {d.name}
                    </h3>
                    <span className="font-display italic text-brand-green text-base whitespace-nowrap">
                      {d.price}
                    </span>
                  </div>
                  <p className="font-body text-brand-ink/75 text-sm mt-2 line-clamp-2">
                    {d.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full menu grid */}
      <section className="relative bg-brand-cream py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-display italic text-brand-green/80 text-base md:text-lg mb-1">
                — Full Menu —
              </div>
              <h2 className="font-heading font-extrabold text-brand-green text-3xl md:text-5xl">
                {active === "All" ? "Everything We Serve" : active}
              </h2>
            </div>
            <div className="font-body text-brand-ink/70 text-sm">
              {items.length} item{items.length === 1 ? "" : "s"}
            </div>
          </div>

          {items.length === 0 ? (
            <div className="py-20 text-center font-body text-brand-ink/70">
              No matches. Try another search.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {items.map((it, i) => (
                <motion.article
                  key={`${it.category}-${it.name}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: (i % 8) * 0.04 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softlg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={it.image}
                      alt={it.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 text-brand-green font-heading text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
                      {it.category}
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-heading font-bold text-brand-green text-base md:text-lg">
                        {it.name}
                      </h3>
                      <span className="font-display italic text-brand-green text-base whitespace-nowrap">
                        {it.price}
                      </span>
                    </div>
                    <button className="mt-3 inline-flex items-center gap-1.5 font-heading font-semibold text-brand-green text-sm hover:text-brand-greendeep">
                      Add to Order <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center">
          <h3 className="font-heading font-extrabold text-brand-green text-3xl md:text-5xl">
            Hungry already?
          </h3>
          <p className="font-display italic text-brand-green/80 text-lg md:text-xl mt-3">
            Order online for delivery or pickup at any Madras Cafe near you.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-green text-white font-heading font-semibold px-7 py-3.5 rounded-full hover:bg-brand-greendeep transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5"
            >
              <ShoppingBag size={18} /> Order Online
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 bg-transparent text-brand-green font-heading font-semibold px-7 py-3.5 rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default MenuPage;
