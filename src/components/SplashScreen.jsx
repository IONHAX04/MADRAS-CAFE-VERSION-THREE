import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoBgW from "../assets/logo/logo_bg_w.png";

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 6;
      setProgress(Math.min(p, 100));
      if (p >= 100) clearInterval(interval);
    }, 80);
    const t = setTimeout(() => setShow(false), 1700);
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "#f3b700" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="noise-overlay" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="w-[260px] h-[260px] rounded-full bg-white flex flex-col items-center justify-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center px-6">
                <img src={logoBgW} alt="Madras Cafe" className="h-32 object-contain" />
              </div>
              <div className="mt-5 w-[160px] h-[6px] rounded-full bg-[#1f5e36]/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ width: `${progress}%`, background: "#f3b700" }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div
                className="mt-2 font-body uppercase tracking-[0.3em] text-[10px] text-[#1f5e36]/70"
              >
                Brewing
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
