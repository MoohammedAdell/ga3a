'use client'

import React from 'react'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronLeft, Heart, ChevronRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    // إضافة dir="rtl" تضمن أن المتصفح يعامل القسم كـ "من اليمين لليسار"
    <footer dir="rtl" className="bg-background border-t border-primary/10 pt-20 pb-10 px-4 relative overflow-hidden">
      {/* لمسة فنية في الخلفية */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-right">
          
          {/* About section - قاعة السعادة */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-foreground">
              قاعة <span className="text-primary">السعادة</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              نصنع لك من ليلة العمر ذكرى لا تُنسى. الفخامة، الرقي، والخدمة الفندقية تجتمع في مكان واحد لنسطر معك أولى صفحات سعادتك.
            </p>
            {/* أيقونات السوشيال ميديا تبدأ من اليمين */}
            <div className="flex justify-start gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61585480772501" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-card border border-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - روابط سريعة */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-8 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'الرئيسية', href: '#home' },
                { name: 'من نحن', href: '#about' },
                { name: 'معرض الصور', href: '#gallery' },
                { name: 'الباقات والأسعار', href: '#pricing' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary flex items-center justify-start gap-2 group transition-colors">
                    {/* السهم يظهر على اليمين في الـ RTL الافتراضي عند استخدام gap */}
                    <ChevronRight className="w-4 h-4 text-primary/40 rotate-180 group-hover:translate-x-[5px] transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - خدماتنا */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-8 relative inline-block">
              خدماتنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                'تنظيم حفلات الزفاف',
                'بوفيه مفتوح فاخر',
                'تصوير فوتوغرافي و فيديو',
                'ديكورات مخصصة (كوشة)',
                'دي جي و إضاءة احترافية'
              ].map((service) => (
                <li key={service} className="text-muted-foreground flex items-center justify-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - تواصل معنا */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-8 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center justify-start gap-3 group">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">الإسكندرية، العامرية، سلطان السابق</span>
              </li>
              <li className="flex items-center justify-start gap-3 group">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+201036670752" dir="ltr" className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                  +20 103 667 0752
                </a>
              </li>
              <li className="flex items-center justify-start gap-3 group">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@qaaeah-alsaada.com" className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                  info@qaaeah-alsaada.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - الحقوق */}
        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
             تم بكل <Heart className="w-4 h-4 text-red-500 fill-red-500" /> بواسطة فريق قاعة السعادة © {currentYear}
          </p>

          <div className="flex gap-8 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}