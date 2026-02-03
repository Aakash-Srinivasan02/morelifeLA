'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Luxury Addiction Treatment Center"
        subtitle="Reclaim Your Life with Personalized, Lasting Recovery"
        cta="Get Help Now"
        ctaLink="/contact"
      />

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">About More Life Recovery</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                More Life Recovery is a luxury addiction treatment center dedicated to providing evidence-based recovery programs in a serene, upscale setting. Our mission is to help individuals reclaim their lives through compassionate, comprehensive treatment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We combine clinical excellence with luxury amenities to create an environment where healing and transformation can truly occur.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
              <h3>Our Commitment</h3>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Evidence-based treatment programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Experienced clinical professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Personalized recovery plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Luxury facilities and amenities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">Your Trusted Partner in Lasting Recovery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Case Management"
              description="Comprehensive case management services to support your recovery journey from day one."
              icon="📋"
            />
            <ServiceCard
              title="12-Step Life Skills"
              description="Proven 12-step program combined with practical life skills development for sustainable recovery."
              icon="🎯"
            />
            <ServiceCard
              title="Trauma Therapy"
              description="Specialized trauma-informed therapy addressing underlying issues that contribute to addiction."
              icon="💭"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">Comprehensive Recovery Programs</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="mb-4">Residential Treatment (RTC)</h3>
              <p className="text-gray-700 mb-4">
                Our comprehensive residential program provides 24/7 medical supervision, therapy, and support in a luxury setting designed for optimal recovery.
              </p>
              <Link href="/programs" className="text-primary hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="mb-4">Outpatient Programs</h3>
              <p className="text-gray-700 mb-4">
                Flexible outpatient options for those who need to maintain work or family commitments while receiving professional treatment.
              </p>
              <Link href="/programs" className="text-primary hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="/programs" className="btn btn-primary">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full"></div>
                  <div>
                    <p className="font-bold">Client Name</p>
                    <p className="text-sm text-gray-600">Recovery Success Story</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "More Life Recovery provided me with the support and tools I needed to reclaim my life. The compassionate staff and luxury facilities created the perfect environment for my transformation."
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn btn-primary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max text-center">
          <h2 className="mb-4">Your Insurance May Cover the Cost of Treatment</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We work with most major insurance providers to make quality treatment accessible. Let us help you verify your coverage.
          </p>
          <Link href="/verify-insurance" className="btn bg-white text-primary hover:bg-gray-100">
            Verify Your Insurance
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="mb-6">Ready to Begin Your Recovery Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward lasting recovery. Our admissions team is available 24/7 to answer your questions and help you get started.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/contact" className="btn bg-primary hover:bg-blue-700">
              Contact Us Today
            </Link>
            <a href="tel:+18183011213" className="btn bg-white text-primary hover:bg-gray-100">
              Call Now: (818) 301-1213
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
