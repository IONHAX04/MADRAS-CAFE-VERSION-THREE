import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Coffee, Mail, Phone, MapPin, ArrowUp, Send, Check } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import logoBgW from "../assets/logo/logo_bg_w.png";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.06 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.21 22 17.06 22 12.06z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.832l4.713 6.231 5.445-6.231zm-1.16 17.52h1.833L7.084 4.126H5.117l11.967 15.644z" />
  </svg>
);
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: "Hold on", description: "Please enter a valid email." });
      return;
    }
    setSubmitted(true);
    toast({ title: "You're on the list!", description: "Welcome to the Madras Cafe family." });
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3500);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="relative bg-brand-green text-white pt-20 md:pt-28 pb-8 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <div id="order" className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-14 border-b border-brand-gold/20">
          {/* Brand + newsletter */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img src={logoBgW} alt="Madras Cafe" className="h-16 object-contain" />
            </div>
            <p className="font-display italic text-white/85 text-xl mt-5 max-w-md leading-snug">
              Tradition served fresh, four generations strong.
            </p>
            <div className="mt-7">
              <div className="font-heading uppercase tracking-[0.2em] text-[11px] text-brand-gold mb-3">
                Get Updates
              </div>
              <form onSubmit={onSubmit} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-brand-gold/30 rounded-full px-5 py-3 font-body text-white placeholder-white/50 outline-none focus:bg-white/15 focus:border-brand-gold transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-green font-heading font-semibold text-sm px-5 py-3 rounded-full hover:bg-white transition-colors"
                >
                  {submitted ? <Check size={16} /> : <Send size={16} />}
                </button>
              </form>
            </div>
            <div className="flex items-center gap-3 mt-7">
              {[
                { icon: <FacebookIcon className="w-5 h-5" />, label: "Facebook" },
                { icon: <InstagramIcon className="w-5 h-5" />, label: "Instagram" },
                { icon: <TwitterIcon className="w-5 h-5" />, label: "Twitter" },
                { icon: <YoutubeIcon className="w-5 h-5" />, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-brand-gold/40 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-green transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="font-heading uppercase tracking-[0.2em] text-[11px] text-brand-gold mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 font-body text-white/85">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "About Us", to: "/about" },
                { label: "Locations", to: "/locations" },
                { label: "Contact", to: "/contact" },
              ].map((q) => (
                <li key={q.label}>
                  <Link
                    to={q.to}
                    className="hover:text-brand-gold transition-colors text-[15px]"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="font-heading uppercase tracking-[0.2em] text-[11px] text-brand-gold mb-4">
              Contact
            </div>
            <ul className="space-y-3 font-body text-white/85 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-brand-gold" />
                <span>23 Royapettah High Road, Mylapore, Chennai 600004</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold" />
                <a href="tel:+910000000000" className="hover:text-brand-gold">
                  +91 00 0000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold" />
                <a href="mailto:hello@madrascafe.in" className="hover:text-brand-gold">
                  hello@madrascafe.in
                </a>
              </li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 bg-white/10 border border-brand-gold/30 rounded-full px-4 py-2 font-body text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulseRing" />
              Open Today — 7:00 AM to 11:00 PM
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="font-body text-white/60 text-xs">
            © {new Date().getFullYear()} Madras Cafe. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs font-body text-white/60">
            <a href="#" className="hover:text-brand-gold">Privacy</a>
            <a href="#" className="hover:text-brand-gold">Terms</a>
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-1.5 hover:text-brand-gold"
            >
              <ArrowUp size={13} /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
