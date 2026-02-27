"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-background py-10 md:py-20">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]"> 
        <Image
          src="/bg2.jpeg"
          alt="قاعة السعادة"
          fill
          className="object-cover object-center md:object-cover opacity-60 md:opacity-70 transition-all duration-1000"
          priority
        />
        
        <div className="absolute inset-0 bg-black/40 md:bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-b 
            from-background/90 
            via-background/40 
            to-background" 
        />
        
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-transparent to-transparent z-1" />
      </div>

      <div className="relative md:absolute md:top-10 md:left-12 z-20 mb-8 md:mb-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={160}
          height={160}
          className="w-24 md:w-44 h-auto drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in">
        
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6">
          <div className="h-[1px] w-4 md:w-12 bg-primary/50" />
          <p className="text-primary text-[10px] sm:text-xs md:text-lg font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">
            انطلاقة جديدة.. ليلة العمر كما لم تعشها من قبل
          </p>
          <div className="h-[1px] w-4 md:w-12 bg-primary/50" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 text-foreground tracking-tight leading-[1.1]">
          اصنع <span className="text-primary italic">سعادتك</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-6xl block mt-2 md:mt-4 font-light">
            في قلب العامرية
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed px-4">
          أحدث قاعات الإسكندرية بتجهيزات ملكية. نحن لا ننظم حفلات، نحن نصمم ذكريات خالدة تليق بليلتكم الخاصة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 w-full max-w-md mx-auto sm:max-w-none">
          <Button
            size="lg"
            className="w-full cursor-pointer sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-lg md:text-xl rounded-full shadow-lg transition-all hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            احجز ليلة العمر
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="w-full cursor-pointer sm:w-auto text-foreground border border-white/10 px-10 py-7 text-lg md:text-xl rounded-full backdrop-blur-sm transition-all"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            جولة افتراضية
          </Button>
        </div>

        {/* Stats Card - التعديل هنا ليعكس الافتتاح الجديد */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-xl md:text-4xl font-bold text-primary italic">500+</p>
            <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase">سعة المعازيم</p>
          </div>
          <div className="text-center border-x border-white/10">
            {/* تم التغيير ليعكس الحداثة */}
            <p className="text-xl md:text-4xl font-bold text-primary italic">NEW</p>
            <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase">أحدث التجهيزات</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-4xl font-bold text-primary italic">VIP</p>
            <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase">خدمة فندقية</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="hidden sm:flex mt-20 pt-8 border-t border-primary/10 w-full max-w-4xl justify-between gap-4 opacity-40 grayscale text-sm md:text-xl font-serif italic text-primary">
        <p>Classic Luxury</p>
        <p>Modern Style</p>
        <p>Unforgettable Night</p>
      </div>

    </section>
  );
}