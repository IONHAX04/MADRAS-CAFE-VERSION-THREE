import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SignatureDishes from "../components/SignatureDishes";
import MenuCarousel from "../components/MenuCarousel";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Locations from "../components/Locations";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <SignatureDishes />
      <MenuCarousel />
      <About />
      <Gallery />
      <Locations />
      <Testimonials />
    </motion.main>
  );
};

export default HomePage;
