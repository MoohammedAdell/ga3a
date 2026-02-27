"use client";

import { Card } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  ExternalLink,
} from "lucide-react";

export function Location() {
  const urlMap =
    "https://www.google.com/maps/place/31%C2%B001'29.1%22N+29%C2%B047'16.7%22E/@31.024754,29.787968,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.024754!4d29.787968!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D";

  const contactInfo = [
    {
      title: "مقر السعادة",
      content: "العامرية، شارع السـفن، الإسكندرية",
      icon: <MapPin className="w-6 h-6 text-primary" />,
      action: "https://maps.google.com", // ضيف لينك اللوكيشن الحقيقي هنا
    },
    {
      title: "الخط الساخن",
      content: "01036670752",
      icon: <Phone className="w-6 h-6 text-primary" />,
      action: "tel:+201036670752",
    },
    {
      title: "ساعات الاستقبال",
      content: "يومياً من 10 ص حتى 10 م",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden border-t border-primary/10">
      {/* خلفية جمالية */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-stretch">
          {/* الجانب الأيمن: المعلومات */}
          <div className="lg:col-span-5 space-y-10 text-right">
            <div>
              <div className="flex items-center gap-3 justify-end mb-4">
                <div className="h-px w-12 bg-primary/30" />
                <span className="text-primary font-bold tracking-widest text-xs uppercase">
                  تواصل معنا
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
                أين تجد <span className="text-primary italic">سعادتك؟</span>
              </h2>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group p-6 bg-card/40 backdrop-blur-sm border-primary/5 hover:border-primary/30 transition-all duration-500 cursor-default"
                >
                  <div className="flex flex-row-reverse items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-[#FFD700] hover:text-white transition-colors duration-500">
                      <div className="group-hover:text-black transition-colors">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="text-sm font-bold text-muted-foreground mb-1 uppercase tracking-tighter">
                        {info.title}
                      </h3>
                      <p className="text-lg font-bold text-foreground">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* أزرار الوصول السريع */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href="https://wa.me/201036670752"
                target="_blank"
                className="flex items-center justify-center gap-2 py-4 px-6 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-2xl text-[#25D366] font-bold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
              <a
                href="tel:+201036670752"
                className="flex items-center justify-center gap-2 py-4 px-6 bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-[0_10px_20px_rgba(var(--primary),0.3)] transition-all"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا
              </a>
            </div>
          </div>

          {/* الجانب الأيسر: الخريطة بتصميم مدرن */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-8 border-card shadow-2xl">
              {/* Overlay خفيف على الخريطة عشان يماشي ألوان الموقع */}
              <div className="absolute inset-0 bg-primary/10 pointer-events-none z-10 mix-blend-multiply" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3419.053680646486!2d29.787968!3d31.024753999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDAxJzI5LjEiTiAyOcKwNDcnMTYuNyJF!5e0!3m2!1sar!2seg!4v1772148671416!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(0.5) contrast(1.2) invert(0.9)",
                }} // دي بتخلي الخريطة دارك وشيك
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Float Button فوق الخريطة */}
            <a
              href={urlMap}
              className="absolute cursor-pointer bottom-10 left-10 z-20 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
            >
              <Navigation className="w-4 h-4" />
              فتح في خرائط جوجل
            </a>
          </div>
        </div>

        {/* Directions / الوصف الرايق */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
            <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              من داخل الإسكندرية
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              من طريق العامرية الرئيسي، اتجه نحو شارع السـفن امام شركة الكاكولا. القاعة تقع
              في موقع حيوي يسهل الوصول إليه، مع توافر مساحات شاسعة لركن السيارات
              لراحة ضيوفكم.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
            <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              للقادمين من المحافظات
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              عبر طريق مصر الإسكندرية الصحراوي، اسلك مخرج العامرية. القاعة تبعد
              دقائق معدودة عن المخرج الرئيسي، مما يجعلها الخيار الأمثل للمناسبات
              التي تضم ضيوفاً من خارج المدينة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
