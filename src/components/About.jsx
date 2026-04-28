import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Leaf, HandHeart } from "lucide-react";
import { aboutContent } from "../mock";

const About = () => {
  return (
    <section id="about" className="relative bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
                  <img
                    src={aboutContent.images[0]}
                    alt="Traditional cooking"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl bg-brand-gold flex flex-col items-center justify-center p-5 text-center">
                  <div className="font-heading font-extrabold text-brand-green text-5xl leading-none">
                    62+
                  </div>
                  <div className="font-body text-brand-green/80 text-xs uppercase tracking-[0.25em] mt-2">
                    Years of
                    <br /> Tradition
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="aspect-square rounded-3xl bg-brand-green flex flex-col items-center justify-center p-5 text-center">
                  <div className="font-heading font-extrabold text-brand-gold text-5xl leading-none">
                    08
                  </div>
                  <div className="font-body text-brand-gold/80 text-xs uppercase tracking-[0.25em] mt-2">
                    City
                    <br /> Locations
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
                  <img
                    src={aboutContent.images[1]}
                    alt="Filter coffee"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
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
              <p
                key={i}
                className="font-body text-brand-ink/80 text-base md:text-lg leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: <Leaf size={20} />, label: "Fresh Daily" },
                { icon: <HandHeart size={20} />, label: "Hand Ground" },
                { icon: <Award size={20} />, label: "4 Generations" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center text-center bg-brand-gold/10 rounded-2xl p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-green text-brand-gold flex items-center justify-center mb-2">
                    {b.icon}
                  </div>
                  <span className="font-heading font-semibold text-brand-green text-sm">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 bg-brand-green text-white font-heading font-semibold px-6 py-3.5 rounded-full hover:bg-brand-greendeep transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5"
            >
              Read More <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
