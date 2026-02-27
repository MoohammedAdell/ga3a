"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Diamond, Info } from "lucide-react";

export function Pricing() {
  // الرقم الخاص بك
  const phoneNumber = "201036670752";

  const handleBooking = (packageName: string) => {
    const message = `مرحباً قاعة السعادة، أود الاستفسار عن حجز "${packageName}". هل يمكن تزويدي بمزيد من التفاصيل؟`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const packages = [
    {
      name: "الباقة الفضية",
      price: "15,000",
      description: "للحفلات العائلية الدافئة",
      icon: <Star className="w-8 h-8 text-primary/60" />,
      features: [
        "القاعة الرئيسية",
        "تكييف مركزي",
        "ديكور أساسي شيك",
        "موقف سيارات",
      ],
      highlighted: false,
    },
    {
      name: "باقة السعادة VIP",
      price: "20,000",
      description: "التوازن المثالي بين الفخامة والسعر",
      icon: <Diamond className="w-10 h-10 text-primary" />,
      features: [
        "ديكور فاخر مخصص",
        "إضاءة + سيستم صوت",
        "فريق تنظيم كامل",
        "بوفيه مفتوح مميز",
        "تصوير احترافي",
      ],
      highlighted: true,
    },
    {
      name: "الباقة الملكية",
      price: "30,000",
      description: "ليلة أسطورية تليق بملوك",
      icon: <Crown className="w-8 h-8 text-primary/60" />,
      features: [
        "تصميم القاعة بالكامل",
        "زفة استعراضية",
        "شاشات LED عملاقة",
        "جناح خاص للعروسين",
        "هدايا تذكارية",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">
            استثمر في ذكرياتك
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-4 mb-6 uppercase">
            اختر <span className="text-primary italic">باقة</span> فرحتك
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
            باقات مصممة بعناية لتناسب مختلف التطلعات، مع ضمان "السعادة" في كل
            تفصيلة.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-500 group ${
                pkg.highlighted
                  ? "bg-card border-primary shadow-[0_0_40px_rgba(var(--primary),0.1)] py-16 lg:-mt-8"
                  : "bg-transparent border-primary/10 py-12 hover:border-primary/30"
              }`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 blur-[50px] pointer-events-none" />

              {pkg.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-[10px] font-black uppercase px-8 py-1 rotate-45 translate-x-6 translate-y-2 shadow-lg">
                    Best Seller
                  </div>
                </div>
              )}

              <div className="text-center px-8 relative z-10">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  {pkg.description}
                </p>

                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    ج.م
                  </span>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

                <ul className="space-y-4 mb-10 text-right">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-end gap-3 group/item"
                    >
                      <span className="text-muted-foreground text-sm group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check
                          className="w-3 h-3 text-primary"
                          strokeWidth={3}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleBooking(pkg.name)} // تم إضافة الحدث هنا
                  variant={pkg.highlighted ? "default" : "outline"}
                  size="xl"
                  className={`w-full py-4 cursor-pointer rounded-full font-bold uppercase tracking-wider transition-all duration-500 ${
                    pkg.highlighted
                      ? "bg-primary hover:shadow-[0_10px_20px_rgba(var(--primary),0.4)]"
                      : "border-primary/20 hover:border-primary hover:text-white hover:bg-primary/5"
                  }`}
                >
                  احجز الباقة الآن
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Info className="text-primary w-6 h-6" />
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-bold text-foreground">هل لديك طلبات خاصة؟</h4>
              <p className="text-muted-foreground text-sm">
                يمكننا تفصيل باقة "على مقاسك" تماماً. تواصل معنا لمناقشة
                الديكورات المخصصة، قوائم الطعام الخاصة، أو أي تفاصيل تحلم بها.
              </p>
            </div>
            <Button
              variant="link"
              className="text-primary font-bold whitespace-nowrap"
              onClick={() => handleBooking("طلب باقة مخصصة")}
            >
              تكلم مع خبير تنظيم
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
