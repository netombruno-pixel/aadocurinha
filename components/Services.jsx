"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const curations = [
    { 
      name: "Classic Best Seller", 
      title: "Traditional Cocoa",
      description: "Our signature original recipe, hand-rolled with premium Brazilian cocoa.", 
      image: "/premium_hero.png",
      price: "$3.50",
      badgeType: "gold"
    },
    { 
      name: "New Arrival", 
      title: "Ruby Rose & Pistachio",
      description: "Naturally pink cocoa paired with roasted Iranian pistachios.", 
      image: "/premium_pistachio.png",
      price: "$4.00",
      badgeType: "plum"
    },
    { 
      name: "Spring Collection", 
      title: "Strawberry Blush",
      description: "Infused with fresh berries and soft creamy undertones.", 
      image: "/resources/naked-cake.png",
      price: "$3.50",
      badgeType: "gold"
    },
    { 
      name: "Limited Edition", 
      title: "Dark Gold 70%",
      description: "Single-origin Brazilian cocoa finished with 24k gold leaf.", 
      image: "/resources/brigadeiros-variety.png",
      price: "$4.50",
      badgeType: "plum"
    },
  ];

  return (
    <section className="py-24 bg-soft-pink">
      <div className="container mx-auto px-4 max-w-5xl">

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16 ml-2"
        >
          <h2 className="text-5xl md:text-6xl font-noto font-semibold text-plum tracking-tight leading-none mb-4">
            Curations
          </h2>
          <p className="text-lg text-plum/70 font-manrope font-light max-w-md">
            Meticulously crafted to elevate any occasion.
          </p>
        </motion.div>

        {/* Mobile-First Stacked Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {curations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden group flex flex-col justify-end p-8 shadow-[0_20px_50px_rgba(69,38,39,0.15)] bg-[#1A1212]"
            >
              {/* Full Bleed Image Layout mapping */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1212]/40 to-[#1A1212]/95" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-30 flex flex-col items-start w-full">
                {/* Badge */}
                <span className={`px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase mb-4 ${
                  item.badgeType === "gold" ? "bg-gold text-white" : "bg-pink-100 text-plum"
                }`}>
                  {item.name}
                </span>

                {/* Typography info */}
                <h3 className="text-3xl md:text-4xl font-noto font-normal text-white leading-tight mb-2">
                  {item.title}
                </h3>
                 <p className="text-sm md:text-base font-manrope font-light text-white/70 max-w-[90%] mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Add to Box Button */}
                <button className="px-6 py-3 rounded-full bg-white text-plum font-manrope text-sm font-semibold hover:bg-surface transition-colors duration-300 shadow-lg">
                  Add to Box — {item.price}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}