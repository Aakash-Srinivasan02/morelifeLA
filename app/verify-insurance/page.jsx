'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

export default function VerifyInsurance() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    insuranceProvider: '',
    memberId: '',
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
    console.log('Insurance verification submitted:', formData);
    alert('Thank you for submitting your insurance information. Our team will contact you shortly to confirm your coverage.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      insuranceProvider: '',
      memberId: '',
    });
  };

  const acceptedInsurers = [
    'Aetna',
    'Anthem',
    'BlueCross BlueShield',
    'Cigna',
    'Humana',
    'Kaiser Permanente',
    'Medicaid',
    'Medicare',
    'Tricare',
    'United Healthcare',
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Verify Your Insurance"
        subtitle="Check Your Coverage for More Life Recovery Treatment"
      />

      {/* Information Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="mb-6">Insurance Coverage Made Simple</h2>
              <p className="text-lg text-gray-700 mb-6">
                We work with most major insurance providers to make quality addiction treatment accessible and affordable. Our admissions team can help verify your coverage and explain your benefits.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">We Do the Work</h4>
                    <p className="text-gray-700">Our team handles insurance verification for you</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Maximize Benefits</h4>
                    <p className="text-gray-700">We help ensure you get maximum coverage available</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">No Surprises</h4>
                    <p className="text-gray-700">We explain costs and coverage upfront</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Form */}
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md">
              <h3 className="font-bold mb-6 text-lg">Quick Insurance Verification</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block font-semibold mb-2 text-sm">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-semibold mb-2 text-sm">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block font-semibold mb-2 text-sm">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="insuranceProvider" className="block font-semibold mb-2 text-sm">Insurance Provider *</label>
                <select
                  id="insuranceProvider"
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                >
                  <option value="">Select Insurance Provider</option>
                  {acceptedInsurers.map((insurer) => (
                    <option key={insurer} value={insurer}>{insurer}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="memberId" className="block font-semibold mb-2 text-sm">Member ID</label>
                <input
                  type="text"
                  id="memberId"
                  name="memberId"
                  value={formData.memberId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="Your member ID (optional)"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Verify Coverage Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">We Accept Major Insurance Providers</h2>
          <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {acceptedInsurers.map((insurer) => (
              <div key={insurer} className="bg-white p-6 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-800">{insurer}</p>
              </div>
            ))}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <p className="font-semibold text-gray-800">+ More</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            If your insurance provider is not listed, contact our admissions team. We may still be able to work with your coverage.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-center mb-12">Insurance FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">How long does insurance verification take?</h3>
              <p className="text-gray-700">
                Our team typically completes insurance verification within 24 hours. We'll contact you with details about your coverage and any out-of-pocket costs.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Will I have to pay out of pocket?</h3>
              <p className="text-gray-700">
                This depends on your specific insurance plan. Some plans cover the full cost of treatment, while others may have copays or deductibles. We'll explain all costs upfront.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">What if I don't have insurance?</h3>
              <p className="text-gray-700">
                We offer flexible payment plans and financing options for uninsured patients. Please contact our admissions team to discuss affordable treatment options.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Is addiction treatment covered by insurance?</h3>
              <p className="text-gray-700">
                Yes, most insurance plans cover addiction treatment. The Affordable Care Act requires mental health and substance abuse treatment to be covered like other medical conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="mb-6">Questions About Insurance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our admissions team is available 24/7 to answer insurance questions and help you get started.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:+18183011213" className="btn bg-white text-primary hover:bg-gray-100">
              Call Now: (818) 301-1213
            </a>
            <a href="mailto:moreliferehab@gmail.com" className="btn border-2 border-white hover:bg-white hover:text-primary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
