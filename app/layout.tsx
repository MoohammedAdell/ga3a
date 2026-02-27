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
  title: 'قاعة السعادة | Happiness Hall - قاعة فرح الزفاف',
  description: 'قاعة السعادة لحفلات الزفاف الفاخرة في الإسكندرية - احجز الآن | Luxury wedding hall in Alexandria',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
