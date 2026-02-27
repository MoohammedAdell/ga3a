import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: {
    default: 'قاعة السعادة | Happiness Hall - أرقى قاعة أفراح في الإسكندرية',
    template: '%s | قاعة السعادة'
  },
  description: 'اكتشف الفخامة في قاعة السعادة بالعامرية. أحدث قاعات الإسكندرية لحفلات الزفاف والمناسبات بتجهيزات ملكية، أنظمة إضاءة حديثة، وخدمة فندقية VIP. احجز ليلة العمر الآن.',
  keywords: ['قاعة أفراح الإسكندرية', 'قاعة السعادة العامرية', 'حجز قاعات زفاف', 'wedding hall alexandria', 'أفضل قاعات العامرية', 'قاعة مناسبات'],
  authors: [{ name: 'Al Saada Hall' }],
  creator: 'Al Saada Team',
  
  // إعدادات الـ OpenGraph (لـ Facebook, WhatsApp)
  openGraph: {
    title: 'قاعة السعادة | تجربة زفاف ملكية في الإسكندرية',
    description: 'نصنع لك ذكريات لا ترحل في أحدث قاعات العامرية. تجهيزات فندقية وسعات ضخمة تناسب أحلامك.',
    url: 'https://alsaada-hall.com', // استبدله برابط موقعك الحقيقي
    siteName: 'قاعة السعادة - Happiness Hall',
    images: [
      {
        url: '/bg2.jpeg', // الصورة التي ستظهر عند مشاركة الرابط
        width: 1200,
        height: 630,
        alt: 'قاعة السعادة من الداخل',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },

  // إعدادات Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'قاعة السعادة | وجهتك الأولى للاحتفالات',
    description: 'أحدث أنظمة الإضاءة والديكور في الإسكندرية. احجز موعدك الآن.',
    images: ['/bg2.jpeg'], 
  },

  // إعدادات الأيقونات
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  // منع محركات البحث من أرشفة النسخ التجريبية (اختياري)
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased bg-dark-900 text-dark-50">
        {children}
        <Analytics />
      </body>
    </html>
  )
}