// app/layout.jsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Preptive - Government Job Portal | Latest Updates, Results, Admit Cards',
  description: "India's premier platform for government job aspirants. Get latest exam updates, admit cards, results, syllabus, and study materials for all competitive exams.",
  keywords: ['government jobs', 'ssc', 'upsc', 'banking exams', 'admit card', 'results', 'syllabus', 'study materials'],
  authors: [{ name: 'Preptive Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Preptive - Government Job Portal',
    description: 'Your gateway to government careers with latest updates and resources',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preptive - Government Job Portal',
    description: 'Latest government job updates and resources',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f8f9f9ff" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Preptive",
              "description": "Government Job Preparation Portal",
              "url": "https://preptive.in",
              "logo": "https://preptive.in/logo.png",
              "sameAs": [
                "https://facebook.com/preptive",
                "https://twitter.com/preptive",
                "https://linkedin.com/company/preptive"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-gradient-to-br from-slate-500 via-emerald-50 to-sky-50">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
