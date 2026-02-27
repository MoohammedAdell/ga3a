'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Send, Calendar, Users, Phone, MessageSquare, Sparkles, Clock } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    guestCount: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      // التعديل 1: رسالة التأكيد بعد الإرسال
      setSubmitMessage('تم استلام طلبك بنجاح! سيقوم فريق التخطيط بالرد عليك خلال 24 ساعة.')
      setFormData({ name: '', phone: '', email: '', eventDate: '', guestCount: '', message: '' })
      setTimeout(() => setSubmitMessage(''), 6000)
    }, 1500)
  }

  return (
    <section id='contact' className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
            <Sparkles className="w-3 h-3" />
            خطط لليلتك العمر معنا
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            ارسل <span className="text-primary italic">استفسارك</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            سواء كان فرح، خطوبة، أو أي مناسبة سعيدة، إحنا هنا عشان نساعدك في كل التفاصيل.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <Card className="lg:col-span-2 p-8 md:p-10 bg-card/50 backdrop-blur-xl border-primary/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-[80px] rounded-full" />

            {submitMessage && (
              <div className="mb-8 p-4 bg-primary/10 border border-primary/30 rounded-2xl text-primary text-center font-bold animate-in fade-in slide-in-from-top-4">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10 text-right">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground mr-1">الاسم بالكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="مثال: أحمد محمد"
                    className="w-full px-5 py-4 rounded-2xl bg-background border border-primary/10 text-foreground focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground mr-1">رقم الهاتف</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      dir="ltr"
                      placeholder="+20 100 000 0000"
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-background border border-primary/10 text-foreground focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground mr-1">تاريخ الحفل</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-background border border-primary/10 text-foreground focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground mr-1">عدد الضيوف</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-background border border-primary/10 text-foreground focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none appearance-none"
                    >
                      <option value="">اختر العدد</option>
                      <option value="100-200">100 - 200 ضيف</option>
                      <option value="200-400">200 - 400 ضيف</option>
                      <option value="400+">أكثر من 400 ضيف</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground mr-1">رسالتك (اختياري)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="هل لديك أي طلبات خاصة؟"
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-primary/10 text-foreground focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none"
                />
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl rounded-2xl transition-all shadow-xl shadow-primary/20 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">جاري الإرسال...</span>
                  ) : (
                    <span className="flex items-center gap-3">
                       إرسال الطلب الآن
                      <Send className="w-5 h-5 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform" />
                    </span>
                  )}
                </Button>

                {/* التعديل 2: الجملة تحت الزرار */}
                <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium">
                  <Clock className="w-3 h-3 text-primary" />
                  سيتم الرد على استفسارك خلال 24 ساعة كحد أقصى.
                </p>
              </div>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-primary text-primary-foreground border-none shadow-2xl relative overflow-hidden group">
               <MessageSquare className="absolute -bottom-4 -left-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-700" />
               <h3 className="text-2xl font-black mb-4">رد فوري؟</h3>
               <p className="opacity-90 mb-8 leading-relaxed">
                 لو مستعجل، كلمنا مباشر على الواتساب، فريقنا موجود للرد على كل أسئلتك.
               </p>
               <a 
                href="https://wa.me/201036670752" 
                target="_blank"
                className="inline-flex items-center justify-center w-full py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors"
               >
                 واتساب سريع
               </a>
            </Card>

            <div className="p-8 rounded-[2rem] bg-card border border-primary/10">
               <h4 className="font-bold mb-4">ليه تحجز معانا؟</h4>
               <ul className="space-y-4 text-sm text-muted-foreground">
                 <li className="flex items-center gap-3 justify-end">
                    <span>فريق تنظيم محترف</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                 </li>
                 <li className="flex items-center gap-3 justify-end">
                    <span>تجهيزات فندقية حديثة</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                 </li>
                 <li className="flex items-center gap-3 justify-end">
                    <span>مرونة في الباقات والأسعار</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}