import food13 from '../assets/images/food13.jpeg';
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Leaf, HandHeart, Coffee, Users, Sparkles, ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { aboutContent } from "../mock";

const TIMELINE = [
  { year: "1962", title: "The First Dabarah", body: "Madras Cafe begins as a single counter in Mylapore, Chennai — four tables, one tawa, frothy filter coffee." },
  { year: "1985", title: "A Family Tradition", body: "Second-generation chefs join the kitchen, codifying recipes for sambar, chutneys and tiffin." },
  { year: "2002", title: "Beyond Mylapore", body: "Expansion across Chennai with three new outlets. The frothy coffee crosses neighbourhoods." },
  { year: "2018", title: "Across the Country", body: "Madras Cafe opens in Bengaluru, Mumbai and Hyderabad — always banana-leaf, always brass tumblers." },
  { year: "Today", title: "Tradition, Served Fresh", body: "Eight cafes, four generations, one belief — taste is memory, and we cook to keep yours alive." },
];

const VALUES = [
  { icon: <Leaf size={22} />, title: "Fresh Daily", body: "Idli batter ground every dawn, chutneys made on a stone, vegetables sourced at sunrise." },
  { icon: <HandHeart size={22} />, title: "Hand Crafted", body: "Every dosa hand-spread on a seasoned cast-iron tawa. No shortcuts, no compromises." },
  { icon: <Award size={22} />, title: "4 Generations", body: "Recipes handed down quietly, lovingly. Tradition tasted in every bite." },
  { icon: <Sparkles size={22} />, title: "Pure Vegetarian", body: "Authentic South Indian, the way it was meant to be — 100% pure vegetarian." },
];

const TEAM = [
  { name: "K. Subramaniam", role: "Founder — 1962", initials: "KS", image: food13 },
  { name: "Lakshmi Subramaniam", role: "Chef — Tiffins", initials: "LS", image: food13 },
  { name: "Arun Subramaniam", role: "Master Chef — Coffee", initials: "AS", image: food13 },
];

const AboutPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white"
    >
      <PageBanner
        breadcrumb="About Us"
        eyebrow="✦ Our Heritage ✦"
        title="OUR STORY"
        subtitle="Sixty-two years. Four generations. One recipe handed down with love."
        image={food13}
      />

      {/* Story split */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
                  <img src={aboutContent.images[0]} alt="Cooking" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl bg-brand-gold flex flex-col items-center justify-center p-5 text-center">
                  <div className="font-heading font-extrabold text-brand-green text-5xl leading-none">62+</div>
                  <div className="font-body text-brand-green/80 text-xs uppercase tracking-[0.25em] mt-2">Years of<br/> Tradition</div>
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="aspect-square rounded-3xl bg-brand-green flex flex-col items-center justify-center p-5 text-center">
                  <div className="font-heading font-extrabold text-brand-gold text-5xl leading-none">08</div>
                  <div className="font-body text-brand-gold/80 text-xs uppercase tracking-[0.25em] mt-2">City<br/> Locations</div>
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
                  <img src={aboutContent.images[1]} alt="Coffee" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="font-display italic text-brand-green/80 text-lg mb-3">
                — {aboutContent.eyebrow} —
              </div>
              <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight leading-[1.05]">
                {aboutContent.title}
              </h2>
              <div className="kolam-line w-24 my-6" />
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-brand-ink/80 text-base md:text-lg leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-brand-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="font-display italic text-brand-green/80 text-lg mb-2">— What We Believe —</div>
            <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 shadow-soft hover:shadow-softlg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green text-brand-gold flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-green text-xl">{v.title}</h3>
                <p className="font-body text-brand-ink/75 text-sm mt-2 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <div className="font-display italic text-brand-green/80 text-lg mb-2">— Six Decades In Six Moments —</div>
            <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-brand-green/20" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="font-heading font-extrabold text-brand-gold text-2xl">{t.year}</div>
                    <h3 className="font-heading font-bold text-brand-green text-xl mt-1">{t.title}</h3>
                    <p className="font-body text-brand-ink/75 text-sm mt-2 leading-relaxed">{t.body}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-5 md:left-1/2 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-green border-4 border-brand-cream" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative bg-brand-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <div className="font-display italic text-brand-green/80 text-lg mb-2 inline-flex items-center gap-2">
              <Users size={16} /> The Family
            </div>
            <h2 className="font-heading font-extrabold text-brand-green text-4xl md:text-6xl tracking-tight">Behind The Tawa</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softlg transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-greendeep/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-heading font-bold text-white text-xl">{p.name}</h3>
                    <div className="font-display italic text-brand-gold text-sm mt-1">{p.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center">
          <Coffee className="mx-auto text-brand-gold mb-4" size={36} />
          <h3 className="font-heading font-extrabold text-brand-green text-3xl md:text-5xl">
            Come, share a meal with us.
          </h3>
          <p className="font-display italic text-brand-green/80 text-lg md:text-xl mt-3">
            Pull up a chair. We saved you a seat near the kitchen.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/menu" className="inline-flex items-center gap-2 bg-brand-green text-white font-heading font-semibold px-7 py-3.5 rounded-full hover:bg-brand-greendeep transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5">
              View Menu <ArrowRight size={18} />
            </Link>
            <Link to="/locations" className="inline-flex items-center gap-2 bg-transparent text-brand-green font-heading font-semibold px-7 py-3.5 rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutPage;




