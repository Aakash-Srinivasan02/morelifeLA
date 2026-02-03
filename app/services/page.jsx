'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <div className="pt-20">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Treatment and Support Services for Recovery"
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="mb-4">Case Management</h3>
              <p className="text-gray-700 mb-4">
                Personalized case management to coordinate your treatment, connect you with resources, and support your recovery goals. Our case managers work with you before, during, and after treatment.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Treatment coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Resource connection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Aftercare planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="mb-4">12-Step Life Skills</h3>
              <p className="text-gray-700 mb-4">
                Integration of proven 12-step methodology with practical life skills development. Learn tools for sustained recovery and personal growth.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>12-step approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Life skills training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Relapse prevention</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="mb-4">Recovery Support Services</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive peer support and community-based recovery services to help you stay connected and supported throughout your journey.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Peer support groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Community events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Ongoing accountability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="mb-4">Supplemental Services</h3>
              <p className="text-gray-700 mb-4">
                Additional support services to address comprehensive recovery needs, including wellness activities, fitness, and holistic healing.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Wellness activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Recreation and fitness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Holistic healing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="mb-4">Substance Use Disorders Treatment</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based treatment for various substance use disorders including alcohol, opioids, stimulants, and polysubstance abuse.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Specialized treatment tracks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Medical detoxification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Clinical expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="mb-4">Veterans Services</h3>
              <p className="text-gray-700 mb-4">
                Specialized treatment program designed specifically for veterans, addressing military trauma, PTSD, and service-related challenges.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Military-trauma informed care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>PTSD treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Benefits assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">Why Choose More Life Recovery?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="mb-4">Clinical Excellence</h3>
              <p className="text-gray-700">Evidence-based treatment protocols delivered by experienced professionals.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="mb-4">Luxury Facilities</h3>
              <p className="text-gray-700">Serene, upscale setting designed for optimal healing and recovery.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="mb-4">Personalized Care</h3>
              <p className="text-gray-700">Individualized treatment plans tailored to your unique needs.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="mb-4">Ongoing Support</h3>
              <p className="text-gray-700">Comprehensive aftercare and alumni programs for sustained recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max text-center">
          <h2 className="mb-6">Your Insurance May Cover the Cost of Treatment</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We work with most major insurance providers to make quality treatment accessible and affordable.
          </p>
          <Link href="/verify-insurance" className="btn bg-white text-primary hover:bg-gray-100">
            Verify Your Insurance
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our admissions team today to learn more about our services and how we can help you on your recovery journey.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
