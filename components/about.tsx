'use client'

import { Card } from '@/components/ui/card'
import { Users, Music, Gem } from 'lucide-react'

export function About() {
  const features = [
    {
      title: 'تصميم ملكي',
      description: 'ديكورات تجمع بين الأصالة والحداثة، صُممت خصيصاً لتناسب ليلة العمر.',
      icon: <Gem className="w-8 h-8 text-primary" />,
    },
    {
      title: 'فريق عمل خبير',
      description: 'طاقم مدرب على إدارة أدق التفاصيل لضمان راحة العروسين والضيوف.',
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      title: 'تجربة صوتية وبصرية',
      description: 'أحدث أنظمة الإضاءة الراقصة والـ Sound System لتجربة احتفال غامرة.',
      icon: <Music className="w-8 h-8 text-primary" />,
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden text-right" dir="rtl">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15rem] font-black text-primary/5 select-none pointer-events-none hidden md:block uppercase">
        AL SAADA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">
              قصة السعادة
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
              نصنع من <span className="text-primary italic">اللحظات</span> <br /> ذكريات لا ترحل
            </h3>
          </div>
          <div className="text-muted-foreground text-lg md:text-xl max-w-md border-r-4 border-primary/20 pr-6">
  بإطلالة عصرية وتجهيزات عالمية، تفتح قاعة السعادة أبوابها لتكون الوجهة الأرقى للاحتفالات في العامرية، حيث تلتقي الفخامة بأحدث صيحات الديكور.
</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 relative group w-full">
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl group-hover:border-primary/50 transition-colors duration-500" />
            
            <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" 
                  alt="قاعة السعادة" 
                  className="w-full h-full object-cover object-center block group-hover:scale-105 transition-all duration-700" 
                />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 bg-primary p-4 md:p-6 rounded-lg text-primary-foreground shadow-xl">
                <p className="text-3xl md:text-4xl font-black leading-none">20</p>
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-tighter">عاماً من الخبرة</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
               <h4 className="text-2xl font-bold text-foreground">لماذا يختارنا العرسان؟</h4>
               <p className="text-muted-foreground leading-relaxed">
                 نحن نؤمن أن كل عروسين لهما قصة مختلفة، لذلك نوفر مرونة كاملة في اختيار الديكورات وتنسيق القاعة بما يتناسب مع شخصيتكما، مع ضمان أعلى مستويات النظافة والاحترافية.
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                    <p className="text-primary font-bold text-xl uppercase">موقع مميز</p>
                    <p className="text-xs text-muted-foreground">قلب العامرية</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                    <p className="text-primary font-bold text-xl uppercase">بارك خاص</p>
                    <p className="text-xs text-muted-foreground">لسيارات الضيوف</p>
                </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-10 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}