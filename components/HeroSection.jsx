'use client';

import Link from 'next/link';

export default function HeroSection({ title, subtitle, cta, ctaLink, bgImage = '/hero-bg.jpg' }) {
  return (
    <section className="section-hero relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container-max relative z-10 text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        {cta && ctaLink && (
          <Link href={ctaLink} className="btn bg-primary hover:bg-blue-700 text-white text-lg">
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
