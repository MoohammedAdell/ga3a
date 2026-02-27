"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Instagram } from "lucide-react";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "decoration",
      title: "كوشة ملكية",
      size: "col-span-1 md:col-span-2 md:row-span-2",
      // صورة كوشة وزهور احترافية
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "lighting",
      title: "أنظمة إضاءة حديثة",
      size: "col-span-1 md:col-span-1 md:row-span-1",
      // صورة إضاءة ثريات وفخامة
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "reception",
      title: "مدخل القاعة",
      size: "col-span-1 md:col-span-1 md:row-span-2",
      // صورة استقبال وديكور مدخل
      image: "./md.jfif",
    },
    {
      id: 4,
      category: "decoration",
      title: "تنسيق الطاولات",
      size: "col-span-1 md:col-span-1 md:row-span-1",
      // صورة تنسيق طاولات الطعام
      image:
        "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "lighting",
      title: "رقصة العروسين",
      size: "col-span-1 md:col-span-2 md:row-span-1",
      // صورة إضاءة غامرة ودخان (Stage Lighting)
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const categories = [
    { id: "all", label: "الكل" },
    { id: "decoration", label: "الديكور" },
    { id: "reception", label: "الاستقبال" },
    { id: "lighting", label: "الإضاءة" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 px-4 bg-background overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-10 right-0 text-[5rem] md:text-[10rem] font-black text-primary/5 select-none pointer-events-none vertical-text opacity-10 md:opacity-20 uppercase">
        Gallery
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8 px-4 text-center md:text-right">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-end">
              <div className="h-[2px] w-8 bg-primary hidden md:block" />
              <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">
                عدسة السعادة
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-foreground uppercase leading-none">
              معرض <span className="text-primary italic">الذكريات</span>
            </h2>
          </div>

          <div className="order-1 md:order-2 flex bg-card/30 p-1 rounded-full border border-primary/10 backdrop-blur-sm overflow-x-auto max-w-full no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-500 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`group relative overflow-hidden rounded-[2rem] bg-card border border-primary/5 ${item.size}`}
              >
                <div
                  className="absolute inset-0 bg-muted bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 text-right w-full">
                  <div className="mb-2 p-2 bg-primary/20 backdrop-blur-md rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-primary text-[10px] md:text-xs uppercase tracking-widest">
                    قاعة السعادة
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 md:mt-20 flex flex-col items-center px-4">
          <div className="relative group cursor-pointer w-full md:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <button className="relative flex items-center justify-center gap-3 w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-card border border-primary/20 rounded-full text-foreground font-bold hover:border-primary transition-all text-sm md:text-base">
              <Instagram className="w-5 h-5 text-primary" />
              شاهد كواليس حفلاتنا
            </button>
          </div>
          <p className="mt-6 text-muted-foreground text-[10px] md:text-sm italic text-center">
            * يتم تحديث الصور بشكل دوري من واقع حفلاتنا الحية
          </p>
        </div>
      </div>
    </section>
  );
}
