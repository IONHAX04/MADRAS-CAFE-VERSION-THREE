import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Hold up",
        description: "Drop a real email so we can drop the goods.",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Welcome to the cult.",
      description: "You're on the list. Stay frothy.",
    });
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3500);
  };

  return (
    <section className="relative bg-[#f3b700] py-24 md:py-32 overflow-hidden">
      <div className="noise-overlay" />
      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-[#1f5e36]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-[#1f5e36]/10 blur-3xl" />

      <div className="relative max-w-[1100px] mx-auto px-5 md:px-10 text-center">
        <div className="font-body uppercase tracking-[0.3em] text-[11px] text-[#1f5e36] mb-4 inline-flex items-center gap-2">
          <Mail size={14} /> Mailing List
        </div>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-black text-[#1f5e36] leading-[0.85] tracking-[-0.03em] text-[72px] md:text-[140px]"
        >
          SIGN UP FOR
        </motion.h2>
        <div className="font-accent italic text-[#1f5e36] text-2xl md:text-4xl mt-2">
          Exclusive updates &amp; deals.
        </div>

        <form onSubmit={onSubmit} className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-white/90 border-2 border-[#1f5e36] rounded-full px-6 py-4 font-body text-[#1f5e36] placeholder-[#1f5e36]/40 outline-none focus:bg-white focus:ring-4 focus:ring-[#1f5e36]/20"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-[#1f5e36] text-[#f3b700] font-body font-bold uppercase tracking-[0.25em] text-sm px-8 py-4 rounded-full hover:bg-[#13391f] transition-colors"
          >
            {submitted ? (
              <>
                <Check size={16} /> Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MailingList;
