'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the length of the treatment program?',
      answer: 'Our residential treatment program typically lasts 28-90 days depending on individual needs. We also offer flexible outpatient programs that can be tailored to your schedule.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance plans. Our admissions team can verify your coverage and explain your benefits. Contact us for more information.',
    },
    {
      question: 'What substances do you treat?',
      answer: 'We provide treatment for alcohol addiction, opioid addiction, stimulant abuse, and polysubstance abuse. We have specialized programs for each type of substance use disorder.',
    },
    {
      question: 'Can I bring my phone and use technology?',
      answer: 'We have policies to minimize distractions during treatment, but we understand the importance of staying connected. Phones and technology are limited during your stay but available during designated times.',
    },
    {
      question: 'What is your success rate?',
      answer: 'While individual success depends on many factors, we maintain a 98% client satisfaction rate and track ongoing recovery outcomes through our alumni program.',
    },
    {
      question: 'Do you offer family counseling?',
      answer: 'Yes, family therapy is an integral part of our program. We offer both individual family sessions and group family workshops to support your loved ones.',
    },
    {
      question: 'What happens after treatment ends?',
      answer: 'We provide comprehensive aftercare planning and alumni support including monthly meetings, ongoing therapy options, and peer support groups.',
    },
    {
      question: 'Do you treat dual diagnosis (mental health + addiction)?',
      answer: 'Yes, we specialize in treating co-occurring disorders. Our clinical team addresses both addiction and underlying mental health conditions.',
    },
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find Answers to Common Questions About Our Treatment Programs"
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-dark bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition"
                >
                  {faq.question}
                  <span className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white border-t">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center max-w-2xl">
          <h2 className="mb-6">Didn't Find Your Answer?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our admissions team is available 24/7 to answer any questions you may have about our programs and how we can help.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:+18183011213" className="btn btn-primary">
              Call Us Now
            </a>
            <a href="mailto:moreliferehab@gmail.com" className="btn btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
