"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-[#1A1212] flex items-center justify-center">
      
      {/* Dynamic Background Image - Using the Nano Banana style premium generation */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y, opacity, scale }}
      >
        <Image
          src="/premium_hero.png"
          alt="Signature Classic Brigadeiro"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft dark vignette to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1212]/80 via-[#1A1212]/20 to-[#1A1212]/70" />
      </motion.div>

      {/* Foreground Content: High-End Editorial Mobile-First */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-6 w-full h-full pt-[15vh]">
        <motion.div 
          className="flex flex-col items-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Subtle Accent Line */}
          <div className="w-16 h-[1px] bg-gold/50 mb-8" />
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-noto font-medium tracking-tight text-soft-pink leading-[0.9] drop-shadow-2xl mix-blend-plus-lighter">
            A Docurinha
          </h1>
          
          <p className="mt-6 text-lg md:text-2xl text-surface font-manrope font-light tracking-wide opacity-80 max-w-md mx-auto">
            The Art of Brazilian Cocoa
          </p>

          <motion.div 
            className="flex flex-col w-full sm:flex-row gap-4 mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            <Link 
              href="/menu"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-plum text-white font-manrope uppercase tracking-[0.15em] text-xs font-semibold hover:bg-[#321B1C] shadow-[0_10px_30px_rgba(69,38,39,0.3)] transition-all duration-300"
            >
              Explore Collection
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}