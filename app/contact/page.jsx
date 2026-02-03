'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a server
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-20">
      <HeroSection
        title="Contact More Life Recovery"
        subtitle="Get in Touch with Our Admissions Team"
      />

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="mb-4">Phone</h3>
              <a href="tel:+18183011213" className="text-2xl font-bold text-primary hover:text-blue-700">
                (818) 301-1213
              </a>
              <p className="text-gray-600 mt-2">Available 24/7 for immediate assistance</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="mb-4">Email</h3>
              <a href="mailto:moreliferehab@gmail.com" className="text-lg font-bold text-primary hover:text-blue-700">
                moreliferehab@gmail.com
              </a>
              <p className="text-gray-600 mt-2">We respond to emails within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="mb-4">Location</h3>
              <p className="font-bold text-lg text-gray-800">Van Nuys, California</p>
              <p className="text-gray-600 mt-2">Conveniently located in the Los Angeles area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Have a Question?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our admissions team is here to answer your questions and help you get started. Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Hours of Availability</h4>
                  <p className="text-gray-700">We're available 24/7 to take your call and provide support.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">What to Expect</h4>
                  <p className="text-gray-700">Our team will discuss your needs, treatment options, insurance coverage, and next steps in your recovery.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Insurance Verification</h4>
                  <p className="text-gray-700">We accept most major insurance plans and can verify your coverage during your initial consultation.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="mb-6">We're Here to Help</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-semibold mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="Tell us about your situation and how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>

              <p className="text-sm text-gray-600 mt-4">
                By submitting this form, you consent to be contacted by our recovery specialists.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max text-center">
          <h2 className="mb-6">Your Insurance May Cover the Cost of Treatment</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We accept most major insurance plans. Our team can verify your coverage and help you understand your benefits.
          </p>
          <button className="btn bg-white text-primary hover:bg-gray-100">
            Verify Your Insurance
          </button>
        </div>
      </section>
    </div>
  );
}
