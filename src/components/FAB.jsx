import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const FAB = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#order"
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[110] inline-flex items-center gap-2 bg-[#f3b700] text-[#1f5e36] font-body font-bold uppercase tracking-[0.25em] text-xs md:text-sm px-5 md:px-6 py-3.5 md:py-4 rounded-full shadow-[0_18px_40px_-10px_rgba(243,183,0,0.65)] border-2 border-[#1f5e36]"
        >
          <ShoppingBag size={16} />
          Order Online
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FAB;
