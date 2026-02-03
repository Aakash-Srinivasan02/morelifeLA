'use client';

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="More Life Recovery is a luxury addiction treatment center in Van Nuys, CA. offering evidence-based recovery programs in a serene, upscale setting." />
        <meta property="og:title" content="Luxury Addiction Treatment Center | More Life Recovery" />
        <meta property="og:description" content="More Life Recovery is a luxury addiction treatment center in Van Nuys, CA. offering evidence-based recovery programs in a serene, upscale setting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moreliferecoveryla.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#204ce5" />
        <link rel="icon" href="/favicon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>More Life Recovery - Luxury Addiction Treatment Center</title>
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
