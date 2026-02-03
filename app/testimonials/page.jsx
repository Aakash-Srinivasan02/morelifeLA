'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John D.',
      title: 'Recovery Success Story',
      text: 'More Life Recovery gave me my life back. The compassionate staff and evidence-based treatment helped me understand my addiction and develop real tools for recovery. I\'m grateful every day.',
      rating: 5,
    },
    {
      name: 'Sarah M.',
      title: 'Alumni Member',
      text: 'The luxury facilities made it easier to focus on healing. But what really made the difference was the therapeutic community and professional support. The aftercare program has been invaluable.',
      rating: 5,
    },
    {
      name: 'Michael T.',
      title: 'Family Member Appreciated the Support',
      text: 'Sending my brother to More Life Recovery was the best decision I made for our family. The progress he\'s made and the family counseling sessions helped us all heal. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      title: 'Sustained Recovery',
      text: 'I\'ve tried other treatment centers, but More Life Recovery was different. The personalized treatment plan and the caring clinical team made all the difference in my recovery journey.',
      rating: 5,
    },
    {
      name: 'David R.',
      title: 'Veterans Program Participant',
      text: 'As a veteran, I appreciated that the treatment team understood military culture and service-related trauma. The program specifically designed for veterans was exactly what I needed.',
      rating: 5,
    },
    {
      name: 'Amanda K.',
      title: 'Grateful for Second Chance',
      text: 'I was skeptical about treatment, but the welcoming atmosphere and evidence-based approach at More Life Recovery changed my mind. I\'m now 2 years sober and couldn\'t be happier.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Client Testimonials"
        subtitle="Real Stories of Recovery and Transformation"
      />

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">People Love Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-700">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-700">Successful Recoveries</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-gray-700">Support Available</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">Video Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl mb-2">▶</p>
                <p className="text-gray-600">Client Success Story Video</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl mb-2">▶</p>
                <p className="text-gray-600">Recovery Journey Documentary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">Our Proven Process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h4 className="font-bold mb-2">Assessment</h4>
              <p className="text-gray-600 text-sm">Comprehensive evaluation of your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h4 className="font-bold mb-2">Treatment Planning</h4>
              <p className="text-gray-600 text-sm">Personalized recovery program</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h4 className="font-bold mb-2">Active Treatment</h4>
              <p className="text-gray-600 text-sm">Evidence-based therapy & support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h4 className="font-bold mb-2">Aftercare</h4>
              <p className="text-gray-600 text-sm">Ongoing alumni support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max text-center">
          <h2 className="mb-6">Get in Touch for Immediate Admission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your recovery story starts here. Let us help you take the first step toward lasting change.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Link>
            <a href="tel:+18183011213" className="btn bg-white text-primary hover:bg-gray-100">
              Call: (818) 301-1213
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
