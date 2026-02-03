'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function About() {
  return (
    <div className="pt-20">
      <HeroSection
        title="About More Life Recovery"
        subtitle="Dedicated to Evidence-Based Addiction Treatment"
      />

      {/* Our Mission */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              More Life Recovery is committed to providing compassionate, evidence-based addiction treatment in a luxury setting. We believe that recovery is possible for everyone, and our mission is to provide the tools, support, and environment necessary for lasting change.
            </p>
            <p className="text-lg text-gray-700">
              Our approach combines clinical excellence with personalized care, ensuring that each individual receives treatment tailored to their unique needs and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl mb-4">🎯</h3>
              <h4 className="font-bold mb-2">Integrity</h4>
              <p className="text-gray-600">Upholding the highest standards in clinical care and professional conduct.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl mb-4">❤️</h3>
              <h4 className="font-bold mb-2">Compassion</h4>
              <p className="text-gray-600">Understanding and empathy in supporting clients through their recovery journey.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl mb-4">🔬</h3>
              <h4 className="font-bold mb-2">Evidence-Based</h4>
              <p className="text-gray-600">Using proven treatment modalities backed by research and clinical outcomes.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl mb-4">✨</h3>
              <h4 className="font-bold mb-2">Excellence</h4>
              <p className="text-gray-600">Delivering the highest quality care in every aspect of our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">Our Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-blue-400 text-white p-8 rounded-lg">
              <h3 className="mb-4">Recovery Support</h3>
              <p>Providing comprehensive treatment and ongoing support to ensure lasting recovery outcomes for our clients.</p>
            </div>
            <div className="bg-gradient-to-br from-secondary to-blue-300 text-white p-8 rounded-lg">
              <h3 className="mb-4">Community Impact</h3>
              <p>Making a meaningful difference in the lives of individuals and families affected by addiction.</p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg">
              <h3 className="mb-4">Continuous Improvement</h3>
              <p>Staying at the forefront of addiction treatment through research, training, and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">Experienced Professionals Committed to Your Recovery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Clinical Director', title: 'Medical & Clinical Leadership', desc: 'Overseeing all clinical operations and ensuring evidence-based treatment protocols.' },
              { name: 'Counseling Staff', title: 'Addiction Specialists', desc: 'Experienced counselors providing individual and group therapy sessions.' },
              { name: 'Support Services', title: 'Case Managers & Coordinators', desc: 'Supporting clients through treatment and aftercare planning.' },
            ].map((role, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">{role.name}</h3>
                <p className="text-primary font-semibold mb-4">{role.title}</p>
                <p className="text-gray-600">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Program */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-center mb-8">Alumni Program</h2>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
            <h3 className="mb-4">Staying Connected After Treatment</h3>
            <p className="text-gray-700 mb-4">
              Recovery doesn't end when treatment ends. Our alumni program provides ongoing support, community connection, and resources to help our graduates maintain their sobriety and thrive in their recovery.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Monthly alumni meetings and events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Continuing education and wellness workshops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Peer support and accountability partnerships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Extended therapy and coaching services available</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="mb-6">Get in Touch for Immediate Admission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to start your recovery journey? Contact More Life Recovery today to learn more about our programs and treatment options.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
