import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { story, menuTease } from "../mock";
import { ArrowRight } from "lucide-react";

const HorizontalScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  // -50% horizontal travel for two panels
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"], { clamp: true });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.28, 0.18]);

  return (
    <>
      {/* Desktop: sticky horizontal */}
      <section
        id="story"
        ref={targetRef}
        className="relative hidden md:block bg-[#1f5e36]"
        style={{ height: "200vh" }}
      >
        {/* Sticky background */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{
              scale: bgScale,
              opacity: bgOpacity,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1668236543090-82eba5ee5976')",
            }}
            className="absolute inset-0 bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-[#1f5e36]/70 mix-blend-multiply" />
          <div className="noise-overlay" />

          {/* Decorative corner labels */}
          <div className="absolute top-28 left-10 text-white/50 font-body uppercase tracking-[0.4em] text-[11px]">
            01 / 02 — The Story Of Madras
          </div>
          <div className="absolute bottom-10 right-10 text-white/50 font-body uppercase tracking-[0.4em] text-[11px]">
            Scroll Horizontally
          </div>

          {/* Horizontal track */}
          <motion.div style={{ x }} className="flex h-full w-[200vw]">
            {/* Panel 1 */}
            <div className="w-screen h-full flex items-center px-16 lg:px-28">
              <div className="grid grid-cols-12 gap-8 w-full items-center">
                <div className="col-span-7">
                  <div className="font-accent italic text-[#f3b700] text-2xl mb-4">
                    {story.subheading}
                  </div>
                  <h2 className="font-display font-black text-white text-[100px] lg:text-[180px] leading-[0.85] tracking-[-0.03em]">
                    {story.heading}
                  </h2>
                  <p className="text-white/85 font-body text-lg lg:text-xl max-w-xl mt-6 leading-relaxed">
                    {story.body}
                  </p>
                  <div className="grid grid-cols-4 gap-6 mt-10 max-w-xl">
                    {story.stats.map((s) => (
                      <div key={s.label} className="border-t border-[#f3b700]/40 pt-3">
                        <div className="font-display font-black text-[#f3b700] text-4xl leading-none">
                          {s.value}
                        </div>
                        <div className="text-white/70 font-body uppercase tracking-[0.2em] text-[10px] mt-2">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-5 relative">
                  <div className="aspect-[4/5] rounded-[6px] overflow-hidden border-4 border-[#f3b700] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                    <img
                      src="https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg"
                      alt="Madras filter coffee"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 bg-[#f3b700] text-[#1f5e36] font-display font-black px-4 py-2 rotate-[-6deg] text-sm uppercase tracking-widest">
                    Est. Madras
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="w-screen h-full flex items-center px-16 lg:px-28">
              <div className="grid grid-cols-12 gap-8 w-full items-center">
                <div className="col-span-5 relative order-2">
                  <div className="aspect-[4/5] rounded-[6px] overflow-hidden border-4 border-[#f3b700] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                    <img
                      src="https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg"
                      alt="Dosa close up"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-[#f3b700] text-[#1f5e36] font-display font-black px-4 py-2 rotate-[6deg] text-sm uppercase tracking-widest">
                    Pimped Out
                  </div>
                </div>
                <div className="col-span-7 order-1">
                  <div className="font-accent italic text-[#f3b700] text-2xl mb-4">
                    {menuTease.subheading}
                  </div>
                  <h2 className="font-display font-black text-white text-[100px] lg:text-[180px] leading-[0.85] tracking-[-0.03em]">
                    {menuTease.heading}
                  </h2>
                  <p className="text-white/85 font-body text-lg lg:text-xl max-w-xl mt-6 leading-relaxed">
                    {menuTease.body}
                  </p>
                  <a
                    href="#menu"
                    className="mt-8 inline-flex items-center gap-3 bg-[#f3b700] text-[#1f5e36] px-7 py-4 rounded-full font-body font-bold uppercase tracking-[0.25em] text-sm hover:bg-white transition-colors"
                  >
                    See Full Menu
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile: stacked vertical */}
      <section className="md:hidden bg-[#1f5e36] relative">
        <div className="px-5 py-20 text-white">
          <div className="font-accent italic text-[#f3b700] text-xl mb-3">{story.subheading}</div>
          <h2 className="font-display font-black text-white text-[64px] leading-[0.85] tracking-[-0.03em]">
            {story.heading}
          </h2>
          <p className="font-body text-white/85 text-base mt-5 leading-relaxed">{story.body}</p>
          <div className="grid grid-cols-2 gap-5 mt-8">
            {story.stats.map((s) => (
              <div key={s.label} className="border-t border-[#f3b700]/40 pt-3">
                <div className="font-display font-black text-[#f3b700] text-3xl leading-none">
                  {s.value}
                </div>
                <div className="text-white/70 font-body uppercase tracking-[0.2em] text-[10px] mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <img
            src="https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg"
            alt="Madras filter coffee"
            className="mt-10 rounded-[6px] border-4 border-[#f3b700] aspect-[4/5] object-cover w-full"
          />
        </div>
        <div className="px-5 py-20 text-white">
          <div className="font-accent italic text-[#f3b700] text-xl mb-3">{menuTease.subheading}</div>
          <h2 className="font-display font-black text-white text-[64px] leading-[0.85] tracking-[-0.03em]">
            {menuTease.heading}
          </h2>
          <p className="font-body text-white/85 text-base mt-5 leading-relaxed">{menuTease.body}</p>
          <a
            href="#menu"
            className="mt-8 inline-flex items-center gap-3 bg-[#f3b700] text-[#1f5e36] px-6 py-3.5 rounded-full font-body font-bold uppercase tracking-[0.25em] text-xs"
          >
            See Full Menu <ArrowRight size={16} />
          </a>
          <img
            src="https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg"
            alt="Dosa close up"
            className="mt-10 rounded-[6px] border-4 border-[#f3b700] aspect-[4/5] object-cover w-full"
          />
        </div>
      </section>
    </>
  );
};

export default HorizontalScrollSection;
